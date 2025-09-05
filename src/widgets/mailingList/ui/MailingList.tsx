import { useEffect, useState, type ChangeEvent } from "react";

import { useUser } from "@/app/providers/user";
import { CheckBoxUI } from "@/shared/ui/CheckBoxUI";
import { ContainerUI } from "@/shared/ui/ContainerUI";
import { icons, SvgIcon } from "@/shared/ui/SvgIcon";
import { TitleUI } from "@/shared/ui/TitleUI";

import {
  StyledBtn,
  StyledDescribe,
  StyledInput,
  StyledMailingList,
  StyledWrapper,
  StyledWrapperInputAndBtn,
} from "./styled";

export const MailingList = () => {
  const [inputValue, setInputValue] = useState("");
  const [isChecked, setIsChecked] = useState(true);

  const { user } = useUser();

  useEffect(() => {
    setInputValue(user?.email ? user.email : "");
  }, [user?.email]);

  const handleSubmit = () => {
    setInputValue("");
    setIsChecked(true);
  };
  //currently it is a stub, later add to firebase

  const handleCheck = (value: boolean) => {
    setIsChecked(value);
  };

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <StyledWrapper>
      <ContainerUI>
        <StyledMailingList>
          <SvgIcon icon={icons.logotype} />
          <TitleUI title="Підпишіться на E-mail розсилку" fontSize={50} marginTop={53} marginBottom={26} />
          <StyledDescribe>
            Якщо хоче бути в курсі останніх новин та новинок кіно - заповніть форму нижче та оформіть безкоштовну E-mail
            розсилку!
          </StyledDescribe>
          <StyledWrapperInputAndBtn>
            <StyledInput placeholder="Введіть свою електронну адресу" value={inputValue} onChange={handleChangeInput} />
            <StyledBtn
              onClick={handleSubmit}
              $disabled={!isChecked || !inputValue}
              disabled={!isChecked || !inputValue}
            >
              Підписатися
            </StyledBtn>
          </StyledWrapperInputAndBtn>
          <CheckBoxUI
            checked={isChecked}
            onHandleChange={handleCheck}
            label="Погоджуюсь на умови політики конфіденційності"
          />
        </StyledMailingList>
      </ContainerUI>
    </StyledWrapper>
  );
};
