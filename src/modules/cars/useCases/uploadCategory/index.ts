import { CategoryRepository } from '../../repositories/CategoriesRepository';
import { UploadCategoryController } from './UploadCategoryController';
import { UploadCategoryUseCase } from './UploadCategoryUseCase';

const categoriesRepository = CategoryRepository.getInstance();
const uploadCategoryUseCase = new UploadCategoryUseCase(categoriesRepository);
export const uploadCategoryController = new UploadCategoryController(
  uploadCategoryUseCase
);
