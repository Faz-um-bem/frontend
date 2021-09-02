import { Container } from '~/styles/404';

export default function error404() {
  return (
    <Container>
      <div>
        <img src="/imgs/error404.svg" alt="Página não encontrada" />
        <span>Erro 404. Página não encontrada!</span>
      </div>
    </Container>
  );
}
