import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'stromberg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  links = [
    { path: '/', title: 'home' },
    { path: '/episodes', title: 'episoden' },
  ]
}
