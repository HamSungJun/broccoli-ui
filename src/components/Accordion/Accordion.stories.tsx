import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { action } from "storybook/actions";

import { BROCCOLI_UI_DEFAULT_TRANSITION_DURATION } from "../../constant";
import Accordion, { type AccordionProps } from "./index.client";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  args: {
    isOpen: false,
    disabled: false,
    duration: BROCCOLI_UI_DEFAULT_TRANSITION_DURATION,
    onEnter: action("onEnter"),
    onEntered: action("onEntered"),
    onExit: action("onExit"),
    onExited: action("onExited"),
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: AccordionProps) => {
  return (
    <>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
        quasi, necessitatibus deserunt totam, sequi velit voluptatem blanditiis
        et, ipsa quod ex pariatur esse! Iure, dolorum esse. Voluptate tempore
        provident quaerat.
      </p>
      <Accordion {...args}>
        <Accordion.Head>Accordion</Accordion.Head>
        <Accordion.Body>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            corrupti, iste recusandae quod ipsa consectetur fugit quaerat
            expedita. Corporis amet laudantium atque dicta aperiam consectetur
            in? Repellendus ab quibusdam expedita.
          </p>
        </Accordion.Body>
      </Accordion>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsum
        iusto delectus facilis dolorem, quam voluptatum assumenda. Laborum iure
        ducimus fuga! Natus tempore tempora quos. A possimus neque perspiciatis
        eum.
      </p>
    </>
  );
};

export const Default: Story = {
  render: (args) => {
    return <Template {...args} />;
  },
};

export const Disabled: Story = {
  args: {
    isOpen: true,
    disabled: true,
  },
  render: (args) => {
    return <Template {...args} />;
  },
};
