import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { TeamsServiceService } from '../teams-service.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  showNavigationArrows = false;
  showNavigationIndicators = false;

  displayTeams = true
  displayPlayer :any

  Teams:any
  Players:any

  displayPlayers:any;

  constructor(config: NgbCarouselConfig, private teamsService:TeamsServiceService) { 
    config.interval = 2000;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
  
  ngOnInit(): void {
    this.Teams = this.teamsService.displayTeams;
    this.Players = this.teamsService.displayTeams;

  }

  openLg(player:any){
    let user = sessionStorage.getItem('userLogged');
    if(user == 'true'){
      for (let i = 0; i < this.Players.length; i++) {
        if (player == this.Players[i].imagePath) {
        this.displayPlayers = this.Players[i].teamPlayers
        // console.log(this.displayPlayers);
  
        this.displayTeams = false;
        this.displayPlayer = true
        }
      }
    }else {
      alert("Please Login")
    }
  }

  backToTeams(){
    this.displayTeams = true
    this.displayPlayer = false
  }
}
