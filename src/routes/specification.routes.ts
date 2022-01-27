import { Router } from 'express';

import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationRepository';
import { CreateSpeficicationService } from '../modules/cars/services/CreateSpecificationService';

const specificationRoutes = Router();

const specificationRepository = new SpecificationsRepository();

specificationRoutes.post('/', (req, res) => {
  const { name, description } = req.body;

  const createSpeficicationService = new CreateSpeficicationService(
    specificationRepository
  );

  createSpeficicationService.execute({ name, description });

  return res.status(201).send();
});

export { specificationRoutes };
