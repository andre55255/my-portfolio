import { endpointsApi } from "../../helpers/endpoints-api";
import { showToastError } from "../../helpers/toast-utils";
import { APIResponse } from "../../types/api-response";
import { ProjectListItem } from "../../types/project-list-item";
import { ProjectType } from "../../types/projects-service";
import { requestClient } from "../api/request-client";

export const GetProjects = async (): Promise<
    APIResponse<ProjectType[]>
> => {
    try {
        const resultRequest = await requestClient<ProjectType[]>({
            url: endpointsApi.publicPages.projects,
            method: "GET",
        });
        return resultRequest;
    } catch (err) {
        return {
            success: false,
            message:
                "Ops, falha ao executar rotina de requisição de dados de projetos. Desculpe-nos pelo transtorno",
        };
    }
};

export const parsedObjectProjectReturn = (data: ProjectType[]): ProjectListItem[] => {
    try {
        const parseObj: ProjectListItem[] = data.map((item) => {
            return {
                title: item.title,
                description: item.description,
                linkImg: item.fileThumbImg.fileBase64,
                techs: item.techsList,
                linkPreview: item.linkPreview ? item.linkPreview!! : "",
                linkViewCode: item.linkViewCode
            }
        });
        return parseObj;
    } catch (err) {
        showToastError({ message: "Falha na conversão de retorno de projetos" });
        return [];
    }
}