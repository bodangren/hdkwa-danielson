import { Technique } from '../types';

export const techniques: Technique[] = [
  // --- DOMAIN 1: PLANNING & PREPARATION ---
  
  // 1a: Knowledge of Content and Pedagogy
  {
    id: 'exemplar-planning',
    title: 'Exemplar Planning',
    subdomain: '1a',
    domain: 1,
    source: 'TLAC 3.0',
    alignment: '1a: Knowledge of Content and Pedagogy',
    description: 'Create an ideal student response (an "exemplar") before the lesson to define the exact standard of excellence.',
    actionSteps: [
      'Draft: Write the perfect answer you want students to produce.',
      'Analyze: Identify the key vocabulary and logic steps required.',
      'Check: Use the exemplar to evaluate student work in real-time.'
    ],
    detailedSummary: 'Exemplar Planning is the discipline of solving your own lesson tasks before the students do. By creating a high-quality model response, you clarify the "finish line" for the lesson. This process helps you anticipate common misconceptions, identify essential vocabulary, and set a precise standard for what constitutes "proficient" work.',
    videos: { demo: 'LXEY7vr-Yvs' },
    literature: { book: 'TLAC 3.0', pages: 'Chapter 1' }
  },
  {
    id: 'knowledge-organizers',
    title: 'Knowledge Organizers',
    subdomain: '1a',
    domain: 1,
    source: 'TLAC 3.0',
    alignment: '1a: Knowledge of Content and Pedagogy',
    description: 'Synthesize the essential knowledge of a unit into a single-page document to ensure pedagogical clarity.',
    actionSteps: [
      'Distill: Identify the "must-know" facts and concepts.',
      'Connect: Show how different concepts relate to the core objective.',
      'Study: Use the organizer as a basis for Retrieval Practice.'
    ],
    detailedSummary: 'Knowledge Organizers serve as a pedagogical anchor. By mapping out the "essential knowledge" of a unit, teachers demonstrate a deep understanding of content structure, allowing for a more coherent sequence of lessons.',
    videos: { demo: '6DNTfuEcQek' },
    literature: { book: 'TLAC 3.0', pages: 'Technique 5' }
  },

  // 1b: Knowledge of Students
  {
    id: 'student-centered-research',
    title: 'The Student Perspective',
    subdomain: '1b',
    domain: 1,
    source: 'Visible Learning',
    alignment: '1b: Knowledge of Students',
    description: 'Incorporate student voice and background knowledge into lesson design.',
    actionSteps: [
      'Survey: Gather data on student interests and prior knowledge.',
      'Analyze: Map student needs to specific instructional moves.',
      'Adapt: Modify tasks to align with student developmental levels.'
    ],
    detailedSummary: 'Understanding the "student as learner" is a high-impact factor. This technique involves gathering data about students\' prior knowledge and cultural backgrounds to design instruction that meets them where they are.',
    videos: { demo: 'VhVaUo1fQuA' },
    literature: { book: 'Visible Learning (The Sequel)', pages: 'Chapter 4' }
  },
  {
    id: 'differentiated-instruction',
    title: 'Differentiated Paths',
    subdomain: '1b',
    domain: 1,
    source: 'Marzano',
    alignment: '1b: Knowledge of Students',
    description: 'Design multiple pathways for students to achieve the same instructional goal based on their current levels.',
    actionSteps: [
      'Assess: Use pre-assessments to identify student starting points.',
      'Group: Create flexible groupings for specific tasks.',
      'Choice: Offer varied activities that lead to the same cognitive outcome.'
    ],
    detailedSummary: 'Differentiation is the practical application of knowledge of students. This technique involves creating instructional materials that provide appropriate levels of scaffold and challenge for every learner.',
    videos: { demo: 'qW6slc3hu1o' }
  },

  // 1c: Setting Instructional Outcomes
  {
    id: 'learning-goals',
    title: 'Clear Learning Goals',
    subdomain: '1c',
    domain: 1,
    source: 'New Art and Science',
    alignment: '1c: Setting Instructional Outcomes',
    description: 'Establish and communicate clear, measurable goals for what students will learn.',
    actionSteps: [
      'Define: Identify specific knowledge or skills.',
      'Communicate: Post the goal visibly in the room.',
      'Check: Refer back to the goal throughout the lesson.'
    ],
    detailedSummary: 'Learning is most effective when students understand exactly what they are expected to learn. Clear goals focus on specific cognitive outcomes and provide the roadmap for the entire lesson.',
    videos: { demo: 'WPyebtSrFOw' },
    literature: { book: 'New Art and Science', pages: 'Chapter 1' }
  },
  {
    id: 'strategic-investment',
    title: 'Strategic Investment',
    subdomain: '1c',
    domain: 1,
    source: 'TLAC 3.0',
    alignment: '1c: Setting Instructional Outcomes',
    description: 'Invest students in the instructional goal by making the "Why" compelling.',
    actionSteps: [
      'The Hook: Start with a story or problem that highlights value.',
      'Challenge: Set a high bar that motivates persistence.',
      'Celebration: Acknowledge progress toward the goal.'
    ],
    detailedSummary: 'Strategic Investment builds buy-in. It ensures students see the goal as a desirable achievement, leading to higher levels of focus and persistence.',
    videos: {
      demo: 'bZyiURfJn_0',
      curated: ['fsLDMwyQ_Zw', 'dxVO4s0wN84', 'fMF11TM_jfs']
    }
  },

  // 1d: Knowledge of Resources
  {
    id: 'resource-curation',
    title: 'Curating Digital Resources',
    subdomain: '1d',
    domain: 1,
    source: 'DangRenBo',
    alignment: '1d: Knowledge of Resources',
    description: 'Utilize specialized digital tools and literature to enhance lesson depth.',
    actionSteps: [
      'Explore: Identify high-quality digital repositories.',
      'Evaluate: Select resources that match specific student needs.',
      'Integrate: Embed resources seamlessly into instruction.'
    ],
    detailedSummary: 'A proficient teacher curates materials that support differentiation and provide challenge. This includes mastering digital tools to support student literacy or numeracy.',
    videos: { demo: 'xS0EFsIcaI4' }
  },
  {
    id: 'case-study-analysis',
    title: 'Smart Case Studies',
    subdomain: '1d',
    domain: 1,
    source: 'DangRenBo',
    alignment: '1d: Knowledge of Resources',
    description: 'Use real-world case studies and professional artifacts to deepen student understanding.',
    actionSteps: [
      'Select: Choose a case study that mirrors the unit objective.',
      'Analyze: Have students extract key variables and data.',
      'Apply: Use case study findings to solve new problems.'
    ],
    detailedSummary: 'Using rich, authentic resources like case studies provides students with a bridge between theory and practice. This technique demonstrates a teacher\'s awareness of external resources that can enhance the instructional program.',
    videos: { demo: 'IN4MBaOdLRY', curated: ['1O_YHSGpZDo'] }
  },

  // 1e: Designing Coherent Instruction
  {
    id: 'double-plan',
    title: 'The Double Plan',
    subdomain: '1e',
    domain: 1,
    source: 'TLAC 3.0',
    alignment: '1e: Designing Coherent Instruction',
    description: 'Plan what students will be doing at every stage, not just what the teacher is doing.',
    actionSteps: [
      'T-Chart: Create a two-column plan.',
      'Accountability: Ensure every student has a task.',
      'Alignment: Verify that activities lead to the objective.'
    ],
    detailedSummary: 'The Double Plan prevents the "active teacher, passive student" trap by planning the specific actions students will take.',
    videos: { demo: 'hSj4uCkfz5k' },
    literature: { book: 'TLAC 3.0', pages: 'Chapter 2' }
  },
  {
    id: 'change-the-pace',
    title: 'Change the Pace',
    subdomain: '1e',
    domain: 1,
    source: 'TLAC 3.0',
    alignment: '1e: Designing Coherent Instruction',
    description: 'Design lessons with varied activity types to maintain energy.',
    actionSteps: [
      'Alternate: Switch between "Heavy" and "Light" tasks.',
      'Timed Windows: Use tight time limits for urgency.',
      'Refocus: Reset the room between phases.'
    ],
    detailedSummary: 'Pacing is key to coherent instruction. By varying intensity, teachers prevent fatigue and keep students engaged throughout the period.',
    videos: { demo: 'fZ2RfDxVikM', curated: ['qTp_i9YDpCI'] }
  },

  // 1f: Designing Student Assessments
  {
    id: 'affirmative-checking',
    title: 'Affirmative Checking',
    subdomain: '1f',
    domain: 1,
    source: 'TLAC 3.0',
    alignment: '1f: Designing Student Assessments',
    description: 'Insert "checkpoints" into your lesson where students must show mastery before moving on.',
    actionSteps: [
      'Identify: Choose a "hinge point".',
      'Standard: Define the minimum quality required.',
      'Verify: Physically mark or acknowledge correct work.'
    ],
    detailedSummary: 'Affirmative Checking embeds formative assessment into the flow of the lesson, preventing students from practicing errors.',
    videos: { demo: 'YBWhU11MqpU' },
    literature: { book: 'TLAC 3.0', pages: 'Chapter 3' }
  },
  {
    id: 'standardize-format',
    title: 'Standardize the Format',
    subdomain: '1f',
    domain: 1,
    source: 'TLAC 3.0',
    alignment: '1f: Designing Student Assessments',
    description: 'Design student materials so that work is easy for the teacher to scan instantly.',
    actionSteps: [
      'Aligned Workspaces: Answers in the same place.',
      'Vertical Alignment: Answer boxes in a column.',
      'Immediate Feedback: Scan desks in seconds.'
    ],
    detailedSummary: 'Standardizing format increases the efficiency of formative assessment, allowing for a much higher frequency of feedback.',
    videos: { demo: 'HEFxSiGse3U' }
  },

  // --- DOMAIN 2: CLASSROOM ENVIRONMENT ---

  // 2a: Respect and Rapport
  {
    id: 'positive-framing',
    title: 'Positive Framing',
    subdomain: '2a',
    domain: 2,
    source: 'TLAC 3.0',
    alignment: '2a: Respect and Rapport',
    description: 'Guide students toward behavior expectations using positive language.',
    actionSteps: [
      'Narrate the Positive: Highlight those meeting expectations.',
      'Assume Best Intent: Frame corrections as "reminders".',
      'Praise the Effort: Be precise about growth.'
    ],
    detailedSummary: 'Positive Framing builds rapport by focusing on the desired outcome and avoiding public "gotcha" moments.',
    videos: { demo: 'KT4ET0PAWVI' },
    literature: { book: 'TLAC 3.0', pages: 'Chapter 10' }
  },
  {
    id: 'precise-praise',
    title: 'Precise Praise',
    subdomain: '2a',
    domain: 2,
    source: 'TLAC 3.0',
    alignment: '2a: Respect and Rapport',
    description: 'Provide feedback that is specific, timely, and focused on student actions.',
    actionSteps: [
      'Be Specific: Identify the exact action.',
      'Timely: Praise immediately.',
      'Respect Dignity: Choose public or private mode.'
    ],
    detailedSummary: 'Precise Praise reinforces specific instructional habits and builds a culture of respect by showing students that their effort is noticed.',
    videos: { demo: 'pz3ACmHPfqs', curated: ['jdh_BtlvbH8'] }
  },
  {
    id: 'joy-factor',
    title: 'The Joy Factor',
    subdomain: '2a',
    domain: 2,
    source: 'TLAC 3.0',
    alignment: '2a: Respect and Rapport',
    description: 'Celebrate learning through shared routines and humor.',
    actionSteps: [
      'Shared Rhymes: Use chants to mark success.',
      'Humor: Use wit to lighten the room.',
      'Communal Goals: Celebrate class targets.'
    ],
    detailedSummary: 'Building small moments of celebration into the daily routine creates a warm and vibrant classroom community.',
    videos: { demo: '5GuZNgZNEzI', curated: ['PdTuXrrELi4'] }
  },

  // 2b: Establishing a Culture for Learning
  {
    id: 'culture-of-error',
    title: 'Culture of Error',
    subdomain: '2b',
    domain: 2,
    source: 'TLAC 3.0',
    alignment: '2b: Establishing a Culture for Learning',
    description: 'Create an environment where mistakes are used as a tool for learning.',
    actionSteps: [
      'Normalize Mistakes: "I’m glad you made that mistake."',
      'Check for Understanding: Encourage honesty about confusion.',
      'Responsive Teaching: Pivot based on student data.'
    ],
    detailedSummary: 'A Culture of Error shifts focus to the process of learning, where errors are data points rather than failures.',
    videos: { demo: '9Y0snFJawfw', curated: ['UDJsoamKtNQ'] },
    literature: { book: 'TLAC 3.0', pages: 'Chapter 3' }
  },
  {
    id: 'high-expectations',
    title: 'High Expectations',
    subdomain: '2b',
    domain: 2,
    source: 'TLAC 3.0',
    alignment: '2b: Establishing a Culture for Learning',
    description: 'Communicate the belief that every student can reach a high standard.',
    actionSteps: [
      'No Opt Out: Never leave a student with "I don\'t know."',
      'Wait Time: Provide silence for thinking.',
      'Academic Language: Require professional terminology.'
    ],
    detailedSummary: 'Culture for Learning is defined by the value placed on hard work. High expectations show students respect for their intellectual potential.',
    videos: { demo: 'yOSrb5E0xks' }
  },

  // 2c: Managing Classroom Procedures
  {
    id: 'strong-voice',
    title: 'Strong Voice',
    subdomain: '2c',
    domain: 2,
    source: 'TLAC 3.0',
    alignment: '2c: Managing Classroom Procedures',
    highReward: true,
    description: 'Establish authority through economy of language and quiet power.',
    actionSteps: [
      'Economy of Language: Fewer words, more weight.',
      'Do Not Talk Over: Wait for full attention.',
      'Quiet Power: Use a calm, steady tone.'
    ],
    detailedSummary: 'Strong Voice is about establishing professional authority through calm, steady communication and clarity.',
    videos: { demo: '9bJdrxHg8fQ', curated: ['1vJonudsodI', 'ODI-z19TFJ0'] }
  },
  {
    id: 'do-it-again',
    title: 'Do It Again',
    subdomain: '2c',
    domain: 2,
    source: 'TLAC 3.0',
    alignment: '2c: Managing Classroom Procedures',
    highReward: true,
    description: 'When students fail to meet a procedure, have them redo it until it is correct.',
    actionSteps: [
      'Neutral Correction: "Let\'s try that transition again."',
      'Immediate Feedback: Redo immediately.',
      'Positive Reinforcement: Acknowledge success.'
    ],
    detailedSummary: 'Do It Again builds muscle memory for classroom routines, focusing on practice rather than scolding.',
    videos: { demo: 'jOvXM-_6z5M' }
  },
  {
    id: 'make-compliance-visible',
    title: 'Visible Compliance',
    subdomain: '2c',
    domain: 2,
    source: 'TLAC 3.0',
    alignment: '2c: Managing Classroom Procedures',
    description: 'Give instructions that allow you to see instantly if everyone is following.',
    actionSteps: [
      'Standardized Signal: Choose an easy-to-see move.',
      'Verify: Scan the room (Radar).',
      'Narrate: Positive framing for compliance.'
    ],
    detailedSummary: 'By making compliance visible, teachers can manage the room efficiently without losing instructional time to confusion.',
    videos: { demo: 'Rk87TbnZojc', curated: ['1qIzNdbHK4M'] }
  },
  {
    id: 'threshold',
    title: 'Threshold',
    subdomain: '2c',
    domain: 2,
    source: 'Wong / TLAC',
    alignment: '2c: Managing Classroom Procedures',
    description: 'Meet students at the door to set the tone for learning before they enter.',
    actionSteps: [
      'Greeting: Handshake, high-five, or warm eye contact.',
      'Instruction: Give the first task (Bellwork) before they sit.',
      'Correction: Address off-task behavior before it enters the room.'
    ],
    detailedSummary: 'Threshold allows the teacher to establish rapport and expectations the moment students arrive. It ensures that the transition into the classroom is professional and purposeful.',
    videos: { demo: 'kv2pAhwkFgc' },
    literature: { book: 'First Days of School', pages: 'Unit C' }
  },

  // 2d: Managing Student Behavior
  {
    id: 'be-seen-looking',
    title: 'Be Seen Looking',
    subdomain: '2d',
    domain: 2,
    source: 'TLAC 3.0',
    alignment: '2d: Managing Student Behavior',
    highReward: true,
    description: 'Prevent behavior issues by visibly scanning the room.',
    actionSteps: [
      'The Radar: Intentional scan.',
      'Invisible Columns: Move through rows.',
      'Narrate the Positive: Acknowledge on-task students.'
    ],
    detailedSummary: 'Be Seen Looking establishes teacher presence. When the teacher "looks" like they are noticing, students stay on task.',
    videos: { demo: 'e4xB3Ha2SKI', curated: ['rTEd6qzOGxk'] }
  },
  {
    id: 'least-invasive-intervention',
    title: 'Least Invasive Intervention',
    subdomain: '2d',
    domain: 2,
    source: 'TLAC 3.0',
    alignment: '2d: Managing Student Behavior',
    highReward: true,
    description: 'Correct off-task behavior with the most subtle method possible.',
    actionSteps: [
      'Non-verbal: Simple hand gesture.',
      'Proximity: Move closer.',
      'Quick Correction: Whispered instruction.'
    ],
    detailedSummary: 'Maximize instructional time by addressing behavior without stopping the flow of the lesson.',
    videos: { demo: 'j88sZpGefeU', curated: ['EQ5PEpTBoZo'] }
  },
  {
    id: 'art-of-consequence',
    title: 'Art of the Consequence',
    subdomain: '2d',
    domain: 2,
    source: 'TLAC 3.0',
    alignment: '2d: Managing Student Behavior',
    description: 'Deliver consequences in a way that is consistent and respectful.',
    actionSteps: [
      'Immediate: Address the issue while fresh.',
      'Standard: Follow the discipline ladder.',
      'Emotional Neutrality: Focus on behavior, not character.'
    ],
    detailedSummary: 'Proficient teachers ensure behavior standards are clear and consequences are applied fairly and professionally.',
    videos: { demo: 'ElUhlsRuPHE' }
  },

  // 2e: Organizing Physical Space
  {
    id: 'invisible-columns',
    title: 'The Grid',
    subdomain: '2e',
    domain: 2,
    source: 'TLAC 3.0',
    alignment: '2e: Organizing Physical Space',
    description: 'Arrange and navigate your classroom for maximum visibility and accessibility.',
    actionSteps: [
      'Clear Paths: No obstructions for movement.',
      'Proximity: Use space to influence student focus.',
      'Visibility: Position so all students are in sightline.'
    ],
    detailedSummary: 'Organizing physical space supports lesson goals. Circulation allows for real-time monitoring and feedback.',
    videos: { demo: 'e4xB3Ha2SKI' }
  },
  {
    id: 'front-table',
    title: 'The Front Table',
    subdomain: '2e',
    domain: 2,
    source: 'DangRenBo',
    alignment: '2e: Organizing Physical Space',
    description: 'Designate a central space for high-intensity small group instruction and modeling.',
    actionSteps: [
      'Layout: Create a space where a small group can gather near the teacher.',
      'Visuals: Ensure students at the table can see the primary board.',
      'Rotations: Move students in and out based on real-time data.'
    ],
    detailedSummary: 'A proficient teacher uses physical resources effectively. The "Front Table" allows for targeted differentiation without disrupting the rest of the class.',
    videos: { demo: 'aTD30bWJzB0' }
  },

  // --- DOMAIN 3: INSTRUCTION ---

  // 3a: Communicating With Students
  {
    id: 'format-matters',
    title: 'Format Matters',
    subdomain: '3a',
    domain: 3,
    source: 'TLAC 3.0',
    alignment: '3a: Communicating With Students',
    description: 'Require students to use complete sentences and academic language.',
    actionSteps: [
      'Sentence Starters: Provide the lead-in.',
      'The Cue: "Full sentence, please."',
      'Vocabulary: Require specific domain terms.'
    ],
    detailedSummary: 'Format Matters bridges the gap between conversational language and academic discourse, raising rigor in the room.',
    videos: { demo: 'RDo5sDSwFkQ', curated: ['O8TDzPAe1qQ'] }
  },
  {
    id: 'call-and-response',
    title: 'Call and Response',
    subdomain: '3a',
    domain: 3,
    source: 'TLAC 3.0',
    alignment: '3a: Communicating With Students',
    description: 'Use a choral response to review key facts quickly.',
    actionSteps: [
      'Cue: Standard countdown.',
      'The Fill: Pause before a key word.',
      'Repeat: "Do It Again" for full participation.'
    ],
    detailedSummary: 'Call and Response reinforces key terms and ensures everyone is participating in the instructional purpose.',
    videos: { demo: 'BeYZ2uJWDD0', curated: ['NfbB1IKWLes'] }
  },

  // 3b: Questioning and Discussion
  {
    id: 'cold-call',
    title: 'Cold Call',
    subdomain: '3b',
    domain: 3,
    source: 'TLAC 3.0',
    alignment: '3b: Questioning and Discussion',
    highReward: true,
    description: 'Call on students regardless of whether they have raised their hands.',
    actionSteps: [
      'Question First: Ask the class.',
      'Wait: 3-5 seconds.',
      'Select: Name the student.'
    ],
    detailedSummary: 'Cold Call ensures every student is on the hook for thinking. Predictable and warm usage decreases anxiety.',
    videos: { demo: 'wO9Y9R5xTaw', curated: ['MK8YCmrf_Gg', 'p-WJShu8Wac'] }
  },
  {
    id: 'wait-time',
    title: 'Wait Time',
    subdomain: '3b',
    domain: 3,
    source: 'TLAC 3.0',
    alignment: '3b: Questioning and Discussion',
    highReward: true,
    description: 'Deliberate pause to allow processing.',
    actionSteps: [
      'Wait Time 1.0: Pause before naming a student.',
      'Wait Time 2.0: Pause after a student speaks.',
      'Narrate: "I see 10 people thinking..."'
    ],
    detailedSummary: 'Increasing wait time improves the length and complexity of student responses and broadens participation.',
    videos: { demo: 'PvJw9ge8yFQ', curated: ['_p7PSRP7ZN4'] }
  },
  {
    id: 'no-opt-out',
    title: 'No Opt Out',
    subdomain: '3b',
    domain: 3,
    source: 'TLAC 3.0',
    alignment: '3b: Questioning and Discussion',
    highReward: true,
    description: 'Sequence ensuring students repeat the correct answer after initial confusion.',
    actionSteps: [
      'Identify: Student doesn\'t know.',
      'Pivot: Ask peer or give cue.',
      'Return: Back to original student.'
    ],
    detailedSummary: 'Foundational for high expectations. Empowers students to end interactions with a successful, correct statement.',
    videos: { demo: 'NUL51AmaKfM', curated: ['qD3GkSgp5ic'] }
  },
  {
    id: 'stretch-it',
    title: 'Stretch It',
    subdomain: '3b',
    domain: 3,
    source: 'TLAC 3.0',
    alignment: '3b: Questioning and Discussion',
    description: 'Push students to higher levels of thinking after a correct answer.',
    actionSteps: [
      'Ask "How": Explain the logic.',
      'Ask "What Else": Seek more evidence.',
      'Connect: Link to prior learning.'
    ],
    detailedSummary: 'Turns a successful moment into a learning moment. Constantly pushes students to the edge of understanding.',
    videos: { demo: 'rdszNzs0N80', curated: ['JMa7g4RP334'] }
  },

  // 3c: Engaging Students in Learning
  {
    id: 'turn-and-talk',
    title: 'Turn and Talk',
    subdomain: '3c',
    domain: 3,
    source: 'TLAC 3.0',
    alignment: '3c: Engaging Students in Learning',
    highReward: true,
    description: 'Timed discussion with a partner.',
    actionSteps: [
      'Cue: Clear start.',
      'Monitor: Listen while circulating.',
      'Refocus: Standard reset.'
    ],
    detailedSummary: 'High-ratio engagement strategy allows everyone to rehearse thoughts before whole-class discussion.',
    videos: { demo: 'siNwdzl1xU0', curated: ['H0nh8A39J-Q'] }
  },
  {
    id: 'everybody-writes',
    title: 'Everybody Writes',
    subdomain: '3c',
    domain: 3,
    source: 'TLAC 3.0',
    alignment: '3c: Engaging Students in Learning',
    highReward: true,
    description: 'Write thoughts down before discussion.',
    actionSteps: [
      'Prompt: Clear task.',
      'Wait: 1-2 minutes.',
      'Transition: Move to talk.'
    ],
    detailedSummary: 'Writing forces more rigorous thinking than internal thought and preparation for contribution.',
    videos: { demo: 'D-KayMWv0pI', curated: ['ZbkjqMz0_rs'] }
  },
  {
    id: 'slant',
    title: 'SLANT',
    subdomain: '3c',
    domain: 3,
    source: 'TLAC 3.0',
    alignment: '3c: Engaging Students in Learning',
    description: 'Explicitly teach the behaviors of active listening.',
    actionSteps: [
      'Sit up.',
      'Listen.',
      'Ask and answer questions.',
      'Nod your head.',
      'Track the speaker.'
    ],
    detailedSummary: 'SLANT ensures that engagement is visible and active. By teaching these habits, teachers provide students with the tools to focus and process instruction effectively.',
    videos: { demo: '5vJoq2fQ-bM' } // Overview covers SLANT basics
  },
  {
    id: 'ratio-thinking',
    title: 'The T/S Ratio',
    subdomain: '3c',
    domain: 3,
    source: 'TLAC 3.0',
    alignment: '3c: Engaging Students in Learning',
    description: 'Shift cognitive load from teacher to students.',
    actionSteps: [
      'Self-Check: Who is working harder?',
      'Wait Time 2.0: Let them process.',
      'Batch Questions: Student-to-student responses.'
    ],
    detailedSummary: 'Ratio is the ultimate measure of engagement. Proficient teachers ensure students are doing the "heavy lifting" of thinking.',
    videos: { demo: 'MFhNM-9UAwo' }
  },

  // 3d: Using Assessment in Instruction
  {
    id: 'retrieval-practice',
    title: 'Retrieval Practice',
    subdomain: '3d',
    domain: 3,
    source: 'Visible Learning',
    alignment: '3d: Using Assessment in Instruction',
    description: 'Low-stakes quizzes to force recall.',
    actionSteps: [
      'Quick Quiz: Class start recall.',
      'Show Me: Whiteboards for data.',
      'No Notes: Pure memory pull.'
    ],
    detailedSummary: 'Robust learning strategy for revealing gaps and strengthening long-term memory.',
    videos: { demo: 'iGIL78shXOM' }
  },
  {
    id: 'show-me',
    title: 'Show Me',
    subdomain: '3d',
    domain: 3,
    source: 'TLAC 3.0',
    alignment: '3d: Using Assessment in Instruction',
    description: 'Simultaneous physical signals for 100% data.',
    actionSteps: [
      'Wait: Give time to solve.',
      'Signal: "One, two, show me!"',
      'Scan: Use Radar for data.'
    ],
    detailedSummary: 'Provides real-time data from every student, eliminating "hiding" and allowing immediate intervention.',
    videos: { demo: 'pHp5dVqW3CQ', curated: ['DiKqoWkt-o8'] }
  },
  {
    id: 'show-call',
    title: 'Show Call',
    subdomain: '3d',
    domain: 3,
    source: 'TLAC 3.0',
    alignment: '3d: Using Assessment in Instruction',
    description: 'Display student work publicly to analyze and revise as a class.',
    actionSteps: [
      'Select: Choose a "beautiful struggle" or an exemplar.',
      'Project: Use a visualizer or digital tool.',
      'Revise: Have students improve the work together.'
    ],
    detailedSummary: 'Show Call creates a public forum for high-quality work analysis. It turns individual student artifacts into communal learning opportunities.',
    videos: { demo: 'twqsJ9JXVe8', curated: ['I1qb8kHIbYs'] }
  },

  // 3e: Demonstrating Flexibility and Responsiveness
  {
    id: 'plan-for-error',
    title: 'Plan for Error',
    subdomain: '3e',
    domain: 3,
    source: 'TLAC 3.0',
    alignment: '3e: Demonstrating Flexibility and Responsiveness',
    description: 'Anticipate common mistakes and prepare pivots.',
    actionSteps: [
      'Predict: Identify hard parts.',
      'Pivot: Plan for confusion.',
      'Adjust: Re-teach immediately.'
    ],
    detailedSummary: 'Planned responsiveness ensures momentum isn\'t lost when students struggle. Flexibility is built into the design.',
    videos: { demo: 'qmuv5rs6p4A' }
  },
  {
    id: 'hinge-points',
    title: 'Hinge Questions',
    subdomain: '3e',
    domain: 3,
    source: 'Visible Learning',
    alignment: '3e: Demonstrating Flexibility and Responsiveness',
    description: 'A diagnostic question that determines whether to move on or re-teach.',
    actionSteps: [
      'Design: Create a multiple-choice question with high-quality distractors.',
      'Check: Ask the question at a critical transition point.',
      'Decision: If <80% get it right, pivot to re-teaching.'
    ],
    detailedSummary: 'Hinge questions provide the data needed for real-time flexibility. They ensure teachers promote the successful learning of all students before advancing.',
    videos: { demo: '7himF8J3ick' }
  },

  // --- DOMAIN 4: PROFESSIONAL RESPONSIBILITIES ---

  // 4a: Reflecting on Teaching
  {
    id: 'reflection-logs',
    title: 'Before/After Reflection',
    subdomain: '4a',
    domain: 4,
    source: 'HDKWA PD Portal',
    alignment: '4a: Reflecting on Teaching',
    description: 'Systematically record successes to inform practice.',
    actionSteps: [
      'Record: Use the PD Report.',
      'Analyze: Why did it work?',
      'Next Steps: Commit to change.'
    ],
    detailedSummary: 'Creates a tangible record of professional growth using evidence from specific lessons.',
    videos: { demo: 'aJgm_HozVxc' }
  },
  {
    id: 'peer-observation',
    title: 'Peer Observation',
    subdomain: '4a',
    domain: 4,
    source: 'Visible Learning',
    alignment: '4a: Reflecting on Teaching',
    description: 'Invite colleagues to observe a specific technique and provide targeted feedback.',
    actionSteps: [
      'Identify: Choose one technique to be observed (e.g. Radar).',
      'Observe: Have a colleague record student responses.',
      'Debrief: Meet to analyze the evidence and self-correct.'
    ],
    detailedSummary: 'Reflection is more powerful when based on objective peer data. This technique fosters an accurate description of the lesson and professional growth.',
    videos: { demo: 'sh-zHyXm7eI' }
  },

  // 4b: Maintaining Accurate Records
  {
    id: 'smart-ledgers',
    title: 'Smart Ledgers',
    subdomain: '4b',
    domain: 4,
    source: 'DangRenBo',
    alignment: '4b: Maintaining Accurate Records',
    description: 'Efficient data-driven systems to track progress.',
    actionSteps: [
      'Digitize: Use Excel/trackers.',
      'Own and Track: Student responsibility.',
      'Update Daily: Usable data.'
    ],
    detailedSummary: 'Systems for student completion and progress that are effective and instructional.',
    videos: { demo: 'IN4MBaOdLRY', curated: ['4gWMb_C0Fkc'] }
  },
  {
    id: 'standardized-record-keeping',
    title: 'Standardized Feedback',
    subdomain: '4b',
    domain: 4,
    source: 'TLAC 3.0',
    alignment: '4b: Maintaining Accurate Records',
    description: 'Use a consistent set of symbols and codes to record student mastery during the lesson.',
    actionSteps: [
      'Codes: Use "✓" for mastery, "?" for confusion.',
      'Stamp: Use a physical stamp for Affirmative Checking.',
      'Log: Transfer codes to a digital ledger for long-term tracking.'
    ],
    detailedSummary: 'Proficient record-keeping is efficient and informs instruction. Standardized codes allow the teacher to maintain accurate records without losing instructional time.',
    videos: { demo: 'HEFxSiGse3U' } // Standardize format aids this
  },

  // 4c: Communicating with Families
  {
    id: 'home-contributions',
    title: 'Engaging the Home',
    subdomain: '4c',
    domain: 4,
    source: 'Visible Learning',
    alignment: '4c: Communicating with Families',
    description: 'Frequent, positive communication about student progress.',
    actionSteps: [
      'Positive Calls: Not just for issues.',
      'Transparency: Explain the "Why".',
      'Feedback Loop: Two-way channel.'
    ],
    detailedSummary: 'Partnership with parents supports learning at home. Uses multiple channels for consistency.',
    videos: { demo: 'f9uw1RwBjAg' }
  },
  {
    id: 'instructional-transparency',
    title: 'The Open Classroom',
    subdomain: '4c',
    domain: 4,
    source: 'DangRenBo',
    alignment: '4c: Communicating with Families',
    description: 'Share instructional goals and student artifacts with families through digital portals.',
    actionSteps: [
      'Publish: Share the "Exemplar" or "Learning Goal" with parents.',
      'Context: Explain what students are doing and why it matters.',
      'Connect: Provide resources for families to support the goal at home.'
    ],
    detailedSummary: 'Proficient communication conveys information about the instructional program. Sharing the "Blueprints" of the lesson empowers families as partners.',
    videos: { demo: 'vsyQfmx_ej4' } // Thailand teaser shows the platform
  },

  // 4d: Participating in a Professional Community
  {
    id: 'professional-community',
    title: 'Contributing to School',
    subdomain: '4d',
    domain: 4,
    source: 'Visible Learning',
    alignment: '4d: Participating in a Professional Community',
    description: 'Collaborate to share techniques school-wide.',
    actionSteps: [
      'Peer Obs: Invite colleagues.',
      'Shared Planning: Work on "Double Plans".',
      'PD Leadership: Share reflections.'
    ],
    detailedSummary: 'Collective Teacher Efficacy is the belief that together we improve student outcomes.',
    videos: { demo: 'TaNDd2I8mYY' }
  },
  {
    id: 'shared-exemplars',
    title: 'Collective Exemplars',
    subdomain: '4d',
    domain: 4,
    source: 'TLAC 3.0',
    alignment: '4d: Participating in a Professional Community',
    description: 'Analyze student work with colleagues to calibrate standards of excellence.',
    actionSteps: [
      'Bring Work: Bring 5 student artifacts to a team meeting.',
      'Compare: Score the work against a shared "Exemplar".',
      'Standardize: Agree on what constitutes "Proficient" across the department.'
    ],
    detailedSummary: 'Relationships with colleagues are characterized by mutual support. Shared work analysis is a high-impact move for institutional growth.',
    videos: { demo: '0uIU8ZrG7yc' }
  },

  // 4e: Growing and Developing Professionally
  {
    id: 'professional-growth',
    title: 'Continuous Growth (GROW)',
    subdomain: '4e',
    domain: 4,
    source: 'Visible Learning',
    alignment: '4e: Growing and Developing Professionally',
    description: 'Ownership of development through goal setting.',
    actionSteps: [
      'Goal Setting: GROW model.',
      'Seek Feedback: Actively ask for coaching.',
      'Trial: New technique per week.'
    ],
    detailedSummary: 'Systematic building of instructional repertoire through continuous cycles of improvement.',
    videos: { demo: 'WPyebtSrFOw' }
  },
  {
    id: 'evidence-based-trial',
    title: 'The Action Research Cycle',
    subdomain: '4e',
    domain: 4,
    source: 'Hattie / Lemov',
    alignment: '4e: Growing and Developing Professionally',
    description: 'Test specific evidence-based strategies in your classroom and record the data.',
    actionSteps: [
      'Hypothesis: "If I use Wait Time 1.0, then response length will increase."',
      'Measure: Record current response length (baseline).',
      'Trial: Implement for 2 weeks and record the difference.'
    ],
    detailedSummary: 'A proficient teacher makes a systematic effort to conduct action research. This technique turns the classroom into a professional laboratory.',
    videos: { demo: '8fCTfmSfjMY' }
  },

  // 4f: Showing Professionalism
  {
    id: 'firm-calm-finesse',
    title: 'Firm Calm Finesse',
    subdomain: '4f',
    domain: 4,
    source: 'TLAC 3.0',
    alignment: '4f: Showing Professionalism',
    description: 'Integrity through calm, consistent interactions.',
    actionSteps: [
      'Neutral Tone: Emotional separation.',
      'Consistency: Same standard always.',
      'Integrity: Honest about practice.'
    ],
    detailedSummary: 'Models behavior expected from students to build trust and Reliable leadership.',
    videos: { demo: 'kPvG-Q1AnJQ', curated: ['9UsF-JAgAs0'] }
  },
  {
    id: 'professional-modeling',
    title: 'Modeling Integrity',
    subdomain: '4f',
    domain: 4,
    source: 'DangRenBo',
    alignment: '4f: Showing Professionalism',
    description: 'Exhibit high standards of integrity by modeling the professional habits expected of students.',
    actionSteps: [
      'Punctuality: Be at the "Threshold" every period.',
      'Accountability: Own your mistakes publicly (Culture of Error).',
      'Preparation: Have all artifacts and "Exemplars" ready before students enter.'
    ],
    detailedSummary: 'Professionalism is shown through daily integrity. Modeling habits like preparation and accountability builds a culture of mutual respect.',
    videos: { demo: 'gjIQVhiMWdA' }
  }
];
