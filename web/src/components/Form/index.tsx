import { Button, Checkbox, Form, Slider } from "antd";
import { For } from "react-extras";
import {
  CheckboxFieldProps,
  checkboxFields,
  SliderFieldProps,
  sliderFields,
} from "./fields";

type Props = {
  isLoading: boolean;
  onFinish: (props: any) => void;
};

const { Item } = Form;

export const PredictForm = ({ isLoading, onFinish }: Props) => {
  const renderSlideFields = (
    { label, max, min, name, step }: SliderFieldProps,
    index: number
  ) => (
    <Item key={index} label={label} name={name}>
      <Slider min={min} max={max} step={step} />
    </Item>
  );

  const renderCheckboxFields = (
    { label, name }: CheckboxFieldProps,
    index: number
  ) => (
    <Item key={index} name={name} valuePropName="checked" initialValue={false}>
      <Checkbox>{label}</Checkbox>
    </Item>
  );

  return (
    <Form
      style={{
        width: "30%",
        marginBottom: 32,
      }}
      onFinish={onFinish}
    >
      <For of={sliderFields} render={renderSlideFields} />
      <For of={checkboxFields} render={renderCheckboxFields} />

      <Button htmlType="submit" type="primary" loading={isLoading}>
        Pesquisa
      </Button>
    </Form>
  );
};
