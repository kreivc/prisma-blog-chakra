import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";

const prisma = new PrismaClient();

export default async function handle(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { title, content } = req.body;

	const session = await getSession({ req });
	const result = await prisma.post.create({
		data: {
			title,
			content,
			author: {
				connect: {
					email: session?.user.email,
				},
			},
		},
	});
	res.json(result);
}
