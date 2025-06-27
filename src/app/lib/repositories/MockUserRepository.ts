
import { User, UserRepository } from '../interfaces/UserRepository';

class MockUserRepository implements UserRepository {
	//DATA STORAGE
	private users: User[] = [
		{ id: "1", name: "John Doe", email: "John@hotmail.com", password: "john" },
		{ id: "2", name: "Jane Smith", email: "Jane@hotmail.com", password: "jane" },
	];

	// GET ROUTE
	getUsers(): Promise<User[]> {
		return Promise.resolve(this.users);
	}

	// POST ROUTE
	createUser(newUser: User): Promise<User> {
		const id = (this.users.length + 1).toString();
		const createdUser = {
			...newUser,
			id
		}
		this.users.push(createdUser)
		return Promise.resolve(createdUser) // return the newUser with the assigned id
	}
}


// Implement other routes:
// getUserById - TBD
// PUT ROUTE - TBD  
// DELETE ROUTE - TBD


export default MockUserRepository;