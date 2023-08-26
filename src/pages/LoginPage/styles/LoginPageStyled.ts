import styled from "styled-components";

export const LoginPageContainer = styled.div`
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.secondary_color};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoginModalContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.default};
`;
