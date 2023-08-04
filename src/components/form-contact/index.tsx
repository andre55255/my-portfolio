import { FormikHelpers, useFormik } from "formik";
import { FormContactDataType } from "../../types/form-contact-data";
import InputTextFile from "../form/input-text-file";
import InputTextarea from "../form/input-textarea";
import { FormSectionContact } from "../section-form-contact/styled";
import { FormContactSchema } from "../../yup-config/form-contact-schema";
import ButtonSubmit from "../form/button-submit";
import Loading from "../loading";
import { convertToBase64 } from "../../helpers/function-utils";
import { MAX_SIZE_FILE_UPLOAD_IN_BYTES } from "../../helpers/constants";
import { showToastError } from "../../helpers/toast-utils";

type FormContactProps = {
    isFetching: boolean;
    handleSubmit: (
        values: FormContactDataType,
        formikHelpers: FormikHelpers<FormContactDataType>
    ) => void | Promise<any>;
};

export default function FormContact({
    isFetching,
    handleSubmit,
}: FormContactProps) {
    const initialValues: FormContactDataType = {
        contact: "",
        message: "",
        name: "",
        file: undefined,
    };

    const formik = useFormik<FormContactDataType>({
        initialValues,
        onSubmit: handleSubmit,
        validationSchema: FormContactSchema,
    });

    const handleFileChange = async (
        event: React.ChangeEvent<HTMLInputElement>,
        setFieldValue: Function
    ) => {
        const file = event.target.files?.[0];
        if (file && file.size > MAX_SIZE_FILE_UPLOAD_IN_BYTES) {
            showToastError({
                message: "O arquivo enviado não pode ultrapassar 30mb",
            });
            return;
        }
        if (file) {
            const base64 = await convertToBase64(file);
            setFieldValue("file", base64);
        }
    };

    return (
        <FormSectionContact autoComplete="off" onSubmit={formik.handleSubmit}>
            <InputTextFile
                label="Nome"
                name="name"
                type="text"
                maxLength={64}
                value={formik.values.name}
                onChange={formik.handleChange}
                isInvalid={
                    formik.touched.name && formik.errors.name ? true : false
                }
                errorMessage={formik.errors.name}
            />
            <InputTextFile
                name="contact"
                type="text"
                maxLength={64}
                label="Contato"
                onChange={formik.handleChange}
                value={formik.values.contact}
                isInvalid={
                    formik.touched.contact && formik.errors.contact
                        ? true
                        : false
                }
                errorMessage={formik.errors.contact}
            />
            <InputTextarea
                name="message"
                label="Mensagem"
                maxLength={1024}
                rows={5}
                onChange={formik.handleChange}
                value={formik.values.message}
                isInvalid={
                    formik.touched.message && formik.errors.message
                        ? true
                        : false
                }
                errorMessage={formik.errors.message}
            />
            <InputTextFile
                label="Contato"
                name="file"
                type="file"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleFileChange(e, formik.setFieldValue)
                }
                value={formik.values.fileAttachment}
                isInvalid={
                    formik.touched.fileAttachment &&
                    formik.errors.fileAttachment
                        ? true
                        : false
                }
                errorMessage={formik.errors.fileAttachment}
            />
            <Loading isFetching={isFetching} />
            <ButtonSubmit label="Enviar" />
        </FormSectionContact>
    );
}
