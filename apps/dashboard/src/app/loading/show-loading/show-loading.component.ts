import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'stromberg-show-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-loading.component.html',
  styleUrls: ['./show-loading.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowLoadingComponent {}
