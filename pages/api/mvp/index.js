import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const mvps = await getMvps();
    res.status(200).json(mvps);
  } else {
    return res.status(405).json({ message: "Bad request", success: failed });
  }
}

async function getMvps() {
  return await prisma.MVPS.findMany();
}
