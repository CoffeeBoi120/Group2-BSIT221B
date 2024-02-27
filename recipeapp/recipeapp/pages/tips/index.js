import fs from 'fs';
import path from 'path';

function Tips( {tips} ) {
    return(
      <>
      {
      tips.map(tips => {
        return (
          <div key={tips.id}>
           <p>{tips.tip}</p>  
          </div>
        )
      })
    }
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