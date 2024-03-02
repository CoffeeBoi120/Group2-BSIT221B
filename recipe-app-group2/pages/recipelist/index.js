import Link from 'next/link'
import fs from 'fs';
import path from 'path';
import Image from "next/image";
import "@/styles/Home.module.css";

function Recipes( {recipes} ) {
  return(
    <>
     <h1>Recipes</h1>
     {
       recipes.map(recipe => {
        return (
         <div key={recipe.id}>
         <Link href={"/recipelist/" + recipe.id}>
           <img
            src={`/./././${recipe.image}`}
            alt={recipe.name}
            width={300}
            height={300}
            />
            {recipe.name}
            </Link>
          </div>
        )
      })
    }
      </>
    )
  }
  export default Recipes

  export async function getStaticProps() {
    const filePath = path.join(process.cwd(), './Components/recipe.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContent);
  
    console.log(data)
    return {
      props: {
        recipes: data
      }
      }
  }