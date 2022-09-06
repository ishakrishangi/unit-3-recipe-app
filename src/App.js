import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes} from "react-router-dom";
import HomeScreen from "./components/homeComponents/HomeScreen";
import DetailScreen from "./components/detailComponents/DetailScreen";
import NewRecipeScreen from "./components/newRecipeComponents/NewRecipeScreen";
import "./App.css";
// import Welcome from "./components/UdemyExamples/Welcome";
// import Products from "./components/UdemyExamples/Products";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route path="/welcome" element={<Welcome/>}/>
        <Route path="/products" element={<Products/>}/> */}
        <Route index element={<HomeScreen/>}/>
        <Route path="/recipe/:id" element={<DetailScreen/>}/>
        <Route path="/newRecipe" element={<NewRecipeScreen/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

//domain.com/welcome => Welcome component
//domain.com/products => Products component