import { Component } from '@angular/core';
import { FormArray } from '@angular/forms';


@Component({
  selector: 'app-seller', 
  standalone: true,
  imports: [FormArray],
  templateUrl: './seller.component.html',
  styleUrl: './seller.component.css',
  template: `
    <form #f="ngForm" (ngSubmit)="onSubmit(f)" novalidate>
      <input name="first" ngModel required #first="ngModel">
      <input name="last" ngModel>
      <button>Submit</button>
    </form>

    <p>First name value: {{ first.value }}</p>
    <p>First name valid: {{ first.valid }}</p>
    <p>Form value: {{ f.value | json }}</p>
    <p>Form valid: {{ f.valid }}</p>
  `,

})
export class SellerComponent {
    
}
