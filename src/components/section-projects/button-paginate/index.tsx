import { PaginationButton, PaginationContainer } from "./styled";

interface ButtonPaginateProps {
    prevPage: React.MouseEventHandler<HTMLButtonElement>;
    nextPage: React.MouseEventHandler<HTMLButtonElement>;
    isRenderPreviousPage: () => boolean;
    isRenderNextPage: () => boolean;
}

export default function ButtonPaginate({
    prevPage,
    nextPage,
    isRenderPreviousPage,
    isRenderNextPage
}: ButtonPaginateProps) {
    return (
        <PaginationContainer>
            {isRenderPreviousPage() && (
                <PaginationButton onClick={prevPage}>Anterior</PaginationButton>
            )}
            {isRenderNextPage() && (
                <PaginationButton onClick={nextPage}>Próxima</PaginationButton>
            )}
        </PaginationContainer>
    );
}
