import { createContext, ReactNode, useState, useEffect } from "react";
import { PortfolioData } from "../types/portfolio-service";
import { GetPortfolioData } from "../services/portfolio/get-portfolio-data";
import { showToastError, showToastSuccess } from "../helpers/toast-utils";

type PortfolioDataContextProps = {
    data?: PortfolioData;
    setData?: React.Dispatch<React.SetStateAction<PortfolioData | undefined>>;
};

export const PortfolioDataContext = createContext<PortfolioDataContextProps>(
    {}
);

type AuthProviderProps = {
    children: ReactNode;
};

export const PortfolioDataProvider = ({ children }: AuthProviderProps) => {
    const [portfolioData, setPortfolioData] = useState<PortfolioData>();

    useEffect(() => {
        GetPortfolioData()
            .then((data) => {
                if (!data.success) {
                    showToastError({ message: data.message });
                    return;
                }
                setPortfolioData(data.object);
            })
            .catch((err) =>
                showToastError({
                    message: `Erro na requisição de pegar dados de portfolio`,
                })
            );
    }, []);

    return (
        <PortfolioDataContext.Provider
            value={{ data: portfolioData, setData: setPortfolioData }}
        >
            {children}
        </PortfolioDataContext.Provider>
    );
};
