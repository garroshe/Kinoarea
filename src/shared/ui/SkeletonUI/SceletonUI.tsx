import { Skeleton } from "antd";

import { type } from "./constants";
import type { ISkeletonUIPropsType } from "./types";

export const SkeletonUI = ({ types, active = true, size = "default" }: ISkeletonUIPropsType) => {
  const skeleton = {
    [type.node]: Skeleton.Node,
    [type.avatar]: Skeleton.Avatar,
    [type.input]: Skeleton.Input,
    [type.image]: Skeleton.Image,
    [type.button]: Skeleton.Button,
  };

  const SkeletonJSX = skeleton[types];

  if (!SkeletonJSX) return null;

  return <SkeletonJSX active={active} size={size} />;
};
