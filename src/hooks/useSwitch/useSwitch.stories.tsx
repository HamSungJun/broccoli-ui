import type { Meta, StoryObj } from "@storybook/react-webpack5";
import UseSwitchDemo from "./Demo";

const meta = {
  title: "Hooks/useSwitch",
  component: UseSwitchDemo,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    initialValue: { control: "boolean" },
  },
  args: { initialValue: false },
} satisfies Meta<typeof UseSwitchDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {};
