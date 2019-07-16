
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ContactUsService } from '../contact-us/contact-us.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-date',
  templateUrl: './contact-us.component.html'
})

export class ContactUsComponent implements OnInit {
  @ViewChild('f') contactForm: NgForm;
  subscription: Subscription;
  contactInfo: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private cService: ContactUsService,
              private dataStorageService: DataStorageService ) { }

  ngOnInit() {
  }

  onCancel() {
    this.contactForm.reset();
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onFetch() {
    this.contactInfo = '';
    this.dataStorageService.fetchContactInfo();
    this.subscription = this.cService.getContactUsChanged().subscribe((mes: string) => {
      this.contactInfo = mes;
    });
  }

  onSubmit(form: NgForm) {
    this.contactInfo = form.value.contact;
    this.cService.addContactInfo(this.contactInfo);
    this.dataStorageService.storeContactInfo().subscribe(
      (response) => {
        console.log(response);
      }
    );
  }
}
