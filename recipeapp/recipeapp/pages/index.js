import fs from 'fs';
import path from 'path';


function Home( {users} ) {
    return (
        <>
        <h1> Desserts </h1>
        {
          users.map(i => {
            return (
              <div key={i.num}>
              <p>{"Full Name: " + i.name}</p>
              </div>
            )
          })
        }
              {
          users.map(i => {
            return (
              <div key={i.num}>
              <p>{"Information: " + i.information}</p>
              </div>
            )
          })
        }
                  {
          users.map(i => {
            return (
              <div key={i.num}>
              <p>{"Ingredients: " + i.ingredients.amount}</p>
              </div>
            )
          })
        }
                      {
          users.map(i => {
            return (
              <div key={i.num}>
              <p>{"Steps: " + i.steps}</p>
              </div>
            )
          })
        }
                              {
          users.map(i => {
            return (
              <div key={i.num}>
              <p>{"Dessert Type: " + i.class.desserttype}</p>
              </div>
            )
          })
        }
                                      {
          users.map(i => {
            return (
              <div key={i.num}>
              <p>{"Origin: " + i.class.origin}</p>
              </div>
            )
          })
        }
                                              {
          users.map(i => {
            return (
              <div key={i.num}>
              <p>{"Servings: " + i.servings}</p>
              </div>
            )
          })
        }
        </>
    )
}

export default Home

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), '././Components/recipe.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContent);
  
    console.log(data)
    return {
      props: {
        users: data
      }
      }
  }