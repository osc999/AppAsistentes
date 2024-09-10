import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaQRPage } from './pagina-qr.page';

describe('PaginaQRPage', () => {
  let component: PaginaQRPage;
  let fixture: ComponentFixture<PaginaQRPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
