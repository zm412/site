const { JSONRPCClient } = require("json-rpc-2.0");
const { ClientForms } = require("../jsonrpc.js");

let client = new ClientForms("http://127.0.0.1:8000/json-rpc/");
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector("#forms_list")) {
    let client = new ClientForms("http://127.0.0.1:8000/json-rpc/");
    client.getForms(createList);
  }
});

function createList(arr) {
  let list = document.querySelector("#forms_list");
  let ul = createEl(list, "ul");
  arr.map((el) => {
    let li = createEl(ul, "li");
    let a = createEl(li, "a", el.title);
    a.href = "/new_finst/";
    a.onclick = (e) => localStorage.setItem("show_f", el._id);
  });
  return list;
}

function createEl(par, tag, inner = null) {
  let elem = par.appendChild(document.createElement(tag));
  tag == "input" ? (elem.value = inner) : (elem.innerHTML = inner);
  return elem;
}
