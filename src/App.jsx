import { useState } from "react";
import Product from "./components/product";
import banner from "./Banner.png";
import productsList from "./products.json";

import { Container, Row } from "react-bootstrap";

function App() {
  const [searchedWord, setSearchedWord] = useState("");
  const [allProducts, setAllProducts] = useState(productsList);

  return (
    <div className="App" style={{ backgroundColor: "#92b4a7" }}>
      <Container style={{ backgroundColor: "white" }} className="text-center">
        <img
          src={banner}
          alt="I need this now banner"
          className={"mx-auto"}
        ></img>
        <form className={"d-flex justify-content-center mb-4"}>
          <label for="searchBar" className={"mx-2"}>
            Search:{" "}
          </label>
          <input
            id="searchbar"
            onChange={(e) => setSearchedWord(e.target.value)}
          ></input>
        </form>
        <Row className="d-flex justify-content-center">
          {searchedWord}
          {allProducts.map((product) => (
            <Product product={product} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
