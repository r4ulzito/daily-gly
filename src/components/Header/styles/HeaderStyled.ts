import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 22px;
    background-color: ${({ theme }) => theme.colors.default};
    box-shadow: 4px 1px 12px -3px rgba(0, 0, 0, 0.75);
`;

export const HeaderContent = styled.div`
    h1 {
        font-size: 28px;
        font-weight: 600;
        color: ${({ theme }) => theme.textColors.header_title};
        margin-bottom: -12px;
    }

    p {
        font-weight: 300;
    }
`;
