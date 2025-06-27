import { userRepository } from "@/app/lib/container";

// GET /api/users - Get all users
export async function GET(): Promise<Response> {
	try {
		const users = await userRepository.getUsers()
		return Response.json({
			success: true,
			data: users //make use of Dependancy Injection
			// data: localUsersArray // Local Data line 48
		});
	} catch {
		return Response.json(
			{ success: false, error: "Failed to fetch users" },
			{ status: 500 }
		);
	}
}

// POST /api/users - Create a new user
export async function POST(request: Request): Promise<Response> {

	try {
		// Parse the JSON body from the request
		const body = await request.json();
		const newUser = body;

		const createdUser = await userRepository.createUser(newUser)

		return Response.json(
			{ success: true, data: createdUser },
			{ status: 201 }
		);
	} catch (err) {
		if (err instanceof Error && err.message.includes("duplicate key")) {
			console.log(err.message);
			return Response.json(
				{ success: false, error: "Email already in use." },
				{ status: 409 }
			);
		}
		const errorMessage = err instanceof Error ? err.message : "Unknown Error API POST"

		return Response.json(
			{ success: false, error: "Server error: " + errorMessage },
			{ status: 500 }
		);
	}
}

