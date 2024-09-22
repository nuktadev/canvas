import { menuItems } from "@/constants/menuItems";
import { Menu } from "antd";
const NavMenu = () => {
  return (
    <div>
      <Menu
        disabledOverflow
        className="bg-gray-100 hidden md:block text-black border-none"
        mode="horizontal"
        style={{ lineHeight: "40px" }}
        items={menuItems}
      />
    </div>
  );
};

export default NavMenu;
