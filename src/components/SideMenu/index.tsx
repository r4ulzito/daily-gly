import * as S from "./styles/SideMenuStyled";
import UserIcon from "../../assets/UserIcon.svg";
import UserDropDownIcon from "../../assets/UserDropdownIcon.svg";
import MenuNav from "../MenuNav";
import { INavItem } from "../../interfaces/NavItemInterface";

const SideMenu = () => {
    const navItems: INavItem[] = [
        {
            path: "/my-diary",
            title: "Diário",
            icon: "DiarioNavIcon.svg",
        },
        {
            path: "/monitor",
            title: "Monitoramento",
            icon: "MonitorNavIcon.svg",
        },
        {
            path: "/sobre",
            title: "Sobre",
            icon: "SobreNavIcon.svg",
        },
    ];

    return (
        <S.SideMenuContainer>
            <S.UserContainer>
                <img src={UserIcon} alt="icone do usuario" />
                <div>
                    <p>Usuário</p>
                    <img
                        src={UserDropDownIcon}
                        alt="icone dropdown usuario"
                        onClick={() => window.alert("Você saiu do sistema!")}
                    />
                </div>
                <span></span>
            </S.UserContainer>
            <S.NavContainer>
                <MenuNav navItems={navItems} />
                <S.AuthorParagraph>
                    Desenvolvido por{" "}
                    <a
                        href="https://www.linkedin.com/in/raul-de-souza/"
                        target="_blank"
                    >
                        Raul de Souza
                    </a>
                </S.AuthorParagraph>
            </S.NavContainer>
        </S.SideMenuContainer>
    );
};

export default SideMenu;
