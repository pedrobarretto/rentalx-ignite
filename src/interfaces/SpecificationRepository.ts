import { Specification } from '../modules/cars/model/Specification';

export interface CreateSpecificationDto {
  name: string;
  description: string;
}

export interface SpecificationRepository {
  create({ name, description }: CreateSpecificationDto): void;
  findByName(name: string): Specification;
}
