import { GetServerSideProps } from "next";
import {  useRouter } from "next/router";
import { useState } from "react";
import prisma from "../../lib/prisma";


export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    console.log(params)
    console.log(params.params)

    const thisDayRecipe = await prisma.recipe.findUnique({
      where: {
        id: String(params?.id),
      }
    });
    console.log(thisDayRecipe)
    return {
    //   props: thisDayRecipe,
      props: {"elo":"no"},
    };
  }
  



const note=()=>{
    const router=useRouter()
    const [note, setNote]:any = useState(null);
    return(
        <>
        <h1>"hello"</h1>
        </>
    )

}
export default note