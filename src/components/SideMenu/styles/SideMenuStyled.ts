import styled from "styled-components";

export const SideMenuContainer = styled.section`
    height: 100%;
    background-color: ${({ theme }) => theme.colors.first_color};
    position: fixed;
    width: 282px;
`;

export const UserContainer = styled.section`
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

export const NavContainer = styled.section`
    height: calc(100% - 211px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const AuthorParagraph = styled.p`
    text-align: center;
    padding-bottom: 22px;
    font-size: 12px;
    font-style: italic;
    color: ${({ theme }) => theme.colors.third_color};

    a {
        transition: 0.3s;
    }

    a:hover {
        color: ${({ theme }) => theme.colors.fourth_color};
        transition: 0.3s;
    }
`;
