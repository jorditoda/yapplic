import rallyHudIcon from "../assets/icons/rallyhud.png";
import likeThisIcon from "../assets/icons/likethis.png";
import pointerPointerIcon from "../assets/icons/pointerpointer.png";
import holdKingIcon from "../assets/icons/holdking.png";
import sadTromboneIcon from "../assets/icons/sadtrombone.png";
import dosiIcon from "../assets/icons/dosi.png";

import rallyHudScreen from "../assets/screens/rallyhud-1.png";
import likeThisScreen from "../assets/screens/likethis-1.png";
import pointerPointerScreen from "../assets/screens/pointerpointer-1.png";
import holdKingScreen from "../assets/screens/holdking-1.png";
import sadTromboneScreen from "../assets/screens/sadtrombone-1.png";
import dosiScreen from "../assets/screens/dosi-1.png";


export const apps = [
  {
    id: "dosi",
    title: "Dosi",
    category: "EducationalApplication",
    description: {
      en: "A daily dose to understand people better.",
      es: "Una dosis diaria para entender mejor a la gente.",
    },
    icon: dosiIcon,
    screenshot: dosiScreen,
    link: "https://dosi.yapplic.com",
    color: "#FFE6D5"
  },
  {
    id: "rally-hud",
    title: "Rally HUD",
    category: "SportsApplication",
    description: {
      en: "A clean and readable HUD for rally drivers.",
      es: "Un HUD limpio y legible para pilotos de rally.",
    },
    icon: rallyHudIcon,
    screenshot: rallyHudScreen,
    link: "https://rallyhud.yapplic.com",
    color: "#E8F0FF"
  },
  {
    id: "like-this",
    title: "Like This",
    category: "SocialNetworkingApplication",
    description: {
      en: "Share and discover recommendations effortlessly.",
      es: "Comparte y descubre recomendaciones sin esfuerzo.",
    },
    icon: likeThisIcon,
    screenshot: likeThisScreen,
    link: "https://someonelikethis.yapplic.com",
    color: "#FFF3E8"
  },
  {
    id: "pointerpointer",
    title: "PointerPointer",
    category: "GameApplication",
    description: {
      en: "A fast-paced precision and reflex game.",
      es: "Un juego de precisión y reflejos de ritmo rápido.",
    },
    icon: pointerPointerIcon,
    screenshot: pointerPointerScreen,
    link: "https://pointerpointer.yapplic.com",
    color: "#E8FFF1"
  },
  {
    id: "hold-king",
    title: "Hold King",
    category: "GameApplication",
    description: {
      en: "How long can you hold the button?",
      es: "¿Cuánto tiempo puedes mantener el botón pulsado?",
    },
    icon: holdKingIcon,
    screenshot: holdKingScreen,
    link: "https://holdking.yapplic.com",
    color: "#FFF0F6"
  },
  {
    id: "sad-trombone",
    title: "Sad Trombone",
    category: "EntertainmentApplication",
    description: {
      en: "The classic fail sound effect, always ready.",
      es: "El clásico sonido de fallo, siempre listo.",
    },
    icon: sadTromboneIcon,
    screenshot: sadTromboneScreen,
    link: "https://sadtrombone.yapplic.com",
    color: "#F3F3F3"
  }
] as const;
