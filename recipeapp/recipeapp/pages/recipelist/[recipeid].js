import fs from 'fs';
import path from 'path';

function Recipelist( {recipe} ){
    return(
        <>
        <div key={recipe.id}>
            <h1>{recipe.name}</h1>
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
        params: { recipeid: recipe.id.toString() }
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
    const recipe = data.find(recipe => recipe.id.toString() === params.recipeid);
  
    return {
      props: {
        recipe
      }
      }
  }