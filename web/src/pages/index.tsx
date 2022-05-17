import type { NextPage } from "next";
import { useState } from "react";
import { api } from "../api";
import { Container, PredictForm } from "../components";

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = async (props: any) => {
    setIsLoading(true);
    Object.keys(props).forEach((key) => {
      if (typeof props[key] === "boolean") {
        props[key] = Number(props[key]);
      }
    });

    try {
      const result = await api.post("/predict", props);
      console.log(result);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <h2>Calcular valor do investimento</h2>
      <PredictForm isLoading={isLoading} onFinish={onFinish} />
    </Container>
  );
};

export default Home;
