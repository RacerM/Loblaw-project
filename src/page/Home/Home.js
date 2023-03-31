import "./Home.scss";
import ProduceItem from "../../components/ProduceItem/ProduceItem";
import banana from "../../assets/Photos-PNG/Banana.png";
import broccoli from "../../assets/Photos-PNG/Broccoli.png";
import apple from "../../assets/Photos-PNG/Apple.png";
import avocado from "../../assets/Photos-PNG/Avocado.png";

export default function Home() {
  return (
    <div className="main">
      <div className="category-header">
        <h2>Produce</h2>
        <p className="more">More...</p>
      </div>
      <div className="produce-items">
        <ProduceItem
          image={banana}
          name="Banana"
          amount="(1 bunch)"
          discountprice="$0.99 ea"
          price="$1.75"
        />
        <ProduceItem
          image={broccoli}
          name="Broccoli"
          amount="(1 bunch)"
          discountprice="$2.99 ea"
          price="$3.99"
        />
        <ProduceItem
          image={apple}
          name="Apple"
          amount="(1 piece)"
          discountprice="$0.79 ea"
          price="$1.15"
        />
        <ProduceItem
          image={avocado}
          name="Avocado"
          amount="(1 piece)"
          discountprice="$1.99 ea"
          price="$2.50"
        />
      </div>
      <h2>Meat</h2>
    </div>
  );
}
