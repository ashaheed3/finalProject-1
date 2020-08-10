import React from 'react'
import RecipeResults from './recipeCard'
import Title from '../Title/title';

class RecipeCard extends React.Component {
    constructor(props) {
      super(props);
  
  
      this.state = {
        inputLinkClicked: false
      }
    }
  
  
    render() {
      return(
        <main id="wrapper" className="" data-reset-cookie-tab>
          <div id="content" role="main">
            <div className="inner-block">
  
              <H1Heading title="{()}"/>
  
              <Title label="Recipe"
                ClickId="Preference"
                ClickId="Button press"
              />
  
  
  
            </div>
           </div>
        </main>
      );
    }
  }

  export default RecipeCard 