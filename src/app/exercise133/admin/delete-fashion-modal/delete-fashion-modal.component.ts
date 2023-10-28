import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AdvanceFashionService } from 'src/app/services/advance-fashion.service';

@Component({
  selector: 'app-delete-fashion-modal',
  templateUrl: './delete-fashion-modal.component.html',
  styleUrls: ['./delete-fashion-modal.component.css'],
})
export class DeleteFashionModalComponent {
  @Input() fashionId: string | undefined;
  @Input() fashionTitle: string | undefined;
  public errorMessage: string = '';

  constructor(
    private activeModal: NgbActiveModal,
    private advanceFashionService: AdvanceFashionService,
  ) {}

  public deleteFashion(): void {
    if (this.fashionId) {
      this.advanceFashionService.deleteFashion(this.fashionId).subscribe({
        next: () => {
          window.location.reload();
          this.activeModal.close();
        },
        error: (error) => {
          this.errorMessage = error.message;
        },
      });
    }
  }

  public closeModal(): void {
    this.activeModal.close();
  }
}
