import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private http: HttpClient) { }
  cadastro:any;

  ngOnInit(){
    this.cadastro= new FormGroup({
      nome: new FormControl(),
      email:new FormControl(),
      birth_date: new FormControl(),
      gender: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      profession: new FormControl(),
      schooling: new FormControl(),
      q1: new FormControl(),
      q2: new FormControl(),
      q3: new FormControl(),
      q4: new FormControl(),
      q5: new FormControl(),
      q6: new FormControl(),
      ITUB4: new FormControl(),
      PETR4: new FormControl(),
      VALE3: new FormControl(),
      NEWS: new FormControl(),
      IPCA: new FormControl(),
      SELIC: new FormControl(),
      PREFIXADO: new FormControl(),
    });
  }

  private async request(method: string, url: string, data?: any) {

     const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body',
    });
    return new Promise((resolve, reject) => {
      result.subscribe(resolve, reject);
    });
  }

  onSubmit(){
    console.log('entro');
    console.log(this.cadastro.value.NEWS);
    console.log(this.cadastro.value.IPCA);
    console.log(this.cadastro.value.SELIC);
    //this.request('POST', `http://localhost:8080/post`, this.cadastro.value);
  }
}
