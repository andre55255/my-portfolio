import { FileType } from "./file-data";

export type ProjectType = {
    id: number;
    techsList: string[];
    portfolioTitle: string;
    title: string;
    description: string;
    techs: string;
    linkPreview?: string | null | undefined;
    linkViewCode: string;
    portfolioId: number;
    fileThumbImg: FileType;
};
