import React from 'react';
import {Card} from 'react-bootstrap';
import './MovieCard.css'

const MovieCard = ({title, affiche, description}) => {
  return (
    <div>
    <Card className="bg-dark text-white film">
    <Card.Img src={affiche} alt="Card image" className="imge" />
    <Card.ImgOverlay>
      <Card.Title style={{color: "rgb(214, 3, 3)",fontSize: "30px"}}>{title}</Card.Title>
      <Card.Text style={{color: "rgb(214, 3, 3)",fontSize: "15px"}}>
       {description}
      </Card.Text>
    </Card.ImgOverlay>
  </Card>
    </div>
  );
}

export default MovieCard;
