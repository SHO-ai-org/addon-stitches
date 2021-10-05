import React from "react";
import { Button } from "./Button";
import { darkTheme, lightTheme } from "../stitches.config";

export default {
  title: "Example/Button",
  component: Button,
  parameters: {
    myAddonParameter: {
      values: [
        { 
          name: 'Theme 01', 
          theme: {
            className: darkTheme.className,
            selector: darkTheme.selector,
          }
        },
        { 
          name: 'Theme 02', 
          theme: {
            className: lightTheme.className,
            selector: lightTheme.selector,
          }
        },
      ]
    },
  }
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
