import { Component, EventEmitter, inject, output, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  formBuilder = inject(FormBuilder)

  articleForm:FormGroup = this.formBuilder.group({
    title: ['',[Validators.required, Validators.minLength(3)] ],
    content: ['', Validators.required]
  })

  // @Output()
  // onArticle: EventEmitter<any> = new EventEmitter()

  onArticle = output()

  get title(){
    return this.articleForm.controls['title']
  }

  submitted:boolean = false

  AddArticle(){
    this.onArticle.emit(this.articleForm.value)
    this.articleForm.reset()
    this.submitted = false

  }

  onSubmit(){
   this.submitted = true
   if (this.articleForm.invalid) {
    return false;
   }else{
    this.AddArticle()
    return true
   }
  }

}
