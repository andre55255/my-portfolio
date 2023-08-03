import { routesAnchor } from "../../helpers/routes-pages";
import { PortfolioDataContext } from "../../providers/portfolio-data-provider";
import ContainerSectionHome from "./container-section-home";
import ContentHome from "./content-home";
import FormGeometry from "./form-geometry";
import { ImageContainer, ImageProfile } from "./image-container";
import { useContext } from "react";

export default function Home() {
    const { data } = useContext(PortfolioDataContext);
    
    return (
        <ContainerSectionHome id={routesAnchor.home}>
            <ImageContainer>
                <ImageProfile src={data?.profileImage.fileBase64} alt="foto de perfil" />
            </ImageContainer>
            <ContentHome>
                <h2>Olá amigo,</h2>
                <p>
                    Me chamo <span>{data?.firstname}</span>,
                </p>
                <p>Sou programador de software</p>
            </ContentHome>
            <FormGeometry />
        </ContainerSectionHome>
    );
}
