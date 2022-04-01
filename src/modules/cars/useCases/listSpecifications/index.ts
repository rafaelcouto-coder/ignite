import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
// eslint-disable-next-line import/no-unresolved
import { ListSpecificationController } from "./listSpecificationsController";
import { ListSpecificationUseCase } from "./ListSpecificationsUseCase";

const specificationRepository = SpecificationRepository.getInstance();
const listSpecificationUseCase = new ListSpecificationUseCase(
  specificationRepository
);
const listSpeficationController = new ListSpecificationController(
  listSpecificationUseCase
);

export { listSpeficationController };
