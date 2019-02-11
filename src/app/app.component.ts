import { Component } from '@angular/core';

import { User } from './user';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  //public userModel:User;
  public userModel = new User('Mulagura', 9293752456, 'gmail@gmail.com', 'tirupati', 'AP', 517501, '', 'Morning', false)
  public topics: Array<any> = ['Angular', 'React', 'Vue'];

  public formSubmitted: boolean = false;

  public errorMsg: any = '';

  constructor(private _appService: AppService) { }

  // public courseHasError:boolean = true;

  // validateCourse(val){

  //   if(val=='default'){
  //     this.courseHasError = true;
  //   }
  //   else{
  //     this.courseHasError = false;
  //   }

  // }

  onSubmitting() {

    this.formSubmitted = true;

    console.log("method/event on submitting");

    this._appService.enroll(this.userModel)
      .subscribe(

      data => console.log(" Sucess ! ", data),
      error => this.errorMsg = error.statusText

      )

  }

}
