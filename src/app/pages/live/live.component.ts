import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatchCardComponent } from '../../components/match-card/match-card.component';

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [HttpClientModule, CommonModule,MatchCardComponent],
  templateUrl: './live.component.html',
  styleUrl: './live.component.css',
  providers: [ApiCallService]
})
export class LiveComponent implements OnInit{

  liveMatches : any;
  constructor(private api:ApiCallService){}

  ngOnInit(): void {
       this.loadLiveMatches()
  }
  private loadLiveMatches(){
    this.api.getLivematches().subscribe({
      next:data=>{
        console.log(data)
        this.liveMatches = data
      },
      error : error=>{
        console.log(error)
      }
    });
  }
}
