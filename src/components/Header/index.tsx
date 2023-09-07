import * as S from "./styles/HeaderStyled";
import HeaderLogo from "../../assets/HeaderLogo.svg";
import { IHeaderContent } from "../../interfaces/HeaderContentInterface";

interface HeaderProps {
    content: IHeaderContent;
}

const Header = ({ content }: HeaderProps) => {
    return (
        <S.HeaderContainer>
            <S.HeaderContent>
                <h1>{content.title}</h1>
                <p>{content.description}</p>
            </S.HeaderContent>
            <img src={HeaderLogo} alt="header logo daily gly" />
        </S.HeaderContainer>
    );
};

export default Header;
