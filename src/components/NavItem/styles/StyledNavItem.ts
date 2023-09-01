import styled from "styled-components";

export const NavItemContainer = styled.div`
    width: 100%;

    a {
        display: flex;
        gap: 12px;
        padding: 13px 0px 13px 24px;
        border-left: 3px solid inherit;
        transition: 0.3s;

        p {
            color: ${({ theme }) => theme.textColors.secondary};
            font-size: 20px;
            font-weight: 400;
        }
    }

    a:hover {
        background-color: ${({ theme }) => theme.colors.third_color_opace};
    }

    a.active {
        border-left: 3px solid ${({ theme }) => theme.colors.fourth_color};
        background-color: rgba(141, 66, 46, 0.6);
    }
`;
