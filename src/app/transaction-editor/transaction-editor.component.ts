import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { TransaccionesService } from '../data/transacciones.service';

@Component({
  selector: 'app-transaction-editor',
  templateUrl: './transaction-editor.component.html',
  styleUrls: ['./transaction-editor.component.scss']
})
export class TransactionEditorComponent implements OnInit {

  public transaction$: Observable<any> = of();
  constructor(route: ActivatedRoute, service: TransaccionesService) {
    const transactionid =route.snapshot.params['id'];
    this.transaction$ = service.getTransactionById$(transactionid);
  }

  ngOnInit(): void { }

}
