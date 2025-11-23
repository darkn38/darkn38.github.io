/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'ClickableBrand',
    position: 'IT Intern',
    url: 'https://',
    startDate: 'October 2019',
    endDate: 'December 2019',
    highlights: [
      'Performed systems troubleshooting and maintenance of workstations.',
      'Assisted in resolving hardware and software issues that the business department encountered.',
      'Documented IT procedures and created user guides for common technical issues.',
      'Collaborated with IT team on small projects, including system upgrades and software deployment.',
    ],
  },
  
];

export default work;
