import React from 'react';
import { Card } from 'semantic-ui-react';
import Link from 'next/link';

const ItemCard = ({ item }) => (
    <Card>
    <Link href={`/recipelist/${item.id}`}>
    <img 
    src={item.image} 
    wrapped ui={false}
    alt={item.name} />
    <Card.Content>
      <Card.Header>{item.name}</Card.Header>
      <Card.Description>{item.description}</Card.Description>
    </Card.Content>
    </Link>
  </Card>
);

export default ItemCard;
