import { Asset } from '../models/asset.model';
import { Card } from "../models/card.model";
import { Challenge } from '../models/challenge.model';
import { Video } from '../models/video.model';

export class Data{

  static initialItems: Card[] = [
    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_ANECDOTA,
      "Alex$777",
      new Asset(
        'assets/images/eva_alex_01.jpeg',
        'La primera vez que te vi me pareciste una especie de duendecillo feliz, ademas ibas un poco fresca, muchos botones de la blusa desabrochados... Pero me caíste muy bien porque sabias quien era Lee Hooker. Quién me iba a decir a mí todo lo que nos pasaría después...',
        'Alex'
      )
    ),
    new Card(
      Card.TYPE_VIDEO,
      Card.TAG_MUSICA,
      "Alex$777",
      new Video(
        'qzpPy9hJYA8',
        'Time of the Season - The Zombies - Ojalá algún día podamos volver a hacer este tipo de cosas, un besito. ',
        'Alex'
      )
    ),
    new Card(
      Card.TYPE_AUDIO,
      Card.TAG_RECUERDO,
      "Alex$777",
      new Asset(
        'assets/audios/eva_alex_audio_01.ogg',
        '',
        'Alex'
      )
    ),

  ];

  static examples: Card[] = [
    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_ANECDOTA,
      "Ejemplos",
      new Asset(
        '',
        'En la parte superior derecha de cada una de estas tarjetas, hay etiquetas (RECUERDO, HUMOR, RETO, MUSICA, ANÉCDOTA). Cuando mandes el contenido, dime que ETIQUETA quieres que le asigne.',
        'Persona que envía el contenido'
      )
    ),
    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_HUMOR,
      "Ejemplos",
      new Asset(
        '',
        'Puedes simplemente mandar un mensaje o varios separados en distintas tarjetas.',
        'Persona que envía el contenido'
      )
    ),
    new Card(
      Card.TYPE_AUDIO,
      Card.TAG_MUSICA,
      "Ejemplos",
      new Asset(
        'assets/songs/black-eyed-peas-shakira-girl-like-me-audio.mp3',
        'Puedes mandarme nombres de canciones para incluírlas con un mensaje. Aquí puedes poner el mensaje que tu quieras. ',
        'Persona que envía el contenido'
      )
    ),
    new Card(
      Card.TYPE_AUDIO,
      Card.TAG_RECUERDO,
      "Ejemplos",
      new Asset(
        'assets/audios/w001.ogg',
        'Puedes mandar un mensaje de voz por whatsapp, ya sea cantando, contando una anécdota, un chiste o lo que necesites. Aquí puedes poner el mensaje que tu quieras. ',
        'Persona que envía el contenido'
      )
    ),
    new Card(
      Card.TYPE_VIDEO,
      Card.TAG_ANECDOTA,
      "Ejemplos",
      new Video(
        'gTOkc0qROdY',
        'Puedes mandar un vídeo grabado por tí en el que cuentes alguna anécdota o algún recuerdo bonito.',
        'Persona que envía el contenido'
      )
    ),
    new Card(
      Card.TYPE_VIDEO,
      Card.TAG_HUMOR,
      "Ejemplos",
      new Video(
        'EuEM_yyc8fg',
        'Puedes mandar vídeos cortos de humor, enlace de Youtube o vídeo que tengas por ahí.',
        'Persona que envía el contenido'
      )
    ),
    new Card(
      Card.TYPE_CHALLENGE_VIDEO,
      Card.TAG_RETO,
      "Ejemplos",
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
      "Ejemplos",
      new Asset(
        'assets/images/photo0eva.png',
        'Puedes mandar una foto o dibujo para incluírla entre sus recuerdos.',
        'Persona que envía el contenido'
      )
    ),

  ];
}
