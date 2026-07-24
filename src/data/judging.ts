export interface JudgingCriterion {
  category: string;
  weightage: string;
  percentage: number;
  description: string;
  keyPoints: string[];
}

export const judgingCriteriaData: JudgingCriterion[] = [
  {
    category: "Innovation & Originality",
    weightage: "25%",
    percentage: 25,
    description: "Uniqueness of the idea, creative problem-solving approach, and novelty of the solution.",
    keyPoints: [
      "Is the solution solving a real problem in a fresh way?",
      "Does it push boundaries beyond standard boilerplate templates?",
      "How original is the conceptual design?"
    ]
  },
  {
    category: "Technical Complexity & Execution",
    weightage: "25%",
    percentage: 25,
    description: "Depth of technical architecture, code quality, stability, and effective use of modern stacks.",
    keyPoints: [
      "Is the backend/frontend cleanly architected?",
      "How well are APIs, data pipelines, or ML models integrated?",
      "Is the codebase free of critical runtime errors?"
    ]
  },
  {
    category: "User Experience & Design",
    weightage: "20%",
    percentage: 20,
    description: "Visual appeal, responsive layout, intuitive navigation, accessibility, and micro-interactions.",
    keyPoints: [
      "Is the UI visually engaging and consistent?",
      "Does the UX feel intuitive for first-time users?",
      "Are animations smooth and responsive on mobile and desktop?"
    ]
  },
  {
    category: "Functionality & Completeness",
    weightage: "20%",
    percentage: 20,
    description: "Does the working demo deliver on its core features and promises without game-breaking bugs?",
    keyPoints: [
      "Is there a working live demo or video walkthrough?",
      "How many advertised features are fully functional?",
      "Is the repository cleanly documented with setup steps?"
    ]
  },
  {
    category: "Presentation & Impact",
    weightage: "10%",
    percentage: 10,
    description: "Clarity of project documentation, demo video pitch, and potential real-world utility.",
    keyPoints: [
      "Is the README documentation comprehensive?",
      "Is the pitch concise and compelling?",
      "What is the practical impact for target users?"
    ]
  }
];
