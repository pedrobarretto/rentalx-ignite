import { CategoriesRepository } from '../../../../interfaces/CategoriesRepository';
import { Category } from '../../model/Category';

export class ListCategoriesUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.list();
    return categories;
  }
}
