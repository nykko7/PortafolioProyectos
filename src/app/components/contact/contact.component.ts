import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]
})
export class ContactComponent implements OnInit {
  public contact: Contact;
  public saveContact;
  public status: string;

  constructor(
    private _contactService: ContactService
  ) {
    this.contact = new Contact('','','','','','');
   }

  ngOnInit() {
  }

  onSubmit(form){

    //GUARDAR DATOS
    console.log(this.contact);
    this._contactService.saveContact(this.contact).subscribe(
      (response) => {
        if (response.contact) {
          this.saveContact = response.contact;
          this.status = 'success';
          form.reset();       
        }
        else{
          this.status = 'failed';
        }
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }

}
