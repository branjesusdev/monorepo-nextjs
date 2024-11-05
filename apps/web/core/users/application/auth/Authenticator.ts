import type { UserRepository } from '@/core/users/domain';
import type { User } from '@/core/users/domain/models';

export function authenticate(userRepository : UserRepository) {
    return async ({ email, password }: { email: string, password: string }): Promise<User | null> => {
        return await userRepository.authenticate(email, password);
    }
}