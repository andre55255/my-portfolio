import profileImg from "../../assets/foto_perfil.jpg";
import { routesAnchor } from "../../helpers/routes-pages";
import ContainerSectionHome from "./container-section-home";
import ContentHome from "./content-home";
import FormGeometry from "./form-geometry";
import { ImageContainer, ImageProfile } from "./image-container";

export default function Home() {
    return (
        <ContainerSectionHome id={routesAnchor.home}>
            <ImageContainer>
                <ImageProfile src={profileImg} alt="foto de perfil" />
            </ImageContainer>
            <ContentHome>
                <h2>Olá amigo,</h2>
                <p>
                    Me chamo <span>André</span>,
                </p>
                <p>Sou programador de software</p>
            </ContentHome>
            <FormGeometry />
        </ContainerSectionHome>
    );
}
