import type { Meta, StoryObj } from "@storybook/react-webpack5";

import UseBodyScrollLockDemo from "./Demo";

const meta = {
  title: "Hooks/useBodyScrollLock",
  component: UseBodyScrollLockDemo,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof UseBodyScrollLockDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {};
