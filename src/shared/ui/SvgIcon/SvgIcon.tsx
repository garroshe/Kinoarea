import { icons } from "./constants";
import { AngleBracket } from "./icons/AngleBracket";
import { Arrow } from "./icons/Arrow";
import { AvatarMale } from "./icons/AvatarMale";
import { Camera } from "./icons/Camera";
import { Check } from "./icons/Check";
import { CollapseIconUI } from "./icons/CollapseIcon";
import { Dagger } from "./icons/Dagger";
import { Facebook } from "./icons/Facebook";
import { GitHub } from "./icons/GitHub";
import { Google } from "./icons/Google";
import { Heart } from "./icons/Heart";
import { Instagram } from "./icons/Instagram";
import { LightLogotype } from "./icons/LightLogotype";
import { Like } from "./icons/Like";
import { Logotype } from "./icons/Logotype";
import { NextArrow } from "./icons/NextArrow";
import { Play } from "./icons/Play";
import { PrevArrow } from "./icons/PrevArrow";
import { SearchIcon } from "./icons/Search";
import { Twitter } from "./icons/Twitter";
import { YouTube } from "./icons/YouTube";
import type { SvgIconPropsType } from "./types";

export const SvgIcon = ({ icon, className, onClick, color }: SvgIconPropsType) => {
  const svgs = {
    [icons.arrow]: Arrow,
    [icons.collapseIcon]: CollapseIconUI,
    [icons.dagger]: Dagger,
    [icons.facebook]: Facebook,
    [icons.github]: GitHub,
    [icons.google]: Google,
    [icons.logotype]: Logotype,
    [icons.search]: SearchIcon,
    [icons.twitter]: Twitter,
    [icons.avatarMale]: AvatarMale,
    [icons.check]: Check,
    [icons.like]: Like,
    [icons.play]: Play,
    [icons.instagram]: Instagram,
    [icons.youtube]: YouTube,
    [icons.nextArrow]: NextArrow,
    [icons.prevArrow]: PrevArrow,
    [icons.angleBracket]: AngleBracket,
    [icons.heart]: Heart,
    [icons.camera]: Camera,
    [icons.lightLogotype]: LightLogotype,
  };

  const IconJSX = svgs[icon];

  if (!IconJSX) return null;

  return <IconJSX className={className} onClick={onClick} color={color} />;
};
