import { FileType } from "./file-data";

export type PortfolioData = {
    id: number;
    usersNameAssociates: string[];
    keyAccess: string;
    title: string;
    firstname: string;
    lastname: string;
    githubLink: string;
    linkedinLink: string;
    email: string;
    phoneNumber: string;
    aboutMe: string;
    usersIds: number[];
    profileImage: FileType
}