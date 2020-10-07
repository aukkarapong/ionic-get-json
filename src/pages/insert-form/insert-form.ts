import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController,
} from "ionic-angular";

/**
 * Generated class for the InsertFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-insert-form",
  templateUrl: "insert-form.html",
})
export class InsertFormPage {
  first_name: string;
  last_name: string;
  email: string;
  gender: string = "Male";

  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad InsertFormPage");
  }

  handleAddButton() {
    console.log(this.first_name);
    console.log(this.last_name);
    console.log(this.email);
    console.log(this.gender);

    let formData = new FormData();
    formData.append("first_name", this.first_name);
    formData.append("last_name", this.last_name);
    formData.append("email", this.email);
    formData.append("gender", this.gender);

    var xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "http://www.zp11107.tld.122.155.17.167.no-domain.name/make-json/create.php",
      true
    );

    xhr.onload = function () {
      // do something to response
      // console.log(this.responseText);
      const response = JSON.parse(this.responseText);
      console.log(response);
    };
    xhr.send(formData);

    this.viewCtrl.dismiss();
  }
}
