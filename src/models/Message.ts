import { Contact } from "./contact";

export class Message {

  text: String;
  date: Date;
  contact: Contact;
  status: String;


  constructor(text: String,
              date:Date,
              contact: Contact,
              status: String) {
      this.text = text;
      this.date = date;
      this.contact = contact;
      this.status = status;
  }
  
}