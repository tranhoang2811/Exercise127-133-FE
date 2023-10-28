import { Component } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { IStyle } from 'src/app/interfaces/style';
import { AdvanceFashionService } from 'src/app/services/advance-fashion.service';
import { StyleService } from 'src/app/services/style.service';

@Component({
  selector: 'app-client-fashion-list',
  templateUrl: './client-fashion-list.component.html',
  styleUrls: ['./client-fashion-list.component.css'],
})
export class ClientFashionListComponent {
  public fashionsGroupByStyle: IStyle[] = [];
  public styleOptions: IStyle[] = [];
  public errorMessage: string = '';
  private search = new Subject<string>();

  constructor(
    private advanceFashionService: AdvanceFashionService,
    private styleService: StyleService
  ) {
    this.getFashions();
    this.getStyles();
    this.setupSearch();
  }

  private getFashions(style: string = ''): void {
    this.advanceFashionService.getClientFashions(style).subscribe({
      next: (fashionsGroupByStyle: IStyle[]) => {
        this.fashionsGroupByStyle = fashionsGroupByStyle;
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

  private setupSearch(): void {
    this.search
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((value: string) => {
        this.getFashions(value);
      });
  }

  public onSearchChange(event: Event): void {
    const style = (event.target as HTMLInputElement).value;
    this.search.next(style);
  }
}
