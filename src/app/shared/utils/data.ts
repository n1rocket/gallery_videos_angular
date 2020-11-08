import { Asset } from '../models/asset.model';
import { Card } from "../models/card.model";
import { Challenge } from '../models/challenge.model';
import { Video } from '../models/video.model';

export class Data{

  static initialItems: Card[] = [


    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_HUMOR,
      "C.Jhoan#Becario",
      new Asset(
        'assets/images/evalajefa.jpeg',
        '',
        'Jhoan'
      )
    ),

    new Card(
      Card.TYPE_AUDIO,
      Card.TAG_SORPRESA,
      "C.Jhoan#Becario",
      new Asset(
        'assets/audios/jhoan.ogg',
        '',
        'Jhoan'
      )
    ),

    new Card(
      Card.TYPE_VIDEO,
      Card.TAG_SORPRESA,
      "JavisInDaHouse100%Real",
      new Video(
        '',
        '',
        'Javis'
      )
    ),
    new Card(
      Card.TYPE_VIDEO,
      Card.TAG_SORPRESA,
      "Velas&ScarletForEver2020$",
      new Video(
        '',
        '',
        'Jorge'
      )
    ),
    new Card(
      Card.TYPE_VIDEO,
      Card.TAG_SORPRESA,
      "-Aida/bonita-",
      new Video(
        '',
        '',
        'Aída'
      )
    ),

    new Card(
      Card.TYPE_VIDEO,
      Card.TAG_SORPRESA,
      "MiguelPlaya%11¿?",
      new Video(
        '',
        '',
        'Miguel'
      )
    ),
    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_SORPRESA,
      "(1)Carmen//*1",
      new Asset(
        '',
        'Holaa Eva!! Te acuerdas de mi?? Jejeje. Soy Carmen y he de decir que si no hubieses sido tú mi tutora de prácticas habría sido muuuuy diferente. Pero hiciste que pasará unos meses geniales y me enseñaste muuchas cosas, así que te doy las gracias. No sólo hiciste que mis prácticas fueran geniales, te conocí a ti, y esos poquitos meses contigo me hicieron conocerte un poquito y la verdad es que eres una persona maravillosa, llena de alegría, locura, amor y suuuper divertida. Así que un besazo y muchiiiisimas felicidades 💗💗',
        'Carmen'
      )
    ),
    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_SORPRESA,
      "()Mario//333",
      new Asset(
        '',
        'Muchas felicidades Eva!! Espero que disfrutes mucho de tu día y de esta gran sorpresa que te han preparado ya que es un año atípico al menos te saquen una sonrisa !! Que cumplas muchos más!! Un beso y abrazo !!😘😘',
        'Mario'
      )
    ),
    new Card(
      Card.TYPE_VIDEO,
      Card.TAG_SORPRESA,
      "PeibolMarmol%100",
      new Video(
        'AJbfV_ogyTU',
        '',
        'Peibol'
      )
    ),

    new Card(
      Card.TYPE_VIDEO,
      Card.TAG_HUMOR,
      "2AppMando%·$%&/()11",
      new Video(
        'pA3-oVSRHz0',
        '',
        'Armando'
      )
    ),

    new Card(
      Card.TYPE_VIDEO,
      Card.TAG_MUSICA,
      "2AppMando%·$%&/()11",
      new Video(
        '5xGqUompVVQ',
        '',
        'Armando'
      )
    ),

    new Card(
      Card.TYPE_VIDEO,
      Card.TAG_MUSICA,
      "2AppMando%·$%&/()11",
      new Video(
        'DyDfgMOUjCI',
        '',
        'Armando'
      )
    ),

    new Card(
      Card.TYPE_VIDEO,
      Card.TAG_MUSICA,
      "2AppMando%·$%&/()11",
      new Video(
        'vGJTaP6anOU',
        '',
        'Armando'
      )
    ),

    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_RECUERDO,
      "2AppMando%·$%&/()11",
      new Asset(
        'assets/images/festivaleva.jpg',
        '',
        'Armando'
      )
    ),
    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_RECUERDO,
      "2AppMando%·$%&/()11",
      new Asset(
        'assets/images/hack.jpg',
        'Pichurrines por aquí, pichurrines por allá...',
        'Armando'
      )
    ),
    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_RECUERDO,
      "2AppMando%·$%&/()11",
      new Asset(
        'assets/images/lilo.jpg',
        'LILO & Stitch.',
        'Armando'
      )
    ),
    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_RECUERDO,
      "2AppMando%·$%&/()11",
      new Asset(
        'assets/images/stop-covid.jpg',
        'Stop COVID, please.',
        'Armando'
      )
    ),
    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_RECUERDO,
      "2AppMando%·$%&/()11",
      new Asset(
        'assets/images/aleman.jpg',
        'Alemanes en Canarias ❤️',
        'Armando'
      )
    ),
    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_RECUERDO,
      "2AppMando%·$%&/()11",
      new Asset(
        'assets/images/meditation.jpg',
        '',
        'Armando'
      )
    ),
    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_RECUERDO,
      "2AppMando%·$%&/()11",
      new Asset(
        'assets/images/yvonne_first.jpg',
        'Conociendo a Yvonne, la sorpresa que llegó a tu vida 🎉',
        'Armando'
      )
    ),
    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_RECUERDO,
      "2AppMando%·$%&/()11",
      new Asset(
        'assets/images/palma.jpg',
        'Como la experiencia del barco 👀, ninguna.',
        'Armando'
      )
    ),
    new Card(
      Card.TYPE_VIDEO,
      Card.TAG_MUSICA,
      "2AppMando%·$%&/()11",
      new Video(
        'h_D3VFfhvs4',
        'Michael Jackson - ¡Minnie es un chiwaka, Minnie es un chiwaka, un chiwaka MINNIE!',
        'Armando'
      )
    ),
    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_RECUERDO,
      "2AppMando%·$%&/()11",
      new Asset(
        'assets/images/motera.jpg',
        'Motera y guerrera.',
        'Armando'
      )
    ),
    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_RECUERDO,
      "2AppMando%·$%&/()11",
      new Asset(
        'assets/images/gomera_2.jpg',
        'No está mal el lugar, pero la chica está preciosa.',
        'Armando'
      )
    ),
    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_RECUERDO,
      "2AppMando%·$%&/()11",
      new Asset(
        'assets/images/gomera_1.jpg',
        'Que vuelvan las vacaciones...',
        'Armando'
      )
    ),
    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_RECUERDO,
      "2AppMando%·$%&/()11",
      new Asset(
        'assets/images/selva.jpg',
        'Oculta entre la selva, espera acechante...',
        'Armando'
      )
    ),
    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_RECUERDO,
      "2AppMando%·$%&/()11",
      new Asset(
        'assets/images/especial.jpg',
        'ES-PE-CIAL',
        'Armando'
      )
    ),
    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_RECUERDO,
      "2AppMando%·$%&/()11",
      new Asset(
        'assets/images/eva_camino.jpg',
        '',
        'Armando'
      )
    ),
    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_RECUERDO,
      "2AppMando%·$%&/()11",
      new Asset(
        'assets/images/eva_animales.jpg',
        'Tienes un don con los animales. Mi teoría es sencilla, ellos sienten la bondad que hay dentro de tí, la misma bondad que hace que tengas a muchas personas bonitas en tu vida. ¡Como animal intentaría no separarme de tí en la vida! ',
        'Armando'
      )
    ),
    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_RECUERDO,
      "2AppMando%·$%&/()11",
      new Asset(
        'assets/images/eva_skate.jpg',
        'Tu parte más innovadora quiere aprender, tu parte más calmada quiere seguridad, pero tu parte más loca quiere probar.',
        'Armando'
      )
    ),

    new Card(
      Card.TYPE_VIDEO,
      Card.TAG_MUSICA,
      "2AppMando%·$%&/()11",
      new Video(
        'Qtb11P1FWnc',
        '',
        'Armando'
      )
    ),

    new Card(
      Card.TYPE_AUDIO,
      Card.TAG_MUSICA,
      "2AppMando%·$%&/()11",
      new Asset(
        'assets/songs/black-eyed-peas-shakira-girl-like-me-audio.mp3',
        'Black Eyed Peas',
        'Armando'
      )
    ),

    new Card(
      Card.TYPE_VIDEO,
      Card.TAG_HUMOR,
      "2AppMando%·$%&/()11",
      new Video(
        'BBVlgO7oXus',
        'El mejor meme del COVID-19 para tí 😘',
        'Armando'
      )
    ),

    new Card(
      Card.TYPE_VIDEO,
      Card.TAG_SORPRESA,
      "CanaryIslands(<3)",
      new Video(
        'BBVlgO7oXus',
        '',
        'Canario'
      )
    ),

    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_RECUERDO,
      "CanaryIslands(<3)",
      new Asset(
        'assets/images/perrito.jpg',
        '',
        'Canario'
      )
    ),

    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_RECUERDO,
      "CanaryIslands(<3)",
      new Asset(
        'assets/images/granada.jpg',
        '',
        'Canario'
      )
    ),

    new Card(
      Card.TYPE_CHALLENGE_VIDEO,
      Card.TAG_RETO,
      "CanaryIslands(<3)",
      new Challenge(
        '99gA1kNmDBk',
        "Nombre del grupo de música ficticio liderado por una pelirroja muy bonita y tres lentejas de chocolate con leche recubierta por 150 capas de azúcar. (Respuesta toda en mayusculas)",
        'EVA Y LOS LACASITOS',
        false,
        false,
        "Canario"
      )
    ),
    new Card(
      Card.TYPE_AUDIO,
      Card.TAG_RECUERDO,
      "CanaryIslands(<3)",
      new Asset(
        'assets/audios/basura.aac',
        '',
        'Canario'
      )
    ),
    new Card(
      Card.TYPE_VIDEO,
      Card.TAG_HUMOR,
      "CanaryIslands(<3)",
      new Video(
        '-CI3wCy0BjA',
        '',
        'Canario'
      )
    ),

    new Card(
      Card.TYPE_VIDEO,
      Card.TAG_MUSICA,
      "CanaryIslands(<3)",
      new Video(
        'Yx09-v8KfPs',
        'Sobre cómo un silbidito puede levantar el ánimo de una oficina entera. Seguro que lo tienes en la cabeza ahora mismo!',
        'Canario'
      )
    ),

    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_HUMOR,
      "CanaryIslands(<3)",
      new Asset(
        '',
        '-¿Te vienes a mi casa a hacer el trabajo de plástica?               -Vale, me llevo la escuadra y el cartabón.         -No tía, mi casa, mis reglas.',
        'Canario'
      )
    ),


    new Card(
      Card.TYPE_PHOTO,
      Card.TAG_SORPRESA,
      "Laurissss[princess]<3",
      new Asset(
        'assets/images/pinypon2.jpeg',
        'Felisitasiones a la mejor compi de isleta!!! Guapetona disfruta de tu día que te lo mereces. I miss you beri mach, quiero volver a quemar palomitas pronto contigo!!',
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
