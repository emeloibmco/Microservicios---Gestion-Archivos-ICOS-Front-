import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { QueryService } from '../../../services/query.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete-project',
  templateUrl: './delete-project.component.html',
  styleUrls: ['./delete-project.component.css'],
  providers: [QueryService]

})
export class DeleteProjectComponent implements OnInit {
  @Input() id: number;
  SERVER_URL = 'http://localhost:3000/delproject/';


  constructor( private httpClient: HttpClient, public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  deleteProject(){
    this.httpClient.delete(this.SERVER_URL + this.id).subscribe(
      (res) => console.log(res),
      (err) => console.log(err),
    );
    this.activeModal.close('Modal Closed');;
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

}
