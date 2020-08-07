import React from 'react';
import './app.css';
import TheApp from  "./components"

function App() {
  return (
    <div className="App"
    style={{
      backgroundImage: `url("/the_sauce_code/client/public/gif/cookingTwo.gif")`,backgroundRepeat: 'no-repeat',width:'250px',height:'250px',color:'white'
   }}>
      
      <TheApp/>
    </div>
  );
}

export default App;