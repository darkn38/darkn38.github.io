export interface Route {
  label: string;
  path: string;
  index?: boolean;
}

const routes: Route[] = [
  {
    index: true,
    label: "Home",
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Resume',
    path: '/resume',
  },
  {
    label: 'Projects',
    path: '/projects',
  },
  {
    label: 'Test',
    path: '/resume',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

export default routes;
