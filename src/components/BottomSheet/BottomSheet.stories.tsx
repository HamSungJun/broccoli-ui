import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { action } from "storybook/actions";

import BottomSheet from "./index.client";

const meta = {
  title: "Components/BottomSheet",
  component: BottomSheet,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    isOpen: true,
    duration: 250,
    closeOnLayerClick: true,
    closeOnEscapeKeyDown: true,
    onClose: action("onClose"),
  },
} satisfies Meta<typeof BottomSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLayer: Story = {
  render: (args) => {
    return (
      <BottomSheet {...args}>
        <BottomSheet.Layer></BottomSheet.Layer>
        <BottomSheet.Panel>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            doloremque ex velit nobis, cumque omnis quod dolorem porro
            exercitationem fuga eligendi? Alias non explicabo vitae officiis
            dolor quos et? Libero.
          </p>
        </BottomSheet.Panel>
      </BottomSheet>
    );
  },
};

export const WithoutLayer: Story = {
  render: (args) => {
    return (
      <BottomSheet {...args}>
        <BottomSheet.Panel>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            doloremque ex velit nobis, cumque omnis quod dolorem porro
            exercitationem fuga eligendi? Alias non explicabo vitae officiis
            dolor quos et? Libero.
          </p>
        </BottomSheet.Panel>
      </BottomSheet>
    );
  },
};

export const NoTransition: Story = {
  args: {
    duration: 0,
  },
  render: (args) => {
    return (
      <BottomSheet {...args}>
        <BottomSheet.Layer />
        <BottomSheet.Panel>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            doloremque ex velit nobis, cumque omnis quod dolorem porro
            exercitationem fuga eligendi? Alias non explicabo vitae officiis
            dolor quos et? Libero.
          </p>
        </BottomSheet.Panel>
      </BottomSheet>
    );
  },
};
