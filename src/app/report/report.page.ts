import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: FilterComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
