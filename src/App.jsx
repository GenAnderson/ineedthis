import { useState } from "react";
import Product from "./components/product";
import banner from "./Banner.png";
import productsList from "./products.json";
import "./App.css";

import { Container } from "react-bootstrap";

function App() {
  const [searchedWord, setSearchedWord] = useState("");
  const [allProducts, setAllProducts] = useState([productsList]);

  return (
    <div className="App">
      <Container className="main-container">
        <img src={banner} alt="I need this now banner" className="banner"></img>
        <form>
          <label for="searchBar">Search: </label>
          <input
            id="searchbar"
            onChange={(e) => setSearchedWord(e.target.value)}
          ></input>
        </form>
        {searchedWord}

        <Product product={allProducts} />
      </Container>
    </div>
  );
}

export default App;
