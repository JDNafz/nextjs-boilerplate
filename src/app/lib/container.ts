import { UserRepository } from './interfaces/UserRepository';
// import MockUserRepository from './repositories/MockUserRepository';
import NeonUserRepository from './repositories/NeonUserRepository';

// 	Change 
// 				new MockUserRepository() 
// 		to 
// 				new JsonServerUserRepository()
// for easy switching

// export const userRepository: UserRepository = new MockUserRepository();
export const userRepository: UserRepository = new NeonUserRepository();


// My notes: 

// Dependency Injection *
//this file creates an instance (the const above) OF TYPE UserRepository. It's value is assigned to the MockUserRepository class, which defines the functions that connect to data sources  


// new MockUserRepository();
// new JsonServerUserRepository();
// new PostgreSqlUserResponsory();


// the use case for this file would be switching during development

// export const userRepository: UserRepository = process.env.NODE_ENV === 'development' 
  // ? new DevUserRepository()
  // : new ProdServerUserRepository();