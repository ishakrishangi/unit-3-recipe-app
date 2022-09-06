import React from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import classes from "./RecipeCard.module.css"

const RecipeCard = ({recipe}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`)
}
  return (
    // <div className={classes.reccard}>
    //   <div className={classes.picture}>
    //     <img src='https://mykoreankitchen.com/wp-content/uploads/2014/04/Korean-Black-Bean-Sauce-Noodles-Jajangmyeon.jpg'/>
    //   </div>
    //   <h3 className={classes.recipeheader}>Jajangmyeon</h3>
    //   <button className="blue-btn">See More</button>
    // </div>

<div className={classes.reccard}>
<div>
  <div className={classes.picture}>
    <img src={recipe.image_url} />
  </div>
  <h3 className={classes.recipeheader}>{recipe.recipe_name}</h3>
</div>
<button className="blue-btn" onClick={handleClick}>See More</button>
</div>
  )
}

export default RecipeCard