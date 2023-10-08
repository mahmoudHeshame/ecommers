
import { Component } from '@angular/core';
import { FormGroup ,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
constructor(private _AuthService:AuthService , private _Router:Router){
  if(localStorage.getItem('userToken') !==null){
    _Router.navigate(['/home'])
  }
}
isloading:boolean =false;
apiError:string = '';
  registerForm:FormGroup =new FormGroup({
  name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
  rePassword:new FormControl(null,[Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)] ),
  phone:new FormControl(null, [Validators.required ,Validators.pattern(/^01[0125][0-9]{8}$/)]),
});
handleRegister(registerForm:FormGroup){
  this.isloading=true;
  if(registerForm.valid)
  {
this. _AuthService.register(registerForm.value).subscribe({
  next:(resposne)=> {
    if (resposne.message === 'success'){
      this.isloading=false;
this._Router.navigate(['/login'])
    }
  },
  error:(err)=>{
    this.isloading =false;
    this.apiError =err.error.errors.msg;
  
  }
  
})
  }


}

}
