import { StyledPrivacyAndPolicy } from "./styled";

const PrivacyPolicy = () => {
  return (
    <div className="container">
      <StyledPrivacyAndPolicy>
        <h1>Політика конфіденційності</h1>
        <p>
          Ми не зберігаємо особисті дані користувачів. Ваші дані використовуються виключно для автентифікації через
          Facebook та інших соц. мереж.
        </p>
      </StyledPrivacyAndPolicy>
    </div>
  );
};

export default PrivacyPolicy;
