import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  currentYear: any = (new Date()).getFullYear();
  date: any = new Date().toISOString();
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  dismissModal() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  yearChange(){
    alert(new Date(this.date).getFullYear());
  }
}
