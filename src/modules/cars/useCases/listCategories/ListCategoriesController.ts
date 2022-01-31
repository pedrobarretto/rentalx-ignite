import { Request, Response } from 'express';

import { ListCategoriesUseCase } from './ListCategoryUseCase';

export class ListCategoriesController {
  constructor(private listCategoryUseCase: ListCategoriesUseCase) {}

  handle(req: Request, res: Response): Response {
    const all = this.listCategoryUseCase.execute();
    return res.json(all);
  }
}
