import React from 'react';
import { Card } from 'semantic-ui-react';
import Link from 'next/link';
import styles from '@/styles/mainpagestyle.module.scss';

const ItemCard = ({ item }) => (
  <Card className={styles.itemCard}>
    <Link href={`/recipelist/${item.id}`}>
    <img 
    src={item.image} 
    wrapped ui={false}
    className={styles.cardImage}
    alt={item.name} />
    <Card.Content>
      <Card.Header className={styles.cardHeader}>{item.name}</Card.Header>
    </Card.Content>
    </Link>
  </Card>
);

export default ItemCard;
