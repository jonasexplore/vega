import type { NextPage } from "next";
import { Container, SearchForm } from "../components";

const Home: NextPage = () => {
  return (
    <Container>
      <h2>Calcular valor do investimento</h2>
      <SearchForm />
    </Container>
  );
};

export default Home;
