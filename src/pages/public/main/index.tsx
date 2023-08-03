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
import { GetProjects, parsedObjectProjectReturn } from "../../../services/projects/get-projects-data";
import { useEffect, useState } from "react";

export default function MainPage() {
    const [projects, setProjects] = useState<ProjectListItem[]>([]);

    const handleFetch = async () => {
        const [resultProjects] = await Promise.all([GetProjects()]);

        if (resultProjects.success && resultProjects.object) {
            const parseObj = parsedObjectProjectReturn(resultProjects.object);
            setProjects(parseObj!!);
        }
        else {
            alert(resultProjects.message);
        }
    };

    useEffect(() => {
        handleFetch();
    }, []);

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

    const numberItemsPerPage = process.env.REACT_APP_NUMBER_PROJECTS_PER_PAGE
        ? Number(process.env.REACT_APP_NUMBER_PROJECTS_PER_PAGE)
        : 3;

    return (
        <>
            <SectionHome />
            <SectionStacks list={listStacks} />
            <SectionProjects
                list={projects}
                numberItemsPerPage={numberItemsPerPage}
            />
        </>
    );
}
