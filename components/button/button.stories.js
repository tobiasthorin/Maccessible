export default {
  title: "Button",
  argTypes: { onClick: { action: "Clicked the button" } },
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
};
