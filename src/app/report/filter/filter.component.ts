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
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  yearChange(){
    alert('hello');
    // alert(document.getElementById("selectedYear").innerHTML)
    alert(new Date(this.date).getFullYear());
  }
}
