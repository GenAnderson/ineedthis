import Card from "react-bootstrap/Card";
import "./product.css";

const Product = ({ product }) => {
  const { id, name, description, img, url } = product;

  return (
    <Card className={"m-2"}>
      <a
        key={id}
        href={url}
        className="product-box"
        target="_blank"
        rel="noreferrer"
      >
        <Card.Img
          style={{
            height: "10rem",
            objectFit: "cover",
            borderRadius: "3%",
            boxShadow: "black .1rem .1rem .3rem",
          }}
          variant="top"
          src={img}
          alt={name}
          className="mt-3"
        ></Card.Img>
        <Card.Body
          style={{
            color: "black",
          }}
          className="m-2"
        >
          <Card.Title className="product-name">{name}</Card.Title>
          <Card.Text className="product-description">{description}</Card.Text>
        </Card.Body>
      </a>
    </Card>
  );
};

export default Product;
