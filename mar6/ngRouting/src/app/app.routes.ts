import { Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { GroupsComponent } from './groups/groups.component';

export const routes: Routes = [
    {path:'contacts' ,component: ContactsComponent},
    {path:'groups' ,component: GroupsComponent}
];
