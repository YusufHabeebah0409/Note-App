import { Routes } from '@angular/router';
import { App } from './app';
import { EditNote } from './edit-note/edit-note';
import { Home } from './home/home';
import { Signup } from './signup/signup';

export const routes: Routes = [
    { path: '', component: Home },
    {path: 'note/:id', component:EditNote, title: 'Edit Note'},
    {path: 'register', component:Signup, title: 'Sign Up'},
    {path: '**', redirectTo: ''}
];
