import { useState } from 'react';
import { useRouter } from 'next/router';
import { Input, Button, Message } from 'semantic-ui-react';

const SearchComponent = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showEmptyFieldMessage, setShowEmptyFieldMessage] = useState(false);
  const [showNotFoundMessage, setShowNotFoundMessage] = useState(false);
  const router = useRouter();

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      // Show message for empty search term
      setShowEmptyFieldMessage(true);
      // Hide the empty field message after a delay (e.g., 3 seconds)
      setTimeout(() => {
        setShowEmptyFieldMessage(false);
      }, 3000);
      return;
    }

    // Reset empty field message state
    setShowEmptyFieldMessage(false);

    // Assuming each item has a unique identifier like 'id'
    const foundItem = data.find(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (foundItem) {
      // Redirect to a specific page or content based on the found item
      router.push(`/recipelist/${foundItem.id}`);
    } else {
      // Show message when no matching item is found
      console.log('Dessert not found!');
      setShowNotFoundMessage(true);
      // Hide the not found message after a delay (e.g., 3 seconds)
      setTimeout(() => {
        setShowNotFoundMessage(false);
      }, 3000);
    }
  };

  return (
    <div>
      <Input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button onClick={handleSearch}>Search</Button>

      {showEmptyFieldMessage && (
        <Message error>
          Please enter a Dessert Name.
        </Message>
      )}

      {showNotFoundMessage && (
        <Message error>
          Dessert not found. Please try again.
        </Message>
      )}
    </div>
  );
};

export default SearchComponent;
