import { JSONRPCClient } from "json-rpc-2.0";

export class ClientForms {
  constructor(url) {
    this.url = url;
  }

  getClient(url) {
    const client = new JSONRPCClient((jsonRPCRequest) =>
      fetch("https://datazm412.herokuapp.com/json-rpc", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(jsonRPCRequest),
      }).then((response) => {
        if (response.status === 200) {
          return response
            .json()
            .then((jsonRPCResponse) => client.receive(jsonRPCResponse));
        } else if (jsonRPCRequest.id !== undefined) {
          return Promise.reject(new Error(response.statusText));
        }
      })
    );
    return client;
  }

  getForm(id, func) {
    return this.getClient(this.url)
      .request("get_form", id)
      .then((result) => {
        console.log(result, "result");
        func(result);
      });
  }

  getForms(func) {
    return this.getClient(this.url)
      .request("get_forms")
      .then((result) => {
        func(result);

        console.log(result, "result");
      });
  }

  saveFormInst(obj) {
    console.log(obj, "newobj");
    return this.getClient(this.url)
      .request("save_form_inst", obj)
      .then((result) => {
        console.log(result, "result");
      });
  }

  getFormInst(id) {
    return this.getClient(this.url)
      .request("get_form_inst", id)
      .then((result) => {
        console.log(result, "result");
      });
  }
}
