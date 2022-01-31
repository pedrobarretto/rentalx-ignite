import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';
import { uploadCategoryController } from '../modules/cars/useCases/uploadCategory';

const categoriesRoutes = Router();
const upload = multer({ dest: './tmp' });

categoriesRoutes.post('/', (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get('/', (req, res) => {
  return listCategoriesController.handle(req, res);
});

categoriesRoutes.post('/upload', upload.single('file'), (req, res) => {
  return uploadCategoryController.handle(req, res);
});

export { categoriesRoutes };
