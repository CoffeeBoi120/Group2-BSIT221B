import fs from 'fs';
import path from 'path';
import styles from "@/styles/descriptionstyle.module.scss";
import Background from '@/Components/backgroundimg';
import {Topborder,Bottomborder } from '@/Components/border';
import Head from 'next/head';

function Recipelist( {recipe} ){
    return(
        <>
         <Head>
         <title>{recipe.name}</title>
         <meta name="Dessert Information" content="Learn more about the Dessert you picked!"></meta>
         </Head>

        <div className={styles.Maincomp}>
            <Background/>
            <div key={recipe.id}>

                <div className={styles.topContainer}>
                    <div className={styles.rightContain}>
                        <img
                        src={`/./${recipe.image}`}
                        alt={recipe.name}
                        className={styles.recipeImage}
                        />
                    </div>
                    <div className={styles.leftContain}>
                        <p className={styles.recipeName}>{recipe.name}</p>
                        <p className={styles.recipeInfo}>{recipe.information}</p>
                    </div>
                </div>
                    
                <Topborder/>
                
                

                <div className={styles.bottomContainer}>
                    <h3>{"Dessert Type: " + recipe.class.desserttype  + ", " + " Origin: " + recipe.class.origin}</h3>
                    <h4>{"Servings: " + recipe.servings}</h4>
                    <h5>{"Cooking Time: " + recipe.cookingTime  + ", " + " Prepping Time: " + recipe.preppingTime}</h5>
                    <text className={styles.title}>Ingredients:</text>
                    <ul>
                        {recipe.ingredients.map((ingredients, index) => (
                            <li className="list" key={index}>{ingredients}</li>
                        ))}
                    </ul>
                    <text className={styles.title}>Steps:</text>
                    <ol>
                        {recipe.steps.map((steps, index) => (
                            <li className="list" key={index}>{steps}</li>
                        ))}
                    </ol>
                    <text className={styles.title}>Nutrition Facts:</text>
                    <ul>
                        <li className="list">{"Calories: " + recipe.nutrition.calories}</li>
                        <li className="list">{"Fats: " + recipe.nutrition.fat}</li>
                        <li className="list">{"Carbohydrates: " + recipe.nutrition.carbs}</li>
                        <li className="list">{"Protein: "+ recipe.nutrition.protein}</li>
                    </ul>
                </div>

                <Bottomborder/>

            </div>
        </div>
        </>
    )
}

export default Recipelist

export async function getStaticPaths() {
    const filePath = path.join(process.cwd(), './Components/recipe.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(jsonData);

    const paths = data.map(recipe => ({
        params: { description: recipe.id.toString() }
    }));
  

    return {
        paths,
        fallback: false
      };
  }

export async function getStaticProps( { params } ) {
    const filePath = path.join(process.cwd(), './Components/recipe.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(jsonData);
    const recipe = data.find(recipe => recipe.id.toString() === params.description);
  
    return {
      props: {
        recipe
      }
      }
  }