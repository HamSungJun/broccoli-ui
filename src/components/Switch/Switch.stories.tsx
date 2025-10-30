import useSwitch from "../../hooks/useSwitch/index.client";

import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { action } from "storybook/actions";

import Switch from "./index.client";

const meta = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    classes: { control: "object" },
    on: { control: "boolean" },
    onChange: { control: false },
    disabled: { control: "boolean" },
  },
  args: {
    classes: undefined,
    on: false,
    onChange: action("onChange"),
    disabled: false,
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <Switch {...args}>
        <Switch.Track>
          <Switch.Thumb />
        </Switch.Track>
      </Switch>
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => {
    return (
      <Switch {...args}>
        <Switch.Track>
          <Switch.Thumb />
        </Switch.Track>
      </Switch>
    );
  },
};

export const WithLeftLabel: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: (args) => {
    const { isOn, toggle } = useSwitch({
      initialValue: args.on,
    });

    return (
      <Switch {...args} on={isOn} onChange={toggle}>
        <p style={{ marginRight: "10px" }}>🍎 Left Label</p>
        <Switch.Track>
          <Switch.Thumb />
        </Switch.Track>
      </Switch>
    );
  },
};

export const WithRightLabel: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: (args) => {
    const { isOn, toggle } = useSwitch({
      initialValue: args.on,
    });

    return (
      <Switch {...args} on={isOn} onChange={toggle}>
        <Switch.Track>
          <Switch.Thumb />
        </Switch.Track>
        <p style={{ marginLeft: "10px" }}>🍌 Right Label</p>
      </Switch>
    );
  },
};
