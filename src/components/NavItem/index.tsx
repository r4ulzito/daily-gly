import { NavLink } from "react-router-dom";
import * as S from "./styles/StyledNavItem";
import { INavItem } from "../../interfaces/NavItemInterface";

interface NavItemProps {
    item: INavItem;
}

const NavItem = ({ item }: NavItemProps) => {
    return (
        <S.NavItemContainer>
            <span></span>
            <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to={item.path}
            >
                <img src={item.icon} alt="Icone Menu" />
                <p>{item.title}</p>
            </NavLink>
        </S.NavItemContainer>
    );
};

export default NavItem;
