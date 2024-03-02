import Link from 'next/link'
import fs from 'fs';
import path from 'path';
import Image from "next/image";
import styles from "@/styles/Home.module.css";

function Recipes( {recipes} ) {
  return(
    <>
    <div className={styles.mainp}>

      <div className={styles.mainpagehead}> 
        <img src="/static/images/mainheader.png" alt="" />
      </div>

      <div className={styles.secondhead}> 
        <p>"In the world of desserts, every bite is a chapter in the book of indulgence, where each page unfolds a tale of sweet satisfaction and culinary delight."</p>
      </div>

      <div className={styles.mainpagecont}> 
       
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
                <p className={styles.recipeName}>{recipe.name}</p>
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  
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