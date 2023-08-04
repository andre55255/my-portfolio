import { APIResponse } from './../../types/api-response';
import { FormContactDataApiType, FormContactDataType } from "../../types/form-contact-data";
import { requestClient } from '../api/request-client';
import { endpointsApi } from '../../helpers/endpoints-api';

export const SubmitFormContactData = async (data: FormContactDataType): Promise<APIResponse<any>> =>  {
    try {
        const dataParsed: FormContactDataApiType = {
            name: data.name,
            contact: data.contact,
            message: data.message,
            fileAttachment: data.file ? {
                fileBase64: data.file!!,
                name: "contato_anexo"
            } : null
        };

        const result = await requestClient({
            url: endpointsApi.publicPages.contactDataSave,
            method: "POST",
            data: dataParsed
        });
        return result;
    } catch (err) {
        return {
            success: false,
            message: "Ops, houve uma falha na submissão do formulário. Sentimos muito pelo transtorno!"
        };
    }
}