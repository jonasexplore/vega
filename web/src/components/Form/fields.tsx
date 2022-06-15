export type SliderFieldProps = {
  label: string;
  name: string;
  min: number;
  max: number;
  step: number;
};

export type CheckboxFieldProps = {
  label: string;
  name: string;
};

export const screenFields: SliderFieldProps[] = [
  {
    label: "Comprimento da tela (px)",
    name: "px_height",
    min: 64,
    max: 3840,
    step: 16,
  },
  {
    label: "Largura da tela (px)",
    name: "px_width",
    min: 64,
    max: 2160,
    step: 16,
  },
];

export const memoriesFields: SliderFieldProps[] = [
  {
    label: "Memória interna (GB)",
    name: "int_memory",
    min: 16,
    max: 512,
    step: 16,
  },
  {
    label: "Quantidade de RAM (MB)",
    name: "ram",
    min: 512,
    max: 16384,
    step: 512,
  },
];

export const bateryFields: SliderFieldProps[] = [
  {
    label: "Capacidade da bateria",
    name: "battery_power",
    min: 500,
    max: 5000,
    step: 1,
  },
  {
    label: "Tempo de bateria (h)",
    name: "talk_time",
    min: 1,
    max: 72,
    step: 1,
  },
];

export const processorFields: SliderFieldProps[] = [
  {
    label: "Nº de núcleos",
    name: "n_cores",
    min: 1,
    max: 8,
    step: 1,
  },
  {
    label: "Clock do processador (Ghz)",
    name: "clock_speed",
    min: 0.1,
    max: 4,
    step: 0.1,
  },
];

export const cameraFields: SliderFieldProps[] = [
  {
    label: "Câmera traseira (MP)",
    name: "pc",
    min: 1,
    max: 120,
    step: 1,
  },
];

export const phisicalFields: SliderFieldProps[] = [
  {
    label: "Comprimento do smartphone (cm)",
    name: "sc_h",
    min: 1,
    max: 100,
    step: 1,
  },
  {
    label: "Largura do smartphone (cm)",
    name: "sc_w",
    min: 1,
    max: 100,
    step: 1,
  },
  {
    label: "Profundidade do smartphone (cm)",
    name: "m_dep",
    min: 0.1,
    max: 2,
    step: 0.1,
  },
  {
    label: "Peso (g)",
    name: "mobile_wt",
    min: 1,
    max: 1000,
    step: 1,
  },
];

export const checkboxFields: CheckboxFieldProps[] = [
  { name: "blue", label: "Bluetooth" },
  { name: "dual_sim", label: "Dual SIM" },
  { name: "four_g", label: "4G" },
  { name: "three_g", label: "3G" },
  { name: "wifi", label: "Wifi" },
  { name: "touch_screen", label: "Touch screen" },
  { name: "fc", label: "Câmera frontal" },
];

type fieldsProps = {
  header: string;
  type: string;
  fields: SliderFieldProps[] | CheckboxFieldProps[];
};

export const fields: fieldsProps[] = [
  {
    header: "Tela",
    type: "slider",
    fields: screenFields,
  },
  {
    header: "Memória",
    type: "slider",
    fields: memoriesFields,
  },
  {
    header: "Bateria",
    type: "slider",
    fields: bateryFields,
  },
  {
    header: "Processador",
    type: "slider",
    fields: processorFields,
  },
  {
    header: "Câmera",
    type: "slider",
    fields: cameraFields,
  },
  {
    header: "Características Físicas",
    type: "slider",
    fields: phisicalFields,
  },
  {
    header: "Outros",
    type: "checkbox",
    fields: checkboxFields,
  },
];
