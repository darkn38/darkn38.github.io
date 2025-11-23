export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'University of Cebu Pri: Main Campus',
    degree: 'TVL - CSS',
    link: 'https://www.universityofcebu.net/',
    year: 2019,
  },
  {
    school: 'Cebu Institute of Technology University',
    degree: 'Bachelor of Science in Information Technology',
    link: 'https://cit.edu/',
    year: 2026,
  },
];

export default degrees;
