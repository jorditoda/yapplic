export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Short labels used by the language switcher in the header. */
export const localeNames: Record<Locale, string> = {
  en: "EN",
  es: "ES",
};

/** Accessible names announced when switching language. */
export const localeSwitchLabels: Record<Locale, string> = {
  en: "View in English",
  es: "Ver en español",
};

const en = {
  "meta.title": "Yapplic - Portfolio",
  "meta.description":
    "Yapplic is the portfolio of Jordi Toda — simple, fast and delightful mobile apps: Rally HUD, Like This, PointerPointer, Hold King, Sad Trombone and Dosi.",
  "nav.home": "Home",
  "nav.about": "About",
  "theme.toggle": "Switch colour theme",
  "link.newTab": " (opens in a new tab)",
  "meta.ogImageAlt": "Yapplic — Simple, fast and delightful mobile apps",
  "meta.jobTitle": "Mobile app developer",
  "meta.appsList": "Yapplic apps",
  "app.screenshotAlt": "{title} app screenshot",
  "hero.tagline": "Mobile app developer crafting simple, fast and delightful experiences.",
  "app.cta": "Learn more about {title}",
  "footer.built": "Built by",
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
    "Yapplic es el portfolio de Jordi Toda — apps móviles simples, rápidas y encantadoras: Rally HUD, Like This, PointerPointer, Hold King, Sad Trombone y Dosi.",
  "nav.home": "Inicio",
  "nav.about": "Sobre mí",
  "theme.toggle": "Cambiar el tema de color",
  "link.newTab": " (se abre en una pestaña nueva)",
  "meta.ogImageAlt": "Yapplic — Apps móviles simples, rápidas y encantadoras",
  "meta.jobTitle": "Desarrollador de apps móviles",
  "meta.appsList": "Apps de Yapplic",
  "app.screenshotAlt": "Captura de pantalla de {title}",
  "hero.tagline": "Desarrollador de apps móviles creando experiencias simples, rápidas y encantadoras.",
  "app.cta": "Más sobre {title}",
  "footer.built": "Hecho por",
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

export const ui: Record<Locale, Dictionary> = { en, es };

/** Keys whose value is a plain string (excludes lists such as `about.what.items`). */
type StringKeyOf<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

/** Convenience helper: `const t = useTranslations(lang)` then `t("nav.home")`. */
export function useTranslations(lang: Locale) {
  return (key: StringKeyOf<Dictionary>): string => ui[lang][key];
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
