import React, { useEffect, useState } from "react";
import axios from "axios";
import { CardTour } from "../home/components";

export type TTour = {
  id: string;
  tour_name: string;
  image: string;
  branch_id: string;
  kid_group_price: number;
  kid_price: number;
  adult_group_price: number;
  adult_price: number;
  max_customer: number;
  min_customer: number;
  min_group_customer: number;
  days: number;
  nights: number;
  start_date: Date;
};
const Tour: React.FC = () => {
  const [tour, setTour] = useState([]);
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const res = await axios.get("http://localhost:3000/tour");
        setTour(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTours();
  }, []);
  console.log(tour);
  return (
    <>
      {tour.map((item: TTour) => {
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

export default Tour;
