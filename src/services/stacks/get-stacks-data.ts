import { endpointsApi } from "../../helpers/endpoints-api";
import { APIResponse } from "../../types/api-response";
import { StackDataType } from "../../types/stack-data";
import { StackListItem } from "../../types/stacks-list-item";
import { requestClient } from "../api/request-client";

export const GetStacks = async (): Promise<
    APIResponse<StackDataType[]>
> => {
    try {
        const resultRequest = await requestClient<StackDataType[]>({
            url: endpointsApi.publicPages.stacks,
            method: "GET",
        });
        return resultRequest;
    } catch (err) {
        return {
            success: false,
            message:
                "Ops, falha ao executar rotina de requisição de dados de stacks. Desculpe-nos pelo transtorno",
        };
    }
};

export const parsedObjectStackReturn = (data: StackDataType[]): StackListItem[] => {
    try {
        const parseObj: StackListItem[] = data.map((item) => {
            return {
                name: item.name,
                link: item.link,
                linkImg: item.image.fileBase64,
                color: item.color
            }
        });
        return parseObj;
    } catch (err) {
        console.log("Falha na conversão de dados" + err);
        return [];
    }
}