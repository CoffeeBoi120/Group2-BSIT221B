import Link from 'next/link'
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
      </Head>
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