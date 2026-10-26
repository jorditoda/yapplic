import { apps } from "./data/apps";

export const locales = ["en", "es", "ca"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Short labels used by the language switcher in the header. */
export const localeNames: Record<Locale, string> = {
  en: "EN",
  es: "ES",
  ca: "CA",
};

/** Language names shown in the language menu, each in its own language. */
export const localeFullNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  ca: "Català",
};

/** Accessible names announced when switching language. */
export const localeSwitchLabels: Record<Locale, string> = {
  en: "View in English",
  es: "Ver en español",
  ca: "Veure en català",
};

const en = {
  "meta.title": "Yapplic - Portfolio",
  "meta.description":
    "Yapplic is the portfolio of Jordi Toda — simple, fast and delightful mobile apps: {apps}.",
  "nav.apps": "Apps",
  "nav.about": "About",
  "lang.label": "Language",
  "theme.toggle": "Switch colour theme",
  "link.newTab": " (opens in a new tab)",
  "meta.ogImageAlt": "Yapplic — Simple, fast and delightful mobile apps",
  "meta.jobTitle": "Mobile app developer",
  "meta.appsList": "Yapplic apps",
  "app.screenshotAlt": "{title} app screenshot",
  "hero.tagline": "Small apps, handmade in Riudoms.",
  "hero.sub": "I'm Jordi, a mobile developer. These are the apps I've built for iOS and Android.",
  "hero.appsNav": "Apps",
  "app.cta": "Learn more about {title} →",
  "store.appStore": "Download on the App Store",
  "store.playStore": "Get it on Google Play",
  "footer.made": "Made with ❤️ in Riudoms",
  "footer.donate": "Buy me a beer",
  "about.title": "About — Yapplic",
  "about.description":
    "About Jordi Toda — an engineer focused on building simple, fast and delightful mobile apps with Swift, Kotlin and Flutter.",
  "about.heading": "About Me",
  "about.lead":
    "I'm Jordi Toda, an engineer focused on building simple, fast and delightful digital experiences.",
  "about.who.title": "Who I am",
  "about.who.body":
    "I’m an engineer who loves crafting clean, intuitive and efficient mobile apps. My goal is always the same: create experiences that feel effortless, polished and enjoyable to use.",
  "about.what.title": "What I do",
  "about.what.items": [
    "Design and build mobile apps for iOS and Android",
    "Create minimal and intuitive user interfaces",
    "Focus on performance, clarity and smooth interactions",
    "Develop small, focused apps that solve real problems",
  ],
  "about.how.title": "How I work",
  "about.how.body":
    "I believe in simplicity. I prefer small, well‑crafted apps over complex systems. I iterate quickly, polish details, and always aim for a smooth, delightful experience.",
  "about.tech.title": "Technologies",
  "about.cta.title": "Want to see my work?",
  "about.cta.button": "Back to portfolio",
  "notFound.title": "Page not found — Yapplic",
  "notFound.description": "The page you are looking for does not exist.",
  "notFound.heading": "404 — Page not found",
  "notFound.body": "The page you are looking for does not exist.",
  "notFound.bodyAlt": "La página que buscas no existe.",
  "notFound.cta": "Back to portfolio",
} satisfies Record<string, string | string[]>;

type Dictionary = typeof en;

const es: Dictionary = {
  "meta.title": "Yapplic - Portfolio",
  "meta.description":
    "Yapplic es el portfolio de Jordi Toda — apps móviles simples, rápidas y encantadoras: {apps}.",
  "nav.apps": "Apps",
  "nav.about": "Sobre mí",
  "lang.label": "Idioma",
  "theme.toggle": "Cambiar el tema de color",
  "link.newTab": " (se abre en una pestaña nueva)",
  "meta.ogImageAlt": "Yapplic — Apps móviles simples, rápidas y encantadoras",
  "meta.jobTitle": "Desarrollador de apps móviles",
  "meta.appsList": "Apps de Yapplic",
  "app.screenshotAlt": "Captura de pantalla de {title}",
  "hero.tagline": "Apps pequeñas, hechas a mano en Riudoms.",
  "hero.sub": "Soy Jordi, desarrollador móvil. Estas son las apps que he creado para iOS y Android.",
  "hero.appsNav": "Apps",
  "app.cta": "Más sobre {title} →",
  "store.appStore": "Descargar en el App Store",
  "store.playStore": "Disponible en Google Play",
  "footer.made": "Hecho con ❤️ en Riudoms",
  "footer.donate": "Invítame una cerveza",
  "about.title": "Sobre mí — Yapplic",
  "about.description":
    "Sobre Jordi Toda — un ingeniero centrado en crear apps móviles simples, rápidas y encantadoras con Swift, Kotlin y Flutter.",
  "about.heading": "Sobre mí",
  "about.lead":
    "Soy Jordi Toda, un ingeniero centrado en crear experiencias digitales simples, rápidas y encantadoras.",
  "about.who.title": "Quién soy",
  "about.who.body":
    "Soy un ingeniero al que le encanta crear apps limpias, intuitivas y eficientes. Mi objetivo es siempre el mismo: crear experiencias que se sientan sencillas, pulidas y agradables de usar.",
  "about.what.title": "Qué hago",
  "about.what.items": [
    "Diseño y desarrollo apps móviles para iOS y Android",
    "Creo interfaces mínimas e intuitivas",
    "Me centro en el rendimiento, la claridad y las interacciones fluidas",
    "Desarrollo apps pequeñas y enfocadas que resuelven problemas reales",
  ],
  "about.how.title": "Cómo trabajo",
  "about.how.body":
    "Creo en la simplicidad. Prefiero apps pequeñas y bien hechas frente a sistemas complejos. Itero rápido, pulo los detalles y siempre busco una experiencia fluida y encantadora.",
  "about.tech.title": "Tecnologías",
  "about.cta.title": "¿Quieres ver mi trabajo?",
  "about.cta.button": "Volver al portfolio",
  "notFound.title": "Página no encontrada — Yapplic",
  "notFound.description": "La página que buscas no existe.",
  "notFound.heading": "404 — Página no encontrada",
  "notFound.body": "La página que buscas no existe.",
  "notFound.bodyAlt": "The page you are looking for does not exist.",
  "notFound.cta": "Volver al portfolio",
};

const ca: Dictionary = {
  "meta.title": "Yapplic - Portfolio",
  "meta.description":
    "Yapplic és el portfolio de Jordi Toda — apps mòbils simples, ràpides i encantadores: {apps}.",
  "nav.apps": "Apps",
  "nav.about": "Sobre mi",
  "lang.label": "Idioma",
  "theme.toggle": "Canviar el tema de color",
  "link.newTab": " (s'obre en una pestanya nova)",
  "meta.ogImageAlt": "Yapplic — Apps mòbils simples, ràpides i encantadores",
  "meta.jobTitle": "Desenvolupador d'apps mòbils",
  "meta.appsList": "Apps de Yapplic",
  "app.screenshotAlt": "Captura de pantalla de {title}",
  "hero.tagline": "Apps petites, fetes a mà a Riudoms.",
  "hero.sub": "Sóc en Jordi, desenvolupador mòbil. Aquestes són les apps que he creat per a iOS i Android.",
  "hero.appsNav": "Apps",
  "app.cta": "Més sobre {title} →",
  "store.appStore": "Descarrega a l'App Store",
  "store.playStore": "Disponible a Google Play",
  "footer.made": "Fet amb ❤️ a Riudoms",
  "footer.donate": "Convida'm a una cervesa",
  "about.title": "Sobre mi — Yapplic",
  "about.description":
    "Sobre Jordi Toda — un enginyer centrat a crear apps mòbils simples, ràpides i encantadores amb Swift, Kotlin i Flutter.",
  "about.heading": "Sobre mi",
  "about.lead":
    "Sóc Jordi Toda, un enginyer centrat a crear experiències digitals simples, ràpides i encantadores.",
  "about.who.title": "Qui sóc",
  "about.who.body":
    "Sóc un enginyer a qui li encanta crear apps netes, intuïtives i eficients. El meu objectiu és sempre el mateix: crear experiències que es sentin senzilles, polides i agradables d'usar.",
  "about.what.title": "Què faig",
  "about.what.items": [
    "Disseny i desenvolupo apps mòbils per a iOS i Android",
    "Creo interfícies mínimes i intuïtives",
    "Em centro en el rendiment, la claredat i les interaccions fluides",
    "Desenvolupo apps petites i enfocades que resolen problemes reals",
  ],
  "about.how.title": "Com treballo",
  "about.how.body":
    "Crec en la simplicitat. Prefereixo apps petites i ben fetes davant de sistemes complexos. Itero ràpid, poleixo els detalls i sempre busco una experiència fluida i encantadora.",
  "about.tech.title": "Tecnologies",
  "about.cta.title": "Vols veure la meva feina?",
  "about.cta.button": "Tornar al portfolio",
  "notFound.title": "Pàgina no trobada — Yapplic",
  "notFound.description": "La pàgina que busques no existeix.",
  "notFound.heading": "404 — Pàgina no trobada",
  "notFound.body": "La pàgina que busques no existeix.",
  "notFound.bodyAlt": "The page you are looking for does not exist.",
  "notFound.cta": "Tornar al portfolio",
};

export const ui: Record<Locale, Dictionary> = { en, es, ca };

/** Keys whose value is a plain string (excludes lists such as `about.what.items`). */
type StringKeyOf<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

/** App titles joined with the locale's "and" (e.g. "A, B and C"). */
function appNames(lang: Locale): string {
  return new Intl.ListFormat(lang === "en" ? "en-GB" : lang, {
    style: "long",
    type: "conjunction",
  }).format(apps.map((app) => app.title));
}

/** Convenience helper: `const t = useTranslations(lang)` then `t("nav.home")`. */
export function useTranslations(lang: Locale) {
  return (key: StringKeyOf<Dictionary>): string =>
    ui[lang][key].replace("{apps}", () => appNames(lang));
}

/** Prefix a site-relative path with the locale (English has no prefix). */
export function localePath(lang: Locale, path = "/"): string {
  if (lang === defaultLocale) return path;
  return path === "/" ? `/${lang}/` : `/${lang}${path}`;
}

/** Remove a leading locale segment (`/es/about` -> `/about`, `/es` -> `/`). */
export function stripLocale(pathname: string): string {
  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    if (pathname === `/${locale}`) return "/";
    if (pathname.startsWith(`/${locale}/`)) return pathname.slice(locale.length + 1);
  }
  return pathname;
}
