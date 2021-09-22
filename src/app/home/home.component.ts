import { Component, OnInit } from '@angular/core';
import { TransaccionesService } from '../data/transacciones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: TransaccionesService) {
   }
  ngOnInit(): void {
    this.service.getTransactions$().subscribe(transacciones => this.transacciones = transacciones)
  }

  public title = 'ejercicio-javiersales';
  public transacciones:any[] = [];

  public balancetotal = this.getBalance();
  private getBalance():number{
    let total = 0;
    this.transacciones.forEach(element =>{
      if(element.kind == 'spent'){
        total = total - element.amount;
      } else {
        total = total + element.amount;
      }
    });
    return total;
  }

}
