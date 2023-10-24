import { PropsWithChildren, useState } from "react";
import * as S from "./styles/AboutContentSectionStyled";
import RigthPointer from "../../../assets/RightPointer.svg";
import DownPointer from "../../../assets/DownPointer.svg";

interface AboutContentSectionProps {
    title: string;
    hideContent?: boolean;
}

const AboutContentSection = ({
    title,
    children,
    hideContent = true,
}: PropsWithChildren<AboutContentSectionProps>) => {
    const [selectHideContent, setSelectHideContent] = useState(hideContent);

    return (
        <S.AboutContentSectionContainer>
            <S.AboutPageContentSectionHeader
                onClick={() => setSelectHideContent(!selectHideContent)}
            >
                <img
                    src={selectHideContent ? RigthPointer : DownPointer}
                    alt="ponteiro da sobre section"
                />
                <span>{title}</span>
            </S.AboutPageContentSectionHeader>
            {!selectHideContent && (
                <S.AboutPageContentSectionBody>
                    {children}
                </S.AboutPageContentSectionBody>
            )}
        </S.AboutContentSectionContainer>
    );
};

export default AboutContentSection;
