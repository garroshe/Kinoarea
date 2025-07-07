import { useNavigate } from "react-router-dom";

export const NavigateButton = ({ title, to, width, height }) => {
  const navigate = useNavigate();

  const handleNavigateToPoster = () => {
    navigate(to);
  };

  return <button onClick={handleNavigateToPoster}>{title}</button>;
};
