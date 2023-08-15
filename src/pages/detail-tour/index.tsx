import { useParams } from "react-router-dom";

const DetailTour: React.FC = () => {
  const param = useParams();

  return <div>detail tour {param.id}</div>;
};

export default DetailTour;
