import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { IAdvanceFashion } from 'src/app/interfaces/advance-fashion';
import { IStyle } from 'src/app/interfaces/style';
import { AdvanceFashionService } from 'src/app/services/advance-fashion.service';
import { StyleService } from 'src/app/services/style.service';
import { pick } from 'lodash';

@Component({
  selector: 'app-update-fashion',
  templateUrl: './update-fashion.component.html',
  styleUrls: ['./update-fashion.component.css'],
})
export class UpdateFashionComponent {
  public updateFashionForm: FormGroup;
  public errorMessage: string = '';
  public styleOptions: IStyle[] = [];
  public fashion: IAdvanceFashion | undefined;
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
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
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
    toolbarHiddenButtons: [['bold', 'italic'], ['fontSize']],
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private advanceFashionService: AdvanceFashionService,
    private styleService: StyleService
  ) {
    this.updateFashionForm = this.formBuilder.group({
      title: this.formBuilder.control(''),
      detail: this.formBuilder.control(''),
      thumbnail: this.formBuilder.control(''),
      styleId: this.formBuilder.control(''),
    });
    this.getStyles();
  }

  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const fashionId = routeParams.get('id');
    this.getFashion(fashionId ?? '');
  }

  private getFashion(id: string): void {
    this.advanceFashionService.getFashion(id).subscribe({
      next: (fashion: IAdvanceFashion) => {
        this.fashion = fashion;
        this.updateFashionForm.patchValue(
          pick(fashion, ['title', 'detail', 'thumbnail', 'styleId'])
        );
      },
      error: (error: Error) => {
        this.errorMessage = error.message;
      },
    });
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
      ...this.updateFashionForm.value,
      thumbnail: this.thumbnail || this.fashion?.thumbnail || '',
    };
    this.advanceFashionService
      .updateFashion(this.fashion?.id || '', fashion)
      .subscribe({
        next: () => {
          this.updateFashionForm.reset();
          this.errorMessage = '';
          this.router.navigate(['/exercise-133/admin']);
        },
        error: (error: Error) => {
          this.errorMessage = error.message;
        },
      });
  }
}
