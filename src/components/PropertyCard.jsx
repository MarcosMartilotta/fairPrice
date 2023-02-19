import { StyledPropertyCard } from "../styled-components/styledPropertyCard";
import Home from "../assets/download.jpg";

const PropertyCard = () => {
  return (
    <StyledPropertyCard>
      <div className="image">
        <img src={Home} alt="" />
      </div>
      <div className="description">
        <div className="property-title">Property Title</div>
        <div className="property-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          assumenda reiciendis eligendi, unde culpa eius aliquam vitae illo
        </div>
      </div>
    </StyledPropertyCard>
  );
};

export default PropertyCard;
