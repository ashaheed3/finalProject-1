import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";



class myKitchen extends React.Component {

    handleFormSubmit = () => {
        const { Kitchen, rememberItem } = this.state;
        localStorage.setItem('rememberItem', rememberItem);
        localStorage.setItem('Kitchen', rememberItem ? Kitchen : '');
      };

    state = {
        Kitchen: '',
        rememberItem: false
      };
     
      handleChange = (event) => {
        const input = event.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;
     
        this.setState({ [input.name]: value });
      };
     
      handleFormSubmit = () => {};

    render () {
        return (
            <div>
            <Header/>
           <figure>
               <img id="kitchenPicture" class="img-fluid"  src="/public/assets/images/foodThreeUpdate.jpg" alt="Responsive image"></img>
            <div class="jumbotron">
                <h1 class="display-4">Hello! Hungry!?</h1>
            <p class="lead">We have you covered!</p>
            </div>
            </figure>

          <Form onSubmit={this.handleFormSubmit}>
                <label>
                    Kitchen: <input name="Kitchen" value={this.state.Kitchen} onChange={this.handleChange}/>
                </label>
                <label>
                    <input name="rememberItem" checked={this.state.rememberMe} onChange={this.handleChange} type="checkbox"/> Remember Item
                </label>
                <Button type="submit">Sign In</Button>
              </Form>
                </div>
                  
                  
          
        )
    }
}

export default myKitchen; 