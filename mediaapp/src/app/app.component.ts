import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mediaApp';

  MyForm:any ;
  username = ""
  password :any
  LoggedUser = ""
  logins = true;
  logouts = false;
  selectedcol= "home";

  usersDB = [ {userid : 'abc@media.com',password:123456,usernamee:'TOM'}, 
              {userid : 'def@media.com',password:123456,usernamee:'JHON'},
              {userid : 'ghi@media.com',password:123456,usernamee:'JERRY'}]
  
  constructor(private modalService: NgbModal, private router:Router) { 

    sessionStorage.setItem('userLogged','false')    
  }

         
  login(){
    let cred;
    cred = this.usersDB.find((ele:any)=>{
      return this.username == ele.userid && this.password == ele.password;
    })
    if(cred){
      this.router.navigate(['/']);
      this.logouts = true;    
      this.logins = false;
      this.LoggedUser = cred.usernamee
      sessionStorage.setItem('userLogged','true')
    }else {
      alert("please enter valid details")
    }
  }
  userD:any=[]
  emaillist(vl:any){
    if(vl == '@'){
      this.userD =this.usersDB
    }else {
      this.userD =[]
    }
  }
  logout(){
    this.LoggedUser = ''
    this.router.navigate(['/home'])
    this.logins = true;
    this.logouts = false;
    this.username = "";
    this.password = '';
    sessionStorage.setItem('userLogged','false')

  }

  openLg(contentt: any) {
    this.modalService.open(contentt, { ariaLabelledBy: 'modal-basic-title' });
  }

  selectedLink(selected: any){
    this.selectedcol = selected
  }
}
