import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  showData($event: any) {
    console.log('Button is clicked! ')
    if ($event){
      console.log($event.target);
      console.log($event.target.value);
    }
  }
}
