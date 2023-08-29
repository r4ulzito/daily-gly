import * as S from "./styles/LoginPageStyled";
import LoginPageLogo from "../../assets/LoginPageLogo.svg";
import GoogleIcon from "../../assets/GoogleIcon.svg";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <S.LoginPageContainer>
            <S.LoginModalContainer>
                <span>
                    <img src={LoginPageLogo} alt="Daily gly logo" />
                </span>
                <p>Faça login e começe a usar</p>
                <S.ButtonGoogleLogin onClick={() => navigate("/my-diary")}>
                    <img src={GoogleIcon} alt="icone google" />
                    <p>Entrar com Google</p>
                </S.ButtonGoogleLogin>
            </S.LoginModalContainer>
        </S.LoginPageContainer>
    );
};

export default LoginPage;
