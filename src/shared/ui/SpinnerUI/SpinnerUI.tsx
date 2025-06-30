import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

export const SpinnerUI = ({ size = "small" }: { size?: "small" | "default" | "large" }) => {
  const fontSize = size === "small" ? 14 : size === "large" ? 32 : 20;

  const indicator = <LoadingOutlined style={{ fontSize }} spin />;

  return <Spin indicator={indicator} />;
};
