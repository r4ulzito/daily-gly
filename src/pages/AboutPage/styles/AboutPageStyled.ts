import styled from "styled-components";

export const AboutPageContainer = styled.section`
    display: flex;
    width: 100%;
    padding: 58px 106px;
    color: ${({ theme }) => theme.textColors.secondary};
`;

export const AboutPageContent = styled.article`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
`;

export const AboutPageContentSectionBody = styled.div`
    padding: 0px 28px;

    p,
    ol > li {
        font-weight: 300;
    }

    ol {
        padding: 8px 42px;
    }

    li::marker {
        flex-wrap: nowrap;
        font-weight: bold;
    }
`;
