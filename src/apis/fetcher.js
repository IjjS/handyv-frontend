import axios from "axios";

const base = axios.create({
  baseURL: process.env.REACT_APP_API,
});

const fetcher = {
  get: (path) => base.get(path).then((res) => res.data),
  post: (path, data) => base.post(path, data).then((res) => res.data),
};

export default fetcher;
