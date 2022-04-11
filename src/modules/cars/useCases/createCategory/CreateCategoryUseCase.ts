import { inject, injectable } from "tsyringe";

import { ICategoryRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoryRepository
  ) {}

  async execute({ description, name }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new Error("Category already exists!");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
