export class MockUser {
  public id = "";
  public username: string;
  public discriminator: string;
  constructor(id: string, username: string = "") {
    this.id = id;
    this.username = username;
  }
}
