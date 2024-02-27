import fs from 'fs';
import path from 'path';

function Tips( {tips} ) {

        const randomId = Math.floor(
            Math.random() * tips.length);
        const tipText = tips[randomId].tip;


    return(
      <>
          <div>
           <p>{tipText}</p>  
          </div>
      </>
    )
  }
  export default Tips

  
  export async function getStaticProps() {
    const filePath = path.join(process.cwd(), './Components/tips.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContent);
  
    console.log(data)
    return {
      props: {
        tips: data
      }
      }
  }