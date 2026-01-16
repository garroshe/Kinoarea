import { Skeleton } from "antd";

import { type } from "./constants";

export type SkeletonUIPropsType = {
  types: "node" | "avatar" | "button" | "image" | "input" | "none";
  active?: boolean;
  size?: "default" | "small" | "large";
};

export const SkeletonUI = ({ types, active = true, size = "default" }: SkeletonUIPropsType) => {
  const skeleton = {
    [type.node]: Skeleton.Node,
    [type.avatar]: Skeleton.Avatar,
    [type.input]: Skeleton.Input,
    [type.image]: Skeleton.Image,
    [type.button]: Skeleton.Button,
    [type.none]: Skeleton,
  };

  const SkeletonJSX = skeleton[types];

  if (!SkeletonJSX) return null;

  return <SkeletonJSX active={active} size={size} />;
};
