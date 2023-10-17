import * as S from "./styles/MediaGlyCardStyled";

interface MediaGlyCardProps {
    headerTitle: string;
    value: number;
    subTitle?: string;
}

const MediaGlyCard = ({ headerTitle, value, subTitle }: MediaGlyCardProps) => {
    return (
        <S.MediaGlyCardContainer>
            <S.MediaGlyCardHeader>
                <h1>{headerTitle}</h1>
            </S.MediaGlyCardHeader>
            <S.MediaGlyCardContent>
                <S.MegiaGlyCardTitle>
                    <h1>{value}</h1>
                    <p>mg/dL</p>
                </S.MegiaGlyCardTitle>
                <S.MegiaGlyCardSubTitle>{subTitle}</S.MegiaGlyCardSubTitle>
            </S.MediaGlyCardContent>
        </S.MediaGlyCardContainer>
    );
};

export default MediaGlyCard;
