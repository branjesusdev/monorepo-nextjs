import { apiFetcher } from '@/features/banking/config/api-fetcher.instance';
import type { User } from '../domain/models/User';
import type { UserRepository } from '../domain/UserRepository';
import { UserAdapter } from './adapters/UserAdapter';
import type { UserDTO } from './dto/UserDTO';

const JSONPLACEHOLDER_URL = 'https://jsonplaceholder.typicode.com';

export function createApiUserRepository(): UserRepository {
	const cache: Map<number, User> = new Map();

	async function get(id: number): Promise<User | undefined> {
		
		if (cache.has(id)) {
			return cache.get(id) as User;
		}

		const apiInstance = await apiFetcher()

		const response = await apiInstance.get(`${JSONPLACEHOLDER_URL}/users/${id}`);
		const user = await response.data;
		cache.set(id, user);

		return user;
	}

	async function getAll(): Promise<User[]> {
		if (cache.size > 0) {
			return Array.from(cache.values());
		}

		const response = await fetch(`${JSONPLACEHOLDER_URL}/users`);
		const users = await response.json();

		users.forEach((user: User) => cache.set(user.id, user));

		return users;
	}

	async function authenticate(email: string, password: string): Promise<User | null> {
		const response = await fetch(`${JSONPLACEHOLDER_URL}/users`);
		const users:UserDTO[] = await response.json();

		if (users.length === 0) {
			return null;
		}

		const userResponse = users.find(u => u.email === email && u.username === password);

   		const userAdapter = userResponse ? UserAdapter.toDomain(userResponse) : null;
		cache.set(userAdapter!.id, userAdapter!);

		return userAdapter;
	}

	return {
		get,
		getAll,
		authenticate,
	};
}
