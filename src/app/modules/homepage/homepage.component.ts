import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { CommonModule } from '@angular/common'
// import { SidebarComponent } from '../../components/common/sidebar/sidebar.component';
// import { NotFoundComponent } from '@modules/not-found/not-found.component';
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomepageComponent {}
