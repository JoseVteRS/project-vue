export interface RouteLink {
  name: string;
  title: string;
  path: string;
}

export const routeLink: RouteLink[] = [
  { path: "/", name: "home", title: "Inicio" },
  { path: "/about", name: "sobre", title: "Sobre" },
  { path: "/characters", name: "characteres", title: "Personajes" },
];
