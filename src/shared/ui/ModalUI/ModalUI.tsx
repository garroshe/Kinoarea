import { useEffect, type MouseEvent } from "react";

import { SvgIcon } from "@/shared/ui/SvgIcon/SvgIcon";

import type { ModalProps } from "./types";
import { StyledModalContent, StyledModalOverlay, StyledModalPosition } from "./styled";

export const ModalUI = ({ onClose, children }: ModalProps) => {
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
          <SvgIcon icon="dagger" className="modal-dagger" onClick={onClose} />
        </StyledModalPosition>
        {children}
      </StyledModalContent>
    </StyledModalOverlay>
  );
};
