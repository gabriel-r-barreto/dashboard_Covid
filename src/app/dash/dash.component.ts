import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  dado: any;
  cnpj: any;
  name: any;
  dado2: any;
  main1: any;
  main2: any;
  main3: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.main1 = true;
    this.main2 = false;
    this.main3 = false;
  }


  getInfo() {
    this.http.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/' + this.cnpj + '/distritos').subscribe(data => {
      this.dado = data;
      console.log(this.dado);
    });
  }


  getName(){
    debugger;
          this.http.get('https://servicodados.ibge.gov.br/api/v2/censos/nomes/' + this.name).subscribe(data => {
          this.dado2 = data[0].res;
          console.log(this.dado2);
  });

  }


  showMain1(){
    this.main1 = true;
    this.main2 = false;
    this.main3 = false;
  }

  showMain2(){
    this.main1 = false;
    this.main2 = true;
    this.main3 = false;
  }

  showMain3(){
    this.main1 = false;
    this.main2 = false;
    this.main3 = true;
  }



}
