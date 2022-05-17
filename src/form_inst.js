const { ClientForms } = require("../jsonrpc.js");

let url =
  process.env.NODE_ENV == "production"
    ? "https://datazm412.herokuapp.com/json-rpc"
    : "http://localhost:3000/json-rpc";
console.log(url, "url");

let client = new ClientForms(url);

document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector("#form_inst")) {
    let id = localStorage.getItem("show_f");
    client.getForm(id, create_form);
  }
});

function createEl(par, tag, inner = null) {
  let elem = par.appendChild(document.createElement(tag));
  tag == "input" ? (elem.value = inner) : (elem.innerHTML = inner);
  return elem;
}

function collectInfo() {
  let obj = {};

  //          obj[newQuest.value].opts = [...newDiv.children].map((el) => el.value);
}

function create_form(obj) {
  let par = document.querySelector("#form_inst");
  let title = createEl(par, "h4", obj[0].form.title);
  let form = createEl(par, "form");
  form.id = "create_inst";
  form.dataset.id = obj[0].form._id;

  let htmlform = obj.map((el) => {
    let str = ``;
    title;
    str += `<p>${el.question} (${el.description})</p>`;
    if (el.question_type == "input") {
      str += `<input name=${el._id} class="quest">`;
    } else if (el.question_type == "textarea") {
      str += `<textarea name=${el._id} class="quest"></textarea>`;
    } else if (el.question_type == "select") {
      str +=
        `<select name=${el._id} class="quest">` +
        el.opts.reduce(
          (str, k, i) => str + `<option value=${i}>${k}</option>`,
          ""
        ) +
        "</select>";
    }
    return str;
  });
  form.innerHTML = htmlform;

  let button_sbm = createEl(form, "button", "Send");

  form.onsubmit = (e) => {
    let collection = onsubmitForm(e);
    client.saveFormInst(collection);
  };
}

function onsubmitForm(e) {
  let elem = document.querySelector("#create_inst");

  e.preventDefault();
  let req = {};
  req.form = e.target.dataset.id;
  req.date = new Date();
  req.answers = [];
  let quests = document.querySelectorAll(".quest");
  Array.from(quests).map((n) => {
    let inner =
      n.tagName == "SELECT"
        ? n.options[n.options.selectedIndex].innerHTML
        : n.value;
    req.answers.push({ question: n.name, answer: inner });
  });
  return req;
}
