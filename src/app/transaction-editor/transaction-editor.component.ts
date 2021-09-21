import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction-editor',
  templateUrl: './transaction-editor.component.html',
  styleUrls: ['./transaction-editor.component.scss']
})
export class TransactionEditorComponent implements OnInit {

  public projectId = '';
  constructor(route: ActivatedRoute) {
    this.projectId=route.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

}
