import { useTheme } from "../../hooks/use-theme";
import { Button, Container, ErrorContent, Message, Title } from "./styles";

export default function NotFound() {
    const { themeToggler } = useTheme();

    return (
        <Container>
            <ErrorContent>
                <Title>404</Title>
                <Message>Página não encontrada</Message>
                <Button onClick={themeToggler}>Voltar à Página Inicial</Button>
            </ErrorContent>
        </Container>
    );
}
