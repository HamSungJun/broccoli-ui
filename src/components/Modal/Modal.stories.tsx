import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import Modal from "./index";

const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    isOpen: { control: "boolean" },
    onClose: { action: "close" },
  },
  args: { isOpen: false, onClose: fn() },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
