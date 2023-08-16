import React from "react";
import CardTour from "../home/components/CardTour";
import { TTour } from "../tour";

const SearchTour: React.FC<{ data: TTour[] }> = ({ data }) => {
  console.log("inside: ", data);
  const mydata = data;
  console.log(mydata);
  return (
    <>
      {mydata.map((item: TTour) => {
        return (
          <CardTour
            key={item.id}
            id={item.id}
            name={item.tour_name}
            image={item.image}
            price={item.adult_price}
            startDate={item.start_date}
          />
        );
      })}
    </>
  );
};

export default SearchTour;
