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
                <img
                    src={`${
                        import.meta.env.VITE_API_BASE_URL
                    }/src/assets/navIcons/${item.icon}`}
                    alt="Icone Menu"
                />
                <p>{item.title}</p>
            </NavLink>
        </S.NavItemContainer>
    );
};

export default NavItem;
