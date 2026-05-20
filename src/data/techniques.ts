import { Technique } from '../types';

export const techniques: Technique[] = [
  // DOMAIN 3B: QUESTIONING
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
      demo: 'wO9Y9R5xTaw', // Summary
      curated: ['MK8YCmrf_Gg', 'p-WJShu8Wac', 'hhJW1HKJMLU', '5_-qktoEtEs'] // Classroom Demos
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
      demo: 'PvJw9ge8yFQ', // Summary
      curated: ['_p7PSRP7ZN4', 'AMstYDuJrIU', '6GH8z76EZeA'] // Classroom Demos
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
      demo: 'NUL51AmaKfM', // Summary
      curated: ['qD3GkSgp5ic', 'bXUExb-u11o', 'ZWSju1Ykg54', 'JPKjSfOYi5E'] // Classroom Demos
    },
    literature: {
      book: 'TLAC 3.0',
      pages: '105-112'
    }
  },

  // DOMAIN 3C: ENGAGING STUDENTS
  {
    id: 'turn-and-talk',
    title: 'Turn and Talk',
    subdomain: '3c',
    domain: 3,
    source: 'TLAC 3.0',
    alignment: '3c: Engaging Students in Learning',
    highReward: true,
    description: 'Provide a brief, timed opportunity for all students to discuss a question with a partner simultaneously.',
    actionSteps: [
      'Cue: Use a clear signal to start the discussion.',
      'Monitor: Circulate the room to listen to student responses.',
      'Refocus: Use a standard routine to bring attention back to the teacher.'
    ],
    videos: {
      demo: 'siNwdzl1xU0', // Technique 45
      curated: ['H0nh8A39J-Q', 'R_TQMHjDwOw'] // Techniques 44, 46
    },
    literature: {
      book: 'TLAC 3.0',
      pages: '315-322'
    }
  },
  {
    id: 'everybody-writes',
    title: 'Everybody Writes',
    subdomain: '3c',
    domain: 3,
    source: 'TLAC 3.0',
    alignment: '3c: Engaging Students in Learning',
    highReward: true,
    description: 'Give students a brief period of time to write their thoughts down before starting a discussion.',
    actionSteps: [
      'Prompt: Provide a clear writing task.',
      'Wait: Allow 1-2 minutes for silent writing.',
      'Transition: Move directly into a Cold Call or Turn and Talk.'
    ],
    videos: {
      demo: 'D-KayMWv0pI', // Technique 39
      curated: ['ZbkjqMz0_rs', 'jdNX0ZgKwEw'] // Techniques 38, 40
    },
    literature: {
      book: 'TLAC 3.0',
      pages: '282-288'
    }
  },

  // DOMAIN 2D: STUDENT BEHAVIOR
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
      demo: 'e4xB3Ha2SKI', // Montage
      curated: ['rTEd6qzOGxk', 'PtLFXXL77FU', 'k7_jR-DWIyw'] // Demos 55, 54, 53
    },
    literature: {
      book: 'TLAC 3.0',
      pages: '445-450'
    }
  },
  {
    id: 'least-invasive-intervention',
    title: 'Least Invasive Intervention',
    subdomain: '2d',
    domain: 2,
    source: 'TLAC 3.0',
    alignment: '2d: Managing Student Behavior',
    highReward: true,
    description: 'Correct off-task behavior with the most subtle, least disruptive method possible to maintain the flow of instruction.',
    actionSteps: [
      'Non-verbal: Eye contact or a small hand gesture.',
      'Proximity: Move closer to the student without stopping the lesson.',
      'Quick Correction: A brief, whispered instruction.'
    ],
    videos: {
      demo: 'j88sZpGefeU', // Technique 63
      curated: ['EQ5PEpTBoZo', 'yI8Hj2UrCbE', 'oKvWxAxAcWw'] // Demos 62, 61, 60
    },
    literature: {
      book: 'TLAC 3.0',
      pages: '458-465'
    }
  },

  // DOMAIN 2C: PROCEDURES
  {
    id: 'strong-voice',
    title: 'Strong Voice',
    subdomain: '2c',
    domain: 2,
    source: 'TLAC 3.0',
    alignment: '2c: Managing Classroom Procedures',
    highReward: true,
    description: 'Establish authority through economy of language, quiet power, and the "Do Not Interrupt" rule.',
    actionSteps: [
      'Economy of Language: Fewer words mean more weight.',
      'Do Not Talk Over: Wait for silence before starting.',
      'Quiet Power: Use a calm, steady tone instead of shouting.'
    ],
    videos: {
      demo: '9bJdrxHg8fQ', // Technique 69
      curated: ['1vJonudsodI', 'ODI-z19TFJ0'] // Demos 68, 67
    },
    literature: {
      book: 'TLAC 3.0',
      pages: '495-502'
    }
  },
  {
    id: 'do-it-again',
    title: 'Do It Again',
    subdomain: '2c',
    domain: 2,
    source: 'TLAC 3.0',
    alignment: '2c: Managing Classroom Procedures',
    highReward: true,
    description: 'When students fail to meet a procedure or routine, have them redo it until it is done correctly to build habits.',
    actionSteps: [
      'Neutral Correction: "We didn\'t quite hit our transition time. Let\'s try that again."',
      'Immediate Feedback: Redo it immediately while the context is fresh.',
      'Positive Reinforcement: Acknowledge the success when they get it right.'
    ],
    videos: {
      demo: 'jOvXM-_6z5M', // Technique 51
    },
    literature: {
      book: 'TLAC 3.0',
      pages: '488-494'
    }
  }
];
