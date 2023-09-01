import * as S from "./styles/SideMenuStyled";
import UserIcon from "../../assets/UserIcon.svg";
import UserDropDownIcon from "../../assets/UserDropdownIcon.svg";
import MenuNav from "../MenuNav";

const SideMenu = () => {
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
            <MenuNav />
        </S.SideMenuContainer>
    );
};

export default SideMenu;
