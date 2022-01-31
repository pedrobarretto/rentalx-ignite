import { Request, Response } from 'express';

import { UploadCategoryUseCase } from './UploadCategoryUseCase';

export class UploadCategoryController {
  constructor(private uploadCategoryUseCase: UploadCategoryUseCase) {}

  handle(req: Request, res: Response): Response {
    const { file } = req;

    this.uploadCategoryUseCase.execute(file);

    return res.send();
  }
}
