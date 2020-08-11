import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

const BASE_URL = 'https://spoonacular.com/recipeImages/';

export default class RecipeCard extends Component {
  render() {
    const { id, title, url } = this.props;
    return (
      <Card
        style={{ cursor: 'pointer', width: '18rem' }}
        as='a'
        href={url}
        target='_blank'
      >
        <Card.Img variant='top' src={`${BASE_URL}${id}-480x360.jpg`} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}
