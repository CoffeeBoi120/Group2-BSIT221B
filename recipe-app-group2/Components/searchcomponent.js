import { useState } from 'react';
import { useRouter } from 'next/router';

const SearchComponent = ({ recipes }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();
  
   
  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      // Handle case when search term is empty
      console.log('Please enter a search term');
      return;
    }

    // Assuming each item has a unique identifier like 'id'
    const foundRecipe = recipes.find(recipe =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (foundRecipe) {
      // Redirect to a specific page or content based on the found item
      router.push(`/recipelist/${foundRecipe.id}`);
    } else {
      // Handle case when no matching item is found
      console.log('Item not found!');
    }
  };
  
    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    );
  };
  
  export default SearchComponent;