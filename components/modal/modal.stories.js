export default {
  title: "Modal",
};

export const Modal = () => `
<mac-modal>
  <span slot="title">Modal title</span>
  <p>This is the content of the modal.</p>
</mac-modal>

<button id="launch-dialog">Launch modal</button>

<script>
const button = document.getElementById('launch-dialog');
button.addEventListener('click', () => {
  document.querySelector('mac-modal').open = true;
})
</script>
`;
