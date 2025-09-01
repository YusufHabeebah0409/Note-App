import { Routes } from '@angular/router';
import { App } from './app';
import { EditNote } from './edit-note/edit-note';
import { Home } from './home/home';

export const routes: Routes = [
    { path: '', component: Home },
    {path: 'edit-note', component:EditNote, title: 'Edit Note'},
    {path: '**', redirectTo: ''}
];
