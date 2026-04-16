class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    get(endpoint) {
        return fetch(this.baseURL + endpoint)
        .then(response => response.json());
    }

    put(endpoint, body) {
        return this._send("put", endpoint, body);
    }

    post(endpoint, body) {
        return this._send("post", endpoint, body);
    }

    delete(endpoint, body) {
        return this._send("delete", endpoint, body);
    }

    _send(method, endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(response => response.json());
    }
}

const api = new FetchWrapper('https://jsonplaceholder.typicode.com/posts');

const data = {
        title: titulo.value,
        body: conteudo.value, 
        userId:1
    }

const form = document.querySelector("#post-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const titulo = document.querySelector("#title");
    const conteudo = document.querySelector("#paragraph");

    api.post("", data)
    .then(response => console.log(response))
    .catch(error => console.error(error));
});
