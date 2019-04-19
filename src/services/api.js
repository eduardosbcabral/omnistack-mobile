import axios from "axios";

const api = axios.create({
	baseURL: "https://omnistack-edusbcabral-backend.herokuapp.com"
});

export default api;