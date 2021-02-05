import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  SimpleChanges,
  Input,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() input: any;
  @Output() route: EventEmitter<any> = new EventEmitter();
  @Output() loader: EventEmitter<any> = new EventEmitter();
  name = 'Gopal';
  caption = 'I\'m the Developer';
  constructor() { }

  ngOnInit(): void { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.input) {
      console.log(this.input);
      setTimeout(() => this.loader.emit(false), 2000);
    }
  }

  emitRoute = (route: any) => {
    this.route.emit(route);
  };
}
