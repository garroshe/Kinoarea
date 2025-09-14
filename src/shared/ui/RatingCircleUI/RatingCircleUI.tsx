import { mapRatingToColorCircle } from "./map-rating-to-color-circle";
import { StyledLabel, StyledNoRatingCircle, StyledRatingCircleUI } from "./styled";

type RatingCirclePropsType = {
  value?: number;
  label: string;
};

export const RatingCircleUI = ({ value, label }: RatingCirclePropsType) => {
  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const percent = value && (value / 10) * 100;
  const offset = percent && circumference - (percent / 100) * circumference;

  return (
    <StyledRatingCircleUI>
      {value ? (
        <svg width="71" height="71" viewBox="0 0 71 71">
          <circle cx="36" cy="36" r={radius} fill="none" stroke="#4BCB36" strokeOpacity="0.3" strokeWidth="8" />

          <circle
            cx="36"
            cy="36"
            r={radius}
            fill="none"
            stroke={mapRatingToColorCircle(Math.floor(value))}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform="rotate(-90 36 36)"
          />

          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="14"
            fontWeight="bold"
            fill="#fff"
          >
            {value.toFixed(2)}
          </text>
        </svg>
      ) : (
        <StyledNoRatingCircle>--</StyledNoRatingCircle>
      )}
      <StyledLabel>{label}</StyledLabel>
    </StyledRatingCircleUI>
  );
};
