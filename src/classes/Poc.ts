export default class Poc {
  private _message: string;

  constructor(message: string) {
    this._message = message;
  }

  hello(): string {
    return `Hello, ${this._message}!`;
  }
}
