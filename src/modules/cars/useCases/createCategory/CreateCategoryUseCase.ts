import { CategoriesRepository } from '../../../../interfaces/CategoriesRepository';

interface Request {
  name: string;
  description: string;
}

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ name, description }: Request): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) throw new Error('Category already exists');

    this.categoriesRepository.create({ name, description });
  }
}
