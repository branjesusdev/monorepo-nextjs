import type { User } from './models/User';

export interface UserRepository {
	authenticate(email: string, password: string): Promise<User | null>;
	get: (id: number) => Promise<User | undefined>;
	getAll: () => Promise<User[]>;
}
