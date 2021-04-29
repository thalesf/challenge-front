export type LoadUserModel = {
  name: string,
  url: string,
}
export interface LoadUserItem {
  getUser(): Promise<LoadUserModel>
}
