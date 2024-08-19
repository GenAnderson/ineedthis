import { useEffect, useState } from "react";
import Product from "./components/product";
import productsList from "./products.json";

import { Container, Row } from "react-bootstrap";

import "./App.css";

function App() {
  const [searchedWord, setSearchedWord] = useState("");
  const [allProducts, setAllProducts] = useState(productsList);

  const filteredProducts = (wordsSearched) => {
    const filtered = productsList.filter((product) =>
      product.name.toLowerCase().includes(wordsSearched.toLowerCase())
    );
    setAllProducts(filtered);
  };

  useEffect(() => {
    filteredProducts(searchedWord);
  }, [searchedWord]);

  return (
    <div className="App">
      <div style={{ minHeight: "100%" }}>
        <Container
          style={{
            backgroundColor: "#fdfdff70",
            boxShadow: "black .1rem .2rem .3rem",
          }}
          className="text-center p-4"
        >
          <div className="banner">
            <h1 className="banner-header">I Need This Now</h1>
            <p className="banner-desc">Your one stop shop for viral products</p>
            <p>An Amazon Affiliate</p>
          </div>
          <form className={"d-flex justify-content-center m-4"}>
            <label for="searchBar" className={"mx-2"}>
              Search:{" "}
            </label>
            <input
              id="searchbar"
              onChange={(e) => setSearchedWord(e.target.value)}
            ></input>
          </form>
          <Row className="d-flex justify-content-center">
            {allProducts.map((product) => (
              <Product product={product} />
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
