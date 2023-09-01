import { NavLink } from "react-router-dom";
import DiarioNavIcon from "../../assets/DiarioNavIcon.svg";
import * as S from "./styles/StyledNavItem";

const NavItem = () => {
    return (
        <S.NavItemContainer>
            <span></span>
            <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/my-diary"
            >
                <img src={DiarioNavIcon} alt="Icone Menu" />
                <p>Diário</p>
            </NavLink>
        </S.NavItemContainer>
    );
};

export default NavItem;
