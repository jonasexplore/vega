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

export const sliderFields: SliderFieldProps[] = [
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
  {
    label: "Capacidade da bateria",
    name: "battery_power",
    min: 500,
    max: 5000,
    step: 1,
  },
  {
    label: "Comprimento da tela (px)",
    name: "px_width",
    min: 64,
    max: 3840,
    step: 16,
  },
  {
    label: "Altura da tela (px)",
    name: "px_height",
    min: 64,
    max: 2160,
    step: 16,
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
