import {
  CategoriesRepository,
  CreateCategoryDto,
} from '../../../interfaces/CategoriesRepository';
import { Category } from '../model/Category';

export class CategoryRepository implements CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: CreateCategoryDto): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      createdAt: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((x) => x.name === name);
    return category;
  }
}
