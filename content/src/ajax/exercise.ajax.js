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
    .then(result => result.data)
    .catch(errorResponse);
}

export function readyById(_id) {
  return axios
    .get(`http://localhost:4000/${_id}`)
    .then(result => result.data)
    .catch(errorResponse);
}

export function update(item) {
  return axios
    .put(`http://localhost:4000/${item._id}`, item)
    .then(result => result.data)
    .catch(errorResponse);
}

export function del(_id) {
  return axios
    .delete(`http://localhost:4000/${_id}`)
    .then(result => result.data)
    .catch(errorResponse);
}

const errorResponse = err => {
  console.log(err);
};
