const URLAPI = "http://localhost:9000/api/";

export default class API {
  static async getItem(data) {
    const response = await API.fetchToServer(`${URLAPI}item`, "get", data);
    return response;
  }

  static async getItems() {
    const response = API.fetchToServer(`${URLAPI}items`, "get", null);
    return response;
  }

  static async addItem(data) {
    const response = API.fetchToServer(`${URLAPI}items`, "post", data);
    return response;
  }

  static async updateItem(data) {
    const response = API.fetchToServer(
      `${URLAPI}items/${data._id}`,
      "put",
      data
    );
    return response;
  }

  static async deleteItem(data) {
    const response = API.fetchToServer(
      `${URLAPI}items/${data._id}`,
      "delete",
      data
    );
    return response;
  }

  static async fetchToServer(url, method, data) {
    try {
      const params = {
        method,
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
      };

      if (method !== "get") {
        params.body = JSON.stringify(data);
      }

      const response = await fetch(url, params);
      return await response.json();
    } catch (e) {
      return e;
    }
  }
}
