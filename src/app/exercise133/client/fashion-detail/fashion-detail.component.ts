import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAdvanceFashion } from 'src/app/interfaces/advance-fashion';
import { AdvanceFashionService } from 'src/app/services/advance-fashion.service';

@Component({
  selector: 'app-fashion-detail',
  templateUrl: './fashion-detail.component.html',
  styleUrls: ['./fashion-detail.component.css'],
})
export class FashionDetailComponent {
  public fashion: IAdvanceFashion | undefined;
  public errorMessage: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private advanceFashionService: AdvanceFashionService
  ) {}

  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const fashionId = routeParams.get('id');
    this.getFashion(fashionId ?? '');
  }

  private getFashion(id: string): void {
    this.advanceFashionService.getFashion(id).subscribe({
      next: (fashion: IAdvanceFashion) => {
        this.fashion = fashion;
      },
      error: (error: Error) => {
        this.errorMessage = error.message;
      },
    });
  }
}
