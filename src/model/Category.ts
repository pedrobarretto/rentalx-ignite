import { v4 as uuid } from 'uuid';

export class Category {
  name: string;
  description: string;
  createdAt: Date;
  id?: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
