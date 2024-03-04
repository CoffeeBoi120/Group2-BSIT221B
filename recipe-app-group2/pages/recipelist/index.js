import Link from 'next/link'
import fs from 'fs';
import path from 'path';
import Image from "next/image";
import styles from "@/styles/mainpagestyle.module.scss";
import Background from '@/Components/backgroundimg';

function Recipes( {recipes} ) {
  return(
    <>
    <div className={styles.Main} >
    <Background/>
      <div className={styles.HeaderPic}> 
        <img src="/static/images/mainheader.png" alt="" />
      </div>

      <div className={styles.Headcont}> 
        <p>"In the world of desserts, every bite is a chapter in the book of indulgence, where each page unfolds a tale of sweet satisfaction and culinary delight."</p>
      </div>
      
      <div className={styles.icons}>
          <img src="/static/images/cakeicon.png" alt="" />
          <img src="/static/images/chocolateicon.png" alt="" />
          <img src="/static/images/cookieicon.png" alt="" />
          <img src="/static/images/tarticon.png" alt="" />
          <img src="/static/images/frozenicon.png" alt="" />
          <img src="/static/images/puddingicon.png" alt="" />
          <img src="/static/images/pastryicon.png" alt="" />
          <img src="/static/images/candyicon.png" alt="" />
          <img src="/static/images/fruiticon.png" alt="" />
        </div>

      <div className={styles.Borderabove}> 
        <img src="/static/images/topborder.jpg" alt="" />
      </div>

      <div className={styles.ContentTitle}> 
        <p>Recipes</p>
      </div>


      <div className={styles.MainContent}> 
       
        {
          recipes.map(recipe => {
            return (
              
            <div key={recipe.id}>
            <Link href={"/recipelist/" + recipe.id}>

              <img
                src={`/./././${recipe.image}`}
                alt={recipe.name}
                
                />
                <p className={styles.recipeName}>{recipe.name}</p>
                </Link>
              </div>
            )
          })
        }
      </div>

      <div className={styles.Borderbottom}> 
        <img src="/static/images/bottomborder.jpg" alt="" />
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