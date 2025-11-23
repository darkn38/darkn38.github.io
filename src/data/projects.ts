export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
}

const data: Project[] = [
  {
    title: 'UniVERS | click for link to website',
    link: 'https://univers.momoyan.org',
    image: '/images/projects/univers.png',
    date: '2025-03-25',
    desc:
      'Is a web-based platform designed to streamline the reservation ' +
      'of university venues and equipment. It provides an automated booking process ' +
      'with real time availability tracking, structured approval workflows and automated ' +
      'notifications.',
  },
  {
    title: 'NAS Application and Management System',
     subtitle: 'Web based with mobile integration.',
    image: '/images/projects/nasams.png',
    date: '2025-02-11',
    desc:
      'Is a digital platform that helps manage scholarship applications for non-academic scholars or working scholars at Cebu Institute of Technology University. This system aims to replace manual, paper-based processes with a more efficient, automated, and user-friendly digital solution. It allows students to submit applications, track their status, and receive updates while enabling administrators to review, approve, and manage scholarship data easily.',
  },
  {
    title: 'School Event Management System',
    image: '/images/projects/sems.png',
    date: '2024-11-28',
    desc:
      'Is designed to streamline the management of school events, enabling easy registration, login, and user management functionalities. This project aims to provide a user-friendly interface for both students and administrators.',
  },
];

export default data;
