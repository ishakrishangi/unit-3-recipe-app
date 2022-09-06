import axios from 'axios'
import React, {useEffect} from 'react'
import AdBanner from './AdBanner'
import RecipeContainer from "./RecipeContainer"

const HomeScreen = () => {  

  const getRecipes = () => {
    axios
    .get(`https://recipes.devmountain.com/recipes`)
    .then((res) => {
      console.log(res.data)
    })
  }

   //we only want to get recipes when the page mounts for the first time. 
  useEffect(() => {
    getRecipes()
  }, [])
 
 
  return (
    <div>
      <AdBanner />
      <RecipeContainer/>
      {/* Much code from Part 2 will be placed around here. Do your best! */}
    </div>
  )
}

export default HomeScreen