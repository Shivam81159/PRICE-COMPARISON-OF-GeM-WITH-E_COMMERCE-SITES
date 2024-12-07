import { OfferProd } from "../data";
import OfferProduct from "./OfferProduct";
import "./style.css";

export const Compare = () => {
  return (
    <div className="box mt-36">
      {OfferProd.map((prd, index) => (
        <OfferProduct {...prd} key={index} />
      ))}
    </div>
  );
};
export default Compare;
