import { SubmitFormContactData } from "../../services/form-contact-data/submit-form-contact-data";
import { FormContactDataType } from "../../types/form-contact-data";
import FormContact from "../form-contact";
import { ContainerAbout, TitleAbout } from "../section-about/styled";
import { useState } from "react";

export default function SectionFormContact() {
    const [isFetching, setIsFetching] = useState<boolean>(false);

    const handleSubmit = async (data: FormContactDataType) => {
        setIsFetching(true);
        const result = await SubmitFormContactData(data);
        if (result.success) {
            alert(result.message);
        } else {
            alert(result.message);
        }
        setIsFetching(false);
    };

    return (
        <ContainerAbout>
            <TitleAbout>Entre em contato</TitleAbout>
            <FormContact handleSubmit={handleSubmit} isFetching={isFetching} />
        </ContainerAbout>
    );
}
