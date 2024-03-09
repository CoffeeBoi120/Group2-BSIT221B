import { useState } from 'react';
import { useRouter } from 'next/router';

const SearchComponent = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      // Handle case when search term is empty
      console.log('Please enter a search term');
      return;
    }

    // Assuming each item has a unique identifier like 'id'
    const foundItem = data.find(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (foundItem) {
      // Redirect to a specific page or content based on the found item
      router.push(`/recipelist/${foundItem.id}`);
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