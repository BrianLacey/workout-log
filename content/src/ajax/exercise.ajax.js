import axios from "axios";

export function create(item) {
  return axios
    .post(`http://localhost:4000/`, item)
    .then(result => {
      return result.data;
    })
    .catch(errorResponse);
}

export function readAll() {
  return axios
    .get(`http://localhost:4000/`)
    .then(result => {
      return result.data;
    })
    .catch(errorResponse);
}

export function readyById(id) {
  return axios
    .get(`http://localhost:4000/${id}`)
    .then(result => result.data)
    .catch(errorResponse);
}

export function update(item) {
  return axios
    .get(`http://localhost:4000/${item.id}`, item)
    .then(result => result.data)
    .catch(errorResponse);
}

export function del(id) {
  return axios
    .delete(`http://localhost:4000/${id}`)
    .then(result => result.data)
    .catch(errorResponse);
}

const errorResponse = err => {
  console.log(err);
};
