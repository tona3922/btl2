import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";

type TCardTour = {
  id: string;
  image: string;
  name: string;
  price: number;
};
const CardTour: React.FC<TCardTour> = ({ id, image, name, price }) => {
  return (
    <div className="border-[2px] border-neutral-200 shadow-sm rounded-lg grid gap-y-1">
      <div className="w-full max-h-[300px] overflow-hidden">
        <img
          src={image}
          alt="image"
          className="w-full h-64 object-cover rounded-t-md hover:scale-125 transition duration-500 cursor-pointer"
        />
      </div>

      <div className="p-4 grid gap-2">
        <p className="font-thin text-sm">Ngay bat dau</p>

        <div className="">
          <p className="font-normal text-base break-words">{name}</p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-normal text-sm text-teal-600">Ma tour</p>
          <div>
            <p className="font-light text-sm text-neutral-700 italic">{id}</p>
          </div>
        </div>

        <div className="flex justify-end">
          <p className="justify-self-end break-words font-semibold text-xl text-teal-600">
            {price} $
          </p>
        </div>

        <div className="flex gap-6 justify-between">
          <Button
            className="bg-teal-500 text-white font-normal border-none hover:text-red-50 flex items-center gap-1"
            size="large"
          >
            <ShoppingCartOutlined />
            <p>Dat ngay</p>
          </Button>

          <Button className="border-teal-500 text-teal-500" size="large">
            Xem chi tiet
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardTour;
