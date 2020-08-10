import React from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios'

export default class KetoButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ' ',
            isLoading: false
        }


        this.getKeto = this.getKeto.bind(this);
    }
    getKeto = async () => {

        const response = await axios.get("https://api.spoonacular.com/recipes/search?q=chicken&diet=keto&number=9&apiKey=496787d7b33d43a48e3924e2e30430f9", {})
            .then((response) => {
                this.props.setRecipes(response.data.results)
                console.log(response.data.results)
            });

        this.setState({ isLoading: true })
    }

    render() {
        return (
            <div>
                <Button onClick={this.getKeto} variant="primary" size="lg" active>
                    Keto
  </Button>{' '}
            </div>
        )
    }
}