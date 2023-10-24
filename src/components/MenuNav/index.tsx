import { INavItem } from "../../interfaces/NavItemInterface";
import NavItem from "../NavItem";
import * as S from "./styles/MenuNavStyles";

interface MenuNavProps {
    navItems: INavItem[];
}

const MenuNav = ({ navItems }: MenuNavProps) => {
    return (
        <S.NavContainer>
            {navItems.map((item) => (
                <NavItem key={item.title} item={item} />
            ))}
        </S.NavContainer>
    );
};

export default MenuNav;
