const Product = (product) => {
  const { name, description, img, url } = product;

  return (
    <a href={url} className="product-box">
      <p className="product-name">{name}</p>
      <img src={img} alt="" className="product-img"></img>
      <div className="product-description">{description}</div>
    </a>
  );
};

export default Product;
