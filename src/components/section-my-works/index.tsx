import { ContainerAbout, TitleAbout } from "../section-about/styled";
import { ItemList } from "../item-experience/styled";
import ItemExperience from "../item-experience";
import { MyWorksListItem } from "../../types/my-works-list-item";

interface SectionMyWorksProps {
    list: MyWorksListItem[]
}

export default function SectionMyWorks({ list }: SectionMyWorksProps) {
    return (
        <ContainerAbout>
            <TitleAbout>Minhas experiências</TitleAbout>
            <ItemList>
                {list.map((item) => (
                    <ItemExperience key={`${item.title}@${item.enterpriseEndDate}`} item={item} />
                ))}
            </ItemList>
        </ContainerAbout>
    );
}
