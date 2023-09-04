import * as S from "./styles/LoginPageStyled";
import LoginPageLogo from "../../assets/LoginPageLogo.svg";
import GoogleIcon from "../../assets/GoogleIcon.svg";
import { useNavigate } from "react-router-dom";
import { userGoogleLogin } from "../../hooks/useGoogleLogin";

const LoginPage = () => {
    const navigate = useNavigate();

    const { signInWithGoogle } = userGoogleLogin();

    const login = async () => {
        signInWithGoogle();

        navigate("/my-diary");
    };

    return (
        <S.LoginPageContainer>
            <S.LoginModalContainer>
                <span>
                    <img src={LoginPageLogo} alt="Daily gly logo" />
                </span>
                <p>Faça login e começe a usar</p>
                <S.ButtonGoogleLogin onClick={() => login()}>
                    <img src={GoogleIcon} alt="icone google" />
                    <p>Entrar com Google</p>
                </S.ButtonGoogleLogin>
            </S.LoginModalContainer>
        </S.LoginPageContainer>
    );
};

export default LoginPage;
