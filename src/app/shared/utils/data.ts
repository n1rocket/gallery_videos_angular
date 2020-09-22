import { Asset } from '../models/asset.model';
import { Card } from "../models/card.model";
import { Challenge } from '../models/challenge.model';
import { Video } from '../models/video.model';

export class Data{

  static initialItems: Card[] = [
    new Card(
      Card.TYPE_AUDIO,
      Card.TAG_MUSICA,
      new Asset(
        'assets/songs/black-eyed-peas-shakira-girl-like-me-audio.mp3',
        'Para empezar vamos a poner un poquito de música, porque sabemos que ésta le da otro gusto a la vida.',
        'Spotify'
      )
    ),
    new Card(
      Card.TYPE_VIDEO,
      Card.TAG_HUMOR,
      new Video(
        'EuEM_yyc8fg',
        'Lo mejor de la cuarentena no podía ser otra cosa que esta...',
        'COVID-19'
      )
    ),
    new Card(
      Card.TYPE_CHALLENGE_VIDEO,
      Card.TAG_RETO,
      new Challenge(
        'gTOkc0qROdY',
        'Anécdota: Recuerdas aquel día que pasamos juntas tomando unas cervezas en aquel lugar donde terminamos besando a un calvo, qué buenos ratos!. (Laura)',
        'Laura',
        false,
        false
      )
    ),
    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_RECUERDO,
      new Asset(
        'assets/images/photo1eva.jpg',
        'Aquella playa en Canarias era la desconexión que necesitabas.',
        'Julio Pérez de Castro'
      )
    ),
    new Card(
      Card.TYPE_VIDEO,
      Card.TAG_RECUERDO,
      new Video(
        'x3wmqMMJD6E',
        'La vida en un vídeo, disfruta de tu cumpleaños!',
        'Laura Casarrubios'
      )
    ),
    new Card(
      Card.TYPE_CHALLENGE_VIDEO,
      Card.TAG_RETO,
      new Challenge(
        'K6ECvWkh2K8',
        'Recuerdo: Desde niños siempre hemos estado juntos, no había foto mía sin que aparecieses haciendo la gansa. Te quiero! (Hector)',
        'Hector',
        false,
        false
      )
    ),
    new Card(
      Card.TYPE_AUDIO,
      Card.TAG_RECUERDO,
      new Asset(
        'assets/audios/w001.ogg',
        'Espero que te guste mi mensaje de voz',
        'Paquita Salas'
      )
    ),
  ];

  static examples: Card[] = [
    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_ANECDOTA,
      new Asset(
        '',
        'En la parte superior derecha de cada una de estas tarjetas, hay etiquetas (RECUERDO, HUMOR, RETO, MUSICA, ANÉCDOTA). Cuando mandes el contenido, dime que ETIQUETA quieres que le asigne.',
        'Persona que envía el contenido'
      )
    ),
    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_HUMOR,
      new Asset(
        '',
        'Puedes simplemente mandar un mensaje o varios separados en distintas tarjetas.',
        'Persona que envía el contenido'
      )
    ),
    new Card(
      Card.TYPE_AUDIO,
      Card.TAG_MUSICA,
      new Asset(
        'assets/songs/black-eyed-peas-shakira-girl-like-me-audio.mp3',
        'Puedes mandarme nombres de canciones para incluírlas con un mensaje. Aquí puedes poner el mensaje que tu quieras. ',
        'Persona que envía el contenido'
      )
    ),
    new Card(
      Card.TYPE_AUDIO,
      Card.TAG_RECUERDO,
      new Asset(
        'assets/audios/w001.ogg',
        'Puedes mandar un mensaje de voz por whatsapp, ya sea cantando, contando una anécdota, un chiste o lo que necesites. Aquí puedes poner el mensaje que tu quieras. ',
        'Persona que envía el contenido'
      )
    ),
    new Card(
      Card.TYPE_VIDEO,
      Card.TAG_ANECDOTA,
      new Video(
        'gTOkc0qROdY',
        'Puedes mandar un vídeo grabado por tí en el que cuentes alguna anécdota o algún recuerdo bonito.',
        'Persona que envía el contenido'
      )
    ),
    new Card(
      Card.TYPE_VIDEO,
      Card.TAG_HUMOR,
      new Video(
        'EuEM_yyc8fg',
        'Puedes mandar vídeos cortos de humor, enlace de Youtube o vídeo que tengas por ahí.',
        'Persona que envía el contenido'
      )
    ),
    new Card(
      Card.TYPE_CHALLENGE_VIDEO,
      Card.TAG_RETO,
      new Challenge(
        'am1_JLFDFMw',
        'Puedes crear un vídeo oculto con una contraseña, que tenga que adivinar con este texto, o que tenga que ir a un lugar para obtener esa contraseña. Todo es posible. Tras descubrir la contraseña se desbloqueará el vídeo que hayas mandado. Ejemplo: Si pones \"Pepe\" puedes desbloquear el vídeo.',
        'Pepe',
        false,
        false
      )
    ),
    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_RECUERDO,
      new Asset(
        'assets/images/photo1eva.jpg',
        'Puedes mandar una foto o dibujo para incluírla entre sus recuerdos.',
        'Persona que envía el contenido'
      )
    ),

  ];
}
