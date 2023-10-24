import SideMenu from "../../components/SideMenu";
import { Outlet } from "react-router-dom";
import * as S from "./styles/LayoutStyled";

const Layout = () => {
    return (
        <S.LayoutContainer>
            <SideMenu />
            <S.MainLayout>
                <Outlet />
            </S.MainLayout>
        </S.LayoutContainer>
    );
};

export default Layout;
