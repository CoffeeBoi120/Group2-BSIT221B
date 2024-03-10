import fs from 'fs';
import path from 'path';
import styles from "@/styles/mainpagestyle.module.scss";
import Background from '@/Components/backgroundimg';
import {Topborder,Bottomborder } from '@/Components/border';
import { Card, Container } from 'semantic-ui-react';
import ItemCard from '@/Components/itemcard';
import Head from 'next/head';

function Recipes( {recipes} ) {
  return(
    <>
      <Head>
       <title>Recipe List</title>
       <meta name="Recipe List" content="Discover various Desserts and how to make them!"></meta>
      </Head>

     <div className={styles.Main} >
       <Background/>
        <div className={styles.HeaderPic}> 
         <img src="/static/images/mainheader.png" alt="Header" />
        </div>

        <div className={styles.Headcont}> 
         <p>"In the world of desserts, every bite is a chapter in the book of indulgence, where each page unfolds a tale of sweet satisfaction and culinary delight."</p>
        </div>
      
        <div className={styles.icons}>
         {['cake', 'chocolate', 'cookie', 'tart', 'frozen', 'pudding', 'pastry', 'candy', 'fruit'].map((icon, index) => (
         <img key={index} src={`/static/images/${icon}icon.png`} alt="Simple Dessert Icons" />
        ))}
      </div>

      <Topborder/>

      <div className={styles.ContentTitle}> 
        <p>Recipes</p>
      </div>

      <div className={styles.MainContent}> 
      <Container>
        <Card.Group>
         {recipes.map((dessert) => (
          <ItemCard key={dessert.id} item={dessert} />
         ))}
        </Card.Group>
      </Container>
      </div>

      <Bottomborder/>
    </div>
    </>
    )
  }
  export default Recipes

  export async function getStaticProps() {
    try {
      const filePath = path.join(process.cwd(), './Components/recipe.json');
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const data = JSON.parse(fileContent);
  
      return {
        props: {
          recipes: data
        }
      };
    } catch (error) {
      console.error('Error reading or parsing the JSON file:', error);
      return {
        props: {
          recipes: []
        }
      };
    }
  }