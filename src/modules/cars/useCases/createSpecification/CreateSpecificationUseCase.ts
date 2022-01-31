import { SpecificationRepository } from '../../../../interfaces/SpecificationRepository';

interface Request {
  name: string;
  description: string;
}

export class CreateSpecificationUseCase {
  constructor(private specificationRepository: SpecificationRepository) {}

  execute({ name, description }: Request): void {
    const specificationAlreadyExist =
      this.specificationRepository.findByName(name);

    if (specificationAlreadyExist)
      throw new Error('Specification already exists');

    this.specificationRepository.create({ name, description });
  }
}
