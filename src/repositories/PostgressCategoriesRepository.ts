import {
  CategoriesRepository,
  CreateCategoryDto,
} from '../interfaces/CategoriesRepository';
import { Category } from '../model/Category';

export class PostgressCategoriesRepository implements CategoriesRepository {
  findByName(name: string): Category {
    console.log(name);
    return null;
  }
  list(): Category[] {
    return null;
  }
  create({ name, description }: CreateCategoryDto): void {
    console.log(name, description);
  }
}
