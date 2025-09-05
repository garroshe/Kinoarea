import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, type SubmitHandler } from "react-hook-form";

import { useModal } from "@/app/providers/modal";
import { colors } from "@/shared/constants/style";
import { useAuth } from "@/shared/hooks/use-auth";
import { ButtonUI } from "@/shared/ui/ButtonUI";
import { ErrorsMessageUI } from "@/shared/ui/ErrorsMessageUI";
import { InputUI } from "@/shared/ui/InputUI";
import { TitleUI } from "@/shared/ui/TitleUI";
import { mapModalName } from "@/shared/utils/map-modal-name";

import { schema } from "../model/schema";
import type { IResetPasswordFields } from "../model/types";
import { StyledForm, StyledMessage } from "./styled";

export const ResetPassword = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const { resetPassword, error } = useAuth();
  const { closeModal, openModal } = useModal();

  useEffect(() => {
    if (error) {
      setShowMessage(false);
      setDisabled(false);
      openModal(mapModalName.message, error, "Помилка :(");
    }
  }, [error]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IResetPasswordFields>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IResetPasswordFields> = async (data) => {
    setShowMessage(true);
    setDisabled(true);
    await resetPassword(data.email);
    setTimeout(() => {
      setShowMessage(false);
      setDisabled(false);
      closeModal();
    }, 5000);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} data-testid="reset-password-form">
      <TitleUI title="Відновити пароль" fontSize={40} fontWeight={800} color={colors.white50} marginBottom={34} />

      <InputUI placeholder="Пошта" {...register("email")} data-testid="reset-password-input" />
      {errors.email?.message && <ErrorsMessageUI error={errors.email.message} />}

      {showMessage && <StyledMessage> Ми надіслали лист для скидання пароля на вказану пошту.</StyledMessage>}

      <ButtonUI type="submit" disabled={disabled}>
        Надіслати лист
      </ButtonUI>
    </StyledForm>
  );
};
