export class User {

  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public gender: string,
    public hobbies?: string[]) {
  }
}
