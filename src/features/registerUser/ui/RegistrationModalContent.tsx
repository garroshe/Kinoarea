import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, type SubmitHandler } from "react-hook-form";

import { useModal } from "@/app/providers/modal/ui/ModalProvider";
import { colors } from "@/shared/constants/style";
import { useAuth } from "@/shared/hooks/use-auth";
import { ButtonUI } from "@/shared/ui/ButtonUI";
import { CheckBoxUI } from "@/shared/ui/CheckBoxUI";
import { ErrorsMessageUI } from "@/shared/ui/ErrorsMessageUI";
import { InputUI } from "@/shared/ui/InputUI";
import { SpinnerUI } from "@/shared/ui/SpinnerUI";
import { TitleUI } from "@/shared/ui/TitleUI";
import { mapModalName } from "@/shared/utils/map-modal-name";

import { MESSAGE_MODAL } from "../model/constants";
import { schema } from "../model/schema";
import type { IRegisterFields } from "../model/types";
import { StyledCheckBoxWrapper, StyledRegisterForm } from "./styled";

export const RegistrationModalContent = () => {
  const [privacy, setPrivacy] = useState(false);
  const [processing, setProcessing] = useState(false);

  const {
    handleSubmit,
    reset,
    formState: { errors },
    register,
  } = useForm<IRegisterFields>({
    resolver: yupResolver(schema),
  });

  const { signUp, loading, error } = useAuth();
  const { openModal } = useModal();

  useEffect(() => {
    if (error) {
      openModal(mapModalName.message, error, MESSAGE_MODAL.title);
    }
  }, [error]);

  const onSubmit: SubmitHandler<IRegisterFields> = async (data) => {
    await signUp(data.email, data.password, data.name, data.lastName, data.loginName);
    reset();
  };

  return (
    <StyledRegisterForm onSubmit={handleSubmit(onSubmit)}>
      <TitleUI title="Зареєструватись" fontSize={40} fontWeight={800} color={colors.white50} marginBottom={34} />

      <InputUI placeholder="Ім'я" {...register("name")} />
      {errors.name?.message && <ErrorsMessageUI error={errors.name.message} />}
      <InputUI placeholder="Прізвище" {...register("lastName")} />
      {errors.lastName?.message && <ErrorsMessageUI error={errors.lastName.message} />}
      <InputUI placeholder="Придумайте логін" {...register("loginName")} />
      {errors.loginName?.message && <ErrorsMessageUI error={errors.loginName.message} />}
      <InputUI placeholder="Придумайте пароль" {...register("password")} type="password" />
      {errors.password?.message && <ErrorsMessageUI error={errors.password.message} />}
      <InputUI placeholder="Повторіть пароль" {...register("repeatPassword")} type="password" />
      {errors.repeatPassword?.message && <ErrorsMessageUI error={errors.repeatPassword.message} />}
      <InputUI placeholder="E-mail" {...register("email")} />
      {errors.email?.message && <ErrorsMessageUI error={errors.email.message} />}

      <StyledCheckBoxWrapper>
        <CheckBoxUI
          label="Погоджуюся на умови політики конфіденційності"
          checked={privacy}
          onHandleChange={setPrivacy}
          {...register("privacy")}
        />
        {errors.privacy?.message && <ErrorsMessageUI error={errors.privacy.message} />}
        <CheckBoxUI
          label="Погоджуюсь на обробку персональних даних"
          checked={processing}
          onHandleChange={setProcessing}
          {...register("processing")}
        />
        {errors.processing?.message && <ErrorsMessageUI error={errors.processing.message} />}
      </StyledCheckBoxWrapper>

      <ButtonUI type="submit" disabled={loading}>
        Зареєструватись {loading && <SpinnerUI />}
      </ButtonUI>
    </StyledRegisterForm>
  );
};
