import HttpClient, { HttpRequest } from "@/core/data/axios-http-client";
import axios from "axios";
export class AxiosHttpClient implements HttpClient {
  async request<Response>(option: HttpRequest): Promise<Response> {
    return axios({
      method: option.method,
      url: option.url,
    }).then(response => <Response><any>({
      status: response.status,
      data: response.data,
    })).catch(error => <Response><any>({
      status: error.response.status
    }));
  }
}