import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './live.component.html',
  styleUrl: './live.component.css',
  providers: [ApiCallService]
})
export class LiveComponent implements OnInit{

  constructor(private api:ApiCallService){}

  ngOnInit(): void {
       this.loadLiveMatches()
  }
  private loadLiveMatches(){
    this.api.getLivematches().subscribe({
      next:data=>{
        console.log(data)
      },
      error : error=>{
        console.log(error)
      }
    });
  }
}
