import { JSONRPCClient } from "json-rpc-2.0";

export class ClientForms {
  constructor(url) {
    this.url = url;
  }

  getClient() {
    let headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Origin", "https://sitezm412.herokuapp.com");

    const client = new JSONRPCClient((jsonRPCRequest) =>
      fetch(this.url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(jsonRPCRequest),
      }).then((response) => {
        console.log(response, "response");
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
    return this.getClient()
      .request("get_form", id)
      .then((result) => {
        console.log(result, "result");
        func(result);
      });
  }

  getForms(func) {
    return this.getClient()
      .request("get_forms")
      .then((result) => {
        func(result);

        console.log(result, "result");
      });
  }

  saveFormInst(obj) {
    console.log(obj, "newobj");
    return this.getClient()
      .request("save_form_inst", obj)
      .then((result) => {
        console.log(result, "result");
      });
  }

  getFormInst(id) {
    return this.getClient()
      .request("get_form_inst", id)
      .then((result) => {
        console.log(result, "result");
      });
  }
}
