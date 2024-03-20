import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { MatchCardComponent } from '../../components/match-card/match-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [MatchCardComponent , CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
  providers:[ApiCallService]
})
export class HistoryComponent implements OnInit {

  allMatches : any;
  constructor(private api :ApiCallService){}

  ngOnInit(): void {
        this.api.getAllMatches().subscribe({
          next:data=>{
            this.allMatches = data
            console.log(data)
          },
          error : error=>{
            console.log(error)
          }
        })
  }
}
