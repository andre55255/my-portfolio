import SectionAbout from "../../../components/section-about";
import SectionMyEducation from "../../../components/section-my-education";
import SectionMyWorks from "../../../components/section-my-works";
import { MyWorksListItem } from "../../../types/my-works-list-item";

export default function AboutPage() {
    const descriptionAbout =
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.";

    const listMyWorks: MyWorksListItem[] = [
        {
            title: "Cargo",
            journey: "Integral",
            enterpriseName: "Empresa",
            enterpriseLocalization: "Localização TP",
            enterpriseStartDate: "Ago 2022",
            enterpriseEndDate: "Ago 2023"
        },
        {
            title: "Cargo",
            journey: "Integral",
            enterpriseName: "Empresa",
            enterpriseLocalization: "Localização TP",
            enterpriseStartDate: "Ago 2022",
            enterpriseEndDate: "Ago 2023"
        },
        {
            title: "Cargo",
            journey: "Integral",
            enterpriseName: "Empresa",
            enterpriseLocalization: "Localização TP",
            enterpriseStartDate: "Ago 2022",
            enterpriseEndDate: "Ago 2023"
        },
        {
            title: "Cargo",
            journey: "Integral",
            enterpriseName: "Empresa",
            enterpriseLocalization: "Localização TP",
            enterpriseStartDate: "Ago 2022",
            enterpriseEndDate: "Ago 2023"
        },
        {
            title: "Cargo",
            journey: "Integral",
            enterpriseName: "Empresa",
            enterpriseLocalization: "Localização TP",
            enterpriseStartDate: "Ago 2022",
            enterpriseEndDate: "Ago 2023"
        },
        {
            title: "Cargo",
            journey: "Integral",
            enterpriseName: "Empresa",
            enterpriseLocalization: "Localização TP",
            enterpriseStartDate: "Ago 2022",
            enterpriseEndDate: "Ago 2023"
        },
    ];

    const listMyEducation: MyWorksListItem[] = [
        {
            title: "Faculdade",
            journey: "Em progresso",
            enterpriseName: "Instituição",
            enterpriseLocalization: "Localização TR",
            enterpriseStartDate: "Jan 2018",
            enterpriseEndDate: "Dez 2023"
        }
    ];

    return (
        <>
            <SectionAbout description={descriptionAbout} />
            <SectionMyWorks list={listMyWorks} />
            <SectionMyEducation list={listMyEducation} />
        </>
    );
}
