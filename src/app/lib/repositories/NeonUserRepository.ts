// app/actions.ts
import { neon } from "@neondatabase/serverless";
import { User, UserRepository } from "../interfaces/UserRepository";


class NeonUserRepository implements UserRepository {
	private sql;

	constructor() {
		this.sql = neon(process.env.DATABASE_URL!)
	}

	// GET POSTS
	async getUsers(): Promise<User[]> {
		const data = await this.sql`SELECT * FROM users` as User[];
		return data;
	}

	// POST ROUTE
	async createUser(newUser: Omit<User, 'id'>): Promise<User> {
		const { email, password, name } = newUser;
		const [createdUser] = await this.sql` 
		INSERT INTO users (email, password, name)
		VALUES (${email}, ${password}, ${name})
		RETURNING *;` as User[];

		return createdUser;
	}
}

export default NeonUserRepository;