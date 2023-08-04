import ContainerSectionStacks from "./container-section-stacks";
import ListStacks from "./list-stacks";
import StackItem from "./stack-item";
import { StackListItem } from "../../types/stacks-list-item";
import { routesAnchor } from "../../helpers/routes-pages";

interface AuxPropsSectionStacks {
    list: StackListItem[];
}

export default function SectionStacks({ list }: AuxPropsSectionStacks) {
    return (
        <ContainerSectionStacks id={routesAnchor.stacks.id}>
            <h2>Minhas stacks</h2>
            <p>Tecnologias que eu trabalho frequentemente</p>
            <ListStacks>
                {list.map((item) => (
                    <StackItem
                        key={`${item.link}@${item.name}`}
                        colorStack={item.color}
                    >
                        <a href={item.link} target="_blank" rel="noreferrer">
                            <img src={item.linkImg} alt={item.name} />
                        </a>
                        <span>{item.name}</span>
                    </StackItem>
                ))}
            </ListStacks>
        </ContainerSectionStacks>
    );
}
