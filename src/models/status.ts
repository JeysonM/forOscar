import { Contact } from "./contact";

export class Status {

  text: String;
  date: Date;
  contact: Contact;
  image: String;
  constructor(text: String,
              date:Date,
              contact: Contact,
              image: String) {
      this.text = text;
      this.date = date;
      this.contact = contact;
      this.image = image;
  }
  
}