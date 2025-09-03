import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-note',
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-note.html',
  styleUrl: './edit-note.css'
})
export class EditNote implements OnInit{
  constructor(public activeRoute: ActivatedRoute){}

  title = ""
  noteContent = ""

  noteId:number = -1;
  note:any = {};
  ngOnInit(): void {
    this.noteId = this.activeRoute.snapshot.params['id'];
    
    const notes = JSON.parse(localStorage['NoteBooks']);

    this.note = notes[this.noteId];
    console.log(this.note);

    this.note = notes[this.note.index];
    this.title = this.note.title;
    this.noteContent = this.note.content;
  }

  autoExpand (){
    const editCard = document.querySelector('.edit-card')as HTMLElement;
    const noteBox = document.querySelector('.content')as HTMLElement;
    const titleBox = document.querySelector('.title')as HTMLElement;

    editCard.style.height = 'auto';
    editCard.style.height = titleBox.scrollHeight + noteBox.scrollHeight  + 50 +'px';
  }
  

}
