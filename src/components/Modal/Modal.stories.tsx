import useSwitch from "../../hooks/useSwitch/index.client";

import type { Meta, StoryObj } from "@storybook/react-webpack5";

import Modal from "./index.client";

const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    isOpen: {
      control: { type: "boolean" },
    },
    duration: {
      control: { type: "number" },
    },
    closeOnLayerClick: {
      control: { type: "boolean" },
    },
    closeOnEscapeKeyDown: {
      control: { type: "boolean" },
    },
    onEntered: {
      control: false,
    },
    onExited: {
      control: false,
    },
    onClose: {
      control: false,
    },
  },
  args: {
    isOpen: false,
    duration: 250,
    closeOnLayerClick: true,
    closeOnEscapeKeyDown: true,
    onEntered: undefined,
    onExited: undefined,
    onClose: undefined,
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  render: (args) => {
    const {
      isOn: isOpen,
      setOn,
      setOff,
    } = useSwitch({ initialValue: args.isOpen });

    return (
      <>
        <div>
          <button onClick={setOn}>Open Modal</button>
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={index}
              style={{ height: "200px", backgroundColor: "lightyellow" }}
            >
              {index}
            </div>
          ))}
        </div>
        <Modal {...args} isOpen={isOpen} onClose={setOff}>
          <div>This is a Modal</div>
        </Modal>
      </>
    );
  },
};

export const Nested: Story = {
  render: (args) => {
    const { isOn: isOpen, setOn, setOff } = useSwitch({ initialValue: false });

    const {
      isOn: isOpen2,
      setOn: setOn2,
      setOff: setOff2,
    } = useSwitch({ initialValue: false });

    return (
      <>
        <div>
          <button onClick={setOn}>Open First Modal</button>
        </div>
        <Modal {...args} isOpen={isOpen} onClose={setOff}>
          <div>
            <p>This is a First Modal</p>
            <button onClick={setOn2}>Open Second Modal</button>
          </div>
        </Modal>
        <Modal {...args} isOpen={isOpen2} onClose={setOff2}>
          <div>This is a Second Modal</div>
        </Modal>
      </>
    );
  },
};

export const NoTransition: Story = {
  args: {
    duration: 0,
  },
  render: (args) => {
    const {
      isOn: isOpen,
      setOn,
      setOff,
    } = useSwitch({ initialValue: args.isOpen });

    return (
      <>
        <div>
          <button onClick={setOn}>Open Modal</button>
        </div>
        <Modal {...args} isOpen={isOpen} onClose={setOff}>
          <div>This is a Modal</div>
        </Modal>
      </>
    );
  },
};
