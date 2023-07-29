import { ContainerAbout, TitleAbout } from "../section-about/styled";
import { ItemList } from "../item-experience/styled";
import ItemExperience from "../item-experience";
import { MyWorksListItem } from "../../types/my-works-list-item";

interface SectionMyEducationProps {
    list: MyWorksListItem[]
}

export default function SectionMyEducation({ list }: SectionMyEducationProps) {
    return (
        <ContainerAbout>
            <TitleAbout>Educação</TitleAbout>
            <ItemList>
                {list.map((item) => (
                    <ItemExperience key={`${item.title}@${item.enterpriseEndDate}`} item={item} />
                ))}
            </ItemList>
        </ContainerAbout>
    );
}
