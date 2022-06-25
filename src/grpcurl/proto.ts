import * as vscode from "vscode";
import { Service } from "./service";

export async function getProto(path: string) {
  const util = require("util");
  const exec = util.promisify(require("child_process").exec);
  const call = `grpcurl -import-path / -proto ${path} describe`;
  const { stdout, stderr } = await exec(call);
  if (`${stderr}` !== ``) {
    vscode.window.showErrorMessage(`${stderr}`);
  }
  return new Proto(`${stdout}`, path);
}

export class Proto {
  public name: string;
  public tag: string;
  public version: string;
  public services: Service[] = [];
  public built: boolean = false;
  constructor(stdout: string, public path: string) {
    let lines = stdout.split("\n");
    let curLines: string[] = [];
    lines.forEach((line) => {
      curLines.push(line);
      if (line.endsWith(" is a service:")) {
        this.tag = line.replace(" is a service:", "");
        if (this.tag.includes(".")) {
          let splitted = line.split(".");
          splitted.pop();
          this.tag = splitted.join(".");
        }
      }
      if (line.endsWith("}")) {
        this.services.push(new Service(curLines));
        curLines = [];
      }
    });
    let splittedName = this.tag.split(".");
    if (splittedName.length === 2) {
      this.name = splittedName[0];
      this.version = splittedName[1];
    } else {
      this.name = splittedName[0];
      this.version = "";
    }
    this.built = true;
  }
}