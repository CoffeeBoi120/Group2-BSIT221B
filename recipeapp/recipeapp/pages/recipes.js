import Link from 'next/link'
import fs from 'fs';
import path from 'path';

function Recipes( {users} ) {
    return(
      <>
      <h1>Recipes</h1>
      {
      users.map(i => {
        return (
          <div key={i.num}>
          <Link href="/">{i.name}</Link>
          </div>
        )
      })
    }
      </>
    )
  }
  export default Recipes

  export async function getStaticProps() {
    //Local JSON Fetching
    const filePath = path.join(process.cwd(), './Components/recipe.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContent);
  
    console.log(data)
    return {
      props: {
        users: data
      }
      }
  }