import prisma from "../../../lib/prisma";

// POST /api/post
// Required fields in body: title
// Optional fields in body: content, label
export default async function handle(req, res) {
    const user="clbxftr650000ulysfftk4h9y"
    const { title, content, date, label } = req.body;
  
    const result = await prisma.recipe.create({
      data: {
        title: title,
        content: content,
        label: label,
        created: new Date(date),
        author: { connect: { id:user } },
      },
    });
    res.json(result);
  }