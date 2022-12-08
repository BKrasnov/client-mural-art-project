import { MuralDto } from "@core/dtos";
import { Mural } from "@core/models";

export namespace MuralMapper {
  /**
   * Maps dto to model.
   * @param dto Mural dto.
   */
  export function fromDto(dto: MuralDto): Mural {
    return {
      id: dto.id,
      title: dto.title,
      description: dto.description,
      rating: dto.rating,
      location: dto.location,
      event: dto.event,
      imageRef: dto.imageRef,
    };
  }
}
