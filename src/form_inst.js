const { ClientForms } = require("../jsonrpc_client.js");

let url =
  process.env.NODE_ENV == "production"
    ? "https://datazm412.herokuapp.com/json-rpc"
    : "http://localhost:3000/json-rpc";

let client = new ClientForms(url);

document.addEventListener("DOMContentLoaded", function () {
  client.getFormInst("628509817cf3bd218a3686dd");
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

function create_form(obj) {
  let par = document.querySelector("#form_inst");
  let title = createEl(par, "h4", obj[0].form.title);
  let form = createEl(par, "form");
  form.id = "create_inst";
  form.dataset.id = obj[0].form._id;

  let str = ``;
  title;
  let htmlform = obj.reduce((substr, el, i) => {
    substr += `<p>${el.question} (${el.description})</p>`;
    if (el.question_type == "input") {
      substr += `<input name=${el._id} class="quest">`;
    } else if (el.question_type == "textarea") {
      substr += `<textarea name=${el._id} class="quest"></textarea>`;
    } else if (el.question_type == "select") {
      substr +=
        `<select name=${el._id} class="quest">` +
        el.opts.reduce(
          (option, k, l) => (option += `<option value=${l}>${k}</option>`),
          ""
        ) +
        "</select>";
    }
    return substr;
  }, "");
  form.innerHTML = htmlform;

  let br = createEl(form, "br");
  let button_sbm = createEl(form, "button", "Send");

  form.onsubmit = (e) => {
    let collection = onsubmitForm(e);
    client.saveFormInst(collection, showFormInst);
    par.innerHTML = null;
  };
}

function showFormInst(obj) {
  //console.log(obj, "obj");
  if (obj) {
    let par = document.querySelector("#form_inst_created");
    let newdate = new Date(obj.created);
    let newStr = newdate.toUTCString();
    par.innerHTML = "";
    let strhtml = ` <h4>Date: ${newStr}</h4> `;
    let newPart = obj.answers
      ? "<ul>" +
        obj.answers.reduce(
          (str, el) =>
            str +
            `<li>question: ${el.question.question}, answer: ${el.answer}</li>`,
          ""
        ) +
        "</ul>"
      : "";

    par.insertAdjacentHTML("beforeend", strhtml + newPart);
  }
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
