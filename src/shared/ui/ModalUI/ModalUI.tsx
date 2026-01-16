import { useEffect, type MouseEvent } from "react";
import type { ReactNode } from "react";

import { icons, SvgIcon } from "@/shared/ui/SvgIcon";

import { StyledModalContent, StyledModalOverlay, StyledModalPosition } from "./styled";

export type ModalPropsType = {
  onClose: () => void;
  children: ReactNode;
};

export const ModalUI = ({ onClose, children }: ModalPropsType) => {
  const handleCloseModal = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <StyledModalOverlay onClick={handleCloseModal}>
      <StyledModalContent>
        <StyledModalPosition>
          <SvgIcon icon={icons.dagger} className="modal-dagger" onClick={onClose} />
        </StyledModalPosition>
        {children}
      </StyledModalContent>
    </StyledModalOverlay>
  );
};
