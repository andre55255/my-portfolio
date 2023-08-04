import { endpointsApi } from "../../helpers/endpoints-api";
import { formatDate } from "../../helpers/function-utils";
import { showToastError } from "../../helpers/toast-utils";
import { APIResponse } from "../../types/api-response";
import { ExperienceWorkType } from "../../types/experiences-work-service";
import { MyWorksListItem } from "../../types/my-works-list-item";
import { requestClient } from "../api/request-client";

export const GetExperiencesWork = async (): Promise<
    APIResponse<ExperienceWorkType[]>
> => {
    try {
        const resultRequest = await requestClient<ExperienceWorkType[]>({
            url: endpointsApi.publicPages.experiencesWork,
            method: "GET",
        });
        return resultRequest;
    } catch (err) {
        return {
            success: false,
            message:
                "Ops, falha ao executar rotina de requisição de dados de experiências profissionais. Desculpe-nos pelo transtorno",
        };
    }
};

export const parsedObjectWorkReturn = (data: ExperienceWorkType[]): MyWorksListItem[] => {
    try {
        const parseObj: MyWorksListItem[] = data.map((item) => {
            return {
                title: item.officeName,
                journey: item.journeyWorkStatusName,
                enterpriseName: item.companyName,
                enterpriseLocalization: item.companyLocalization,
                enterpriseStartDate: formatDate(item.startDate),
                enterpriseEndDate: formatDate(item.endDate)
            }
        });
        return parseObj;
    } catch (err) {
        showToastError({ message: "Falha na conversão de dados de minhas experiências profissionais" });
        return [];
    }
}