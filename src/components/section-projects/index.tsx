import { ProjectListItem } from "../../types/project-list-item";
import ContainerSectionStacks from "../section-stacks/container-section-stacks";
import ListStacks from "../section-stacks/list-stacks";
import ButtonPaginate from "./button-paginate";
import CardProject from "./card-project";
import { useState } from "react";

interface SectionProjectsProps {
    list: ProjectListItem[];
    numberItemsPerPage: number;
}

export default function SectionProjects({
    list,
    numberItemsPerPage,
}: SectionProjectsProps) {
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * numberItemsPerPage;
    const indexOfFirstItem = indexOfLastItem - numberItemsPerPage;

    const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);

    const nextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const isRenderNextPage = (): boolean => {
        const res = indexOfLastItem >= list.length;
        return !res;
    }

    const isRenderPreviousPage = (): boolean => {
        const res = currentPage !== 1;
        return res;
    }

    return (
        <>
            <ContainerSectionStacks>
                <h2>Projetos</h2>
                <p>Coisas que já fiz até agora</p>
                <ListStacks>
                    {currentItems.map((item, index) => (
                        <CardProject
                            key={`${index}@${item.title}@${item.linkViewCode}`}
                            item={item}
                        />
                    ))}
                </ListStacks>
            </ContainerSectionStacks>
            <ButtonPaginate
                prevPage={prevPage}
                nextPage={nextPage}
                isRenderNextPage={isRenderNextPage}
                isRenderPreviousPage={isRenderPreviousPage}
            />
        </>
    );
}
