import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { IStyle } from 'src/app/interfaces/style';
import { AdvanceFashionService } from 'src/app/services/advance-fashion.service';
import { StyleService } from 'src/app/services/style.service';

@Component({
  selector: 'app-create-fashion',
  templateUrl: './create-fashion.component.html',
  styleUrls: ['./create-fashion.component.css'],
})
export class CreateFashionComponent {
  public createFashionForm: FormGroup;
  public styleOptions: IStyle[] = [];
  public errorMessage: string = '';
  public thumbnail: string = '';

  public EDITOR_CONFIG: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    ],
    customClasses: [
    {
      name: 'quote',
      class: 'quote',
    },
    {
      name: 'redText',
      class: 'redText'
    },
    {
      name: 'titleText',
      class: 'titleText',
      tag: 'h1',
    },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private advanceFashionService: AdvanceFashionService,
    private styleService: StyleService
  ) {
    this.createFashionForm = this.formBuilder.group({
      title: this.formBuilder.control(''),
      detail: this.formBuilder.control(''),
      styleId: this.formBuilder.control(''),
    });
    this.getStyles();
  }

  private getStyles(): void {
    this.styleService.getStyles().subscribe({
      next: (styles: IStyle[]) => {
        this.styleOptions = styles;
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
        this.thumbnail = fileReader.result?.toString() || '';
      };
    }
  }

  public onSubmit(): void {
    const fashion = {
      ...this.createFashionForm.value,
      thumbnail: this.thumbnail,
    };
    this.advanceFashionService.createFashion(fashion).subscribe({
      next: () => {
        this.createFashionForm.reset();
        this.errorMessage = '';
        this.router.navigate(['/exercise-133/admin']);
      },
      error: (error: Error) => {
        this.errorMessage = error.message;
      },
    })
  }
}
