import { HomePart } from "../HomePart/HomePart";
import "./OurPartners.css";
export const OurPartners = ({ color = "#F5F5F5" }) => {
  return (
    <HomePart backgroundColor={color}>
      <div className="our-partners">
        <div className="jost-font-title our-partners-title">НАШИ ПОТРЕБИТЕЛИ</div>
      </div>
    </HomePart>
  );
};
