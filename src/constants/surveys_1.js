//enum QuestionType {
//     SHORT = 0,
//     LONG = 1,
//     MCQ = 2,
//     MRQ = 3,
//     SCALE = 4
// }
// interface Question {
//     type: QuestionType
//     question: string
//     answers?: {[key:string]: string}[]
//     scale?: number
// }
// enum bountyFrequency{
//   DAILY = 0,
//   WEEKLY = 1,
//   MONTHLY = 2,
//   YEARLY = 3,
// }

// surveyType is different from the db right now. I suggest we sync the two, no definition
// was provided for the surveyType so for now I used it as 'isThirdParty'.
// description field also does not exit in db I suggest we add that as well.

export const rewardData = [
  {
    _id: '62e021e1577d50ea195b9806',
    surveyName: 'Mood survey',
    surveyType: false,
    ccReward: 1,
    usdReward: 0,
    duration: 3,
    bountyFrequency: 0,
    description: 'Survey about your mood and how you feel about the day.',
    questions: [
      {
        type: 2,
        question: 'What type of framework is Next.js?',
        answers: [
          { 1: 'Frontend' },
          { 2: 'Backend' },
          { 3: 'FullStack' },
          { 4: 'None of the above' },
        ],
      },
      {
        type: 2,
        question: 'When was Next.js released?',
        answers: [
          { 1: '20 September 2019' },
          { 2: '14 January 2017' },
          { 3: '25 October 2016' },
          { 4: '28 March 2018' },
        ],
      },
      {
        type: 2,
        question: 'Which CSS Framework are we using?',
        answers: [
          { 1: 'Bootstrap' },
          { 2: 'TailwindCSS' },
          { 3: 'Chakra UI' },
          { 4: 'Bulma CSS' },
        ],
      },
      {
        type: 2,
        question:
          'Which class in Tailwind is used to set flex direction of column?',
        answers: [
          { 1: 'col' },
          { 2: 'col-flex' },
          { 3: 'flex-col' },
          { 4: 'None of the above' },
        ],
      },
    ],
  },
  {
    _id: '62e021e1577d50ea195b9807',
    surveyName: 'HEXACO',
    surveyType: false,
    ccReward: 10,
    usdReward: 0,
    duration: 15,
    bountyFrequency: 1,
    description:
      'Hexaco is a survey to assess the six major dimensions of your personality.',
    questions: [
      {
        type: 2,
        question: 'Hexaco?',
        answers: [
          { 1: 'Frontend' },
          { 2: 'Backend' },
          { 3: 'FullStack' },
          { 4: 'None of the above' },
        ],
      },
      {
        type: 2,
        question: 'Hexo ed?',
        answers: [
          { 1: '20 September 2019' },
          { 2: '14 January 2017' },
          { 3: '25 October 2016' },
          { 4: '28 March 2018' },
        ],
      },
      {
        type: 2,
        question: 'Hexcoooo e using?',
        answers: [
          { 1: 'Bootstrap' },
          { 2: 'TailwindCSS' },
          { 3: 'Chakra UI' },
          { 4: 'Bulma CSS' },
        ],
      },
      {
        type: 2,
        question:
          'Which class in Tailwind is used to set flex direction of column?',
        answers: [
          { 1: 'col' },
          { 2: 'col-flex' },
          { 3: 'flex-col' },
          { 4: 'None of the above' },
        ],
      },
    ],
  },
  {
    _id: '62e021e1577d50ea195b9808',
    surveyName: 'Big Five',
    surveyType: false,
    ccReward: 100,
    usdReward: 0,
    duration: 10,
    bountyFrequency: 2,
    description:
      'Big five is the most commonly used model of personality assessment. Take the survey to learn more about five factors describing your personality.',
    questions: [
      {
        type: 2,
        question: 'bigfive?',
        answers: [
          { 1: 'Frontend' },
          { 2: 'Backend' },
          { 3: 'FullStack' },
          { 4: 'None of the above' },
        ],
      },
      {
        type: 2,
        question: 'When was Next.js released?',
        answers: [
          { 1: '20 September 2019' },
          { 2: '14 January 2017' },
          { 3: '25 October 2016' },
          { 4: '28 March 2018' },
        ],
      },
      {
        type: 2,
        question: 'Which CSS Framework are we using?',
        answers: [
          { 1: 'Bootstrap' },
          { 2: 'TailwindCSS' },
          { 3: 'Chakra UI' },
          { 4: 'Bulma CSS' },
        ],
      },
      {
        type: 2,
        question:
          'Which class in Tailwind is used to set flex direction of column?',
        answers: [
          { 1: 'col' },
          { 2: 'col-flex' },
          { 3: 'flex-col' },
          { 4: 'None of the above' },
        ],
      },
    ],
  },
  {
    _id: '62e021e1577d50ea195b989',
    surveyName: 'SGSO',
    surveyType: true,
    ccReward: 15,
    usdReward: 0,
    duration: 3,
    bountyFrequency: 3,
    description:
      'Complete your profile with quick survey about your sex, gender and sexual orientation',
    questions: [
      {
        type: 0,
        question: 'SGSO?',
        answers: [
          { 1: 'Frontend' },
          { 2: 'Backend' },
          { 3: 'FullStack' },
          { 4: 'None of the above' },
        ],
      },
      {
        type: 0,
        question: 'When was Next.js released?',
        answers: [
          { 1: '20 September 2019' },
          { 2: '14 January 2017' },
          { 3: '25 October 2016' },
          { 4: '28 March 2018' },
        ],
      },
      {
        type: 0,
        question: 'Which CSS Framework are we using?',
        answers: [
          { 1: 'Bootstrap' },
          { 2: 'TailwindCSS' },
          { 3: 'Chakra UI' },
          { 4: 'Bulma CSS' },
        ],
      },
      {
        type: 0,
        question:
          'Which class in Tailwind is used to set flex direction of column?',
        answers: [
          { 1: 'col' },
          { 2: 'col-flex' },
          { 3: 'flex-col' },
          { 4: 'None of the above' },
        ],
      },
    ],
  },
]
