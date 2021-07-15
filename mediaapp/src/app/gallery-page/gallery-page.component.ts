import { Component, OnInit } from '@angular/core';
import { TeamsServiceService } from '../teams-service.service';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent implements OnInit {
  displayTeams = true
  displayPlayer :any
  Teams: any;
  Players:any
  displayPlayers:any;
  constructor(private teamsService:TeamsServiceService) { }

  ngOnInit(): void {
    this.Teams = this.teamsService.displayTeams;
    this.Players = this.teamsService.displayTeams;
  }
  showPlayers(player: any){
    for (let i = 0; i < this.Players.length; i++) {
      if (player == this.Players[i].imagePath) {
      this.displayPlayers = this.Players[i].teamPlayers
      // console.log(this.displayPlayers);

      this.displayTeams = false;
      this.displayPlayer = true
      }
    }
  }

  backToTeams(){
    this.displayTeams = true
    this.displayPlayer = false
  }

}
