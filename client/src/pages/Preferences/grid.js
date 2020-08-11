import React from 'react';

//imported each button file
import GlutenButton from './buttons/gluten';
import KetoButton from './buttons/keto';
import LactoButton from './buttons/lacto-ve';
import OvoButton from './buttons/ovo-ve';
import PrimalButton from './buttons/primal';
import VeganButton from './buttons/vegan';
import VegetarianButton from './buttons/vegetarian';
import Whole30Button from './buttons/whole30';
import PescetarianButton from '../../components/Buttons/buttons/pescatarian';
import PaleoButton from './buttons/paleo';
import RecipeCard from '../../components/Card/Recipe';
import '../../pages/app.css';

import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class TheGrid extends React.Component {
  state = {
    recipes: null,
  };

  setRecipes = (recipes) => {
    this.setState({ recipes });
  };

  render() {
    const { recipes } = this.state;

    return (
      <div>
        <Container>
          <Row>
            <Col xs>
              <GlutenButton value='gluten' setRecipes={this.setRecipes} />
            </Col>

            <Col xs={{ order: 12 }}>
              <KetoButton setRecipes={this.setRecipes} value='Keto' />
            </Col>
            <Col xs={{ order: 1 }}>
              <LactoButton setRecipes={this.setRecipes} />
            </Col>
          </Row>
          <Row>
            <Col xs>
              <OvoButton value='ovo' setRecipes={this.setRecipes} />
            </Col>
            <Col xs={{ order: 12 }}>
              <PaleoButton setRecipes={this.setRecipes} />
            </Col>
            <Col xs={{ order: 1 }}>
              <PescetarianButton setRecipes={this.setRecipes} />
            </Col>
          </Row>
          <Row>
            <Col xs>
              <PrimalButton />
            </Col>
            <Col xs={{ order: 12 }}>
              <VeganButton setRecipes={this.setRecipes} />
            </Col>
            <Col xs={{ order: 1 }}>
              <VegetarianButton setRecipes={this.setRecipes} />
            </Col>
            <Col xs={{ order: 1 }}>
              <Whole30Button setRecipes={this.setRecipes} />
            </Col>
          </Row>
        </Container>
        <Container className='recipe-container'>
          {recipes &&
            recipes.map((recipe) => (
              <RecipeCard
                id={recipe.id}
                key={recipe.id}
                title={recipe.title}
                url={recipe.sourceUrl}
              />
            ))}
        </Container>
      </div>
    );
  }
}
