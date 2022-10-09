/* eslint-disable @typescript-eslint/no-empty-function */
import { of } from 'rxjs'
import { Episode } from '@stromberg/api-interfaces'

export const mockEpisodesFacade = {
  getAll: () => of(mockEpisodes),
  selectEpisode: () => {},
  selectedEpisode$: of(null),
}

export const mockEpisode: Episode = {
  id: 22,
  title: 'Der Protest',
  episode: 4,
  season: 3,
  description:
    'Die schwangere Maja Decker soll wegen einiger Fehler nach ihrem Mutterschutz nicht weiterbeschäftigt werden. Stromberg berichtet Herrn Wehmeyer darüber, sodass Herr Becker gezwungen ist, die Kündigung rückgängig zu machen. Nachdem Stromberg sogar eine Ausnahmegenehmigung für Ernies Sandwichtoaster bekommt, wird er von nun an in der Schadensregulierung Lurchi genannt. Die Schadensregulierung soll zusätzliche Arbeit ohne Lohnausgleich bekommen. Stromberg will eine Demonstration in Wehmeyers Büro veranstalten, was jedoch komplett fehlschlägt. Schließlich soll Jennifer Schirrmann entlassen werden, da Maja nun bleiben darf. Ernie macht sich in der Abteilung beliebt, indem er kostenlos Sandwiches verteilt.',
  script: 'Ralf Husmann Idee: Moritz Netenjakob',
  director: 'Arne Feldhusen',
  releaseDate: '26. Mär. 2007',
}

export const mockEpisodes: Episode[] = [
  {
    id: 35,
    title: 'Herr Nehring',
    episode: 9,
    season: 4,
    description:
      'Stromberg konnte der Zentrale etliche Versicherungsabschl\u00fcsse melden und hat aus Dankbarkeit eine Flasche Wein bekommen. In arroganter Weise lehnt er jedoch die Begleichung des Schadens von Herrn Nehring ab, der als einflussreicher Bewohner von Finsdorf bekannt ist. Aus Solidarit\u00e4t mit Herrn Nehring k\u00fcndigen etliche Finsdorfer ihre Versicherung, was Stromberg in arge Bedr\u00e4ngnis bringt. Er sieht sich gezwungen, sich mehr ins Finsdorfer Gemeindeleben einzubringen. Es gelingt ihm, teils drohend, teils bittend, Tanja dazu zu \u00fcberreden, dass sie \u2013 unter Verletzung von Vorschriften \u2013 die Ablehnung von Nehrings Antrag doch noch zur\u00fcckzieht. Gleichzeitig schl\u00e4gt er Jennifer vor, doch mal wieder einen sch\u00f6nen Abend mit ihm zu verbringen. Als er ihr erkl\u00e4rt, er wolle an einer Gemeinderatssitzung in Finsdorf teilnehmen, erkennt sie den Hintergedanken, sagt jedoch zu, um ihm zu helfen. Die Beziehung zwischen Tanja und Ulf verschlechtert sich weiter, w\u00e4hrend Ernie sich in eine junge Frau aus der Selbsthilfegruppe verliebt hat, die ihn wegen seiner Depression besonders attraktiv findet. Stromberg teilt Nehring mit, dass er seinen Antrag doch bewilligt hat, nimmt an der Gemeinderatssitzung teil und springt im Gemeindechor als Bariton ein. Mit Charme, jovialen Stimmungsliedern, aufgesetztem Finsdorf-Patriotismus und viel Alkohol schafft er es, die Herzen einiger Finsdorfer zur\u00fcckzugewinnen. Als Becker von der Bewilligung erf\u00e4hrt, macht er Tanja nieder und bereut die Entscheidung, sie bef\u00f6rdert zu haben. Diese bricht daraufhin zusammen und bekommt einen Weinkrampf. Stromberg f\u00e4llt ihr eiskalt in den R\u00fccken und gibt Becker recht. Daf\u00fcr verachtet ihn Jennifer, die in dieser Sache zu Tanja h\u00e4lt. In der Schlussszene ist Ernie knutschend mit seiner neuen Flamme Mia zu sehen.',
    script: 'Ralf Husmann & Moritz Netenjakob',
    director: 'Franziska Meletzky',
    releaseDate: '22. Dez. 2009',
  },
  {
    id: 36,
    title: 'Die Abrechnung',
    episode: 10,
    season: 4,
    description:
      'Als Stromberg das \u00fcbelriechende Sch\u00fctzenverein-Sakko eines Bekannten anziehen muss, um f\u00fcr ein Foto f\u00fcr die Finsdorfer Sch\u00fctzenvereinszeitung zu posieren, brennt ihm eine Sicherung durch. Er beschlie\u00dft, \u201eseine\u201c Abteilung zur\u00fcckzuerobern, und inszeniert dort eine Gedenkveranstaltung zu Erikas Todestag, den er gro\u00dfz\u00fcgig um einige Tage vorverlegt hat. Tanja befindet sich gerade in einem Meeting. Stromberg schenkt kr\u00e4ftig Alkohol aus und erreicht damit, dass die gesamte Abteilung nicht die wichtigen Zahlen f\u00fcr Tanja bearbeitet. Ulf hat Stromberg vorher gedankenlos mitgeteilt, dass hohe Manager in die Abteilung kommen werden, um eine Powerpoint-Pr\u00e4sentation Tanjas zu sehen; danach befindet sich Stromberg einige Minuten unbeobachtet im Pr\u00e4sentationsraum mit Tanjas Computer. Als Tanja die Erika-Gedenkparty sieht, platzt ihr der Kragen; sie verweist die Mitarbeiter lautstark auf ihre Pl\u00e4tze und Stromberg der Abteilung. Ernie bekommt eine Abmahnung, da er die Verpflichtung zur Erbringung der Arbeitsleistung nicht so ernst genommen hat. Stromberg schafft es, Tanja als herzlos gegen\u00fcber Erika darzustellen, und die Abteilung stellt sich gegen Tanja. Auch Ulf erkennt Strombergs Taktik nicht und ist illoyal gegen\u00fcber seiner Frau. Als Tanja eine Abteilungssitzung einberuft, taucht Stromberg wieder auf, um sie zu st\u00f6ren; diese ruft daraufhin den Sicherheitsdienst und Stromberg wird mithilfe eines Sicherheitsmitarbeiters hinausgeschafft. Parallel dazu schreit ihn der hinzugekommene Becker an und erteilt ihm Hausverbot. Stromberg schleicht sich in die Kantine und zettelt eine Meuterei unter den Abteilungsmitarbeitern an. Als die hohen Manager erscheinen, um Tanjas Pr\u00e4sentation zu sehen, taucht Stromberg einfach auf und ignoriert die Hinweise Beckers, dass er ja Hausverbot habe. Gegen\u00fcber den Managern vertritt er erfolgreich das Bild eines kompetenten und menschlichen Managers, w\u00e4hrend Tanja grandios scheitert: Irgendjemand muss ihre Pr\u00e4sentation mit l\u00e4cherlichen Bildern durchsetzt haben, als sie nicht da war. Die Folge endet mit einer ersch\u00fctterten Tanja, die sich in Ulfs Armen ausweint, und einem sichtlich zufriedenen Bernd Stromberg, der die Abteilungsleitung \u00fcbernommen hat. Ernies Beziehung zu Mia hat sich verfestigt.',
    script: 'Ralf Husmann',
    director: 'Franziska Meletzky',
    releaseDate: '29. Dez. 2009',
  },
  {
    id: 37,
    title: 'Malik',
    episode: 1,
    season: 5,
    description:
      'Da Herr Becker durch seine Scheidung Alkoholprobleme bekommen hat, \u00fcbernimmt Stromberg die Bewerbungsgespr\u00e4che der neuen Auszubildenden. Im Gespr\u00e4ch mit dem Muslim Malik \u00e4u\u00dfert sich Stromberg ihm gegen\u00fcber unpassend, weshalb er sich bei Herrn Becker beschwert. Stromberg hat in der Zwischenzeit einen anderen Kandidaten (Jonas) ausgew\u00e4hlt, der jetzt zun\u00e4chst nicht genommen werden kann, weil Herr Becker im Gespr\u00e4ch mit Stromberg deutlich macht, dass die Tochter von Herrn N\u00fcbel mit einem Tunesier verheiratet und ihm daher der Integrationsgedanke sehr wichtig sei. Stromberg stellt daraufhin Malik ein, der jedoch von Ernie nicht akzeptiert wird, da dieser inzwischen in einer katholischen Kirchengemeinde aktiv ist. Es kommt zur Eskalation, wodurch Malik von selbst wieder geht und Strombergs urspr\u00fcnglicher Kandidat wieder eingestellt wird. Stromberg teilt Herrn N\u00fcbel mit, dass Herr Becker Alkoholprobleme hat, woraufhin dieser vorl\u00e4ufig suspendiert und Stromberg kommissarischer Leiter der Schadensregulierung wird. Tanja versucht derweil schwanger zu werden, was jedoch nicht gelingt, u. a. auch weil Ulf dies zu verhindern versucht. Stromberg plant eine Fahrt nach Amsterdam mit Jennifer.',
    script: 'Ralf Husmann',
    director: 'Arne Feldhusen',
    releaseDate: '8. Nov. 2011',
  },
  {
    id: 22,
    title: 'Der Protest',
    episode: 4,
    season: 3,
    description:
      'Die schwangere Maja Decker soll wegen einiger Fehler nach ihrem Mutterschutz nicht weiterbeschäftigt werden. Stromberg berichtet Herrn Wehmeyer darüber, sodass Herr Becker gezwungen ist, die Kündigung rückgängig zu machen. Nachdem Stromberg sogar eine Ausnahmegenehmigung für Ernies Sandwichtoaster bekommt, wird er von nun an in der Schadensregulierung Lurchi genannt. Die Schadensregulierung soll zusätzliche Arbeit ohne Lohnausgleich bekommen. Stromberg will eine Demonstration in Wehmeyers Büro veranstalten, was jedoch komplett fehlschlägt. Schließlich soll Jennifer Schirrmann entlassen werden, da Maja nun bleiben darf. Ernie macht sich in der Abteilung beliebt, indem er kostenlos Sandwiches verteilt.',
    script: 'Ralf Husmann Idee: Moritz Netenjakob',
    director: 'Arne Feldhusen',
    releaseDate: '26. Mär. 2007',
  },
]
