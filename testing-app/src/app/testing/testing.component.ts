import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent {

  @Output() eventEmisor: EventEmitter<string> = new EventEmitter()
}
