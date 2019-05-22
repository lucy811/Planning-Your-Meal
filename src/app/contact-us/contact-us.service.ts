import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ContactUsService {
    contactusChanged = new Subject<string>();
    private contactinformation: string;

    getContactInfo() {
        return this.contactinformation;
    }

    addContactInfo(contactinformation: string) {
        this.contactinformation = contactinformation;
        this.contactusChanged.next(this.contactinformation.slice());
    }

    getContactUsChanged() {
        return this.contactusChanged;
    }
}
