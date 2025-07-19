import { Skeleton } from "antd";

import { type } from "./constants";
import type { ISkeletonUIProps } from "./types";

export const SkeletonUI = ({ types, active = true }: ISkeletonUIProps) => {
  const skeleton = {
    [type.node]: Skeleton.Node,
    [type.avatar]: Skeleton.Avatar,
    [type.input]: Skeleton.Input,
    [type.image]: Skeleton.Image,
    [type.button]: Skeleton.Button,
  };

  const SkeletonJSX = skeleton[types];

  if (!SkeletonJSX) return null;

  return <SkeletonJSX active={active} />;
};
