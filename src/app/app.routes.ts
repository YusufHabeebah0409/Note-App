import { Routes } from '@angular/router';
import { App } from './app';
import { EditNote } from './edit-note/edit-note';
import { Home } from './home/home';
import { Signup } from './signup/signup';
import { Login } from './login/login';

export const routes: Routes = [
    { path: '', component: Home },
    {path: 'note/:id', component:EditNote, title: 'Edit Note'},
    {path: 'register', component:Signup, title: 'Sign Up'},
    {path:'login', component:Login, title: 'Log In'},
    {path: '**', redirectTo: ''}
];
