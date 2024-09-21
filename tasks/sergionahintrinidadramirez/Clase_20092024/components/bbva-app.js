import { html, LitElement } from "lit";
import "./login";
import "./dashboard";
import "./details";

export class BbvaApp extends LitElement{
    constructor(){
        super();
    }

    render(){
        return  html`
      <bbva-login></bbva-login>
      <bbva-dashboard></bbva-dashboard>
      <bbva-details></bbva-details>
        `
    }
}