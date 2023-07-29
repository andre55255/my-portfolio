import SectionHome from "../../../components/section-home";
import SectionProjects from "../../../components/section-projects";
import SectionStacks from "../../../components/section-stacks";
import { StackListItem } from "../../../types/stacks-list-item";
import {
    FaHtml5,
    FaJs,
    FaCss3,
    FaGitAlt,
    FaJava,
    FaReact,
    FaNode,
} from "react-icons/fa";
import { TbSql, TbBrandCSharp, TbBrandTypescript } from "react-icons/tb";
import { ProjectListItem } from "../../../types/project-list-item";

export default function MainPage() {
    const listStacks: StackListItem[] = [
        {
            link: "#",
            name: "Html5",
            icon: <FaHtml5 />,
            color: "#DD4B25",
        },
        {
            link: "#",
            name: "Javascript",
            icon: <FaJs />,
            color: "#EFD81D",
        },
        {
            link: "#",
            name: "Typescript",
            icon: <TbBrandTypescript />,
            color: "#2F74C0",
        },
        {
            link: "#",
            name: "Css3",
            icon: <FaCss3 />,
            color: "#066FB0",
        },
        {
            link: "#",
            name: "Git",
            icon: <FaGitAlt />,
            color: "#F54D27",
        },
        {
            link: "#",
            name: "Sql",
            icon: <TbSql />,
            color: "#00A4E3",
        },
        {
            link: "#",
            name: "CSharp",
            icon: <TbBrandCSharp />,
            color: "#7E21D5",
        },
        {
            link: "#",
            name: "Java",
            icon: <FaJava />,
            color: "#D52C30",
        },
        {
            link: "#",
            name: "React",
            icon: <FaReact />,
            color: "#5ED3F3",
        },
        {
            link: "#",
            name: "Node",
            icon: <FaNode />,
            color: "#8BBF3D",
        },
    ];

    const listProjects: ProjectListItem[] = [
        {
            linkImg: "https://avatars.githubusercontent.com/u/77760155?v=4",
            title: "Projeto de teste",
            description:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            techs: ["C#, Javascript, Css, Html"],
            linkPreview: "https://google.com.br",
            linkViewCode: "https://github.com",
        },
        {
            linkImg: "https://avatars.githubusercontent.com/u/77760155?v=4",
            title: "Projeto de teste",
            description:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            techs: ["C#, Javascript, Css, Html"],
            linkPreview: "https://google.com.br",
            linkViewCode: "https://github.com",
        },
        {
            linkImg: "https://avatars.githubusercontent.com/u/77760155?v=4",
            title: "Projeto de teste",
            description:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            techs: ["C#, Javascript, Css, Html"],
            linkPreview: "https://google.com.br",
            linkViewCode: "https://github.com",
        },
        {
            linkImg: "https://avatars.githubusercontent.com/u/77760155?v=4",
            title: "Projeto de teste",
            description:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            techs: ["C#, Javascript, Css, Html"],
            linkPreview: "https://google.com.br",
            linkViewCode: "https://github.com",
        },
        {
            linkImg: "https://avatars.githubusercontent.com/u/77760155?v=4",
            title: "Projeto de teste",
            description:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            techs: ["C#, Javascript, Css, Html"],
            linkPreview: "https://google.com.br",
            linkViewCode: "https://github.com",
        },
    ];

    const numberItemsPerPage = 3;

    return (
        <>
            <SectionHome />
            <SectionStacks list={listStacks} />
            <SectionProjects
                list={listProjects}
                numberItemsPerPage={numberItemsPerPage}
            />
        </>
    );
}
