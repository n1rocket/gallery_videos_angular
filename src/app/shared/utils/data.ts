import { Asset } from '../models/asset.model';
import { Card } from "../models/card.model";
import { Challenge } from '../models/challenge.model';
import { Video } from '../models/video.model';

export class Data{

  static initialItems: Card[] = [

    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_HUMOR,
      "CanaryIslands(<3)",
      new Asset(
        '',
        '-¿Te vienes a mi casa a hacer el trabajo de plástica? \n -Vale, me llevo la escuadra y el cartabón. \n-No tía, mi casa, mis reglas.',
        'Canario'
      )
    ),


    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_SORPRESA,
      "Laurissss[princess]<3",
      new Asset(
        'assets/images/pinypon2.jpeg',
        'Esta foto para que me recuerde siempre con manta como en la otra foto',
        'Lauris'
      )
    ),

    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_SORPRESA,
      "Laurissss[princess]<3",
      new Asset(
        'assets/images/pinypon1.jpeg',
        'Pin y pon en la isleta del millón',
        'Lauris'
      )
    ),
    

    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_SORPRESA,
      "DaniToleAndIdy%$12",
      new Asset(
        'assets/images/danitoledo1.jpeg',
        '',
        'Dani Toledo'
      )
    ),

    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_SORPRESA,
      "DaniToleAndIdy%$12",
      new Asset(
        'assets/images/idy1.jpeg',
        '',
        'Idy'
      )
    ),
    
    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_HUMOR,
      "Laura_5544289?",
      new Asset(
        'assets/images/laurac_02.jpeg',
        'Cumpleaños feliz, chupaté la nariz y sino te la chupas, te robaré un calcetín 🎶🎶🎶',
        'Laura'
      )
    ),
    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_SORPRESA,
      "Laura_5544289?",
      new Asset(
        'assets/images/laurac_01.jpeg',
        'Ya sé que las palabras no pueden sustituir un abrazo, pero sirven para hacerte llegar mis mejores deseos para tu cumpleaños. Y espero que salgamos a celebrar a un restaurante nuevo!!!!',
        'Laura'
      )
    ),
    new Card(
      Card.TYPE_VIDEO,
      Card.TAG_ANECDOTA,
      "Yvonne??yes!",
      new Video(
        '0Fb-NIFZA-Q',
        '#RAEInforma #AppVaSinMayuscula #LeasingEnCursiva',
        'Yvonne'
      )
    ),
    new Card(
      Card.TYPE_CHALLENGE_VIDEO,
      Card.TAG_RETO,
      "Yvonne??yes!",
      new Challenge(
        'Xm8i6YtFDGw',
        "Inteligencia artificial lleva mayúsculas (si/no)",
        'no',
        false,
        false,
        "Yvonne"
      )
    ),
    new Card(
      Card.TYPE_VIDEO,
      Card.TAG_ANECDOTA,
      "NachoQuero|Mahou1",
      new Video(
        '8wHfq9BxV50',
        'Su primera entrevista para la televisión de Linares. Estaba súper nerviosa, pero lo hizo genial.',
        'Nacho Quero'
      )
    ),
    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_SORPRESA,
      "Ángel#912",
      new Asset(
        'assets/images/nicolascage.gif',
        'Jappy Barry Evarista!! Pasalo en grande, disfruta a tope y nunca olvides a Nicholas, el nunca lo hará 😜😚.',
        'Ángel'
      )
    ),
    new Card(
      Card.TYPE_VIDEO,
      Card.TAG_SORPRESA,
      "Maria/00012",
      new Video(
        'smchZ-kAdFE',
        '',
        'María Martínez'
      )
    ),
    new Card(
      Card.TYPE_VIDEO,
      Card.TAG_MUSICA,
      "Christiam&924",
      new Video(
        '3SL0oRcD7t0',
        'Nada, se ha venido tu amiga Janice para felicitarte también 😜. Sigue soñando Eva, que si tus sueños son la mitad de bonitos que tú merecerán tanto la pena. Pasa un día genial y ya tomaremos una. ',
        'Christiam Romera'
      )
    ),
    new Card(
      Card.TYPE_VIDEO,
      Card.TAG_SORPRESA,
      "Christiam&924",
      new Video(
        'PV1NVz2LvgA',
        '',
        'Christiam Romera'
      )
    ),
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
        'Puedes crear un vídeo oculto con una contraseña, que tenga que adivinar con este texto, o que tenga que ir a un lugar para obtener esa contraseña. Todo es posible. Tras descubrir la contraseña se desbloqueará el vídeo que hayas mandado. Ejemplo: Si pones \"Pepe\" puedes desbloquear el vídeo. ¿Quién Soy?',
        'Pepe',
        false,
        false,
        "Pepe"
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
