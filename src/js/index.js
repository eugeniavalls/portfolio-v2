// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const mainElement = document.getElementById('main');
const buttonDescription = document.getElementById('button-description');
const description = document.getElementById('description');
const descriptionClose = document.getElementById('description__close');
const descriptionContainerText = document.getElementById('description__container-text');
const descriptionTitle = document.getElementById('description__title');
const descriptionText = document.getElementById('description__text');
const descriptionIcons = document.getElementById('description__icons');

let textLanguage = 'en';
const descriptions = {
  bingo: {
    title: 'BINGO. PRACTICE WITH JAVASCRIPT',
    titulo: 'BINGO. PRÁCTICA CON JAVASCRIPT',
    description:
      'Exercise to practice JavaScript. Create 3 containers: user´s card, bingo numbers, computer´s card. Function to generate a random number between 1 and 99. Function to generate 15 unique random numbers and store them in an array. The player´s card and the computer´s card can have repeating numbers, but the same number cannot repeat within the same card. Use this function to fill both cards within another function. Fill the bingo with numbers from 1 to 99. Function to select a random number between 1 and 99 to mark it on the bingo card every X seconds, mine is every 1 second. Mark the drawn number on the bingo card. Search for matches in the player´s and computer´s cards to mark them. Each time we search for matches, check if all numbers are marked or not. If all are marked, the game ends, and the player who completed the card first wins.',
    descripcion:
      'Ejercicio para poner en práctica JavaScript. Crear 3 contenedores, cartón del usuario, números del bingo, cartón del ordenador. Función que genere un número aleatorio entre 1 y 99. Función que genere 15 números aleatorios que no se repitan y los guarde en un array. El cartón del jugador y el del ordenador pueden tener números que se repitan, pero no puede repetirse un número en el mismo cartón. Usar esa función para rellenar los 2 cartones dentro de otra función. Rellenar el bingo con números del 1 al 99. Función que seleccione un número aleatorio entre el 1 y el 99 para marcarlo en el cartón de bingo cada X segundos, el mío es cada 1 segundo. Marcar el número que ha salido en el cartón del bingo. Buscar en los cartones de los jugadores coincidencias para marcarlo. Cada vez que busquemos coincidencias comprobar si ya están todos marcados o no, si ya se han marcado todos, el juego termina y gana el jugador que haya completado el cartón antes.',
    images: ['./assets/images/html5.svg', './assets/images/css.svg', './assets/images/javascript.svg', './assets/images/bem.svg', './assets/images/sass.svg']
  },

  wordle: {
    title: 'WORDLE. PRACTICE WITH JAVASCRIPT',
    titulo: 'WORDLE. PRÁCTICA CON JAVASCRIPT',
    description:
      'Exercise to practice JavaScript. Start with CSS. Create an array with five-letter words. Pick a random word from the array. If the word I type has fewer than 5 letters or more than 5, show a message that the word must contain 5 letters. Make the text I enter in the form appear on the grid. Each time I enter a word, add it to the line below the previous one. If a letter is in the correct position, color it green (by iterating). Check that the letters in the word I enter are colored gray if they are not present (by iterating). If a letter is present but not in the correct position, color it yellow (by iterating). Create animations.',
    descripcion:
      'Ejercicio para poner en práctica JavaScript. Realizar primero el CSS. Crear un array con palabras de cinco letras. Sacar una palabra aleatoria del array. Si la palabra que escribo contiene menos 5 letras o mas de 5 que salte un aviso de que la palabra debe contener 5 letras. Hacer que el texto que yo meta en el form se pinte en el grid. Hacer que cada vez que yo pinte una palabra se añada a la línea de bajo de la anterior. Si la letra está en la posición correcta que se pinte verde (recorriendo). Verificar que la palabra que yo meta si las letras no están se pinten en gris (recorriendo). Si la letra está pero no en la posición correcta que se pinte de amarillo (recorriendo). Crear animaciones.',
    images: ['./assets/images/html5.svg', './assets/images/css.svg', './assets/images/javascript.svg', './assets/images/bem.svg', './assets/images/sass.svg']
  },

    copy: {
      title: 'RESPONSIVE PRACTICE WITH BEM METHODOLOGY AND SASS LANGUAGE',
      titulo: 'PRÁCTICA RESPONSIVE CON METODOLOGÍA BEM Y LENGUAJE SASS',
      description:
        'This exercise is aimed at applying the Block Element Modifier (BEM) methodology along with the SASS stylesheet language. It focuses on utilizing the "display" and "position" properties. Furthermore, the implementation will be carried out with responsiveness in mind, adapting the design for both desktop and mobile devices. It will also consider the inclusion of background images in certain specific sections. Additionally, the flexible direction property ("flex-direction") will be used with the "row-reverse" value.',
      descripcion:
        'Este ejercicio se plantea con el propósito de aplicar la metodología Block Element Modifier (BEM) en conjunto con el lenguaje de hojas de estilo SASS. Se enfoca en la utilización de las propiedades "display" y "position". Asimismo, se llevará a cabo la implementación en un diseño receptivo, adaptándolo tanto para visualización en dispositivos de escritorio como en dispositivos móviles. Se considerará la incorporación de imágenes de fondo ("background-image") en ciertas secciones específicas. Además, se empleará la dirección flexible ("flex-direction") con el valor "row-reverse".',
      images: ['./assets/images/html5.svg', './assets/images/css.svg', './assets/images/javascript.svg', './assets/images/bem.svg', './assets/images/sass.svg']
    },


    easybank: {
        title: 'RESPONSIVE PRACTICE WITH BEM METHODOLOGY AND SASS. DROP-DOWN MENU, OVERFLOW, AND Z-INDEX',
        titulo: 'PRÁCTICA RESPONSIVE CON METODOLOGÍA BEM Y LENGUAJE SASS. MENÚ DESPLEGABLE, OVERFLOW Y Z-INDEX',
        description:
          'This exercise is proposed with the objective of putting into practice the Block Element Modifier (BEM) methodology together with the SASS stylesheet language. The "display" and "position" properties will be used to achieve the desired design. The implementation will be focused on responsiveness, covering both computers and mobile devices. It will include creating a specific drop-down menu for mobiles, while in the desktop version, a hover effect will be applied to menu words, highlighting them with underlines and gradients. Additionally, background images ("background-image") will be used in certain sections with caution to avoid overflow issues through the "overflow: hidden" property. Lastly, the "z-index" property will be utilized to properly position the elements in the design.',
        descripcion:
          'Se plantea este ejercicio con el objetivo de poner en práctica la metodología Block Element Modifier (BEM) junto con el lenguaje de hojas de estilo SASS. Se hará uso de las propiedades "display" y "position" para lograr el diseño deseado. La implementación se orientará hacia la adaptación a diferentes dispositivos, abarcando tanto ordenadores como dispositivos móviles. Se incluirá la creación de un menú desplegable específico para móviles, mientras que en la versión para ordenadores se aplicará un efecto "hover" en las palabras del menú, resaltándolas mediante subrayado y degradado. Además, se emplearán imágenes de fondo ("background-image") en ciertas secciones con precaución para evitar desbordamientos mediante la propiedad "overflow: hidden". Por último, se utilizará "z-index" para posicionar adecuadamente los elementos en el diseño.',
        images: ['./assets/images/html5.svg', './assets/images/css.svg', './assets/images/javascript.svg', './assets/images/bem.svg', './assets/images/sass.svg']
    },

    fylo: {
        title: 'RESPONSIVE PRACTICE WITH BEM METHODOLOGY AND SASS',
        titulo: 'PRÁCTICA RESPONSIVE CON METODOLOGÍA BEM Y LENGUAJE SASS',
        description:
          'The purpose of this exercise is to carry out the implementation of the Block Element Modifier (BEM) methodology and the SASS stylesheet language. The "display" and "position" properties will be used to achieve the desired design. Additionally, the focus will be on creating a responsive experience for viewing on both computers and mobile devices. The "box-shadow" property will be applied to add a subtle shadow to the cards, providing an appealing aesthetic effect in the final design.',
        descripcion:
          'El propósito de este ejercicio es llevar a cabo la implementación de la metodología Block Element Modifier (BEM) y el lenguaje de hojas de estilo SASS. Se hará uso de las propiedades "display" y "position" para lograr el diseño deseado. Asimismo, se enfocará en crear una experiencia receptiva para visualización tanto en ordenadores como en dispositivos móviles. Se aplicará la propiedad "box-shadow" para agregar una sombra sutil a las tarjetas ("cards"), brindando un efecto estético atractivo en el diseño final.',
        images: ['./assets/images/html5.svg', './assets/images/css.svg', './assets/images/javascript.svg', './assets/images/bem.svg', './assets/images/sass.svg']
    },  

    fylodark: {
        title: 'RESPONSIVE PRACTICE WITH BEM METHODOLOGY AND SASS. DARK/LIGHT MODE VERSION',
        titulo: 'PRÁCTICA RESPONSIVE CON METODOLOGÍA BEM Y LENGUAJE SASS. VERSIÓN DARK/LIGHT MODE',
        description:
          'This exercise aims to carry out the implementation of the Block Element Modifier (BEM) methodology and the SASS stylesheet language. The "display" and "position" properties will be used to define the structure and positioning of the elements. Additionally, a responsive adaptation will be performed to ensure proper functionality and visualization of the content on both desktop and mobile devices. In this context, two versions of the practice will be created: one in dark mode and another in light mode. This achievement will be accomplished using JavaScript and variables that allow changing the appearance and styles of the elements based on the user is preference or environment. The implementation of these alternative modes will enhance the user experience and ensure accessibility and comfort in different viewing scenarios.',
        descripcion:
          'Este ejercicio tiene como objetivo llevar a cabo la implementación de la metodología Block Element Modifier (BEM) y el lenguaje de hojas de estilo SASS. Se hará uso de las propiedades "display" y "position" para definir la estructura y el posicionamiento de los elementos. Además, se realizará una adaptación receptiva que garantice el correcto funcionamiento y visualización del contenido en dispositivos tanto de escritorio como móviles. En este contexto, se llevará a cabo la creación de dos versiones de la práctica: una en modo oscuro (dark mode) y otra en modo claro (light mode). Este logro se obtendrá mediante el uso de JavaScript y variables que permitan cambiar la apariencia y los estilos de los elementos en función de la preferencia del usuario o del entorno. La implementación de estos modos alternativos enriquecerá la experiencia de usuario y asegurará la accesibilidad y comodidad en diferentes escenarios de visualización.',
        images: ['./assets/images/html5.svg', './assets/images/css.svg', './assets/images/javascript.svg', './assets/images/bem.svg', './assets/images/sass.svg']
    }, 
    
    huddle: {
        title: 'RESPONSIVE PRACTICE WITH BEM METHODOLOGY AND SASS',
        titulo: 'PRÁCTICA RESPONSIVE CON METODOLOGÍA BEM Y LENGUAJE SASS',
        description:
          'This exercise aims to practice the application of the Block Element Modifier (BEM) methodology and the SASS stylesheet language. It will focus on utilizing the "display" and "position" properties to establish the structure and positioning of elements in a suitable manner. Furthermore, a responsive implementation will be carried out, ensuring optimal adaptation of the content to both computer and mobile devices. A "hover" effect will be applied to buttons, visually highlighting them when interacting with them. Additionally, background images ("background-image") will be used in specific sections of the design, adding an appealing aesthetic and visual value. To achieve a flexible arrangement of elements, "flex-direction" will be used with the "row-reverse" value, allowing for a reverse horizontal layout of elements within their containers. Collectively, these approaches and techniques will contribute to a practice that encourages effective use of BEM, SASS, and advanced CSS resources to create an attractive and adaptable design across various screens and devices.',
        descripcion:
          'Este ejercicio tiene como propósito ejercitar la aplicación de la metodología Block Element Modifier (BEM) y el lenguaje de hojas de estilo SASS. Se enfocará en la utilización de las propiedades "display" y "position" para establecer la estructura y posicionamiento de los elementos de manera adecuada. Asimismo, se llevará a cabo una implementación receptiva, garantizando que el contenido se adapte óptimamente tanto a dispositivos de ordenador como a dispositivos móviles. Se aplicará un efecto "hover" en los botones, resaltándolos visualmente al interactuar con ellos. Además, se emplearán imágenes de fondo ("background-image") en secciones específicas del diseño, agregando un valor estético y visual atractivo. Para obtener una disposición flexible de los elementos, se utilizará "flex-direction" con el valor "row-reverse", lo que permitirá una disposición horizontal inversa de los elementos dentro de sus contenedores. En conjunto, estos enfoques y técnicas contribuirán a una práctica que fomenta la utilización efectiva de BEM, SASS y recursos avanzados de CSS para crear un diseño atractivo y adaptable a diversas pantallas y dispositivos.',
        images: ['./assets/images/html5.svg', './assets/images/css.svg', './assets/images/javascript.svg', './assets/images/bem.svg', './assets/images/sass.svg']
    },

    huddle2: {
        title: 'RESPONSIVE PRACTICE WITH BEM METHODOLOGY AND SASS',
        titulo: 'PRÁCTICA RESPONSIVE CON METODOLOGÍA BEM Y LENGUAJE SASS',
        description:
          'The purpose of this exercise is to apply the Block Element Modifier (BEM) methodology and the SASS stylesheet language in a concrete practice. The "display" and "position" properties will be used to establish the structure and arrangement of elements in the design. Additionally, the creation of an adaptable and responsive interface will be put into practice to ensure proper visualization on both computer and mobile devices. The integration of BEM and SASS will enable a more efficient and modular organization of the CSS code, facilitating project maintenance and scalability. Together, these techniques will promote a more structured and professional front-end development.',
        descripcion:
          'Este ejercicio tiene como finalidad aplicar la metodología Block Element Modifier (BEM) y el lenguaje de hojas de estilo SASS en una práctica concreta. Se hará uso de las propiedades "display" y "position" para establecer la estructura y disposición de los elementos en el diseño. Además, se pondrá en práctica la creación de una interfaz adaptable y receptiva que garantice una correcta visualización tanto en dispositivos de ordenador como en dispositivos móviles. La integración de BEM y SASS permitirá una organización más eficiente y modular del código CSS, facilitando el mantenimiento y la escalabilidad del proyecto. En conjunto, estas técnicas promoverán un desarrollo front-end más estructurado y profesional.',
        images: ['./assets/images/html5.svg', './assets/images/css.svg', './assets/images/javascript.svg', './assets/images/bem.svg', './assets/images/sass.svg']
    },

    insure: {
        title: 'RESPONSIVE PRACTICE WITH BEM METHODOLOGY AND SASS. DROP-DOWN MENU.',
        titulo: 'PRÁCTICA RESPONSIVE CON METODOLOGÍA BEM Y LENGUAJE SASS. MENÚ DESPLEGABLE',
        description:
          'This exercise is proposed as an opportunity to apply the Block Element Modifier (BEM) methodology and the SASS stylesheet language in a technical scenario. It will focus on utilizing the "display" and "position" properties to establish the structure and arrangement of elements properly. Additionally, a responsive implementation will be carried out to ensure the adaptability of the design on both computer and mobile devices. The "hover" effect will be applied to buttons to enhance user interaction. To enrich the visual aspect, background images ("background-image") will be used in certain sections of the design. The "flex-direction" property with the "row-reverse" value will be used to achieve a reverse horizontal layout of elements within their respective containers. Furthermore, JavaScript will be integrated to create a drop-down menu with transitions for the mobile version, enhancing the user experience when interacting with the mentioned menu. In summary, this practice will encompass a range of advanced techniques and methodologies in front-end development, combining BEM, SASS, and JavaScript to achieve an attractive, adaptable, and interactive design on both viewing platforms.',
        descripcion:
          'Este ejercicio se propone como una oportunidad para aplicar la metodología Block Element Modifier (BEM) y el lenguaje de hojas de estilo SASS en un escenario técnico. Se enfocará en la utilización de las propiedades "display" y "position" para establecer adecuadamente la estructura y disposición de los elementos. Además, se llevará a cabo una implementación receptiva, asegurando la adaptabilidad del diseño en dispositivos de ordenador y móvil, y se aplicará el efecto "hover" en los botones para mejorar la interacción del usuario. Para enriquecer el aspecto visual, se emplearán imágenes de fondo ("background-image") en ciertas secciones del diseño. También se hará uso de la propiedad "flex-direction" con el valor "row-reverse" para obtener una disposición horizontal inversa de los elementos en sus respectivos contenedores. Asimismo, se integrará JavaScript para crear un menú desplegable con transiciones en la versión destinada a dispositivos móviles, mejorando la experiencia del usuario al interactuar con el mencionado menú. En resumen, esta práctica abarcará una gama de técnicas y metodologías avanzadas en el desarrollo front-end, combinando BEM, SASS y JavaScript para lograr un diseño atractivo, adaptable y con funcionalidades interactivas en ambas plataformas de visualización.',
        images: ['./assets/images/html5.svg', './assets/images/css.svg', './assets/images/javascript.svg', './assets/images/bem.svg', './assets/images/sass.svg']
    },

    loopstudios: {
        title: 'RESPONSIVE PRACTICE WITH BEM METHODOLOGY',
        titulo: 'PRÁCTICA RESPONSIVE CON METODOLOGÍA BEM',
        description:
          'The purpose of this exercise is to apply the Block Element Modifier (BEM) methodology in the development of a specific project. It will focus on utilizing the "display" and "position" properties to establish the structure and positioning of elements in the design. Additionally, a responsive interface implementation will be carried out to ensure proper visualization on both computer and mobile devices. In this context, the aim is to optimize the organization and maintenance of the CSS code through the BEM methodology, which will contribute to a more structured and efficient front-end development.',
        descripcion:
          'Este ejercicio tiene como finalidad aplicar la metodología Block Element Modifier (BEM) en el desarrollo de un proyecto específico. Se enfocará en la utilización de las propiedades "display" y "position" para establecer la estructura y el posicionamiento de los elementos en el diseño. Además, se llevará a cabo la implementación de una interfaz receptiva que garantice una correcta visualización tanto en dispositivos de ordenador como en dispositivos móviles. En este contexto, se busca optimizar la organización y el mantenimiento del código CSS a través de la metodología BEM, lo que contribuirá a un desarrollo front-end más estructurado y eficiente.',
        images: ['./assets/images/html5.svg', './assets/images/css.svg', './assets/images/javascript.svg', './assets/images/bem.svg']
    },

    skilled: {
        title: 'RESPONSIVE PRACTICE WITH BEM METHODOLOGY',
        titulo: 'PRÁCTICA RESPONSIVE CON METODOLOGÍA BEM',
        description:
          'The purpose of this exercise is to apply the Block Element Modifier (BEM) methodology in the development of a specific project. It will focus on utilizing the "display" and "position" properties to establish the structure and positioning of elements in the design. Additionally, a responsive interface implementation will be carried out to ensure proper visualization on both computer and mobile devices. In this context, the aim is to optimize the organization and maintenance of the CSS code through the BEM methodology, which will contribute to a more structured and efficient front-end development.',
        descripcion:
          'Este ejercicio tiene como finalidad aplicar la metodología Block Element Modifier (BEM) en el desarrollo de un proyecto específico. Se enfocará en la utilización de las propiedades "display" y "position" para establecer la estructura y el posicionamiento de los elementos en el diseño. Además, se llevará a cabo la implementación de una interfaz receptiva que garantice una correcta visualización tanto en dispositivos de ordenador como en dispositivos móviles. En este contexto, se busca optimizar la organización y el mantenimiento del código CSS a través de la metodología BEM, lo que contribuirá a un desarrollo front-end más estructurado y eficiente.',
        images: ['./assets/images/html5.svg', './assets/images/css.svg', './assets/images/javascript.svg']
    },

    thebright: {
        title: 'PRACTICE WITH RESPONSIVE DESIGN',
        titulo: 'PRÁCTICA CON RESPONSIVE',
        description:
          'The objective of this exercise is to practice the development of a responsive design and the implementation of a dropdown menu. The "position" and "display" properties will be used to establish the layout and structure of the elements. A web page will be created that adapts appropriately to both computer and mobile devices. In the mobile version, a hamburger menu will be implemented, which will smoothly transition to provide an enhanced user experience when interacting with it. The combination of these techniques will enable the creation of a versatile and functional interface, adapting to different screen sizes and offering intuitive navigation on both platforms.',
        descripcion:
          'Este ejercicio tiene como objetivo practicar el desarrollo de un diseño receptivo (responsive) y la implementación de un menú desplegable. Se hará uso de las propiedades "position" y "display" para establecer la disposición y la estructura de los elementos. Se creará una página web que se adapte adecuadamente tanto a dispositivos de ordenador como a dispositivos móviles. En la versión móvil, se implementará un menú de hamburguesa que se desplegará con una transición suave, mejorando la experiencia del usuario al interactuar con él. La combinación de estas técnicas permitirá crear una interfaz versátil y funcional, que se adapte a diferentes tamaños de pantalla y ofrezca una navegación intuitiva en ambas plataformas.',
        images: ['./assets/images/html5.svg', './assets/images/css.svg', './assets/images/javascript.svg']
    },

    typemaster: {
        title: 'RESPONSIVE PRACTICE WITH BEM METHODOLOGY AND SASS. USE OF AFTER AND BEFORE',
        titulo: 'PRÁCTICA RESPONSIVE CON METODOLOGÍA BEM Y LENGUAJE SASS. USO DE AFTER Y BEFORE',
        description:
          'The purpose of this exercise is to apply the Block Element Modifier (BEM) methodology and the SASS stylesheet language in a specific project. The "display" and "position" properties will be used to efficiently and organizedly establish the structure and positioning of elements. Additionally, the focus will be on creating a responsive experience to ensure proper visualization on both computer and mobile devices. To achieve a flexible arrangement of elements, "flex-direction" with the "row-reverse" value will be used, allowing for a reverse horizontal alignment of elements within their containers. In order to prevent images from overflowing their containers, the "overflow: hidden" property will be employed, hiding any content that extends beyond the container is boundaries. Furthermore, the pseudo-elements "after" and "before" will be utilized to apply a monotone effect to the images, providing a unique and creative style to them. Additionally, rounded borders will be added to the images to achieve a more pleasant and aesthetic design. Together, these techniques and approaches will enrich the practice and enable effective implementation of BEM, SASS, and advanced CSS resources to achieve an attractive and adaptable design across various screens and devices.',
        descripcion:
          'Este ejercicio tiene como propósito aplicar la metodología Block Element Modifier (BEM) y el lenguaje de hojas de estilo SASS en un proyecto concreto. Se hará uso de las propiedades "display" y "position" para establecer la estructura y el posicionamiento de los elementos de forma eficiente y organizada. Además, se enfocará en la creación de una experiencia receptiva para garantizar una correcta visualización tanto en dispositivos de ordenador como en dispositivos móviles. Para lograr una disposición flexible de los elementos, se utilizará "flex-direction" con el valor "row-reverse", lo que permitirá una alineación horizontal inversa de los elementos dentro de sus contenedores. Con el objetivo de evitar que las imágenes desborden sus contenedores, se empleará la propiedad "overflow: hidden", lo que ocultará cualquier contenido que se extienda más allá de los límites del contenedor. Asimismo, se utilizarán los pseudo-elementos "after" y "before" para aplicar un efecto de monotono a las imágenes, brindando un estilo particular y creativo a las mismas. Además, se agregarán bordes redondeados a las imágenes para obtener un diseño más agradable y estético. En conjunto, estas técnicas y enfoques enriquecerán la práctica y permitirán una implementación efectiva de BEM, SASS y recursos avanzados de CSS para obtener un diseño atractivo y adaptable a diversas pantallas y dispositivos.',
        images: ['./assets/images/html5.svg', './assets/images/css.svg', './assets/images/javascript.svg', './assets/images/bem.svg', './assets/images/sass.svg']
    },

    creatives: {
        title: 'RESPONSIVE PRACTICE',
        titulo: 'PRÁCTICA RESPONSIVE',
        description:
          'The objective of this exercise is to implement a responsive design and create a dropdown menu. The "position" and "display" properties will be used to establish the layout and structure of the elements. The result will be a web page that is adaptable to both computer and mobile devices. In the mobile version, a hamburger menu will be incorporated, which will smoothly transition to provide an enhanced user experience when interacting with it. The combination of these techniques will ensure a versatile and functional interface, guaranteeing optimal navigation on both types of devices.',
        descripcion:
          'Este ejercicio tiene como objetivo la implementación del diseño receptivo (responsive) y la creación de un menú desplegable. Se hará uso de las propiedades "position" y "display" para establecer la disposición y estructura de los elementos. El resultado será una página web adaptable tanto a dispositivos de ordenador como a dispositivos móviles. En la versión destinada a móviles, se incorporará un menú de hamburguesa que se desplegará con una transición fluida, mejorando así la experiencia del usuario al interactuar con él. La combinación de estas técnicas asegurará una interfaz versátil y funcional, garantizando una navegación óptima en ambos tipos de dispositivos.',
        images: ['./assets/images/html5.svg', './assets/images/css.svg', './assets/images/javascript.svg']
    },

    altea: {
        title: 'GLOBAL IDENTITY PROJECT',
        titulo: 'PROYECTO DE IDENTIDAD GLOBAL',
        description:
          'The current project involved the fictional development of a global identity for the town of Altea, aiming to establish a graphic coherence that faithfully reflected the values and beliefs inherent to the community. The primary purpose was to design a unified and consistent image that would reflect the unique and authentic identity of this town.',
        descripcion:
          'El presente proyecto consistió en el desarrollo ficticio de una identidad global para el pueblo Altea, con el objetivo de establecer una coherencia gráfica que reflejara fielmente los valores y creencias inherentes a dicha comunidad. El propósito fundamental fue el diseño de una imagen unificada y consistente que reflejara la identidad única y auténtica de este pueblo.',
        images: ['./assets/images/illustrator.svg', './assets/images/indesign.svg', './assets/images/photoshop.svg']
    },

    alzheimer: {
        title: 'AUDIOVISUAL PIECE ABOUT ALZHEIMER IS DISEASE',
        titulo: 'PIEZA AUDIOVISUAL ACERCA DEL ALZHEIMER',
        description:
          'The present fictional project addresses the topic of Alzheimer is and focuses on its representation through a recording in grayscale and motion tracking to add animations that significantly express the reality of this disease. The purpose is to create an audiovisual content that emotionally and faithfully conveys the fundamental aspects associated with Alzheimer is, seeking to raise awareness and empathy towards those affected by this neurodegenerative condition.',
        descripcion:
          'El presente proyecto ficticio aborda el tema del Alzheimer y se enfoca en su representación a través de una grabación en escala de grises y el seguimiento del movimiento para añadir animaciones que expresen de manera significativa la realidad de esta enfermedad. La finalidad es crear un contenido audiovisual que transmita de forma emotiva y fiel los aspectos fundamentales asociados al Alzheimer, buscando generar una mayor conciencia y empatía hacia quienes se ven afectados por esta condición neurodegenerativa. ',
        images: ['./assets/images/after-effects.svg', './assets/images/illustrator.svg']
    },

    egresados: {
        title: 'EDITORIAL DESIGN PROJECT',
        titulo: 'PROYECTO DE DISEÑO EDITORIAL',
        description:
          'The fictional editorial project aims to give a voice to the alumni of the School of Art and Design of Valencia, allowing them to share their experiences after completing their design studies at the institution. To achieve this, interviews were conducted, preliminary research was carried out, and a thorough analysis of editorial competition in the field was performed. Subsequently, the collected content was laid out to create an attractive and high-quality final product that reflects the experiences and achievements of the alumni, inspiring and motivating future design students at the School.',
        descripcion:
          'El proyecto editorial ficticio tiene como propósito otorgar voz a los ex-alumnos de la Escuela de Arte y Superior de Diseño de Valencia, permitiéndoles compartir sus experiencias una vez finalizados sus estudios de diseño en dicha institución. Para ello, se llevó a cabo la realización de entrevistas, una investigación previa, y un análisis exhaustivo de la competencia editorial en el campo. Posteriormente, se procedió a la maquetación del contenido recopilado con el objetivo de crear un producto final atractivo y de calidad que refleje las vivencias y logros de los ex-alumnos, inspirando y motivando a futuros estudiantes de diseño en la Escuela.',
        images: ['./assets/images/indesign.svg']
    },

    hokoBI: {
        title: 'AUDIOVISUAL PIECE FOR HOKOBI COMPANY',
        titulo: 'PIEZA AUDIOVISUAL PARA LA EMPRESA HOKOBI',
        description:
          'The production of a promotional video for hokoBI, a new Marketing company that recently entered the market, was carried out. The objective of the video was to effectively showcase the advantages that hokoBI offers compared to the competition, highlighting their distinctive services and unique value proposition. A detailed explanation of the companys services was provided, and potential clients were shown how they can get in touch to learn more or establish a collaboration. This promotional video was conceived to generate interest, trust, and recognition in the market, thereby driving the growth and positioning of hokoBI as a solid and reliable option in the field of Marketing.',
        descripcion:
          'Se llevó a cabo la producción de un vídeo promocional para la empresa hokoBI, una nueva compañía de Marketing que acaba de ingresar al mercado y buscaba promocionarse efectivamente. El objetivo del vídeo fue presentar las ventajas que hokoBI ofrece en comparación con la competencia, destacando sus servicios distintivos y su propuesta de valor única. Se brindó una explicación detallada sobre los servicios que la empresa proporciona, y se mostró cómo los clientes potenciales pueden contactarlos para obtener más información o establecer una colaboración. Este vídeo promocional fue concebido con la finalidad de generar interés, confianza y reconocimiento en el mercado, y así impulsar el crecimiento y el posicionamiento de hokoBI como una opción sólida y confiable en el ámbito del Marketing.',
        images: ['./assets/images/after-effects.svg', './assets/images/illustrator.svg']
    },

    jovencitas: {
        title: 'GLOBAL COMMUNICATION FOR AN NGO',
        titulo: 'COMUNICACIÓN GLOBAL PARA UNA ONG',
        description:
          'APRAMP is an organization committed to defending human rights, particularly in the context of slavery, exploitation, and violations. Their mission is to promote a society free from violence and exploitation, aiming for individuals to regain their freedom and dignity. In this context, a fictional project has been conceived, consisting of creating flyers and cards with two sides: side A, showing a public appearance, and side B (the back of the flyer/card), revealing what is not visible in sexual exploitation. On side B, real testimonies of women who have been victims of sexual exploitation will be presented, seeking to sensitize and raise awareness in society about this issue. These flyers and cards will be strategically placed in the most frequented locations where prostitution is promoted, with the aim of generating reflection and promoting social change in the fight against sexual exploitation and human rights violations.',
        descripcion:
          'APRAMP es una organización comprometida con la defensa de los derechos humanos, especialmente en el contexto de la esclavitud, explotación y vulneración de derechos. Su misión es promover una sociedad libre de violencia y explotación, buscando que las personas recuperen su libertad y dignidad. En este contexto, se ha concebido un proyecto ficticio que consiste en la creación de flyers y tarjetas con dos caras: la cara A, que muestra una apariencia pública, y la cara B (parte trasera del flyer/tarjeta), que revela lo que no es visible en la explotación sexual. En la cara B, se presentarán testimonios reales de mujeres que han sido víctimas de explotación sexual, buscando sensibilizar y concienciar a la sociedad sobre esta problemática. Estos flyers y tarjetas serán ubicados estratégicamente en los lugares más frecuentados donde se promociona la prostitución, con el fin de generar reflexión y promover un cambio social en la lucha contra la explotación sexual y la violación de derechos humanos.',
        images: ['./assets/images/indesign.svg', './assets/images/illustrator.svg']
    },

    rotoscopia: {
        title: 'ROTOPSCOPE',
        titulo: 'ROTOSCOPIA',
        description:
          'The concept of rotoscoping is based on the technique of meticulously tracing frames. This process involves creating simple yet highly effective animations by using illustrations or drawings directly extracted from an existing video. These copied images serve as a foundation to add movement and fluidity to the final animation. Rotoscoping is a valuable tool that enables the achievement of striking visual results, maintaining coherence and continuity with the original material, while offering an artistic and expressive approach in the animation creation process.',
        descripcion:
          'El concepto de rotoscopia se fundamenta en la técnica de realizar un calco meticuloso de frames. Este proceso consiste en crear animaciones sencillas pero altamente efectivas, mediante la utilización de ilustraciones o dibujos extraídos directamente de un vídeo preexistente. Estas imágenes copiadas son empleadas como base para conferir movimiento y fluidez a la animación final. La rotoscopia es una valiosa herramienta que permite lograr resultados visuales impactantes, al mantener la coherencia y continuidad con el material original y brindar un enfoque artístico y expresivo en la creación de animaciones.',
        images: ['./assets/images/illustrator.svg', './assets/images/photoshop.svg']
    },

    serenates: {
        title: 'GLOBAL COMMUNICATION FOR THE SERENATES FESTIVAL',
        titulo: 'COMUNICACIÓN GLOBAL PARA EL FESTIVAL SERENATES',
        description:
          'A comprehensive fictional project was developed for the communication of the Serenates Festival, which takes place in the cloister of the historic building of the Universitat de València. This event stands out for its commitment to the recovery and appreciation of Valencian musical heritage, as well as its diverse and eclectic program featuring various musical styles. With this purpose in mind, a proposal was created that encompassed the conceptualization and design of key elements such as posters, flyers, tickets, banners, and flags. The aim of this project was to achieve a cohesive and appealing visual identity that reflects the essence of the Serenates Festival and conveys its message of inclusion, diversity, and appreciation for Valencian musical heritage.',
        descripcion:
          'Se desarrolló un proyecto ficticio integral para la comunicación del Festival Serenates, el cual se lleva a cabo en el claustro del edificio histórico de la Universitat de València. Este evento se destaca por su compromiso tanto en la recuperación y valoración del patrimonio musical valenciano, como en la diversidad de una programación ecléctica con diversos estilos musicales. Con este propósito, se creó una propuesta que abarcó la conceptualización y diseño de elementos clave como carteles, flyers, entradas, banners y banderolas. El objetivo de este proyecto fue lograr una identidad visual cohesiva y atractiva, que refleje la esencia del Festival Serenates y transmita su mensaje de inclusión, diversidad y aprecio por el patrimonio musical valenciano.',
        images: ['./assets/images/illustrator.svg', './assets/images/indesign.svg', './assets/images/photoshop.svg']
    },

    showreels: {
        title: 'SHOWREELS',
        titulo: 'SHOWREELS',
        description:
          'The production of a personal showreel was undertaken, featuring a compilation of works completed during the Graphic Design degree at the School of Art and Design of Valencia. A showreel is a short audiovisual piece that serves as a summary of an artist is body of work. In this case, a video has been created that showcases the highlighted projects developed during the educational program in a concise and visually appealing manner. The showreel aims to present the graphic designer is talent, skills, and style in a striking and effective manner, offering potential clients or employers a representative sample of their creative ability and acquired experience throughout their studies.',
        descripcion:
          'Se llevó a cabo la realización de un showreel personal, que incluye una recopilación de los trabajos realizados durante el Grado de Diseño Gráfico en la Escuela de Arte y Superior de Diseño de Valencia. Un showreel es una pieza audiovisual breve que sirve como resumen del trabajo artístico de un profesional. En este caso, se ha creado un vídeo que exhibe de manera concisa y visualmente atractiva los proyectos destacados desarrollados durante el programa educativo. El showreel pretende presentar de manera impactante y efectiva el talento, habilidades y estilo del diseñador gráfico, ofreciendo a posibles clientes o empleadores una muestra representativa de su capacidad creativa y experiencia adquirida a lo largo de sus estudios. ',
        images: ['./assets/images/after-effects.svg', './assets/images/illustrator.svg', './assets/images/photoshop.svg']
    },

    socvida: {
        title: 'EDITORIAL PUBLICATION ON EMOTIONAL DEPENDENCY',
        titulo: 'PUBLICACIÓN EDITORIAL SOBRE LA DEPENDENCIA EMOCIONAL',
        description:
          'Often, we tend to perceive our behaviors towards ourselves and our environment as adaptive; however, this occurs partly due to a lack of understanding of the underlying causes of our issues. Emotional dependency is one such cause. Many individuals mistakenly believe that anxiety, self-destructiveness, love addiction, exclusive relationships, and fear of rejection are normal expressions of love. In response to this problem, the need arises to create "Soc vida si soc amb mi" (I am life when I am with myself), an initiative that seeks to raise awareness and give a voice to emotional dependency. The purpose of this project is to bring attention to this reality, promoting a deeper and more empathetic understanding of emotional dynamics to foster healing and personal growth.',
        descripcion:
          'Con frecuencia, tendemos a considerar nuestros comportamientos hacia nosotros mismos y nuestro entorno como adaptativos, sin embargo, esto ocurre en parte debido a la falta de conocimiento sobre las causas subyacentes de nuestros problemas. La dependencia emocional es una de esas causas. Muchas personas creen erróneamente que la ansiedad, la autodestrucción, la adicción al amor, las relaciones exclusivas y el miedo al rechazo son manifestaciones normales de amor. Ante esta problemática, surge la necesidad de crear "Soc vida si soc amb mi", una iniciativa que busca visibilizar y dar voz a la dependencia emocional. El propósito de este proyecto es concienciar sobre esta realidad, promoviendo una comprensión más profunda y empática de las dinámicas emocionales para fomentar la sanación y el crecimiento personal. ',
        images: ['./assets/images/indesign.svg', './assets/images/illustrator.svg', './assets/images/photoshop.svg', './assets/images/after-effects.svg']
    },

    videocurriculum: {
        title: 'HOW DO OTHERS PERCEIVE ME?',
        titulo: '¿CÓMO ME VEN LOS DEMÁS?',
        description:
          'The videocurriculum created aims to capture how others perceive me personally. To achieve this, various actions were taken, such as conducting surveys and interviews with close individuals, in order to gain a broader and more objective view of how I am perceived by my surroundings. The production process included creating a promotional spot that captured the essence of the collected opinions, using attractive and emotional audiovisual resources. The video editing stage was essential to assemble all the collected pieces, resulting in a coherent and captivating outcome. The final videocurriculum becomes a powerful tool to present my profile in a more authentic and comprehensive manner, highlighting the image that my personality projects according to others perception. This initiative contributes to strengthening the connection between my identity and the vision of those who know me closely, providing a unique and enriching perspective on my trajectory and personal skills.',
        descripcion:
          'El videocurriculum realizado tiene como objetivo plasmar la percepción que los demás tienen sobre mi persona en el ámbito personal. Para lograrlo, se llevaron a cabo diversas acciones como la realización de encuestas y entrevistas a individuos cercanos, con el fin de obtener una visión más amplia y objetiva de cómo soy percibido por mi entorno. El proceso de producción incluyó la creación de un spot publicitario que capturara la esencia de las opiniones recopiladas, utilizando recursos audiovisuales atractivos y emocionales. La etapa de montaje y edición de vídeo fue esencial para ensamblar todas las piezas recopiladas, logrando un resultado coherente y cautivador. El videocurriculum final se convierte así en una herramienta poderosa para presentar mi perfil de manera más auténtica y completa, destacando la imagen que proyecta mi personalidad según la percepción de los demás. Esta iniciativa contribuye a fortalecer la conexión entre mi identidad y la visión de aquellos que me conocen de cerca, brindando una perspectiva única y enriquecedora sobre mi trayectoria y habilidades personales. ',
        images: ['./assets/images/after-effects.svg', './assets/images/illustrator.svg', './assets/images/photoshop.svg']
    },
  };

if (buttonDescription){
    buttonDescription.addEventListener('click', event =>{
      
        const project = event.target.dataset.project;
      
        description.classList.add('visible');

        if (textLanguage==='en'){

            descriptionTitle.textContent = descriptions[project].title;
          
            descriptionText.textContent = descriptions[project].description;
        } else{
            descriptionTitle.textContent = descriptions[project].titulo;
          
            descriptionText.textContent = descriptions[project].descripcion;
        }
      
      
        descriptionIcons.textContent = '';
      
        descriptions[project].images.forEach(value =>{
            const image = document.createElement('img');
            image.classList.add('description__icon');
            image.src = value
      
            descriptionIcons.append(image)
        });
      
        descriptionClose.addEventListener('click', () =>{
            // le quito la clase visible
            description.classList.remove('visible');
        });
    });
}

const flagsElement = document.getElementById('flags');

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async language =>{
    textLanguage=language;
    const requestJson = await fetch(`../languages/${language}.json`);
    const texts = await requestJson.json();

    for(const textToChange of textsToChange){
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }

}

flagsElement.addEventListener('click', (e) =>{

    changeLanguage(e.target.parentElement.dataset.language);
});