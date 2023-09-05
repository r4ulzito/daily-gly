import { ThreeDots } from "react-loader-spinner";
import * as S from "./styles/LoadingPageStyled";

const LoadingPage = () => {
    return (
        <S.LoadingPageContainer>
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#ffff"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                visible={true}
            />
        </S.LoadingPageContainer>
    );
};

export default LoadingPage;
