interface Experience {
  id: number;
  title: string;
  subTitle: string;
  date: string;
  skills: string;
  bulletPoints: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Adelphi University",
    subTitle: "Graduate Teaching Assistant",
    date: "Aug 2021 - Dec 2021",
    skills: "Python",
    bulletPoints: [
      "Delivered a range of teaching and assessment activities, including tutorials and tutoring.",
      "Contributed to the development of appropriate teaching materials to ensure content and methods of delivery meet learning objectives",
      "Participated in the supervision of practical work, advising on skills, methods and techniques to assist the transfer of knowledge",
    ],
  },
];
