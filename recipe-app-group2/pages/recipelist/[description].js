import fs from 'fs';
import path from 'path';
import Image from "next/image";
import styles from "@/styles/Home.module.css";

function Recipelist( {recipe} ){
    return(
        <>
        <div className={styles.Maincomp}>
            <div key={recipe.id}>

                <div className={styles.topContainer}>
                    <div className={styles.rightContain}>
                        <img
                        src={`/./${recipe.image}`}
                        alt={recipe.name}
                        width={500}
                        height={500}
                        className={styles.recipeImage}
                        />
                    </div>
                    <div className={styles.leftContain}>
                        <h1 className={styles.recipeName}>{recipe.name}</h1>
                        <h2 className={styles.recipeInfo}>{recipe.information}</h2>
                    </div>
                </div>
                    
                <div className={styles.middleContainer}>
                    <img src="/static/images/upbordermain.png" alt="" />
                </div >
                
                

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

                <div className={styles.bottomBorder}>
                    <img src="/static/images/botbordermain.png" alt="" />
                </div >

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