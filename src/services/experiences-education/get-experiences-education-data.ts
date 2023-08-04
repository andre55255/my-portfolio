import { endpointsApi } from "../../helpers/endpoints-api";
import { formatDate } from "../../helpers/function-utils";
import { showToastError } from "../../helpers/toast-utils";
import { APIResponse } from "../../types/api-response";
import { ExperienceEducationType } from "../../types/experiences-education-service";
import { MyWorksListItem } from "../../types/my-works-list-item";
import { requestClient } from "../api/request-client";

export const GetExperiencesEducation = async (): Promise<
    APIResponse<ExperienceEducationType[]>
> => {
    try {
        const resultRequest = await requestClient<ExperienceEducationType[]>({
            url: endpointsApi.publicPages.experiencesEducation,
            method: "GET",
        });
        return resultRequest;
    } catch (err) {
        return {
            success: false,
            message:
                "Ops, falha ao executar rotina de requisição de dados de experiências educacionais. Desculpe-nos pelo transtorno",
        };
    }
};

export const parsedObjectEducationReturn = (
    data: ExperienceEducationType[]
): MyWorksListItem[] => {
    try {
        const parseObj: MyWorksListItem[] = data.map((item) => {
            return {
                title: item.educationName,
                journey: item.journeyWorkStatusName,
                enterpriseName: item.instituitionName,
                enterpriseLocalization: item.instituitionLocalization,
                enterpriseStartDate: formatDate(item.startDate),
                enterpriseEndDate: formatDate(item.endDate),
            };
        });
        return parseObj;
    } catch (err) {
        showToastError({ message: "Falha na conversão de dados de minhas experiências educacionais" });
        return [];
    }
};
