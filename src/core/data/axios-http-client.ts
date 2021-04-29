export interface HttpRequest {
  readonly method:
  | "get" | "GET"
  readonly url: string;
}
export interface HttpClient {
  request(params: HttpRequest): Promise<any>;
}
