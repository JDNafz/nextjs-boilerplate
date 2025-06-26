import { User, UserRepository } from '../interfaces/UserRepository';

class MockUserRepository implements UserRepository {
	//DATA STORAGE
	private users: User[] = [
		{ id: 1, name: "John Doe" },
		{ id: 2, name: "Jane Smith" },
	];

	// GET ROUTE
	getUsers(): User[] {
		return this.users;
	}

	// POST ROUTE
	createUser(newUser: User): User {
		const createdUser = {
			...newUser,
			id: this.users.length + 1
		}
		this.users.push(createdUser)
		return createdUser // return the newUser with the assigned id
	}
}


// Implement other routes:
// getUserById - TBD
// PUT ROUTE - TBD  
// DELETE ROUTE - TBD


export default MockUserRepository;