import { Technique } from '../types';

export const techniques: Technique[] = [
  // --- DOMAIN 1: PLANNING & PREPARATION ---
  {
    id: 'exemplar-planning',
    title: 'Exemplar Planning',
    subdomain: '1a',
    domain: 1,
    source: 'TLAC 3.0',
    alignment: '1a: Demonstrating Knowledge of Content and Pedagogy',
    description: 'Create an ideal student response (an "exemplar") before the lesson to define the exact standard of excellence.',
    actionSteps: [
      'Draft: Write the perfect answer you want students to produce.',
      'Analyze: Identify the key vocabulary and logic steps required.',
      'Check: Use the exemplar to evaluate student work in real-time.'
    ],
    detailedSummary: 'Exemplar Planning is the discipline of solving your own lesson tasks before the students do. By creating a high-quality model response, you clarify the "finish line" for the lesson. This process helps you anticipate common misconceptions, identify essential vocabulary, and set a precise standard for what constitutes "proficient" work. It transforms your monitoring from "looking for work" to "looking for quality."',
    videos: {
      demo: 'LXEY7vr-Yvs', // Technique 1
    },
    literature: { book: 'TLAC 3.0', pages: 'Chapter 1' }
  },
  {
    id: 'student-centered-research',
    title: 'The Student Perspective',
    subdomain: '1b',
    domain: 1,
    source: 'Visible Learning',
    alignment: '1b: Demonstrating Knowledge of Students',
    description: 'Incorporate student voice and background knowledge into lesson design to ensure high-impact learning.',
    actionSteps: [
      'Survey: Gather data on student interests and prior knowledge.',
      'Analyze: Map student needs to specific instructional moves.',
      'Adapt: Modify tasks to align with student developmental levels.'
    ],
    detailedSummary: 'Hattie research highlights that understanding the "student as learner" is one of the highest impact factors in education. This technique involves systematically gathering and using data about students\' prior knowledge, learning preferences, and cultural backgrounds. By designing instruction that meets students where they are, teachers increase engagement and ensure that instructional outcomes are challenging yet attainable.',
    videos: {
      demo: 'VhVaUo1fQuA', // Hattie Chapter 4
    },
    literature: { book: 'Visible Learning (The Sequel)', pages: 'Chapter 4' }
  },
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
    detailedSummary: 'Marzano emphasizes that learning is most effective when students understand exactly what they are expected to learn. Clear learning goals go beyond just "doing an activity"; they focus on the specific cognitive outcome. A proficient teacher ensures students can articulate the goal and understand how their current work relates to it. This technique provides the roadmap for the entire lesson.',
    videos: {
      demo: 'WPyebtSrFOw', // Hattie Chapter 7
    },
    literature: { book: 'New Art and Science', pages: 'Chapter 1' }
  },
  {
    id: 'resource-curation',
    title: 'Curating Professional Resources',
    subdomain: '1d',
    domain: 1,
    source: 'DangRenBo',
    alignment: '1d: Demonstrating Knowledge of Resources',
    description: 'Utilize specialized digital tools and professional literature to enhance lesson depth and teacher expertise.',
    actionSteps: [
      'Explore: Identify high-quality digital repositories (e.g. Reading Advantage).',
      'Evaluate: Select resources that match specific student needs.',
      'Integrate: Embed resources seamlessly into the design of instruction.'
    ],
    detailedSummary: 'A proficient teacher is aware of a wide range of resources—both traditional and digital—that can enhance instruction. This technique involves the systematic curation of materials that support differentiation and provide additional layers of challenge for students. It also includes the teacher’s own professional development, such as mastering new digital tools to better support student literacy or numeracy.',
    videos: {
      demo: 'xS0EFsIcaI4', // Reading Advantage
    }
  },
  {
    id: 'double-plan',
    title: 'The Double Plan',
    subdomain: '1e',
    domain: 1,
    source: 'TLAC 3.0',
    alignment: '1e: Designing Coherent Instruction',
    description: 'Plan what students will be doing at every stage of the lesson, not just what the teacher is doing.',
    actionSteps: [
      'T-Chart: Create a two-column plan (Teacher Do / Student Do).',
      'Accountability: Ensure every student has a specific task during transitions.',
      'Alignment: Verify that student activities directly lead to the objective.'
    ],
    detailedSummary: 'The Double Plan prevents the "active teacher, passive student" trap. By planning the specific actions students will take—writing, discussing, or solving—teachers ensure a high ratio of student work. It forces the teacher to think through the logistics of the lesson, ensuring that transitions are tight and that instructional materials (like packets or digital tools) are optimized for student engagement.',
    videos: {
      demo: 'hSj4uCkfz5k', // Technique 4
    },
    literature: { book: 'TLAC 3.0', pages: 'Chapter 2' }
  },
  {
    id: 'affirmative-checking',
    title: 'Affirmative Checking',
    subdomain: '1f',
    domain: 1,
    source: 'TLAC 3.0',
    alignment: '1f: Designing Student Assessments',
    description: 'Insert "checkpoints" into your lesson where students must show they have mastered a step before moving on.',
    actionSteps: [
      'Identify: Choose a "hinge point" in the lesson.',
      'Standard: Define the minimum quality required to pass.',
      'Verify: Physically mark or acknowledge correct work before students proceed.'
    ],
    detailedSummary: 'Affirmative Checking is an instructional design technique that embeds formative assessment into the flow of the lesson. By requiring students to "pass" a certain point before continuing, you prevent them from practicing errors. It provides real-time data on student progress and allows for immediate, surgical intervention. It ensures that the assessment plan is not just at the end of the lesson, but woven into its core structure.',
    videos: {
      demo: 'YBWhU11MqpU', // Technique 11
    },
    literature: { book: 'TLAC 3.0', pages: 'Chapter 3' }
  },

  // --- DOMAIN 2: CLASSROOM ENVIRONMENT ---
  {
    id: 'positive-framing',
    title: 'Positive Framing',
    subdomain: '2a',
    domain: 2,
    source: 'TLAC 3.0',
    alignment: '2a: Creating an Environment of Respect and Rapport',
    description: 'Guide students toward behavior expectations using positive, constructive language rather than focusing on the negative.',
    actionSteps: [
      'Narrate the Positive: "I see three people with their pens ready..."',
      'Assume Best Intent: Frame corrections as "reminders" rather than scolds.',
      'Praise the Effort: Be precise about what students are doing well.'
    ],
    detailedSummary: 'Positive Framing builds rapport by focusing on the desired outcome. It avoids public "gotcha" moments and instead highlights the students who are meeting expectations. By keeping the tone constructive and professional, the teacher maintains student dignity and creates an environment where students feel safe taking risks. It is about "correcting to a standard" rather than "scolding for a mistake."',
    videos: {
      demo: 'KT4ET0PAWVI', // Technique 70
      curated: ['pz3ACmHPfqs', 'jdh_BtlvbH8'] // Precise Praise
    },
    literature: { book: 'TLAC 3.0', pages: 'Chapter 10' }
  },
  {
    id: 'culture-of-error',
    title: 'Culture of Error',
    subdomain: '2b',
    domain: 2,
    source: 'TLAC 3.0',
    alignment: '2b: Establishing a Culture for Learning',
    description: 'Create an environment where mistakes are expected, respected, and used as a tool for learning.',
    actionSteps: [
      'Normalize Mistakes: "I’m glad you made that mistake; it helps us see X."',
      'Check for Understanding: Encourage students to be honest about confusion.',
      'Responsive Teaching: Pivot the lesson based on the "beautiful mistakes" found.'
    ],
    detailedSummary: 'A Culture of Error shifts the focus from "getting it right" to "the process of learning." Proficient teachers explicitly teach students that errors are data points, not failures. By lowering the stakes for making a mistake, teachers receive more honest data from students, allowing them to provide better feedback. This creates a high-performance culture where the goal is collective growth.',
    videos: {
      demo: '9Y0snFJawfw', // Technique 12
      curated: ['UDJsoamKtNQ', '3oYfnEkmgwU'] // Montage/Demos
    },
    literature: { book: 'TLAC 3.0', pages: 'Chapter 3' }
  },
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
    literature: { book: 'TLAC 3.0', pages: '495-502' }
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
    detailedSummary: 'Be Seen Looking is a preventive management strategy. It involves the teacher intentionally scanning the room in a way that shows students the teacher is actively noticing their behavior and focus. By using the "Radar" (a slow, purposeful scan) and "Invisible Columns" (moving through the rows), the teacher creates a "Check for Compliance." This technique reduces the need for verbal corrections by establishing a high level of teacher presence and awareness.',
    videos: {
      demo: 'e4xB3Ha2SKI', 
      curated: ['rTEd6qzOGxk', 'PtLFXXL77FU', 'k7_jR-DWIyw']
    },
    literature: { book: 'TLAC 3.0', pages: '445-450' }
  },
  {
    id: 'physical-space-radar',
    title: 'Invisible Columns',
    subdomain: '2e',
    domain: 2,
    source: 'TLAC 3.0',
    alignment: '2e: Organizing Physical Space',
    description: 'Arrange and navigate your classroom to ensure you can reach every student in two steps or less.',
    actionSteps: [
      'Clear Paths: Ensure you can walk "The Grid" without obstruction.',
      'Proximity: Use your movement to influence student focus.',
      'Visibility: Position yourself so all students are always in your sightline.'
    ],
    detailedSummary: 'Organizing physical space is not just about furniture; it is about "instructional real estate." A proficient teacher ensures the room layout supports the lesson’s goals (e.g. pods for collaboration, rows for testing). The teacher must be able to circulate freely to monitor student work and provide one-on-one feedback. This technique focuses on the "Invisible Columns"—the paths a teacher walks to maintain presence in every corner of the room.',
    videos: {
      demo: 'e4xB3Ha2SKI', // Radar montage covers space usage
    }
  },

  // --- DOMAIN 3: INSTRUCTION ---
  {
    id: 'format-matters',
    title: 'Format Matters',
    subdomain: '3a',
    domain: 3,
    source: 'TLAC 3.0',
    alignment: '3a: Communicating With Students',
    description: 'Require students to use complete sentences and "academic" language when responding to questions.',
    actionSteps: [
      'Sentence Starters: Provide the beginning of the response.',
      'The Cue: Gently prompt "Full sentence, please."',
      'Vocabulary: Require the use of specific domain-appropriate terms.'
    ],
    detailedSummary: 'Format Matters ensures that communication in the classroom is of high professional quality. It bridges the gap between conversational language and academic discourse. By requiring students to respond in complete sentences, you improve their writing and their thinking. It also raises the level of rigor in the room, signaling that how we say something is as important as what we say.',
    videos: {
      demo: 'RDo5sDSwFkQ', // Technique 17
      curated: ['O8TDzPAe1qQ', 'MFhNM-9UAwo'] // Register Shift
    },
    literature: { book: 'TLAC 3.0', pages: 'Chapter 6' }
  },
  {
    id: 'cold-call',
    title: 'Cold Call',
    subdomain: '3b',
    domain: 3,
    source: 'TLAC 3.0',
    alignment: '3b: Using Questioning and Discussion Techniques',
    highReward: true,
    description: 'Call on students regardless of whether they have raised their hands to ensure every student is accountable for the learning.',
    actionSteps: [
      'Question First: Pose the question to the entire class.',
      'Wait: Provide 3-5 seconds of silent think time.',
      'Select: Call on a student by name in a warm, predictable tone.'
    ],
    detailedSummary: 'Cold Call is the practice of calling on students regardless of whether they have raised their hands. It ensures that every student is "on the hook" for the learning and accountable for thinking. When used correctly—warmly and predictably—it decreases student anxiety because students know they might be called on at any time. It allows the teacher to check for understanding across the entire room.',
    videos: {
      demo: 'wO9Y9R5xTaw', 
      curated: ['MK8YCmrf_Gg', 'p-WJShu8Wac', 'hhJW1HKJMLU', '5_-qktoEtEs']
    },
    literature: { book: 'TLAC 3.0', pages: '245-252' }
  },
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
      'Refocus: Use a standard routine to bring attention back.'
    ],
    detailedSummary: 'Turn and Talk is a high-ratio engagement strategy where every student in the room is required to speak and listen simultaneously. By providing a narrow, timed window (often 30-90 seconds) for peer discussion, teachers allow students to "rehearse" their thoughts before a whole-class discussion. This technique is highly effective for increasing the quality of subsequent participation.',
    videos: {
      demo: 'siNwdzl1xU0', 
      curated: ['H0nh8A39J-Q', 'R_TQMHjDwOw']
    },
    literature: { book: 'TLAC 3.0', pages: '315-322' }
  },
  {
    id: 'retrieval-practice',
    title: 'Retrieval Practice',
    subdomain: '3d',
    domain: 3,
    source: 'TLAC 3.0',
    alignment: '3d: Using Assessment in Instruction',
    description: 'Use low-stakes quizzes and "Show Me" checks to force students to recall information from memory.',
    actionSteps: [
      'Quick Quiz: Start class with 3-5 recall questions.',
      'Show Me: Use whiteboards or hand signals for immediate data.',
      'No Notes: Ensure students are pulling from memory, not resources.'
    ],
    detailedSummary: 'Retrieval Practice is one of the most robust learning strategies identified in John Hattie’s meta-analysis. It involves the act of calling information to mind, which strengthens memory and reveals gaps in understanding. A proficient teacher uses this as a constant formative assessment tool—using techniques like "Show Me" or "Cold Call" to see exactly what students remember and where the lesson needs to pivot.',
    videos: {
      demo: 'iGIL78shXOM', // Technique 7
      curated: ['pHp5dVqW3CQ', 'DiKqoWkt-o8'] // Show Me
    },
    literature: { book: 'TLAC 3.0', pages: 'Chapter 1' }
  },
  {
    id: 'plan-for-error',
    title: 'Plan for Error',
    subdomain: '3e',
    domain: 3,
    source: 'TLAC 3.0',
    alignment: '3e: Demonstrating Flexibility and Responsiveness',
    description: 'Anticipate common mistakes during planning and prepare specific "pivots" for when they occur.',
    actionSteps: [
      'Predict: Identify the hardest part of the task.',
      'Pivot: Decide what you will do if 50% of the class fails.',
      'Adjust: Be ready to shorten a task or re-teach a concept immediately.'
    ],
    detailedSummary: 'Flexibility is not just about winging it; it is about "planned responsiveness." By predicting student errors during the planning phase, teachers are prepared to pivot instruction without losing momentum. If a check for understanding reveals confusion, the proficient teacher has a "Plan B" (e.g. a different analogy or a simpler scaffold) ready to deploy. This technique ensures that instruction remains responsive to student needs.',
    videos: {
      demo: 'qmuv5rs6p4A', // Technique 2
    },
    literature: { book: 'TLAC 3.0', pages: 'Chapter 3' }
  },

  // --- DOMAIN 4: PROFESSIONAL RESPONSIBILITIES ---
  {
    id: 'reflection-logs',
    title: 'Reflection & Journaling',
    subdomain: '4a',
    domain: 4,
    source: 'HDKWA PD Portal',
    alignment: '4a: Reflecting on Teaching',
    description: 'Systematically record the successes and challenges of specific lessons to inform future practice.',
    actionSteps: [
      'Record: Use the PD Report feature on this site.',
      'Analyze: Identify exactly why a technique did or didn\'t work.',
      'Next Steps: Commit to one specific change for the next lesson.'
    ],
    detailedSummary: 'Reflection is the engine of professional growth. Proficient teachers don’t just "do" a lesson; they analyze it. This technique involves taking 5 minutes after a class to record evidence of student learning and teacher effectiveness. By using the "Before/After" reflection model, you create a tangible record of your professional growth that can be shared with coaches and administrators.',
    videos: {
      demo: 'aJgm_HozVxc', // Reflection and Journaling
    }
  },
  {
    id: 'smart-ledgers',
    title: 'Smart Ledgers',
    subdomain: '4b',
    domain: 4,
    source: 'DangRenBo',
    alignment: '4b: Maintaining Accurate Records',
    description: 'Use efficient, data-driven systems to track student progress and completion in real-time.',
    actionSteps: [
      'Digitize: Use tools like Excel or specialized trackers.',
      'Own and Track: Have students track their own progress (Ratio).',
      'Update Daily: Ensure data is fresh and usable for planning.'
    ],
    detailedSummary: 'Maintaining records is about having usable data to inform instruction. A proficient teacher has a system that allows them to quickly see which students have mastered a concept and which need more support. This technique includes the "Own and Track" move, where students are taught to take responsibility for their own data, increasing their accountability and freeing the teacher to focus on analysis.',
    videos: {
      demo: 'IN4MBaOdLRY', // Smart Ledgers
      curated: ['4gWMb_C0Fkc', '1O_YHSGpZDo'] // Own and Track / Month end
    }
  },
  {
    id: 'home-contributions',
    title: 'Engaging the Home',
    subdomain: '4c',
    domain: 4,
    source: 'Visible Learning',
    alignment: '4c: Communicating with Families',
    description: 'Establish frequent, positive communication with families about student progress and program goals.',
    actionSteps: [
      'Positive Calls: Call home when things are going well, not just for issues.',
      'Transparency: Ensure parents understand the instructional goals.',
      'Feedback Loop: Provide easy ways for families to communicate back.'
    ],
    detailedSummary: 'Hattie’s research shows that the "contributions from the home" have a significant impact on student success. This technique focuses on building a partnership with parents. By communicating the "What" and "Why" of the classroom instructional program, teachers empower families to support learning at home. Proficient teachers use multiple channels—email, phone, or digital portals—to ensure consistent communication.',
    videos: {
      demo: 'f9uw1RwBjAg', // Hattie Chapter 5
    }
  },
  {
    id: 'professional-community',
    title: 'Contributing to the School',
    subdomain: '4d',
    domain: 4,
    source: 'Visible Learning',
    alignment: '4d: Participating in a Professional Community',
    description: 'Collaborate with colleagues to share techniques and improve the overall school culture.',
    actionSteps: [
      'Peer Obs: Invite colleagues to see a specific technique in action.',
      'Shared Planning: Work on "Double Plans" or "Exemplars" together.',
      'PD Leadership: Share your reflections from this portal with your department.'
    ],
    detailedSummary: 'Professionalism involves contributing to the growth of the entire school, not just your own classroom. This technique encourages "Collective Teacher Efficacy"—the belief that together, we can improve student outcomes. By sharing successes (and "Culture of Error" moments) with the professional community, you help establish a culture of continuous improvement across the institution.',
    videos: {
      demo: 'TaNDd2I8mYY', // Hattie Chapter 6
    }
  },
  {
    id: 'professional-growth',
    title: 'Continuous Growth (GROW)',
    subdomain: '4e',
    domain: 4,
    source: 'Visible Learning',
    alignment: '4e: Growing and Developing Professionally',
    description: 'Take ownership of your development by setting specific goals and seeking out instructional coaching.',
    actionSteps: [
      'Goal Setting: Use the GROW model (Goal, Reality, Options, Will).',
      'Seek Feedback: Actively ask for "Radar" checks or "Voice" coaching.',
      'Trial: Systematically trial one new TLAC technique per week.'
    ],
    detailedSummary: 'Proficient teachers are lifelong learners. They actively seek out professional development that is evidenced-based and actionable. This technique involves using this portal to systematically build your instructional repertoire. By setting specific growth goals and tracking your implementation, you ensure that your professional development is not a one-off event, but a continuous cycle of improvement.',
    videos: {
      demo: 'WPyebtSrFOw', // Hattie Chapter 7
    }
  },
  {
    id: 'firm-calm-finesse',
    title: 'Firm Calm Finesse',
    subdomain: '4f',
    domain: 4,
    source: 'TLAC 3.0',
    alignment: '4f: Showing Professionalism',
    description: 'Maintain high standards of integrity and ethical conduct through calm, consistent interactions.',
    actionSteps: [
      'Neutral Tone: Keep your emotions separate from behavior corrections.',
      'Consistency: Apply the same standard to all students, every time.',
      'Integrity: Be honest with students and colleagues about your own practice.'
    ],
    detailedSummary: 'Professionalism is shown through the consistency and integrity of your daily actions. Firm Calm Finesse is a technique that helps teachers maintain a high standard of professional conduct, even in stressful moments. By remaining "calm and firm," you model the very behavior you expect from students. This builds trust and respect, ensuring that you are seen as an ethical and reliable leader in the classroom community.',
    videos: {
      demo: 'kPvG-Q1AnJQ', // Technique 65
      curated: ['9UsF-JAgAs0'] // Technique 64
    },
    literature: { book: 'TLAC 3.0', pages: 'Chapter 11' }
  }
];
