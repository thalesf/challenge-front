import { LoadUserItem, LoadUserModel } from "@/core/usecases/load-user";
import { HttpClient } from '@/core/data/axios-http-client'

export class LoadUser implements LoadUserItem {
  constructor (
    private readonly url: string,
    private readonly httpGet: HttpClient) {}

  async getUser():Promise<LoadUserModel> {
    const {data: httpResponse} = await this.httpGet.request({
      url: this.url,
      method: "get"
    })
    return {
      url: httpResponse.url,
      name: httpResponse.name
    }
  }
}