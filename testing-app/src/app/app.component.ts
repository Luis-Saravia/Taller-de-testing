import { Component, Inject, OnInit } from '@angular/core';
import { TestingService } from './services/testing.service';
import { AppPageData } from './app-page.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: AppPageData = {
    title: '',
    message: ''
  };
  showOther = false;

  constructor(private service: TestingService) {}

  ngOnInit(): void {
    this.service.obtenerDatos().subscribe((data) => {
      this.data = data;
    });
  }

  toggleOther(): void {
    this.showOther = !this.showOther;
  }

  vieneDelHijo(event: string){
    this.service.otroMetodo().subscribe((data) =>{
      this.data = data
    })
    console.log(event, this.data)
  }
}
