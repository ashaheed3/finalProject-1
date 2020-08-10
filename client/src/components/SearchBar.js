import React from 'react';



function SearchBar(props){

        return (
            <div style = {{"padding":"25px"}}className="row justify-content-center search">

              
               <form className="form-inline">
                <input 
                    onChange={props.handleInputChange}
                    value={props.search}
                    className="form-control mr-sm-2" type="search" 
                    name = "search" 
                    placeholder="Search for Recipes" aria-label="Search"
                />
                <button 
                    className="btn btn-primary my-2 my-sm-0 fas fa-search" 
                    id="search" 
                    onClick={props.handleFormSubmit}>
                </button>
              </form>

        
              
            </div>
        ) 
    }

    export default SearchBar;