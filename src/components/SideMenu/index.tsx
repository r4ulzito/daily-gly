import * as S from "./styles/SideMenuStyled";
import UserDropDownIcon from "../../assets/UserDropdownIcon.svg";
import MenuNav from "../MenuNav";
import { INavItem } from "../../interfaces/NavItemInterface";
import { userGoogleLogin } from "../../hooks/useGoogleLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import LogoutIcon from "../../assets/LogoutIcon.svg";

import DiarioNavIcon from "../../assets/navIcons/DiarioNavIcon.svg";
import MontinorNavIcon from "../../assets/navIcons/MonitorNavIcon.svg";
import SobreNavIcon from "../../assets/navIcons/SobreNavIcon.svg";

const SideMenu = () => {
    const [showLogoutModal, setShowLogoutModal] = useState<boolean>(false);

    const navItems: INavItem[] = [
        {
            path: "/my-diary",
            title: "Diário",
            icon: DiarioNavIcon,
        },
        {
            path: "/monitor",
            title: "Monitoramento",
            icon: MontinorNavIcon,
        },
        {
            path: "/sobre",
            title: "Sobre",
            icon: SobreNavIcon,
        },
    ];

    const { signOutWithGoogle } = userGoogleLogin();

    const { user } = useContext(AuthContext);

    const formatName = (currentName: string): string => {
        if (currentName.length >= 15) {
            const formatName = currentName.slice(0, 15);
            console.log(formatName);
            return formatName;
        }

        return currentName;
    };

    return (
        <S.SideMenuContainer>
            <S.UserContainer>
                <S.UserImagemContainer>
                    <img
                        src={user?.userPhotoUrl!}
                        alt="icone do usuario"
                        referrerPolicy="no-referrer"
                    />
                </S.UserImagemContainer>
                <S.UserNameContainer>
                    <p>{formatName(user?.userName!)}</p>
                    <img
                        src={UserDropDownIcon}
                        alt="icone dropdown usuario"
                        onClick={() => setShowLogoutModal(!showLogoutModal)}
                    />
                    {showLogoutModal && (
                        <S.LogoutModal>
                            <img src={LogoutIcon} alt="icone logout" />
                            <p onClick={() => signOutWithGoogle()}>Sair</p>
                        </S.LogoutModal>
                    )}
                </S.UserNameContainer>
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
