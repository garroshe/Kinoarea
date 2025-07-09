import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, type SubmitHandler } from "react-hook-form";

import { colors } from "../../../shared/constants/style";
import { useAuth } from "../../../shared/hooks/useAuth";
import { ButtonUI } from "../../../shared/ui/ButtonUI/ButtonUI";
import { ErrorsMessageUI } from "../../../shared/ui/ErrorsMessageUI/ErrorsMessageUI";
import { InputUI } from "../../../shared/ui/InputUI/InputUI";
import { SpinnerUI } from "../../../shared/ui/SpinnerUI/SpinnerUI";
import { icons, SvgIcon } from "../../../shared/ui/SvgIcon/SvgIcon";
import { TitleUI } from "../../../shared/ui/TitleUI/TitleUI";
import { mapModalName } from "../../../shared/utils/map-modal-name";
import { useModal } from "../../../widgets/Modal/context/modalContext";
import type { ILoginFields } from "../../auth/model/types";
import { INPUTS_PLACEHOLDER, MESSAGE_MODAL } from "../model/constants";
import { schema } from "../model/schema";
import { StyledLoginForm, StyledRegisterButton, StyledResetPassword, StyledSocial, StyledSocialItems } from "./styled";

export const LoginModalContent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILoginFields>({
    resolver: yupResolver(schema),
  });

  const { openModal } = useModal();
  const { signInWithEmail, signInWithGoogle, signInWithFacebook, signInWithTwitter, signInWithGitHub, loading, error } =
    useAuth();

  const onSubmit: SubmitHandler<ILoginFields> = async (data) => {
    await signInWithEmail(data.email, data.password);
    reset();
  };

  const handleOpenModalRegister = () => {
    openModal(mapModalName.register);
  };

  const handleOpenModalResetPassword = () => {
    openModal(mapModalName.resetPassword);
  };

  useEffect(() => {
    if (error) {
      openModal(mapModalName.message, error, MESSAGE_MODAL.title);
    }
  }, [error]);

  return (
    <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
      <TitleUI title="Увійти" fontSize={40} fontWeight={800} color={colors.white50} marginBottom={34} marginTop={0} />

      <InputUI placeholder={INPUTS_PLACEHOLDER.email} {...register("email")} />
      {errors.email?.message && <ErrorsMessageUI error={errors.email.message} />}
      <InputUI placeholder={INPUTS_PLACEHOLDER.password} {...register("password")} type="password" />
      {errors.password?.message && <ErrorsMessageUI error={errors.password.message} />}
      <ButtonUI disabled={loading} type="submit">
        Увійти {loading && <SpinnerUI size="default" />}
      </ButtonUI>

      <StyledRegisterButton type="button" onClick={handleOpenModalRegister}>
        Зареєструватись
      </StyledRegisterButton>
      <StyledResetPassword onClick={handleOpenModalResetPassword}>Відновити пароль</StyledResetPassword>

      <StyledSocial>
        <StyledSocialItems onClick={signInWithGitHub}>
          <SvgIcon icon={icons.github} />
        </StyledSocialItems>
        <StyledSocialItems onClick={signInWithFacebook}>
          <SvgIcon icon={icons.facebook} />
        </StyledSocialItems>
        <StyledSocialItems onClick={signInWithGoogle}>
          <SvgIcon icon={icons.google} />
        </StyledSocialItems>
        <StyledSocialItems onClick={signInWithTwitter}>
          <SvgIcon icon={icons.twitter} />
        </StyledSocialItems>
      </StyledSocial>
    </StyledLoginForm>
  );
};
