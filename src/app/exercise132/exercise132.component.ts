import { Component } from '@angular/core';
import { IFashion } from '../interfaces/fashion';
import { FashionService } from '../services/fashion.service';

@Component({
  selector: 'app-exercise132',
  templateUrl: './exercise132.component.html',
  styleUrls: ['./exercise132.component.css'],
})
export class Exercise132Component {
  public fashions: IFashion[] = [];
  public fashionId: string = '';
  public errorMessage: string = '';

  constructor(private fashionService: FashionService) {
    this.getFashions();
  }

  public getFashions(): void {
    this.fashionService.getFashions().subscribe({
      next: (fashions: IFashion[]) => {
        this.fashions = fashions;
      },
      error: (error: Error) => {
        this.errorMessage = error.message;
      },
    });
  }

  public deleteFashion(): void {
    this.fashionService.deleteFashion(this.fashionId).subscribe({
      next: () => {
        this.getFashions();
        this.errorMessage = '';
      },
      error: (error: Error) => {
        this.errorMessage = error.message;
      },
    });
  }
}
