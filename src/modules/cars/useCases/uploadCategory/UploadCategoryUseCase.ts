import { parse } from 'csv-parse';
import fs from 'fs';

import { CategoriesRepository } from '../../../../interfaces/CategoriesRepository';

interface UploadCategory {
  name: string;
  description: string;
}

export class UploadCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  loadCategory(file: Express.Multer.File): Promise<UploadCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: UploadCategory[] = [];
      const parseFile = parse();

      stream.pipe(parseFile);

      parseFile
        .on('data', async (line) => {
          const [name, description] = line;
          categories.push({ name, description });
        })
        .on('end', () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on('error', (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategory(file);
    categories.map(async (category) => {
      const { name, description } = category;

      const categoryAlreadyExists = this.categoriesRepository.findByName(name);

      if (!categoryAlreadyExists) {
        this.categoriesRepository.create({ name, description });
      }
    });
  }
}
