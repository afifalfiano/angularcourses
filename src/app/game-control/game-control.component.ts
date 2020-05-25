import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output ('triggerStartGame') gameStarted = new EventEmitter<number> ();
  @Output ('triggerStopGame') gameStoped = new EventEmitter<number> ();

  intervalGame: number;
  lastNumber = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.intervalGame = setInterval(() => {
      this.gameStarted.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.intervalGame);
  }

}
