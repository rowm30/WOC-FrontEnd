import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WOCFrontEnd';

  public constituency ={
    constituency:'',
    electedIndividual:'',
    Party:'',
    Age:'',
    Gender:'',
    score:''
  }
  formSubmit()
  {
    alert("submit");
  }
}
