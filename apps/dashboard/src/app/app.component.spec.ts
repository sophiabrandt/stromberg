import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { render } from '@testing-library/angular'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
  it('shows App skeleton', async () => {
    const instance = await render(AppComponent, {
      imports: [HttpClientTestingModule, RouterTestingModule],
    })
    instance.getByRole('navigation')
    instance.getByRole('img')
    instance.getByRole('img', { name: /text containing the word stromberg/i })
    instance.getByRole('link', { name: /home/i })
    instance.getByRole('link', { name: /episodes/i })
    expect(instance.getByRole('article')).toHaveTextContent(/made with the stromberg API, nx and angular/i)
  })
})
