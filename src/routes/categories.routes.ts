import { Router } from 'express';

import { CategoryRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCategoryUseCase } from '../modules/cars/useCases/createCategory/CreateCategoryUseCase';

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body;

  const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);
  createCategoryUseCase.execute({ name, description });

  return res.status(201).send();
});

categoriesRoutes.get('/', (req, res) => {
  const categories = categoryRepository.list();
  return res.json(categories);
});

export { categoriesRoutes };
