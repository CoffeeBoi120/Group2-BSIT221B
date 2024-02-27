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
            <h3>{"Dessert Type: " + recipe.class.desserttype  + ", " + " Origin: " + recipe.class.origin}</h3>
            <h4>{"Servings: " + recipe.servings}</h4>
            <h5>{"Cooking Time: " + recipe.cookingTime  + ", " + " Prepping Time: " + recipe.preppingTime}</h5>
            <text className="title">Ingredients:</text>
            <ul>
                {recipe.ingredients.map((ingredients, index) => (
                    <li className="list" key={index}>{ingredients}</li>
                ))}
            </ul>
            <text className="title">Steps:</text>
            <ol>
                {recipe.steps.map((steps, index) => (
                    <li className="list" key={index}>{steps}</li>
                ))}
            </ol>
            <text className="title">Nutrition Facts:</text>
            <ul>
                <li className="list">{"Calories: " + recipe.nutrition.calories}</li>
                <li className="list">{"Fats: " + recipe.nutrition.fat}</li>
                <li className="list">{"Carbohydrates: " + recipe.nutrition.carbs}</li>
                <li className="list">{"Protein: "+ recipe.nutrition.protein}</li>
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