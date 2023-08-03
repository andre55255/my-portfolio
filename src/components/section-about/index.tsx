import { PortfolioDataContext } from "../../providers/portfolio-data-provider";
import { ContainerAbout, DescriptionAbout, TitleAbout } from "./styled";
import { useContext } from "react";

export default function SectionAbout() {
    const { data } = useContext(PortfolioDataContext);

    return (
        <ContainerAbout>
            <TitleAbout>Sobre Mim</TitleAbout>
            <DescriptionAbout>{data?.aboutMe}</DescriptionAbout>
        </ContainerAbout>
    )
}