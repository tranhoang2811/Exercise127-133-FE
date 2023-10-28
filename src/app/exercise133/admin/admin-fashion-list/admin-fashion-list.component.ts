import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IAdvanceFashion } from 'src/app/interfaces/advance-fashion';
import { AdvanceFashionService } from 'src/app/services/advance-fashion.service';
import { DeleteFashionModalComponent } from '../delete-fashion-modal/delete-fashion-modal.component';

@Component({
  selector: 'app-admin-fashion-list',
  templateUrl: './admin-fashion-list.component.html',
  styleUrls: ['./admin-fashion-list.component.css'],
})
export class AdminFashionListComponent {
  public fashions: IAdvanceFashion[] = [];
  public errorMessage: string = '';

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private sanitizer: DomSanitizer,
    private advanceFashionService: AdvanceFashionService
  ) {
    this.advanceFashionService.getAdminFashions().subscribe({
      next: (fashions: IAdvanceFashion[]) => {
        this.fashions = fashions;
      },
      error: (error: Error) => {
        this.errorMessage = error.message;
      },
    });
  }

  public gotoCreateFashion(): void {
    this.router.navigate(['/exercise-133/admin/new']);
  }

  public gotoUpdateFashion(id: string): void {
    this.router.navigate([`/exercise-133/admin/${id}`]);
  }

  public openDeleteModal(id: string, title: string): void {
    const deleteFashionModal = this.modalService.open(
      DeleteFashionModalComponent
    );
    deleteFashionModal.componentInstance.fashionId = id;
    deleteFashionModal.componentInstance.fashionTitle = title;
  }

  public parseDetail(detail: string): any {
    return this.sanitizer.bypassSecurityTrustHtml(detail);
  }
}
