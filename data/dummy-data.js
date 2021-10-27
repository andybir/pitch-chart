import Event from '../models/event';
import Batter from '../models/batter';
import Pitcher from '../models/pitcher'

export const EVENTS = [
  new Event(
    'e1',
    "07/28/2021",
    'Estadio Tetelo Vargas',
    "J. Perez",
    'Felix Cotes',
    '08/31/2005',
    'L',
    'Adalfi Paredes',
    '06/04/2001',
    'R'
  ),
  new Event(
    'e2',
    '07/28/2021',
    'Estadio Julián Javier',
    'J. Perez',
    'Nicandro Aybar',
    '09/08/2004',
    'L',
    'Adalfi Paredes',
    '06/04/2001',
    'R'
  ),
  new Event(
    'e3',
    '07/28/2021',
    'Estadio Quisqueya',
    'J. Perez',
    'Angel Ventura',
    '03/10/2006',
    'R',
    'Frederick Aybar',
    '01/18/2004',
    'R'
  ),
  new Event(
    'e4',
    '08/01/2021',
    'Estadio Quisqueya',
    'J. Perez',
    'Luis Castillo',
    '01/12/2005',
    'R',
    'Adalfi Paredes',
    '06/04/2001',
    'R'
  ),
];

export const BATTERS = [
  new Batter(
    1,
    'Felix Cotes',
    '08/13/2005',
    'L'
  ),
  new Batter(
    2,
    'Nicandro Aybar',
    '09/08/2004',
    'L'
  ),
  new Batter(
    3,
    'Angel Ventura',
    '03/10/2006',
    'R'
  ),
  new Batter(
    4,
    'Luis Castillo',
    '01/12/2005',
    'R'
  )
]

export const PITCHERS = [
  new Pitcher(
    1,
    'Adalfi Paredes',
    '06/04/2001',
    'R'
  ),
  new Pitcher(
    2,
    'Frederick Aybar',
    '01/18/2004',
    'R'
  ),
  new Pitcher(
    3,
    'Carlos Green',
    '04/18/2005',
    'R'
  ),
  new Pitcher(
    4,
    'Christofer Virgen',
    '01/05/2001',
    'R'
  )
]