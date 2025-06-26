export interface User {
	id: number;
	name: string;
}

export interface UserRepository {
	getUsers(): User[]; //fn returns user array
	// getUserById - TBD
	createUser(newUser: Omit<User, 'id'>): User;
	// updateUser - TBD
	// deleteUser - TBD
}