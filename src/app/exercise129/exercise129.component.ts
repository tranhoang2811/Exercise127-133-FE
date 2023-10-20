import { Component } from '@angular/core';
import { IFashion } from '../interfaces/fashion';
import { FashionService } from '../services/fashion.service';

@Component({
  selector: 'app-exercise129',
  templateUrl: './exercise129.component.html',
  styleUrls: ['./exercise129.component.css'],
})
export class Exercise129Component {
  public fashion: IFashion | undefined;
  public errorMessage: string = '';
  public fashionId: string = '';

  constructor(private fashionService: FashionService) {}

  public getFashion(): void {
    this.fashionService.getFashion(this.fashionId).subscribe({
      next: (fashion: IFashion) => {
        this.fashion = fashion;
        this.errorMessage = '';
      },
      error: (error: Error) => {
        this.errorMessage = error.message;
      },
    });
  }
}
