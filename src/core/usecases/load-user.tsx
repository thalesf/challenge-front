export interface loadUsers {
  loadUsers: () => Promise<LoadUserModel>
}

export type LoadUserModel = {
  name: string,
  url: string
}
