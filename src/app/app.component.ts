import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import * as v from '../validators/valdators'
import {TestValidators} from "../validators/valdators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit{
  form: FormGroup
  opened: boolean = false;
  appState: any;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [TestValidators.restrictedAge, Validators.email,Validators.required], [TestValidators.uniqEmail]),
      password: new FormControl('',[Validators.required, TestValidators.password,
        Validators.minLength(8)]),
      address: new FormGroup({
        country: new FormControl('ru'),
        city: new FormControl('', Validators.required),
      }),
      skills: new FormArray([])

    })
  }

  submit() {

  }

  setCapital() {
    const cityMap = {
      ru: 'Moscow',
      en: 'Denver',
      by: 'Minsk'

    }
    const key = this.form.get('address').get('country').value
    const city = cityMap[key]
    this.form.patchValue({
      address: {city}
    })
    console.log(city)
  }

  addNarative() {
    const  control = new FormControl('', Validators.required);
    (this.form.get('skills') as FormArray).push(control);
    console.log(control)
  }

}
