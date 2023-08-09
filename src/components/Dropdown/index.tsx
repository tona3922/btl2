import type { MenuProps } from "antd";
import { Avatar, Dropdown, Space } from "antd";
import { Link } from "react-router-dom";

const DropdownCustom: React.FC = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link to={"/login"}>Logout</Link>,
    },
  ];
  return (
    <Dropdown menu={{ items }} className="fixed top-4 right-4">
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <Avatar
            src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
            className="cursor-pointer w-12 h-12"
          />
        </Space>
      </a>
    </Dropdown>
  );
};

export default DropdownCustom;
