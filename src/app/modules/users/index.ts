import { Routes } from '@angular/router'
import { NewuserComponent } from './new-user/newuser.component'
import { ManagestudentComponent } from './manage-students/managestudent.component'
import { UserlistComponent } from './user-list/userlist.component'

export const routes: Routes = [
  {
    path: 'manage',
    title: 'Manage Users',
    component: ManagestudentComponent,
  },
  {
    path: 'new',
    title: 'New Users',
    component: NewuserComponent,
  },
  {
    path: '',
    title: 'User list',
    component: UserlistComponent,
  },
]
