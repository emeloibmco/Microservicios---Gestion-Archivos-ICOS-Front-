import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete-all-asset',
  templateUrl: './delete-all-asset.component.html',
  styleUrls: ['./delete-all-asset.component.css']
})
export class DeleteAllAssetComponent implements OnInit {

  @Input() id: number;
  @Input() id_asset: number;
  @Input() name_asset: string;

  SERVER_URL = 'http://localhost:3000/docdeletetrash/';

  public formName;

  constructor(public activeModal: NgbActiveModal, private httpClient: HttpClient) { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  deleteData(){
    this.httpClient.post<any>(this.SERVER_URL + this.id , this.formName = {name_asset: this.name_asset, id_asset: this.id_asset}).subscribe(
      (res) => console.log(res),
      (err) => console.log(err),
    );
    this.activeModal.close('Modal Closed');

  }
}
