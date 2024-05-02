
import { useState } from 'react'
import './App.css'
import RecipePhoto from './components/Photos.jsx'
import RecipeDescription from './components/description.jsx'
import RecipeIngredients from './components/Ingredients.jsx'

function App() {

  return (
    <>
    <div className="App recipePhotoBlock">
   <div>
      <RecipePhoto />
      <div>
         <RecipeDescription />
         <RecipeIngredients />
      </div>
   </div>
 </div>
    </>
  );
};

export default App;
