import SectionAbout from "../../../components/section-about";
import SectionMyEducation from "../../../components/section-my-education";
import SectionMyWorks from "../../../components/section-my-works";
import { GetExperiencesEducation, parsedObjectEducationReturn } from "../../../services/experiences-education/get-experiences-education-data";
import { GetExperiencesWork, parsedObjectWorkReturn } from "../../../services/experiences-work/get-experiences-work-data";
import { MyWorksListItem } from "../../../types/my-works-list-item";
import { useState, useEffect } from "react";

export default function AboutPage() {
    const [works, setWorks] = useState<MyWorksListItem[]>([]);
    const [educations, setEducations] = useState<MyWorksListItem[]>([]);

    const handleFetch = async () => {
        const [resultExperienceWorks, resultExperienceEducation] = await Promise.all([
            GetExperiencesWork(),
            GetExperiencesEducation()
        ]);

        if (resultExperienceWorks.success && resultExperienceWorks.object) {
            const parseObj = parsedObjectWorkReturn(resultExperienceWorks.object!!);
            setWorks(parseObj);
        }
        else {
            alert(resultExperienceWorks.message);
        }

        if (resultExperienceEducation.success && resultExperienceEducation.object) {
            const parseObj = parsedObjectEducationReturn(resultExperienceEducation.object!!);
            setEducations(parseObj);
        }
        else {
            alert(resultExperienceEducation.message);
        }
    };

    useEffect(() => {
        handleFetch();
    }, []);

    return (
        <>
            <SectionAbout />
            <SectionMyWorks list={works} />
            <SectionMyEducation list={educations} />
        </>
    );
}
