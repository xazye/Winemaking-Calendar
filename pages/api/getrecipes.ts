import prisma from "../../lib/prisma";

export default async function handler(req,res){
const recipes =  await prisma.recipe.findMany();
res.json(recipes)
  
}
