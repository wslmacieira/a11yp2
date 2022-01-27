import { AfterViewInit, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { ModalRef, ModalService } from './shared/components/modal/services/modal.service';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>

  @ViewChild('template1') public template1: TemplateRef<any>
  @ViewChild('template2') public template2: TemplateRef<any>

  public selectedTemplate: TemplateRef<any>;

  title = 'a11y-p2';
  public firstName = 'Wagner';
  public modalRef: ModalRef;

  constructor(private modalService: ModalService, private cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.selectedTemplate = this.template1;
    this.cd.detectChanges();
  }

  public show(): void {
    this.selectedTemplate = this.template2;
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details',
    });
  }
}
