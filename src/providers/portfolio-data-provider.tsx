import {
    createContext,
    ReactNode,
    useState,
    useEffect,
} from "react";
import { PortfolioData } from "../types/portfolio-service";
import { GetPortfolioData } from "../services/portfolio/get-portfolio-data";

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
                    alert(data.message);
                    return;
                }
                console.log(data.object);
                setPortfolioData(data.object);
            })
            .catch((err) =>
                alert("Erro na requisição de get portfolio: " + err)
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
