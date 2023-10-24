import styled, { keyframes } from "styled-components";

export const AboutContentSectionContainer = styled.section``;

export const AboutPageContentSectionHeader = styled.h3`
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    span {
        color: ${({ theme }) => theme.colors.first_color};
        font-size: 24px;
    }
`;

const showContent = keyframes`
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(100%);
    }
`;

export const AboutPageContentSectionBody = styled.div`
    div {
        position: relative;
        overflow: hidden;

        &:after {
            content: "";
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: ${({ theme }) => theme.colors.secondary_color};
            transform: translateY(100%);
            animation: ${showContent} 0.3s linear;
        }
    }
`;
