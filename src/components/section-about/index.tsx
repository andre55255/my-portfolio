import { ContainerAbout, DescriptionAbout, TitleAbout } from "./styled";

interface SectionAboutProps {
    description: string;
}

export default function SectionAbout({ description }: SectionAboutProps) {
    return (
        <ContainerAbout>
            <TitleAbout>Sobre Mim</TitleAbout>
            <DescriptionAbout>{description}</DescriptionAbout>
        </ContainerAbout>
    )
}