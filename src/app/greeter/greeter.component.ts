import { Component } from '@angular/core';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.scss']
})
export class GreeterComponent {
  greetings: string[] = ['estudiante UVG', 'fullstack developer', 'UI/UX designer'];
  currentGreeting: string = '';
  currentIndex: number = 0;

  ngOnInit() {
    this.currentGreeting = this.greetings[this.currentIndex];
    this.startGreetingCycle();
  }

  startGreetingCycle() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.greetings.length;
      this.currentGreeting = this.greetings[this.currentIndex];
    }, 4000);
  }
  navigateToGithub() {
    window.open( 'https://github.com/Arthurs101?tab=repositories' ,'_blank');
  }
}
