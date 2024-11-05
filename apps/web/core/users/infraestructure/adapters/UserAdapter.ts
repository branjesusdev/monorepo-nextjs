import type { User } from "@/core/users/domain/models/User";
import type { UserDTO } from "@/core/users/infraestructure/dto/UserDTO";

export class UserAdapter {
    static toDomain(dto: UserDTO): User {
        return {
            id: dto.id,
            name: dto.name,
            email: dto.email,
            phone: dto.username,
        };
    }
}