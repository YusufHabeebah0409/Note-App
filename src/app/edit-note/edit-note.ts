import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-edit-note',
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-note.html',
  styleUrl: './edit-note.css'
})
export class EditNote implements OnInit{
  constructor(public activeRoute: ActivatedRoute, private router: Router){}

  title = ""
  noteContent = ""

  noteId:number = -1;
  note:any = {};
  notes:any = [];
  ngOnInit(): void {
    this.noteId = this.activeRoute.snapshot.params['id'];
    
    const notes = JSON.parse(localStorage['NoteBooks']);

    this.note = notes[this.noteId];
    // console.log(this.note);
    this.title = this.note.title;
    this.noteContent = this.note.content;
    document.addEventListener('mousedown', this.handleClickOutside.bind(this));
    
  }

  handleClickOutside(event: any) {
    const editCard = document.querySelector('.edit-card')as HTMLElement;
    if (editCard && !editCard.contains(event.target)) {
      this.editNote();
    }
  }

  autoExpand (){
    const editCard = document.querySelector('.edit-card')as HTMLElement;
    const noteBox = document.querySelector('.content')as HTMLElement;
    const titleBox = document.querySelector('.title')as HTMLElement;

    editCard.style.height = 'auto';
    editCard.style.height = titleBox.scrollHeight + noteBox.scrollHeight  + 50 +'px';
  }

  editNote(){
    this.notes[this.noteId] = {
      title: this.title,
      note: this.noteContent,
      color: this.note.color,
      background: this.note.bgimage
    };
    localStorage.setItem('NoteBooks', JSON.stringify(this.notes));
    // this.router.navigate(['/']);
  }
  

}
