import React from 'react';
import {Card} from 'react-bootstrap';
import './MovieCard.css'

const MovieCard = ({title, affiche, description}) => {
  return (
    <div>
    <Card className="bg-dark text-white film">
    <Card.Img src={affiche} alt="Card image" className="imge" />
    <Card.ImgOverlay>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
       {description}
      </Card.Text>
    </Card.ImgOverlay>
  </Card>
    </div>
  );
}

export default MovieCard;
