import React from "react";

const Price = ({ price }) => {
  console.log("Price render");

  return (
    <p>
      {new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price)}
    </p>
  );
};

export default React.memo(Price);
