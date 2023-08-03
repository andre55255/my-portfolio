import SectionHome from "../../../components/section-home";
import SectionProjects from "../../../components/section-projects";
import SectionStacks from "../../../components/section-stacks";
import { StackListItem } from "../../../types/stacks-list-item";
import { ProjectListItem } from "../../../types/project-list-item";
import { GetProjects, parsedObjectProjectReturn } from "../../../services/projects/get-projects-data";
import { useEffect, useState } from "react";
import { GetStacks, parsedObjectStackReturn } from "../../../services/stacks/get-stacks-data";

export default function MainPage() {
    const [projects, setProjects] = useState<ProjectListItem[]>([]);
    const [stacks, setStacks] = useState<StackListItem[]>([]);

    const handleFetch = async () => {
        const [resultProjects, resultStacks] = await Promise.all([GetProjects(), GetStacks()]);

        if (resultProjects.success && resultProjects.object) {
            const parseObj = parsedObjectProjectReturn(resultProjects.object);
            setProjects(parseObj!!);
        }
        else {
            alert(resultProjects.message);
        }

        if (resultStacks.success && resultStacks.object) {
            const parseObj = parsedObjectStackReturn(resultStacks.object);
            setStacks(parseObj);
        }
        else {
            alert(resultStacks.message);
        }
    };

    useEffect(() => {
        handleFetch();
    }, []);

    const numberItemsPerPage = process.env.REACT_APP_NUMBER_PROJECTS_PER_PAGE
        ? Number(process.env.REACT_APP_NUMBER_PROJECTS_PER_PAGE)
        : 3;

    return (
        <>
            <SectionHome />
            <SectionStacks list={stacks} />
            <SectionProjects
                list={projects}
                numberItemsPerPage={numberItemsPerPage}
            />
        </>
    );
}
