import axios, { type AxiosInstance } from "axios";

const API_BASE_URL = "http://127.0.0.1:4000";
const API_TIMEOUT_MS = 5000;

export const api: AxiosInstance = axios.create({
	baseURL: API_BASE_URL,
	timeout: API_TIMEOUT_MS,
});
