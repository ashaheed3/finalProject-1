import React from "react";
import Buttons from "../Buttons/buttons";
import MealOptions from "./mealoptions";

import veganButton from "../Buttons/buttons/vegan";
import vegiButton from "../Buttons/buttons/vegetarian";
import plaeoButton from "../Buttons/buttons/paleo"


import {Grid, Row, Col} from "react-bootstrap";


class Buttons extends React.Component {
    constructor() {
        super();
    }

    render(){
        return (
            <Grid>
                <Row className= "button-grid">
                    <Col md={6} md={4}>
                        <veganButton>Vegan</veganButton>
                    </Col>
                    <Col md={6} md={4}>
                        <vegiButton>Vegetarian</vegiButton>
                    </Col>
                    <Col md={6} md={4}>
                        <plaeoButton>Paleo</plaeoButton>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
