import { useEffect, useState } from "react";
import Product from "./components/product";
import banner from "./Banner.png";
import productsList from "./products.json";

import { Container, Row } from "react-bootstrap";

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
    <div
      className="App"
      style={{ backgroundColor: "#92b4a7", minHeight: "100vh" }}
    >
      <Container
        style={{ backgroundColor: "white" }}
        className="text-center p-4"
      >
        <img
          src={banner}
          alt="I need this now banner"
          style={{ height: "10rem" }}
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
          {allProducts.map((product) => (
            <Product product={product} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
