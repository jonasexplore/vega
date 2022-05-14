import { Button, Checkbox, Form, Input, Slider } from "antd";

type Props = {
  onFinish: (props: any) => void;
};

const { Item } = Form;

export const SearchForm = ({ onFinish }: Props) => (
  <Form
    style={{
      width: "30%",
    }}
    onFinish={onFinish}
  >
    <Item label="Memória interna (GB)" name="int_memory">
      <Slider min={16} max={512} step={16} />
    </Item>
    <Item label="Quantidade de RAM (GB)" name="ram">
      <Slider min={1} max={16} />
    </Item>
    <Item label="Nº de núcleos" name="n_cores">
      <Slider min={1} max={8} />
    </Item>
    <Item label="Clock do processador (Ghz)" name="clock_speed">
      <Slider min={0.1} max={4} step={0.1} />
    </Item>
    <Item label="Capacidade da bateria" name="battery_power">
      <Slider min={500} max={5000} />
    </Item>
    {[
      { name: "blue", label: "Bluetooth" },
      { name: "dual_sim", label: "Dual SIM" },
      { name: "four_g", label: "4G" },
      { name: "three_g", label: "3G" },
      { name: "wifi", label: "Wifi" },
      { name: "touch_screen", label: "Touch screen" },
    ].map(({ label, name }, index) => (
      <Item
        key={index}
        name={name}
        valuePropName="checked"
        initialValue={false}
      >
        <Checkbox>{label}</Checkbox>
      </Item>
    ))}
    <Button htmlType="submit" type="primary">
      Pesquisa
    </Button>
  </Form>
);
