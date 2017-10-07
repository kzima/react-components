import React from "react";
import List from "material-ui/List";
import Card from 'material-ui/Card';
import BenefitItem from "./BenefitItem";

const BenefitCard= (item) => {
    

    return (
      <Card>
          <BenefitItem key={item} />
          <BenefitItem key={item} />
          <BenefitItem key={item} />
      </Card>
    );
  };
  
  
  export default BenefitCard;
  
  