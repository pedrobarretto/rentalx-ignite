import { SpecificationsRepository } from '../../repositories/SpecificationRepository';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

const specificationRepository = new SpecificationsRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationRepository
);
export const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);
