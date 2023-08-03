import { endpointsApi } from "../../helpers/endpoints-api";
import { APIResponse } from "../../types/api-response";
import { PortfolioData } from "../../types/portfolio-service";
import { requestClient } from "../api/request-client";

export const GetPortfolioData = async (): Promise<
    APIResponse<PortfolioData>
> => {
    try {
        const resultRequest = await requestClient<PortfolioData>({
            url: endpointsApi.publicPages.getPortfolio,
            method: "GET",
        });
        return resultRequest;
    } catch (err) {
        return {
            success: false,
            message:
                "Ops, falha ao executar rotina de requisição de dados de portfolio. Desculpe-nos pelo transtorno",
        };
    }
};
