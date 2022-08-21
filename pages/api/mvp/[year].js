import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { year } = req.query;
    const mvps = await findMvps(year);
    res.status(200).json(mvps);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: failed });
  }
}

async function findMvps(year) {
  return await prisma.MVPS.findMany({
    where: { year: year },
  });
}
