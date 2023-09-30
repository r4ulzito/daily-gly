import styled from "styled-components";

interface ToggleIconButtonProps {
    upeffect?: "true";
    hide?: "true";
}

export const ToggleIconButtonContainer = styled.span<ToggleIconButtonProps>`
    display: ${({ hide }) => (hide === "true" ? "none" : "flex")};
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.first_color};
    border-radius: 4px;
    padding: 13px;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.first_color_hover};
        transition: 0.2s;
        transform: translateY(
            ${({ upeffect }) => (upeffect === "true" ? "-4px" : "0px")}
        );
    }
`;
