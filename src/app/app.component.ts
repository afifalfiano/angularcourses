import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  oddNumbers: number[] = [];
  eventNumbers: number[] = [];

  onGameStart(eventNumber: number) {
    console.log(eventNumber);
    if(eventNumber % 2 === 0) {
      this.eventNumbers.push(eventNumber);
    } else {
      this.oddNumbers.push(eventNumber);
    }

  }

  onGameStop(stop) {
    console.log(stop);
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }
}

