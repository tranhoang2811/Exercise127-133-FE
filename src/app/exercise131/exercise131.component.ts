import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FashionService } from '../services/fashion.service';

@Component({
  selector: 'app-exercise131',
  templateUrl: './exercise131.component.html',
  styleUrls: ['./exercise131.component.css'],
})
export class Exercise131Component {
  public updateFashionForm: FormGroup;
  public image: string = '';
  public errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private fashionService: FashionService
  ) {
    this.updateFashionForm = this.formBuilder.group({
      id: this.formBuilder.control(''),
      style: this.formBuilder.control(''),
      subject: this.formBuilder.control(''),
      detail: this.formBuilder.control(''),
    });
  }

  public onSubmit(): void {
    const fashion = {
      ...this.updateFashionForm.value,
      image: this.image,
    };
    this.fashionService.updateFashion(fashion).subscribe({
      next: () => {
        this.updateFashionForm.reset();
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
      };
    }
  }
}
