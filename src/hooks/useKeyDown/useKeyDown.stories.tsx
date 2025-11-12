import type { Meta, StoryObj } from "@storybook/react-webpack5";

import UseKeyDownDemo from "./Demo";

const meta = {
  title: "Hooks/useKeyDown",
  component: UseKeyDownDemo,
  parameters: {
    layout: "centered",
  },
  args: {
    eventKey: "Escape",
    handler: (event) => {
      alert(`you keydowned the ${event.key} key!`);
    },
    enabled: true,
  },
} satisfies Meta<typeof UseKeyDownDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {};
