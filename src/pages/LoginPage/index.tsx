import * as S from "./styles/LoginPageStyled";
import LoginPageLogo from "../../assets/LoginPageLogo.svg";
import GoogleIcon from "../../assets/GoogleIcon.svg";
import { useNavigate } from "react-router-dom";
import { userGoogleLogin } from "../../hooks/useGoogleLogin";

import { ThreeDots } from "react-loader-spinner";

const LoginPage = () => {
    const navigate = useNavigate();

    const { signInWithGoogle, loadingLogin } = userGoogleLogin();

    const login = async () => {
        await signInWithGoogle();

        navigate("/my-diary");
    };

    return (
        <S.LoginPageContainer>
            <S.LoginModalContainer>
                <span>
                    <img src={LoginPageLogo} alt="Daily gly logo" />
                </span>
                <p>Faça login e começe a usar</p>
                {loadingLogin ? (
                    <S.ButtonGoogleLogin disabled={true}>
                        <ThreeDots
                            height="21"
                            width="21"
                            radius="9"
                            color="#ffff"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            visible={true}
                        />
                    </S.ButtonGoogleLogin>
                ) : (
                    <S.ButtonGoogleLogin onClick={() => login()}>
                        <img src={GoogleIcon} alt="icone google" />
                        <p>Entrar com Google</p>
                    </S.ButtonGoogleLogin>
                )}
            </S.LoginModalContainer>
        </S.LoginPageContainer>
    );
};

export default LoginPage;
