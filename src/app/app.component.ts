import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en')
  }

  title = 'peakachu'

  switchLanguage(language: string) {
    this.translate.use(language)
  }
}
