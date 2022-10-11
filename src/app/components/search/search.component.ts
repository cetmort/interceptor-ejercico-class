import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable, tap, map } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public rickMorty$!: Observable<any>;
  public rickMortyName = "";

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
  }

  onChange(){
    console.log(this.rickMortyName);
    this.rickMorty$ = this.apiService.searchName(this.rickMortyName).pipe(
    )
  }

}
