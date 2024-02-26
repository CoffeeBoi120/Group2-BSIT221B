import fs from 'fs';
import path from 'path';
import Image from "next/image";

function Recipelist( {recipe} ){
    return(
        <>
        <div key={recipe.id}>
            <h1>{recipe.name}</h1>
            <Image
            src={`/./${recipe.image}`}
            alt={recipe.name}
            width={500}
            height={500}
            />
            <h2>{recipe.information}</h2>
            <h3>{"Servings: " + recipe.servings}</h3>
            <h4>{"Cooking Time: " + recipe.cookingTime}</h4>
            <h5>{"Prepping Time: " + recipe.preppingTime}</h5>
            <p>Ingredients</p>
            <ul>
                {recipe.ingredients.map((ingredients, index) => (
                    <li key={index}>{ingredients}</li>
                ))}
            </ul>
            <p>Steps</p>
            <ul>
                {recipe.steps.map((steps, index) => (
                    <li key={index}>{steps}</li>
                ))}
            </ul>
            <p>Nutrition Facts</p>
            <ul>
                <li>{"Calories: " + recipe.nutrition.calories}</li>
                <li>{"Fats: " + recipe.nutrition.fat}</li>
                <li>{"Carbohydrates: " + recipe.nutrition.carbs}</li>
                <li>{"Protein: "+ recipe.nutrition.protein}</li>
            </ul>
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