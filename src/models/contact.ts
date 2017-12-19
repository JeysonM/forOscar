export class Contact {

  name: String;
  lastName: String;
  description: String;
  phone: String;
  mail: String;
  photo: String;
  constructor(name: String, 
              lastName: String,
              description: String,
              phone: String,
              mail: String,
              photo: String) {
      this.name = name;
      this.lastName = lastName;
      this.description = description;
      this.mail = mail;
      this.photo = photo;
      this.phone = phone;
  }
  
}