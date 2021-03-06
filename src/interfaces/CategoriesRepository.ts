import { Category } from '../modules/cars/model/Category';

export interface CreateCategoryDto {
  name: string;
  description: string;
}

export interface CategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create(dto: CreateCategoryDto): void;
}
