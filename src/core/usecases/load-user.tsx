export interface loadUser {
  loadUser: () => Promise<LoadUserModel>
}

export type LoadUserModel = {
  name: string,
  url: string
}
