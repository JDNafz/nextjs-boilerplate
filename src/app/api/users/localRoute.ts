

// For use of local Data:
// change name of this page to route.ts 
// to replace the


// interface LocalUser {
// 	id: number,
// 	name: string
// }
// const localUsersArray = [
// 	{ id: 1, name: "John Doe" },
// 	{ id: 2, name: "Jane Smith" },
// ];

// const createLocalUser = (newUser: Omit<LocalUser, "id">): LocalUser => {
// 	const createdUser = {
// 		id: localUsersArray.length + 1, // Simple ID generation
// 		name: newUser.name
// 	};
// 	localUsersArray.push(createdUser);
// 	return createdUser
// }



// // GET /api/users - Get all users
// export async function GET(): Promise<Response> {
// 	try {
// 		return Response.json({
// 			success: true,
// 			data: localUsersArray // Local Data line 48
// 		});
// 	} catch {
// 		return Response.json(
// 			{ success: false, error: "Failed to fetch users" },
// 			{ status: 500 }
// 		);
// 	}
// }

// // POST /api/users - Create a new user
// export async function POST(request: Request): Promise<Response> {

// 	try {
// 		// Parse the JSON body from the request
// 		const body = await request.json();
// 		const newUser = body;

// 		return Response.json(
// 			{ success: true, 
// 				data: createLocalUser(newUser) },
// 			{ status: 201 }
// 		);
// 	} catch {
// 		return Response.json(
// 			{ success: false, error: "Failed to create user" },
// 			{ status: 500 }
// 		);
// 	}
// }




