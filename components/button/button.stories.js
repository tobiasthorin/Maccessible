import { action } from "@storybook/addon-actions";

export default {
  title: "Button",
};

const Template = (args) => {
  const macButton = document.createElement("mac-button");

  macButton.innerHTML = args.text;
  macButton.onclick = args.onClick;

  return macButton;
};

export const Button = Template.bind({});
Button.args = {
  text: "MacButton",
  onClick: action("Clicked the button"),
};
