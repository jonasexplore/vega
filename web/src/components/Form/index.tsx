import { Button, Checkbox, Collapse, Form, Slider } from "antd";
import { CheckboxFieldProps, SliderFieldProps, fields } from "./fields";

type Props = {
  isLoading: boolean;
  onFinish: (props: any) => void;
};

const { Item } = Form;
const { Panel } = Collapse;

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
        width: "50%",
        marginBottom: 32,
      }}
      onFinish={onFinish}
    >
      <Collapse>
        {fields.map(({ fields, header, type }, index) => (
          <Panel
            header={header}
            key={index}
            style={{
              width: "100%",
            }}
          >
            <div>
              {fields.map((field, index) =>
                type === "slider"
                  ? renderSlideFields(field as SliderFieldProps, index)
                  : renderCheckboxFields(field as CheckboxFieldProps, index)
              )}
            </div>
          </Panel>
        ))}
      </Collapse>

      <Button
        htmlType="submit"
        type="primary"
        loading={isLoading}
        style={{
          marginTop: 16,
        }}
      >
        Pesquisa
      </Button>
    </Form>
  );
};
