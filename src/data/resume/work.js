/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Mt. Rubidoux',
    position: 'Software Engineer',
    url: 'https://www.mtrubidouxsda.org/',
    startDate: '2023-02-04',
    endDate: '',
    summary: 'At Mt. Rubidoux SDA Church, I created user-friendly applications using .NET Core and Python. Notably, I developed a membership app to improve communication and an innovative budget app for enhanced financial planning. These apps optimized cross-functional tasks, boosting efficiency and decision-making within the church community.',
    highlights: [
      'Created a user-friendly membership app using .NET Core for easy communication and community engagement at Mt. Rubidoux SDA Church.',
      'Developed a budget app in Python, for facilitating monthly financial planning based on tithes and offerings, and displaying progress and attainment for Mt. Rubidoux Church.',
      'Established efficient CI/CD pipelines for both apps, enabling seamless updates and improvements.',
      'The developed apps significantly decreased cross-functional manual tasks, optimizing processes and enhancing efficiency across various church activities.',
    ],
  },
  {
    name: 'First American Title',
    position: 'Software Engineer Intern',
    url: 'https://www.firstam.com/',
    startDate: '2022-03-03',
    endDate: '2022-09-02',
    summary: 'During my internship at First American Title, I applied my knowledge of C# and React to develop a full-stack emailing program. I leveraged AWS cloud computing services to deploy and manage the application, ensuring scalability and reliability. Additionally, I utilized Microsoft SQL Server for efficient data storage and retrieval. Collaborating with the development team, I actively participated in agile processes, conducted code reviews, and contributed to the overall project success. This internship provided me with valuable experience in cloud computing, database management, and collaborative software development, enhancing my proficiency in C#, React, AWS, and SQL Server.',
    highlights: [
      'Collaborated with stakeholders to identify vulnerabilities and analyze their impact.',
      'Developed and implemented a solution to remediate identified vulnerabilities.',
      'Designed and programmed software to automate the vulnerability management process.',
      'Utilized the emailing to workstation method to eliminate over 20,000 vulnerabilities.',
      'Mentored and trained coworkers on effective vulnerability management techniques.',
    ],
  },
];

export default work;
