import { Button, Checkbox, Collapse, Form, Input, Slider } from "antd";
import { useState } from "react";
import { CheckboxFieldProps, SliderFieldProps, fields } from "./fields";

type Props = {
  isLoading: boolean;
  onFinish: (props: any) => void;
  onReset: () => void;
};

const { Item } = Form;
const { Panel } = Collapse;

const inicialValues = {
  px_height: "",
  px_width: "",
  int_memory: "",
  ram: "",
  battery_power: "",
  talk_time: "",
  n_cores: "",
  clock_speed: "",
  pc: "",
  sc_h: "",
  sc_w: "",
  m_dep: "",
  mobile_wt: "",
  blue: false,
  dual_sim: false,
  four_g: false,
  three_g: false,
  wifi: false,
  touch_screen: false,
  fc: false,
} as any;

export const PredictForm = ({ isLoading, onFinish, onReset }: Props) => {
  const [values, setValues] = useState(inicialValues);
  const [activeKey, setActiveKey] = useState([] as any);

  const onChange = (value: number | boolean, name: string) => {
    setValues({ ...values, [name]: value });
  };

  const renderSlideFields = (
    { label, max, min, name, step }: SliderFieldProps,
    index: number
  ) => (
    <div>
      <Item style={{ flex: 1 }} key={index} label={label} name={name} required>
        <Slider
          min={min}
          max={max}
          step={step}
          onChange={(value) => onChange(value, name)}
          value={values[name] ?? ""}
        />
        <Input
          value={values[name] ?? ""}
          onChange={(event) => onChange(Number(event.target.value), name)}
          type="number"
          min={min}
          max={max}
          step={step}
          required
        />
      </Item>
    </div>
  );

  const renderCheckboxFields = (
    { label, name }: CheckboxFieldProps,
    index: number
  ) => (
    <Item key={index} name={name} valuePropName="checked" initialValue={false}>
      <Checkbox
        onChange={(e) => onChange(e.target.checked, name)}
        checked={values[name]}
      >
        {label}
      </Checkbox>
    </Item>
  );

  return (
    <Form
      onFinish={() => {
        onFinish(values);
      }}
    >
      <Collapse
        activeKey={activeKey}
        onChange={(key) => {
          setActiveKey(key);
        }}
      >
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
        onClick={() => setActiveKey(Array.from(Array(fields.length).keys()))}
        style={{
          marginTop: 16,
        }}
      >
        Pesquisa
      </Button>

      <Button
        htmlType="reset"
        type="default"
        onClick={() => {
          setActiveKey([]);
          setValues(inicialValues);
          onReset();
        }}
        style={{
          marginLeft: 8,
          marginTop: 16,
        }}
      >
        Limpar
      </Button>
    </Form>
  );
};
