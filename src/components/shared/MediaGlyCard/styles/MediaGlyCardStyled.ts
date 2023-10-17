import styled from "styled-components";

export const MediaGlyCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const MediaGlyCardHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.colors.first_color};
    padding: 12px 190px 12px 18px;
    border-radius: 4px 4px 0px 0px;

    h1 {
        font-size: 18px;
        font-weight: 300;
        color: ${({ theme }) => theme.textColors.secondary};
    }
`;

export const MediaGlyCardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.default};
    width: 100%;
    border-radius: 0px 0px 4px 4px;
    padding: 40px 0px 32px;
    gap: 8px;
    min-height: 164px;
`;

export const MegiaGlyCardTitle = styled.span`
    display: flex;
    align-items: flex-end;

    h1 {
        margin: 0px;
        font-size: 76px;
        font-weight: 500;
        margin: -26px 0px;
    }

    p {
        font-size: 14px;
    }
`;

export const MegiaGlyCardSubTitle = styled.p`
    font-size: 14px;
    font-style: italic;
    color: ${({ theme }) => theme.textColors.third};
`;
