export default {
  title: "Button",
};

const Template = (args) => {
  console.log(args.onClick.toString());
  return `
    <script>
      ${args.onClick.toString()}
    </script>
    <mac-button onClick="onClick()">${args.text}</mac-button>
  `;
};

export const Button = Template.bind({});
Button.args = {
  text: "MacButton",
  onClick: function () {
    console.log("Button clicked!");
  },
};
