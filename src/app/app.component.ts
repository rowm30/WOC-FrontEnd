import { Component } from '@angular/core';
import { ConstituencyService } from './services/constituency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WOCFrontEnd';
  constructor(private constituencyService:ConstituencyService ){

  }
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
    console.log(this.constituency);
    if (this.constituency.constituency==''|| this.constituency.constituency==null) {
      alert('Constituency is required!');
      return;
    }

    this.constituencyService.addUser(this.constituency).subscribe(
      (data)=>{
        console.log(data);
        alert('success');
      },
      (error)=>{
        console.log(error);
        alert('error MC')
      }
    )
  }


}
