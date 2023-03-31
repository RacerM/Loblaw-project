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
      {/* <img src={image} /> */}
      <img src={banana} />
      {/* <h4>{name}</h4> */}
      <div className="context">
        <p className="produce-name">Banana</p>
        {/* <p>{amount}</p> */}
        <p>(1 bunch)</p>
      </div>
      <div className="saletag">
        <p>SALE</p>
      </div>
      <div className="price">
        {/* <h4 className="price-discounted">{discountprice}</h4> */}
        <h4 className="price-discounted">$0.99 ea</h4>
        {/* <h4 className="price-original">{price}</h4> */}
        <h4 className="price-original">$1.75</h4>
      </div>
      <button className="add-product">ADD</button>
    </div>
  );
}
