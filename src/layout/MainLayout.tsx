"use client";
import { ReactNode } from "react";
import { Layout } from "antd";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";

const { Content } = Layout;
const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Layout className="">
      <Navbar />
      <Content className="min-h-screen">
        <div>{children}</div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default MainLayout;
