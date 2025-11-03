import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { action } from "storybook/actions";

import { BROCCOLI_UI_DEFAULT_TRANSITION_DURATION } from "../../constant";
import Collapse from "./index.client";

const meta = {
  title: "Components/Collapse",
  component: Collapse,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onEnter: { action: "onEnter" },
    onEntered: { action: "onEntered" },
    onExit: { action: "onExit" },
    onExited: { action: "onExited" },
  },
  args: {
    isOpen: false,
    duration: BROCCOLI_UI_DEFAULT_TRANSITION_DURATION,
    onEnter: action("onEnter"),
    onEntered: action("onEntered"),
    onExit: action("onExit"),
    onExited: action("onExited"),
  },
} satisfies Meta<typeof Collapse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
          quasi, necessitatibus deserunt totam, sequi velit voluptatem
          blanditiis et, ipsa quod ex pariatur esse! Iure, dolorum esse.
          Voluptate tempore provident quaerat.
        </p>
        <Collapse {...args}>
          <div style={{ border: "1px solid oklch(84.52% 0 0)" }}>
            <h1>This is Collapse</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
              porro sint placeat accusantium, esse sed obcaecati laudantium nemo
              a maxime illo minima iste ducimus omnis facilis. Odio voluptatem
              ea dignissimos?
            </p>
          </div>
        </Collapse>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsum
          iusto delectus facilis dolorem, quam voluptatum assumenda. Laborum
          iure ducimus fuga! Natus tempore tempora quos. A possimus neque
          perspiciatis eum.
        </p>
      </>
    );
  },
};
