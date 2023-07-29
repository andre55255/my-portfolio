import { ProjectListItem } from "../../../types/project-list-item";
import { FaLink, FaCode } from "react-icons/fa";
import {
    ContainerCardProject,
    ContainerFooter,
    ContainerImg,
    DescriptionCard,
    FooterItem,
    ImgProject,
    TechsCard,
    TitleCard,
} from "./styled";

interface CardProjectProps {
    item: ProjectListItem;
}

export default function CardProject({ item }: CardProjectProps) {
    return (
        <ContainerCardProject>
            <ContainerImg>
                <ImgProject src={item.linkImg} alt="Imagem Projeto" />
            </ContainerImg>
            <TitleCard>{item.title}</TitleCard>
            <DescriptionCard>{item.description}</DescriptionCard>
            <TechsCard>
                <span>Techs:</span>
                {item.techs}
            </TechsCard>
            <ContainerFooter>
                {item.linkPreview && (
                    <FooterItem href={item.linkPreview ?? "#"} target="_blank">
                        <FaLink />
                        Live
                    </FooterItem>
                )}

                {item.linkViewCode && (
                    <FooterItem href={item.linkViewCode ?? ""} target="_blank">
                        <FaCode />
                        Ver código
                    </FooterItem>
                )}
            </ContainerFooter>
        </ContainerCardProject>
    );
}
