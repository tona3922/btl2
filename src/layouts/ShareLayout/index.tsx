import { Outlet } from "react-router-dom";
import { DropdownCustom } from "../../components";

const ShareLayout: React.FC = () => {
  return (
    <div className="relative">
      <DropdownCustom />
      <Outlet />
    </div>
  );
};

export default ShareLayout;
