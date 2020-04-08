import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  myForm: FormGroup;
  sku: AbstractControl;

  onSubmit(form: any): void{
    console.log(form);
  }

  // 自定义校验
  skuValidator(control: FormControl): {[s: string]: boolean}{
    if (!control.value.match(/^123/)) {
      return {invalidSku: true};
    }
  }

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
        'sku': ['', Validators.compose([Validators.required, this.skuValidator])]
    });
    this.sku = this.myForm.controls['sku'];

    this.sku.valueChanges.subscribe((value: string) => {
      console.log('sku changed to: ', value);
    });

    this.myForm.valueChanges.subscribe((form: any) => {
      console.log('myForm changed:', form);
    })

  }

}
