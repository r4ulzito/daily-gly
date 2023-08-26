import * as S from "./styles/LoginPageStyled";
import LoginPageLogo from "../../assets/LoginPageLogo.svg";

const LoginPage = () => {
    return (
        <S.LoginPageContainer>
            <S.LoginModalContainer>
                <span>
                    <img src={LoginPageLogo} alt="Daily gly logo" />
                </span>
                <p>Faça login e começe a usar</p>
                <button>
                    <img src="" alt="icone google" />
                    <p>Entrar com Google</p>
                </button>
            </S.LoginModalContainer>
        </S.LoginPageContainer>
    );
};

export default LoginPage;
