import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DefaultEpisodesFacadeService, DummyEpisodesFacadeService } from '@stromberg/episodes';
import { render } from '@testing-library/angular';
import { EpisodesListComponent } from '../episodes/episodes-list/episodes-list.component';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  it('shows episodes on HomeComponent', async () => {
    const instance = await render(HomeComponent, {
      imports: [HttpClientTestingModule],
      declarations: [EpisodesListComponent],
      providers: [
        {
          provide: DefaultEpisodesFacadeService,
          useClass: DummyEpisodesFacadeService,
        },
      ],
    })
    instance.getByRole('heading', { name: /Herr Nehring/i })
  })
})
