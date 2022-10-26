import { Component,Input, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NOTES } from '../models/notes';
import { NoteService } from '../services/note.service';
@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {
  notes:Note[] = [];
 
  constructor(private noteService:NoteService) { }
   search(searchText: string) {
     this.noteService.getNotes().subscribe({
       next: data => 
  
     {if(searchText || searchText !== ''){
    this.notes =data.filter(data => data?.title?.includes(searchText));}
     else
     {
       this.notes = data;
     }
   }})
   }
 
   flag=false;
   toggle(){
     if(this.flag){
       this.flag=false;
     }
     else{
       this.flag=true;
     }
   }
   
   
 
   ngOnInit(): void {
     this.noteService.getNotes().subscribe({
       next: data => {
         this.notes = data;
       }
     })
   }

}
