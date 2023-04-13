import React from "react";
import Button from ".";

export default {
  component: Button,
  title: "Button",
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
  },
};

export const Hover = Template.bind({});
Hover.parameters = {
  pseudo: { hover: true },
};
Hover.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};

export const Focus = Template.bind({});
Focus.parameters = {
  pseudo: { focus: true },
};
Focus.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};
