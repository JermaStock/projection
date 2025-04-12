import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {TuiAppearance, TuiButton, TuiRoot, TuiTitle} from '@taiga-ui/core';
import {TuiCardMedium} from '@taiga-ui/layout';
import {ProjectsService} from './pages/projects/services/projects.service';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {HeaderComponent} from './shared/components/layout/header/header.component';
import {ContentComponent} from './shared/components/layout/content/content.component';
import {FooterComponent} from './shared/components/layout/footer/footer.component';
import {LayoutComponent} from './shared/components/layout/layout/layout.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
}
