import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  visible = false;
  left = false;
  timeout:any;

  constructor() {}

  newCycle() {
    // Generate a random number between 0 and 1
    let flip = Math.random();

    // Use the number to determine if it is left or right
    if (flip < 0.5) {
      this.left = true;
    } else {
      this.left = false;
    }

    // Make the decision visible, if it is not yet
    if(!this.visible) {
      this.visible = true;
    }

    // Clear the timeout, so that you cannot stack it by spamming the screen
    if(this.timeout) {
      clearTimeout(this.timeout);
    }

    // Set a timeout, so the decision hides after 2 Seconds
    this.timeout = setTimeout(() =>{
      this.visible = false;
    }, 2000);

  }
}
