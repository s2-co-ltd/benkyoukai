const state = {
  count: 0
}

const increment = () => {
  state.count = state.count + 1;

  document.getElementById("count").innerText = state.count;
}