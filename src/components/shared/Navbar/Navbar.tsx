"use client";
import { useEffect, useState } from "react";

import { Drawer, Button, Layout, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { menuItems } from "@/constants/menuItems";
import NavMenu from "./Menu";
const { Header } = Layout;

const Navbar = () => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  useEffect(() => {
    setOpen(false);
  }, [router.refresh]);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="sticky bg-gray-100 top-0 shadow-lg z-50">
      <Header className="flex sticky opacity-100 top-0 z-50 justify-between bg-transparent  items-center  max-w-7xl mx-auto">
        <div className="brand-logo">
          <Link href="/">
            <h2 className="text-black cursor-pointer"> Coaching</h2>
          </Link>
        </div>
        <div className="logo" />
        <NavMenu />

        <div className=" block md:hidden">
          <Button
            className=" block md:hidden"
            type="primary"
            onClick={showDrawer}
          >
            <MenuOutlined />
          </Button>
          <Drawer placement="right" onClose={onClose} open={open}>
            <Menu mode="inline" items={menuItems} />
          </Drawer>
        </div>
      </Header>
    </div>
  );
};

export default Navbar;
