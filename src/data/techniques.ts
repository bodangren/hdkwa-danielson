import { Technique } from '../types';

export const techniques: Technique[] = [
  {
    id: 'cold-call',
    title: 'Cold Call',
    subdomain: '3b',
    domain: 3,
    source: 'TLAC 3.0',
    alignment: '3b: Using Questioning and Discussion Techniques',
    highReward: true,
    description: 'Call on students regardless of whether they have raised their hands to ensure every student is accountable for the learning.',
    quote: 'Call on students regardless of whether they have raised their hands.',
    actionSteps: [
      'Question First: Pose the question to the entire class.',
      'Wait: Provide 3-5 seconds of silent think time.',
      'Select: Call on a student by name in a warm, predictable tone.',
      'Follow Up: Use "Stretch It" or "No Opt Out" if the initial answer needs more depth.'
    ],
    videos: {
      demo: 'wO9Y9R5xTaw', // Technique 34 Summary
      deepDive: '5vJoq2fQ-bM', // TLAC 3.0 Overview
      curated: ['1M20X9VLNRU'] // Stretch It Short
    },
    literature: {
      book: 'TLAC 3.0',
      pages: '245-252'
    }
  },
  {
    id: 'wait-time',
    title: 'Wait Time',
    subdomain: '3b',
    domain: 3,
    source: 'TLAC 3.0',
    alignment: '3b: Using Questioning and Discussion Techniques',
    highReward: true,
    description: 'Provide a few seconds of silence after asking a question and after a student provides an answer.',
    actionSteps: [
      'Wait Time 1.0: Wait 3-5 seconds after asking the question before calling a name.',
      'Wait Time 2.0: Wait 3-5 seconds after a student answers before responding yourself.',
      'Narrate the Wait: "I see 5 people thinking, 10 people thinking..."'
    ],
    videos: {
      demo: 'PvJw9ge8yFQ', // Technique 33 Summary
      curated: ['oszljgCoE9w'] // Wait Time Short
    },
    literature: {
      book: 'TLAC 3.0',
      pages: '238-244'
    }
  },
  {
    id: 'no-opt-out',
    title: 'No Opt Out',
    subdomain: '3b',
    domain: 3,
    source: 'TLAC 3.0',
    alignment: '3b: Using Questioning and Discussion Techniques',
    highReward: true,
    description: 'A sequence that begins with a student unable to answer a question and ends with the student giving the correct answer.',
    actionSteps: [
      'Identify: Student says "I don\'t know" or gives wrong answer.',
      'Pivot: Ask another student for the answer or provide a cue.',
      'Return: Go back to the original student to repeat the correct answer.'
    ],
    videos: {
      demo: 'NUL51AmaKfM', // Technique 15 Summary
      curated: ['lDjpciIP6wQ'] // No Opt Out Short
    },
    literature: {
      book: 'TLAC 3.0',
      pages: '105-112'
    }
  },
  {
    id: 'be-seen-looking',
    title: 'Be Seen Looking',
    subdomain: '2d',
    domain: 2,
    source: 'TLAC 3.0',
    alignment: '2d: Managing Student Behavior',
    highReward: true,
    description: 'Prevent behavior issues by visibly scanning the room and using non-verbal cues to show you are noticing everything.',
    actionSteps: [
      'The Radar: Scan the room intentionally.',
      'Invisible Columns: Move through the room to see every student\'s work.',
      'Narrate the Positive: Acknowledge students who are meeting expectations.'
    ],
    videos: {
      demo: 'e4xB3Ha2SKI', // Be Seen Looking Montage
    },
    literature: {
      book: 'TLAC 3.0',
      pages: '445-450'
    }
  }
];
