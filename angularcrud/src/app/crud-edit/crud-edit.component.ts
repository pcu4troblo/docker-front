import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-crud-edit',
  templateUrl: './crud-edit.component.html',
  styleUrls: ['./crud-edit.component.css']
})
export class CrudEditComponent implements OnInit {

  

  ngOnInit() {
  }

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private bs: BusinessService) {
  this.createForm();
  }
  createForm() {
  this.angForm = this.fb.group({
  person_name: ['', Validators.required ],
  business_name: ['', Validators.required ],
  business_gst_number: ['', Validators.required ]
  });
  }
  addBusiness(person_name, busines_name, business_gst_number) {
  this.bs.addBusiness(person_name, busines_name, business_gst_number);
  }

}
