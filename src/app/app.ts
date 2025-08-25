import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { noop } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  
  ngOnInit(){
    const notes = localStorage.getItem('NoteBooks')
    if(notes){
      this.noteBooks = JSON.parse(notes)
    }
  }
  noteTitle = ""
  noteContent = ""
  noteBooks: Array<{title: string, content:string}>= []
  addNote(){
    if(this.noteTitle == "" || this.noteContent ==""){
      alert("Please Input All Field")
    }else{
      this.noteBooks.push({title: this.noteTitle, content: this.noteContent})
      console.log(this.noteBooks);
      localStorage.setItem('NoteBooks', JSON.stringify(this.noteBooks))
      this.noteTitle = ""
      this.noteContent = ""
    }
  }

  delNote(index: number){
    const removeItem = confirm("Are You Sure You Want To Delete This Note ")
    if(removeItem == true){
      this.noteBooks.splice(index, 1)
      localStorage.setItem('NoteBooks', JSON.stringify(this.noteBooks))
    }
  }

  editNote(){
    alert('Working on me')
  }
}
