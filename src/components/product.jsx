import Card from "react-bootstrap/Card";

const Product = ({ product }) => {
  const { id, name, description, img, url } = product;

  return (
    <Card
      className={"m-2"}
      style={{
        width: "15rem",
        backgroundColor: "#388697",
        boxShadow: "#333 .1rem .2rem .2rem",
      }}
    >
      <a key={id} href={url} className="product-box">
        <Card.Img
          style={{ height: "10rem", objectFit: "contain" }}
          variant="top"
          src={img}
          alt={name}
          className="mt-3"
        ></Card.Img>
        <Card.Body
          style={{
            backgroundColor: "white",
            border: ".1rem solid #333",
            boxShadow: "#333 .1rem .1rem .1rem",
            borderRadius: "5%",
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
