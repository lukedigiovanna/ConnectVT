import axios, { AxiosRequestHeaders } from 'axios';
import firebase from '../constants/firebase'

class APIService {
	baseURL: string = 'https://jsonplaceholder.typicode.com'
	defaultHeaders: AxiosRequestHeaders = {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}

	private async getHeaders(): Promise<AxiosRequestHeaders> {
		return this.defaultHeaders;
	}

	async get(url: string): Promise<any> {
		const headers = await this.getHeaders();
		console.log(headers);
		return axios.get(this.baseURL + url, { headers });
	}

	async post(url: string, data: any): Promise<any> {
		const headers = await this.getHeaders();
		return axios.post(this.baseURL + url, data, { headers });
	}

	async put(url: string, data: any): Promise<any> {
		const headers = await this.getHeaders();
		return axios.put(this.baseURL + url, data, { headers });
	}

	async delete(url: string): Promise<any> {
		const headers = await this.getHeaders();
		return axios.delete(this.baseURL + url, { headers });
	}

	async mapImage(
		address: string,
		zoom: number = 12,
		size: string = "@2x",
		type: string = "map"
	): Promise<string> {
		const url = `${process.env.REACT_APP_MAP_URL}?key=${process.env.REACT_APP_MAP_KEY}&center=${address}&zoom=${zoom}&size=${size}&type=${type}`;
		const response = await axios.get(url);
		return response.config.url || '';
	}
}

export default new APIService()