let state = [];

/* この関数は、オブジェクトの配列を受け取り、それらを五十音順で並べ替えます。
           期待したオブジェクトはこの感じです。
            [
                {
                    "original": "きしだ"
                },
                {
                    "original": "あべ"
                }
            ]
        */
const aiueoOrder = require('./aiueo.js')

const updateState = async function updateState(newState) {
  state = await aiueoOrder([...newState]);
  render(state);
};

const render = function render(state) {
  const list = document.getElementById("list");
  list.innerHTML = "";

  state.forEach(function (itemText) {
    const listItem = document.createElement("li");
    listItem.innerText = itemText.original;
    list.appendChild(listItem);
  });
};

document.getElementById("new-word").addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    updateState([...[{ original: e.target.value, converted: "" }], ...state]);
    document.getElementById("new-word").value = "";
  }
});
document.getElementById("add").addEventListener("click", function (e) {
  const newWord = document.getElementById("new-word");
  updateState([...[{ original: newWord.value, converted: "" }], ...state]);
  newWord.value = "";
});
