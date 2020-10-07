import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { InsertFormPage } from "../insert-form/insert-form";
import { EditFormPage } from "../edit-form/edit-form";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {
  jsonData: any;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log(">>>>ionViewDidLoad");
  }

  ionViewDidEnter() {
    this.getJsonData();
  }

  getJsonData() {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open(
      "GET",
      "http://www.zp11107.tld.122.155.17.167.no-domain.name/make-json/",
      false
    ); // false for synchronous request
    xmlHttp.send(null);

    const responseText = xmlHttp.responseText;
    this.jsonData = JSON.parse(responseText);
    console.log(this.jsonData);
  }

  handleAddDataButton() {
    this.navCtrl.push(InsertFormPage);
  }

  handleDeleteDataButton(data) {
    console.log(data);

    let formData = new FormData();
    formData.append("id", data.id);

    var xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "http://www.zp11107.tld.122.155.17.167.no-domain.name/make-json/delete.php",
      true
    );

    xhr.onload = function () {
      // do something to response
      // console.log(this.responseText);
      const response = JSON.parse(this.responseText);
      console.log(response);
    };
    xhr.send(formData);

    this.getJsonData();
  }

  handleEditDataButton(data) {
    this.navCtrl.push(EditFormPage, { data: data });
  }
}
