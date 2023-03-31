import "./ProduceItem.scss";
import banana from "../../assets/Photos-PNG/Banana.png";

export default function ProduceItem({
  image,
  name,
  amount,
  discountprice,
  price,
}) {
  return (
    <div className="produce-item">
      <img src={image} />
      <div className="context">
        <p className="produce-name">{name}</p>
        <p>{amount}</p>
      </div>
      <div className="saletag">
        <p>SALE</p>
      </div>
      <div className="price">
        <h4 className="price-discounted">{discountprice}</h4>
        <h4 className="price-original">{price}</h4>
      </div>
      <button className="add-product">ADD</button>
    </div>
  );
}
