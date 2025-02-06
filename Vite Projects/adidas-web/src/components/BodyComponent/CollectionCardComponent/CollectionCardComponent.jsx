import React from 'react'
import '../CollectionCardComponent/collectionCard.css'
import {Card} from '../../../assets/Database/data.jsx'
import CardComponent from '../../CardComponent.jsx'
const CollectionCardComponent = () => {
 
  return (
    <div className="collect-card-component component">
      {Card.map((item) => {
        return (
          <CardComponent
            key={item.id}
            cardImage={item.cardImage}
            cardName={item.cardName}
            description={item.description}
          />
        );
      })}
    </div>
  );
}

export default CollectionCardComponent
