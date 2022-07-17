import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export default async function handler(req, res) {
    if (req.method === 'POST') {
        return await createProject(req, res);
    }
    else {
        return res.status(405).json({ message: 'Method not allowed', success: false });
    }
}

async function createProject(req, res) {
    const {title, desc, email} = req.body;
    try {
        const newEntry = await prisma.project.create({
            data: {
                title,
                desc,
                userId: email,
            }
        });
        return res.status(200).json(newEntry, {success: true});
    } catch (error) {
        console.error("Request error", error);
        res.status(500).json({ error: "Error creating project", success:false });
    }
}