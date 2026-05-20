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
    detailedSummary: 'Cold Call is the practice of calling on students regardless of whether they have raised their hands. It ensures that every student is "on the hook" for the learning and accountable for thinking. When used correctly—warmly and predictably—it decreases student anxiety because students know they might be called on at any time. It allows the teacher to check for understanding across the entire room, not just from the few students who always raise their hands. Key to success is the "Question First" approach: ask the question, pause for think time, and then name the student. This keeps the whole class thinking about the answer until the name is called.',
    videos: {
      demo: 'wO9Y9R5xTaw', 
      curated: ['MK8YCmrf_Gg', 'p-WJShu8Wac', 'hhJW1HKJMLU', '5_-qktoEtEs']
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
    detailedSummary: 'Wait Time is a deliberate pause that allows students to process information and formulate high-quality responses. Wait Time 1.0 occurs after a question is asked but before a student is named, giving everyone time to think. Wait Time 2.0 occurs after a student has finished speaking, giving other students time to process the peer\'s answer and providing space for the original speaker to elaborate. Research shows that increasing wait time to just 3-5 seconds significantly improves the length and complexity of student responses and encourages participation from a broader range of students.',
    videos: {
      demo: 'PvJw9ge8yFQ', 
      curated: ['_p7PSRP7ZN4', 'AMstYDuJrIU', '6GH8z76EZeA']
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
    detailedSummary: 'No Opt Out is a foundational technique for building a culture of high expectations. It ensures that students understand that "I don\'t know" is not an acceptable ending point. Instead, the teacher provides support—either by asking another student to provide the answer or giving a small cue—and then returns to the original student to have them repeat the correct response. This empowers the student to end the interaction with a successful, correct statement and reinforces that every student is capable of reaching the goal.',
    videos: {
      demo: 'NUL51AmaKfM', 
      curated: ['qD3GkSgp5ic', 'bXUExb-u11o', 'ZWSju1Ykg54', 'JPKjSfOYi5E']
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
    detailedSummary: 'Turn and Talk is a high-ratio engagement strategy where every student in the room is required to speak and listen simultaneously. By providing a narrow, timed window (often 30-90 seconds) for peer discussion, teachers allow students to "rehearse" their thoughts before a whole-class discussion. This technique is highly effective for increasing the quality of subsequent participation and ensuring that even the quietest students have their voices heard. The teacher\'s role is to circulate and "eavesdrop" to identify high-quality responses to highlight later.',
    videos: {
      demo: 'siNwdzl1xU0', 
      curated: ['H0nh8A39J-Q', 'R_TQMHjDwOw']
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
    detailedSummary: 'Everybody Writes provides students with the critical time needed to process complex thoughts on paper before being asked to share them aloud. By making writing a requirement for everyone, the teacher ensures that all students are prepared to contribute to the discussion. This technique improves the quality of student ideas, as the act of writing forces more rigorous thinking than just thinking internally. It also creates a visible artifact of student thinking that the teacher can monitor while circulating.',
    videos: {
      demo: 'D-KayMWv0pI', 
      curated: ['ZbkjqMz0_rs', 'jdNX0ZgKwEw']
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
    detailedSummary: 'Be Seen Looking is a preventive management strategy. It involves the teacher intentionally scanning the room in a way that shows students the teacher is actively noticing their behavior and focus. By using the "Radar" (a slow, purposeful scan) and "Invisible Columns" (moving through the rows), the teacher creates a "Check for Compliance." This technique reduces the need for verbal corrections by establishing a high level of teacher presence and awareness. When the teacher "looks" like they are noticing, students are more likely to stay on task.',
    videos: {
      demo: 'e4xB3Ha2SKI', 
      curated: ['rTEd6qzOGxk', 'PtLFXXL77FU', 'k7_jR-DWIyw']
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
    detailedSummary: 'The goal of Least Invasive Intervention is to maximize instructional time by addressing behavior without stopping the flow of the lesson. Teachers should start with the most subtle move possible—such as a simple look or moving closer to a student (proximity)—before moving to more direct verbal corrections. By keeping the intervention "low-stakes," the teacher avoids unnecessary power struggles and keeps the focus of the class on the learning rather than the behavior correction.',
    videos: {
      demo: 'j88sZpGefeU', 
      curated: ['EQ5PEpTBoZo', 'yI8Hj2UrCbE', 'oKvWxAxAcWw']
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
    detailedSummary: 'Strong Voice is about establishing professional authority through calm, steady communication. It is not about volume, but about clarity and economy of language. Teachers with a Strong Voice do not talk over students; they wait for full attention before starting. They avoid repeating themselves unnecessarily and use a neutral, authoritative tone that signals confidence. This technique builds a predictable environment where students know that when the teacher speaks, it is important and intended for everyone.',
    videos: {
      demo: '9bJdrxHg8fQ', 
      curated: ['1vJonudsodI', 'ODI-z19TFJ0']
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
    detailedSummary: 'Do It Again is the fastest way to build muscle memory for classroom routines. Instead of just lecturing students about a failed procedure (like a messy transition), the teacher simply has the class do it again until it reaches the standard of excellence. This technique removes the "scolding" element and replaces it with a focus on practice and habit-building. It signals to students that procedures matter and that the teacher will not settle for anything less than the best effort.',
    videos: {
      demo: 'jOvXM-_6z5M', 
    },
    literature: {
      book: 'TLAC 3.0',
      pages: '488-494'
    }
  },

  // MARZANO / WONG / HATTIE ADDITIONS
  {
    id: 'learning-goals',
    title: 'Clear Learning Goals',
    subdomain: '1c',
    domain: 1,
    source: 'New Art and Science',
    alignment: '1c: Setting Instructional Outcomes',
    description: 'Establish and communicate clear, measurable goals for what students will learn during the lesson.',
    actionSteps: [
      'Define: Identify specific knowledge or skills.',
      'Communicate: Post the goal visibly in the room.',
      'Check: Refer back to the goal throughout the lesson.'
    ],
    detailedSummary: 'Marzano emphasizes that learning is most effective when students understand exactly what they are expected to learn. Clear learning goals go beyond just "doing an activity"; they focus on the specific cognitive outcome. A proficient teacher ensures students can articulate the goal and understand how their current work relates to it. This technique provides the roadmap for the entire lesson and is the foundation for effective student self-assessment.',
    videos: {
      demo: 'WPyebtSrFOw', // Hattie Chapter 7 (Teacher)
    },
    literature: {
      book: 'New Art and Science',
      pages: 'Chapter 1'
    }
  },
  {
    id: 'classroom-routines',
    title: 'The First 5 Minutes',
    subdomain: '2c',
    domain: 2,
    source: 'First Days of School',
    alignment: '2c: Managing Classroom Procedures',
    description: 'Establish a rock-solid routine for how students enter the room and begin work immediately.',
    actionSteps: [
      'The Bellwork: Have an assignment ready as soon as they walk in.',
      'Greeting: Meet students at the door (Threshold).',
      'The Script: Teach the entry routine explicitly during the first week.'
    ],
    detailedSummary: 'Harry Wong\'s foundational principle is that the teacher must manage the classroom, not discipline it. The first five minutes of class set the tone for the entire period. By having a consistent, non-negotiable entry routine—where students know exactly what to do without being told—the teacher eliminates dead time and prevents behavior issues before they start. This technique ensures that the classroom is a professional place of work from the very first second.',
    videos: {
      demo: 'kv2pAhwkFgc', // Classroom Routines
    },
    literature: {
      book: 'First Days of School',
      pages: 'Unit C'
    }
  }
];
