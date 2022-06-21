import { Card } from "antd";

type CardResult = {
  result: string;
};

export const CardResult = ({ result }: CardResult) => {
  return (
    <Card
      style={{
        marginTop: 16,
      }}
    >
      <p>
        De acordo com os testes, esse modelo de smartphone pertence ao grupo{" "}
        <strong>{result}/3.</strong>
      </p>
    </Card>
  );
};
