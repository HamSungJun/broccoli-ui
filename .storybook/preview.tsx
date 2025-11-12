import React from "react";

import GlobalUIObserver from "../src/components/GlobalUIObserver/index.client";

import type { Preview } from "@storybook/react-webpack5";

import "../src/styles/index.css";

const withProvider = (Story) => {
  return (
    <GlobalUIObserver>
      <Story />
    </GlobalUIObserver>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withProvider],
};

export default preview;
