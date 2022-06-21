import type { NextPage } from "next";
import { useState } from "react";
import { api } from "../api";
import { Container, PredictForm } from "../components";
import { CardResult } from "../components/Card";

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);

  const onReset = () => {
    setShowResult(false);
  };

  const onFinish = async (props: any) => {
    console.log(props);

    setIsLoading(true);
    Object.keys(props).forEach((key) => {
      if (typeof props[key] === "boolean") {
        props[key] = Number(props[key]);
      }
    });

    try {
      const {
        data: [response],
      } = await api.post("/predict", props);
      setResult(response);
      setShowResult(true);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <h2>Calcular valor do investimento</h2>
      <div
        style={{
          width: "50%",
          marginBottom: 32,
        }}
      >
        <PredictForm
          isLoading={isLoading}
          onFinish={onFinish}
          onReset={onReset}
        />
        {showResult && <CardResult result={result} />}
      </div>
    </Container>
  );
};

export default Home;
