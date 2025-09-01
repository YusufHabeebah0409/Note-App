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

  ngOnInit() {
    const notes = localStorage.getItem('NoteBooks')
    if (notes) {
      this.noteBooks = JSON.parse(notes)
    }
  }

  canvas = false;
  showCanvas() {
    this.canvas = true;
    console.log(this.canvas);
  }

  noteColour = ""
  pickColour(item: any) {
    this.noteColour = item;
    this.canvas = false;
    console.log(this.canvas);
    this.noteBgImage = "";

  }

  colors = ['#fff', '#5d6ea0ff', '#77172E', '#692B17', '#7C4A03', '#264D3B', '#0C625D', '#256377', '#284255', '#472E5B', '#6C394F', '#4b443A', '#2c407bff']



  noteTitle = ""
  noteContent = ""
  noteBooks: Array<{ title: string, content: string, colour: any, bgimage: any }> = []

  constructor() {
    document.addEventListener('mousedown', this.handleClickOutside.bind(this))
  }
  handleClickOutside(event: any) {
    const box = document.querySelector('#start-typing') as HTMLElement;
    if (box && !box.contains(event.target)) {
      if (this.noteTitle !== "" || this.noteContent !== "") {
        this.addNote();
        this.noteTitle = "";
        this.noteContent = "";
        console.log(this.noteBooks);
        // console.log("Clicked");
      }
    }
  }

  enterPressed(event: any) {
    if (event.key === "Enter") {
      document.getElementById('noteArea')?.focus();
    }
  }
  addNote() {
    this.noteBooks.push({ title: this.noteTitle, content: this.noteContent, colour: this.noteColour, bgimage: '' })
    console.log(this.noteBooks);
    localStorage.setItem('NoteBooks', JSON.stringify(this.noteBooks))
    this.noteTitle = ""
    this.noteContent = ""
  }


  delNote(index: number) {
    const removeItem = confirm("Are You Sure You Want To Delete This Note ")
    if (removeItem === true) {
      this.noteBooks.splice(index, 1)
      localStorage.setItem('NoteBooks', JSON.stringify(this.noteBooks))
    }
  }

  editNote() {
    alert('Working on me')
  }

  
backgroundImages = ['svgexport-29.png', 'svgexport-30.png','svgexport-31.png', 'svgexport-32.png', 'svgexport-33.png', 'svgexport-34.png', 'svgexport-35.png',
'svgexport-36.png', 'svgexport-37.png'
]

noteBgImage = ""
pickBackground(item: any){
  this.noteBgImage = item;
  this.noteColour = "";
}

}

