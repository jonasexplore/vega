import { Button, Form, Input } from "antd";

const { Item } = Form;

export const SearchForm = () => (
  <Form>
    <Item>
      <Input placeholder="Armazenamento" />
    </Item>
    <Item>
      <Input placeholder="Memória RAM" />
    </Item>
    <Item>
      <Input placeholder="Número de Núcleos" />
    </Item>
    <Item>
      <Input placeholder="Velocidade do Processador" />
    </Item>
    <Button type="primary">Pesquisa</Button>
  </Form>
);
