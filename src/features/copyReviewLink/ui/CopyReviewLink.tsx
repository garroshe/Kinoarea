import { useEffect, useState } from "react";

import { colors } from "@/shared/constants/style";
import { icons, SvgIcon } from "@/shared/ui/SvgIcon";

import { StyledLink } from "./styled";

type CopyReviewLinkPropsType = {
  reviewId: string;
};

export const CopyReviewLink = ({ reviewId }: CopyReviewLinkPropsType) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    const url = new URL(window.location.href);
    url.searchParams.set("reviewId", reviewId);

    navigator.clipboard.writeText(url.toString());
    setIsCopied(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCopied(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isCopied]);

  return (
    <StyledLink onClick={handleCopy}>
      {!isCopied ? (
        <>
          <SvgIcon icon={icons.link} />
          <p>Скопіювати посилання</p>
        </>
      ) : (
        <>
          <SvgIcon icon={icons.check} color={colors.white50} className="check" />
          <p>Посилання скопійовано</p>
        </>
      )}
    </StyledLink>
  );
};
