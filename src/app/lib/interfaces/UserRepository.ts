export interface User {
	id: string; // Mock Id or UUID Example: f47ac10b-58cc-4372-a567-0e02b2c3d479
	name: string;
	email: string;
	password: string;
}

export interface UserRepository {
	getUsers(): Promise<User[]>; //fn returns user array
	// getUserById - TBD
	createUser(newUser: Omit<User, 'id'>): Promise<User>;
	// updateUser - TBD
	// deleteUser - TBD
}