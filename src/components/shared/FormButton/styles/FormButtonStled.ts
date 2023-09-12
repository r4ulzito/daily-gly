import styled from "styled-components";

export const FormButtonContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 256px;
    height: 43px;
    background-color: ${({ theme }) => theme.colors.first_color};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background-color: ${({ theme }) => theme.colors.first_color_hover};
        transition: 0.2s;
    }
`;

export const FormButtonContent = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    p {
        color: ${({ theme }) => theme.textColors.secondary};
        font-size: 18px;
        font-weight: 400;
    }
`;
