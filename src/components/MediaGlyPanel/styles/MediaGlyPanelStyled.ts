import styled from "styled-components";

export const MediaGlyPanelContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.monitor_panel_color};
    border-radius: 4px 4px 0px 0px;
    width: 100%;
`;

export const MediaGlyPanelHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 21px 24px;
    width: 100%;

    h1 {
        font-size: 22px;
        color: ${({ theme }) => theme.textColors.secondary};
        font-weight: 300;
    }
`;

export const MediaGlyPanelContent = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 32px 38px;
`;

export const MediaGlyPanelDivider = styled.span`
    height: 1px;
    width: calc(100% - 33px);
    background-color: ${({ theme }) => theme.colors.default};
    border-radius: 50px;
`;

export const MediaGlyPanelLoadingContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 215px;
`;
