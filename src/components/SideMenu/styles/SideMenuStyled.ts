import styled from "styled-components";

export const SideMenuContainer = styled.section`
    height: 100%;
    background-color: ${({ theme }) => theme.colors.first_color};
    position: fixed;
    width: 282px;
`;

export const UserContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 48px;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        color: ${({ theme }) => theme.textColors.user_name};
        padding: 12px 0px 48px 0px;

        p {
            font-size: 18px;
            font-weight: 400;
        }

        img {
            cursor: pointer;
        }
    }
    span {
        width: 252px;
        height: 2px;
        border-radius: 50px;
        background-color: ${({ theme }) => theme.colors.third_color};
    }
`;
