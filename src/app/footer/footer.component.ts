import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit, OnChanges {
  @Input() input: any;
  @Output() loader: EventEmitter<any> = new EventEmitter();
  @Output() route: EventEmitter<any> = new EventEmitter();
  year = new Date().getUTCFullYear();
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.input) {
      console.log(this.input);
      setTimeout(() => this.loader.emit(false), 2000);
    }
  }

  ngOnInit(): void { }
}
