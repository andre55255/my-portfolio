import { MyWorksListItem } from "../../types/my-works-list-item";
import {
    Description,
    GroupItemEnterpriseData,
    GroupItemTitleStatus,
    Item,
    ItemInfo,
    ItemStatus,
    ItemTitle,
} from "./styled";
import { FaRegCalendarAlt, FaMapMarkerAlt, FaRegBuilding } from "react-icons/fa";

interface ItemExperienceProps {
    item: MyWorksListItem;
}

export default function ItemExperience({ item }: ItemExperienceProps) {
    return (
        <Item>
            <GroupItemTitleStatus>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemStatus>{item.journey}</ItemStatus>
            </GroupItemTitleStatus>
            <GroupItemTitleStatus>
                <GroupItemEnterpriseData>
                    <ItemInfo>
                        <FaRegBuilding />
                        <Description>{item.enterpriseName}</Description>
                    </ItemInfo>
                    <ItemInfo>
                        <FaMapMarkerAlt />
                        <Description>{item.enterpriseLocalization}</Description>
                    </ItemInfo>
                </GroupItemEnterpriseData>
                <ItemInfo>
                    <FaRegCalendarAlt />
                    <Description>
                        {item.enterpriseStartDate} - {item.enterpriseEndDate}
                    </Description>
                </ItemInfo>
            </GroupItemTitleStatus>
        </Item>
    );
}
