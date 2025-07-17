import { Arrow } from "./icons/Arrow";
import { AvatarMale } from "./icons/AvatarMale";
import { Check } from "./icons/Check";
import { CollapseIconUI } from "./icons/CollapseIcon";
import { Dagger } from "./icons/Dagger";
import { Facebook } from "./icons/Facebook";
import { GitHub } from "./icons/GitHub";
import { Google } from "./icons/Google";
import { Like } from "./icons/Like";
import { Logotype } from "./icons/Logotype";
import { Play } from "./icons/Play";
import { SearchIcon } from "./icons/Search";
import { Social } from "./icons/Social";
import { Twitter } from "./icons/Twitter";
import type { ISvgIconProps } from "./types";

export const icons = {
  arrow: "arrow",
  avatarMale: "avatarMale",
  check: "check",
  collapseIcon: "collapseIcon",
  dagger: "dagger",
  facebook: "facebook",
  github: "github",
  google: "google",
  logotype: "logotype",
  search: "search",
  social: "social",
  twitter: "twitter",
  like: "like",
  play: "play",
};

export const SvgIcon = ({ icon, className, onClick, color }: ISvgIconProps) => {
  const svgs = {
    [icons.arrow]: Arrow,
    [icons.collapseIcon]: CollapseIconUI,
    [icons.dagger]: Dagger,
    [icons.facebook]: Facebook,
    [icons.github]: GitHub,
    [icons.google]: Google,
    [icons.logotype]: Logotype,
    [icons.search]: SearchIcon,
    [icons.social]: Social,
    [icons.twitter]: Twitter,
    [icons.avatarMale]: AvatarMale,
    [icons.check]: Check,
    [icons.like]: Like,
    [icons.play]: Play,
  };

  const IconJSX = svgs[icon];

  if (!IconJSX) return null;

  return <IconJSX className={className} onClick={onClick} color={color} />;
};
