import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
import InnerContainer from "./components/innerContainer";
import FoodDetails from "./components/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("715438");
  const data = [
    {
      id: 639910,
      title: "Cold Fennel and Zucchini Noodle Side Salad",
      image: "https://img.spoonacular.com/recipes/639910-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 635675,
      title: "Boozy Bbq Chicken",
      image: "https://img.spoonacular.com/recipes/635675-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 660185,
      title: "Singapore Curry",
      image: "https://img.spoonacular.com/recipes/660185-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 660913,
      title: "Special Vegetable Biryani",
      image: "https://img.spoonacular.com/recipes/660913-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 661427,
      title: "Spring Risotto with Shrimp, Asparagus and Artichoke Hearts",
      image: "https://img.spoonacular.com/recipes/661427-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 655524,
      title: "Pecan Rice Pilaf",
      image: "https://img.spoonacular.com/recipes/655524-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 715438,
      title: "Mexican Casserole",
      image: "https://img.spoonacular.com/recipes/715438-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 644627,
      title: "Ginger Sesame Dressing",
      image: "https://img.spoonacular.com/recipes/644627-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 637311,
      title: "Cauliflower Manchurian",
      image: "https://img.spoonacular.com/recipes/637311-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 663150,
      title: "Thai Savory Brown Fried Rice",
      image: "https://img.spoonacular.com/recipes/663150-312x231.jpg",
      imageType: "jpg",
    },
  ];
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />

      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId} />
          {/* <FoodList foodData={data} setFoodId={setFoodId} /> */}
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}
// 6cc82072384043aa83321958225192c7
export default App;
