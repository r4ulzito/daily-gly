import styled from "styled-components";

export const LoginPageContainer = styled.div`
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.secondary_color};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoginModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.default};
    padding: 122px 104px 132px 104px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

    > p {
        font-size: 14px;
        font-weight: 300;
        margin-top: 62px;
    }
`;

export const ButtonGoogleLogin = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 11px 38px;
    border: 1px solid ${({ theme }) => theme.colors.secondary_color};
    border-radius: 4px;
    font-family: ${({ theme }) => theme.fonts.default}, sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.default};
    background-color: ${({ theme }) => theme.colors.secondary_color};
    margin-top: 16px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: ${({ theme }) => theme.hovers.secondary_color_hover};
        border-color: ${({ theme }) => theme.hovers.secondary_color_hover};
    }
`;
