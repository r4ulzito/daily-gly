import styled from "styled-components";

export const LoadingPageContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.secondary_color};
`;
