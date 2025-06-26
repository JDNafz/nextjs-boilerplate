
const users = [
	{ id: 1, name: "John Doe"},
	{ id: 2, name: "Jane Smith" },
];


// GET /api/users - Get all users
export async function GET() {
	try {
		// In real app: const users = await db.users.findMany()
		return Response.json({
			success: true,
			data: users
		});
	} catch {
		return Response.json(
			{ success: false, error: "Failed to fetch users" },
			{ status: 500 }
		);
	}
}

// POST /api/users - Create a new user
export async function PUT(request: Request) {
	try {
		// Parse the JSON body from the request
		const body = await request.json();
		const { name } = body;

		// Basic validation
		if (!name) {
			return Response.json(
				{ success: false, error: "Name is required" },
				{ status: 400 }
			);
		}

		// Create new user (in real app: await db.users.create())
		const newUser = {
			id: users.length + 1, // Simple ID generation
			name
		};

		users.push(newUser);

		return Response.json(
			{ success: true, data: newUser },
			{ status: 201 } // 201 = Created
		);
	} catch {
		return Response.json(
			{ success: false, error: "Failed to create user" },
			{ status: 500 }
		);
	}
}