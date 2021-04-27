export interface HttpRequest {
  readonly method:
    | 'get' | 'GET'
  readonly url: string;
}

interface HttpClient {
  request<Response>(params: HttpRequest): Promise<Response>;
}

export default HttpClient;