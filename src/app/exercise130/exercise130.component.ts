import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FashionService } from '../services/fashion.service';

@Component({
  selector: 'app-exercise130',
  templateUrl: './exercise130.component.html',
  styleUrls: ['./exercise130.component.css'],
})
export class Exercise130Component {
  public createFashionForm: FormGroup;
  public image: string = '';
  public errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private fashionService: FashionService
  ) {
    this.createFashionForm = this.formBuilder.group({
      style: this.formBuilder.control(''),
      subject: this.formBuilder.control(''),
      detail: this.formBuilder.control(''),
    });
  }

  public onSubmit(): void {
    const fashion = {
      ...this.createFashionForm.value,
      image: this.image,
    };
    this.fashionService.createFashion(fashion).subscribe({
      next: () => {
        this.createFashionForm.reset();
        this.errorMessage = '';
      },
      error: (error: Error) => {
        this.errorMessage = error.message;
      },
    });
  }

  public onFileSelected(event: Event): void {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    const selectedFile = target?.files?.[0];
    const fileReader = new FileReader();
    if (selectedFile) {
      fileReader.readAsDataURL(selectedFile);
      fileReader.onload = () => {
        this.image = fileReader.result?.toString() || '';
      }
    }
  }
}
