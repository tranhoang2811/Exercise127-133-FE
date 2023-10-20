import { Component } from '@angular/core';
import { IFashion } from '../interfaces/fashion';
import { FashionService } from '../services/fashion.service';

@Component({
  selector: 'app-exercise128',
  templateUrl: './exercise128.component.html',
  styleUrls: ['./exercise128.component.css'],
})
export class Exercise128Component {
  public fashions: IFashion[] = [];
  public errorMessage: string = '';

  constructor(private fashionService: FashionService) {
    this.fashionService.getFashions().subscribe({
      next: (fashions: IFashion[]) => {
        this.fashions = fashions;
      },
      error: (error: Error) => {
        this.errorMessage = error.message;
      },
    });
  }
}
