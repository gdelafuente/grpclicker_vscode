import { Message } from "./message";

export class Call {
  public input: Message;
  public inputIsStream: boolean = false;
  public output: Message;
  public outputIsStream: boolean = false;
  public name: string;
  constructor(line: string) {
    let splittedspace = line.split(" ");
    this.name = splittedspace[3];
    let splittedquote = line.split(")");
    this.input = new Message(splittedquote[0]);
    this.output = new Message(splittedquote[1]);
    if (splittedquote[0].includes("stream")) {
      this.inputIsStream = true;
    }
    if (splittedquote[1].includes("stream")) {
      this.outputIsStream = true;
    }
  }
}
