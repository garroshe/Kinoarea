import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useParams } from "react-router-dom";

import { useUser } from "@/app/providers/user";
import { useFetchReviewsMutation } from "@/features/writeReviews/api/use-fetch-reviews-mutation";
import { ButtonUI } from "@/shared/ui/ButtonUI";
import { ErrorsMessageUI } from "@/shared/ui/ErrorsMessageUI";

import { schema } from "../model/schema";
import type { WriteReviewsType } from "../model/types";
import {
  StyledContentTextArea,
  StyledElementAndErrorWrapper,
  StyledSelfReviewsWrapper,
  StyledSelfReviewTitleInput,
  StyledSelfReviewTypeSelector,
  StyledTopBlock,
} from "./styled";

export const WriteReviews = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WriteReviewsType>({
    resolver: yupResolver(schema),
  });

  const { mutate } = useFetchReviewsMutation();
  const { user } = useUser();
  const { id } = useParams();

  const onSubmit: SubmitHandler<WriteReviewsType> = async (data) => {
    mutate({
      title: data.title,
      content: data.content,
      reviewType: data.reviewType,
      movieId: Number(id),
      avatar: user?.avatar,
      name: user?.userName,
    });
    reset();
  };

  return (
    <StyledSelfReviewsWrapper onSubmit={handleSubmit(onSubmit)}>
      <StyledTopBlock>
        <StyledElementAndErrorWrapper>
          <StyledSelfReviewTitleInput placeholder="Заголовок Вашої рецензії" {...register("title")} />
          {errors.title?.message && <ErrorsMessageUI error={errors.title.message} />}
        </StyledElementAndErrorWrapper>
        <StyledSelfReviewTypeSelector defaultValue="positive" {...register("reviewType")}>
          <option value="positive">Позитивні відгук</option>
          <option value="negative">Негативний відгук</option>
          <option value="netral">Нейтральний відгук</option>
        </StyledSelfReviewTypeSelector>
      </StyledTopBlock>
      <StyledElementAndErrorWrapper>
        <StyledContentTextArea placeholder="Я думаю, фільм буде відмінний, тому що ..." {...register("content")} />
        {errors.content?.message && <ErrorsMessageUI error={errors.content.message} />}
      </StyledElementAndErrorWrapper>
      <ButtonUI type="submit" width={182} height={70}>
        Відправити
      </ButtonUI>
    </StyledSelfReviewsWrapper>
  );
};
