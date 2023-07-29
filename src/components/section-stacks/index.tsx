import ContainerSectionStacks from "./container-section-stacks";
import ListStacks from "./list-stacks";
import StackItem from "./stack-item";
import { StackListItem } from "../../types/stacks-list-item";

interface AuxPropsSectionStacks {
    list: StackListItem[];
}

export default function SectionStacks({ list }: AuxPropsSectionStacks) {
    return (
        <ContainerSectionStacks>
            <h2>Minhas stacks</h2>
            <p>Tecnologias que eu trabalho frequentemente</p>
            <ListStacks>
                {list.map((item) => (
                    <StackItem key={`${item.link}@${item.name}`} colorStack={item.color}>
                        <a href={item.link}>{item.icon}</a>
                        <span>{item.name}</span>
                    </StackItem>
                ))}
            </ListStacks>
        </ContainerSectionStacks>
    );
}
