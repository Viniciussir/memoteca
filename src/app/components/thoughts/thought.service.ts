import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Thought } from './thought';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {

  private readonly API = 'http://localhost:3000/thought'

  constructor(
    private http: HttpClient
  ) { }

  getThought(currentPage:number, limitPage:number, filter:string): Observable<Thought[]> {
    let params = new HttpParams()
    .set('_page', currentPage)
    .set('_limit', limitPage)
    if(filter.trim().length > 2){
      params = params.set('q', filter)
    }
    return this.http.get<Thought[]>(this.API, {params})
  }

  creactThought(thought: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.API, thought)
  }

  editThought(thought: Thought): Observable<Thought> {
    const url = `${this.API}/${thought.id}`
    return this.http.put<Thought>(url, thought )
  }

  deleteThoughtById(id: number): Observable<Thought> {
    const url = `${this.API}/${id}`
    return this.http.delete<Thought>(url)
  }

  getById(id: number): Observable<Thought> {
    const url = `${this.API}/${id}`
    return this.http.get<Thought>(url)
  }

}
