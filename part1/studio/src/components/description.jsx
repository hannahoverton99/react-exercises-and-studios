import styles from './description.module.css'
import React from 'react';

function RecipeAuthor(){
    const authorLink= "https://sallysbakingaddiction.com/about/";
    const authorPhoto= "https://sallysbakingaddiction.com/wp-content/uploads/2023/08/headshot-sally-green-shirt-300x300.jpg";
    const authorName="Sally McKenney";
    return (
        <div className = {styles.recipeAuthorBlock}>
       <img src={authorPhoto} alt = "Author" className={styles.imageUpdates} />
       <div>
          <h3>{authorName}</h3>
          <a href={authorLink}>Sally's Baking Recipes</a> 
       </div>
    </div>
 );
};
class RecipeDescription extends React.Component{
    render(){
        return(
        <div> 
   <div>
      <h1>My Favorite Gingerbread Cookies</h1>
      <p>Here is my favorite gingerbread cookies recipe and one of the most popular Christmas cookie recipes. 
        Soft in the centers, crisp on the edges, perfectly spiced, molasses and brown sugar-sweetened holiday goodness. </p>
   </div>
   <RecipeAuthor />
</div>
        );
    };
};
export default RecipeDescription;

