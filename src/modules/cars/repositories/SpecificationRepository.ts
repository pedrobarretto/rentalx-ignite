import {
  CreateSpecificationDto,
  SpecificationRepository,
} from '../../../interfaces/SpecificationRepository';
import { Specification } from '../model/Specification';

export class SpecificationsRepository implements SpecificationRepository {
  private specification: Specification[];

  constructor() {
    this.specification = [];
  }

  create({ name, description }: CreateSpecificationDto): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      createdAd: new Date(),
    });

    this.specification.push(specification);
  }

  findByName(name: string): Specification {
    const specification = this.specification.find((x) => x.name === name);
    return specification;
  }
}
