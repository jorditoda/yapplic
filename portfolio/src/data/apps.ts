import type { ImageMetadata } from "astro";
import type { Locale } from "../i18n";

import dosiIcon from "../assets/icons/dosi.png";
import rallyHudIcon from "../assets/icons/rallyhud.png";
import sadTromboneIcon from "../assets/icons/sadtrombone.png";
import pointerPointerIcon from "../assets/icons/pointerpointer.png";
import holdKingIcon from "../assets/icons/holdking.png";
import likeThisIcon from "../assets/icons/likethis.png";
import vintageCounterIcon from "../assets/icons/vintagecounter.png";

import dosiScreen from "../assets/screens/dosi-1.png";
import rallyHudScreen from "../assets/screens/rallyhud-1.png";
import sadTromboneScreen from "../assets/screens/sadtrombone-1.png";
import pointerPointerScreen from "../assets/screens/pointerpointer-1.png";
import holdKingScreen from "../assets/screens/holdking-1.png";
import likeThisScreen from "../assets/screens/likethis-1.png";
import vintageCounterScreen from "../assets/screens/vintagecounter-1.png";

type Platform = "ios" | "android";

export interface App {
  /** kebab-case; used as the section anchor (/#dosi) */
  id: string;
  title: string;
  /** schema.org application type */
  category: string;
  /** One sentence, shown under the title */
  tagline: Record<Locale, string>;
  /** One or two more sentences */
  details: Record<Locale, string>;
  platforms: Platform[];
  appStore?: string;
  playStore?: string;
  /** Own landing page; without it no «Learn more» link is shown */
  link?: string;
  icon: ImageMetadata;
  screenshot: ImageMetadata;
  /** Pastel section colour (light mode) */
  color: string;
}

/** Array order is page order. */
export const apps: App[] = [
  {
    id: "dosi",
    title: "Dosi",
    category: "EducationalApplication",
    tagline: {
      en: "A daily dose to understand people better.",
      es: "Una dosis diaria para entender mejor a la gente.",
      ca: "Una dosi diària per entendre millor la gent.",
    },
    details: {
      en: "Short 20–30 second cards on negotiation, psychology and communication, with spaced review so the ideas actually stick.",
      es: "Tarjetas de 20–30 segundos sobre negociación, psicología y comunicación, con repaso espaciado para que las ideas se queden.",
      ca: "Targetes de 20–30 segons sobre negociació, psicologia i comunicació, amb repàs espaiat perquè les idees es quedin.",
    },
    platforms: ["ios", "android"],
    appStore: "https://apps.apple.com/us/app/dosi/id6825965689",
    playStore: "https://play.google.com/store/apps/details?id=com.stormfkrs.dosi",
    link: "https://dosi.yapplic.com",
    icon: dosiIcon,
    screenshot: dosiScreen,
    color: "#FFE6D5",
  },
  {
    id: "rally-hud",
    title: "Rally HUD",
    category: "SportsApplication",
    tagline: {
      en: "Speed, G-forces and segment times on your windscreen.",
      es: "Velocidad, fuerzas G y tiempos por tramo en tu parabrisas.",
      ca: "Velocitat, forces G i temps per tram al parabrisa.",
    },
    details: {
      en: "Pick or trace a segment, drive it with the HUD and see where you gained or lost time. Works offline, free, no account needed.",
      es: "Elige o traza un tramo, recórrelo con el HUD y mira dónde has ganado o perdido tiempo. Funciona sin conexión, gratis y sin cuenta.",
      ca: "Tria o traça un tram, fes-lo amb el HUD i mira on has guanyat o perdut temps. Funciona sense connexió, gratis i sense compte.",
    },
    platforms: ["ios", "android"],
    appStore: "https://apps.apple.com/us/app/rally-hud/id6739874068",
    playStore: "https://play.google.com/store/apps/details?id=com.stormfkrs.rally_hud",
    link: "https://rallyhud.yapplic.com",
    icon: rallyHudIcon,
    screenshot: rallyHudScreen,
    color: "#E8F0FF",
  },
  {
    id: "sad-trombone",
    title: "Sad Trombone",
    category: "EntertainmentApplication",
    tagline: {
      en: "The classic fail sound, one tap away.",
      es: "El clásico sonido de fracaso, a un toque.",
      ca: "El clàssic so de fracàs, a un toc.",
    },
    details: {
      en: 'Tap anywhere and play the legendary "wah wah wah". Made for laughs with friends.',
      es: "Toca en cualquier parte y suena el legendario «wah wah wah». Hecha para reírse con los amigos.",
      ca: "Toca on vulguis i sona el llegendari «wah wah wah». Feta per riure amb els amics.",
    },
    platforms: ["android"],
    playStore: "https://play.google.com/store/apps/details?id=com.stormfkrs.sadtrombone",
    link: "https://sadtrombone.yapplic.com",
    icon: sadTromboneIcon,
    screenshot: sadTromboneScreen,
    color: "#F3F3F3",
  },
  {
    id: "pointerpointer",
    title: "PointerPointer",
    category: "GameApplication",
    tagline: {
      en: "Tap anywhere and someone points right at it.",
      es: "Toca donde quieras y alguien te señalará justo ahí.",
      ca: "Toca on vulguis i algú t'assenyalarà just allà.",
    },
    details: {
      en: "A silly photo game: look for the trickiest spot on the screen and find the person pointing at your finger.",
      es: "Un juego de fotos absurdo: busca el punto más difícil de la pantalla y encuentra a quien señala tu dedo.",
      ca: "Un joc de fotos absurd: busca el punt més difícil de la pantalla i troba qui assenyala el teu dit.",
    },
    platforms: ["ios", "android"],
    appStore: "https://apps.apple.com/us/app/pointer-pointer/id6743094753",
    playStore: "https://play.google.com/store/apps/details?id=com.yapplic.pointer_pointer",
    link: "https://pointerpointer.yapplic.com",
    icon: pointerPointerIcon,
    screenshot: pointerPointerScreen,
    color: "#E8FFF1",
  },
  {
    id: "hold-king",
    title: "Hold King",
    category: "GameApplication",
    tagline: {
      en: "How long can you keep your finger on the button?",
      es: "¿Cuánto aguantas con el dedo en el botón?",
      ca: "Quant aguantes amb el dit al botó?",
    },
    details: {
      en: "Hold without moving and climb the live global leaderboard.",
      es: "Mantén sin moverte y sube en la clasificación mundial en directo.",
      ca: "Aguanta sense moure't i puja a la classificació mundial en directe.",
    },
    platforms: ["android"],
    playStore: "https://play.google.com/store/apps/details?id=com.yapplic.hold_king",
    link: "https://holdking.yapplic.com",
    icon: holdKingIcon,
    screenshot: holdKingScreen,
    color: "#FFF0F6",
  },
  {
    id: "like-this",
    title: "Like This",
    category: "GameApplication",
    tagline: {
      en: "Turn any outing into a treasure hunt.",
      es: "Convierte cualquier salida en una búsqueda del tesoro.",
      ca: "Converteix qualsevol sortida en una caça del tresor.",
    },
    details: {
      en: 'Make a list of things to spot ("an elephant with a red hat"), share it with friends and race to find them. Includes a bingo mode.',
      es: "Haz una lista de cosas que encontrar («un elefante con sombrero rojo»), compártela con tus amigos y a ver quién las encuentra antes. Incluye modo bingo.",
      ca: "Fes una llista de coses per trobar («un elefant amb barret vermell»), comparteix-la amb els amics i a veure qui les troba abans. Inclou mode bingo.",
    },
    platforms: ["ios", "android"],
    appStore: "https://apps.apple.com/us/app/like-this/id6739965531",
    playStore: "https://play.google.com/store/apps/details?id=com.stormfkrs.like_this",
    link: "https://someonelikethis.yapplic.com",
    icon: likeThisIcon,
    screenshot: likeThisScreen,
    color: "#FFF3E8",
  },
  {
    id: "vintage-counter",
    title: "Vintage Counter",
    category: "UtilitiesApplication",
    tagline: {
      en: "A tally counter with a retro look.",
      es: "Un contador con aire retro.",
      ca: "Un comptador amb aire retro.",
    },
    details: {
      en: "Flip-style digits and one big button to count anything.",
      es: "Dígitos de estilo antiguo y un gran botón para contar lo que quieras.",
      ca: "Dígits d'estil antic i un gran botó per comptar el que vulguis.",
    },
    platforms: ["android"],
    playStore: "https://play.google.com/store/apps/details?id=com.yapplic.vintage_counter",
    // No landing yet: add link "https://vintagecounter.yapplic.com" once it works.
    icon: vintageCounterIcon,
    screenshot: vintageCounterScreen,
    color: "#FFF6D6",
  },
];
