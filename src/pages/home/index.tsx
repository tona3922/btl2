import React from "react";
import { Input } from "antd";
import data from "../../utils/data.json";
import { CardTour } from "./components";

const { Search } = Input;

const onSearch = (value: string) => {};

const HomePage: React.FC = () => {
  return (
    <div className="bg-neutral-50 min-h-screen w-full py-12 grid grid-rows-[max-content_max-content_1fr] justify-items-center items-start gap-y-12">
      <div>
        <p className="font-semibold text-4xl text-neutral-900">
          <span className="text-teal-500">Travel </span>Tour
        </p>
      </div>
      <div className="search-home">
        <Search placeholder="Find..." onSearch={onSearch} className="w-80" />
      </div>
      <div className="max-w-7xl w-full p-4 grid grid-cols-3 gap-x-4 gap-y-8 justify-items-center ">
        {data.map(({ id, name, image, price }) => {
          return (
            <CardTour
              key={id}
              id={id}
              name={name}
              image={image}
              price={price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
