import React from "react";
import { Button, Input } from "antd";
import data from "../../utils/data.json";
import { CardTour } from "./components";

const { Search } = Input;

const onSearch = (value: string) => {};

const HomePage: React.FC = () => {
  return (
    <div className="bg-neutral-50 min-h-screen w-full py-16 grid grid-rows-[max-content_max-content_1fr] justify-items-center items-start gap-y-12">
      <div>
        <p className="font-semibold text-4xl text-neutral-900">
          <span className="text-teal-500">Travel </span>Tour
        </p>
      </div>
      <div className="search-home flex">
        <Search placeholder="Find..." onSearch={onSearch} className="w-80" />
      </div>

      <div className="flex gap-3 w-full max-w-7xl justify-end px-4 translate-y-8">
        <Button className="text-base font-semibold" size="large">
          Them moi
        </Button>
        <Button
          className="bg-teal-500 text-white font-semibold text-base"
          size="large"
        >
          Doanh thu
        </Button>
      </div>

      <div className="max-w-7xl w-full p-4 grid grid-cols-3 gap-x-4 gap-y-8 justify-items-center">
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
