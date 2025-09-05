import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

import type { SpinnerUiPropsType } from "./types";

export const SpinnerUI = ({ size = "small" }: SpinnerUiPropsType) => {
  const fontSize = size === "small" ? 14 : size === "large" ? 32 : 20;

  const indicator = <LoadingOutlined style={{ fontSize }} spin />;

  return <Spin indicator={indicator} />;
};
