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
    detailedSummary: 'Exemplar Planning is the discipline of solving your own lesson tasks before the students do. By creating a high-quality model response, you clarify the "finish line" for the lesson. This process helps you anticipate common misconceptions, identify essential vocabulary, and set a precise standard for what constitutes "proficient" work. It transforms your monitoring from "looking for work" to "looking for quality."',
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
    detailedSummary: 'Knowledge Organizers serve as a pedagogical anchor for both the teacher and the students. By mapping out the "essential knowledge" of a unit, teachers demonstrate a deep understanding of content structure. It allows for a more coherent sequence of lessons, as the most important information is prioritized and clearly communicated from day one.',
    videos: { demo: '6DNTfuEcQek' },
    literature: { book: 'TLAC 3.0', pages: 'Technique 5' }
  },
  {
    id: 'concept-mapping',
    title: 'Concept Mapping',
    subdomain: '1a',
    domain: 1,
    source: 'Visible Learning',
    alignment: '1a: Knowledge of Content and Pedagogy',
    description: 'Use visual diagrams to show the relationships between different concepts within a unit.',
    actionSteps: [
      'Link: Draw lines between related topics.',
      'Label: Explain the relationship on the connecting line.',
      'Review: Have students update the map as they learn more.'
    ],
    detailedSummary: 'Concept mapping is a high-impact strategy for demonstrating and teaching content structure. It helps students see the "big picture" and how individual facts fit into a larger conceptual framework. For the teacher, it provides a clear roadmap for lesson sequencing and ensures that prerequisite knowledge is addressed before moving to more complex topics.',
    videos: { demo: 'qNuz8s66N1E' }
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
    detailedSummary: 'Hattie research highlights that understanding the "student as learner" is one of the highest impact factors in education. This technique involves systematically gathering and using data about students\' prior knowledge, learning preferences, and cultural backgrounds. By designing instruction that meets students where they are, teachers increase engagement and ensure that instructional outcomes are challenging yet attainable.',
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
    detailedSummary: 'Differentiation is the practical application of knowledge of students. A proficient teacher doesn\'t just know students; they plan for their differences. This technique involves creating instructional materials and tasks that provide appropriate levels of scaffold and challenge for every learner in the room.',
    videos: { demo: 'qW6slc3hu1o' }
  },
  {
    id: 'cultural-competency',
    title: 'Culturally Responsive Design',
    subdomain: '1b',
    domain: 1,
    source: 'Edutopia',
    alignment: '1b: Knowledge of Students',
    description: 'Select instructional materials and examples that reflect the diverse backgrounds of the students in your classroom.',
    actionSteps: [
      'Audit: Review your curriculum for diverse representation.',
      'Connect: Link academic concepts to students\' real-world experiences.',
      'Include: Use "Windows and Mirrors" to help students see themselves in the content.'
    ],
    detailedSummary: 'Proficient teachers display knowledge of their students\' cultures. This technique involves intentionally selecting texts, problems, and examples that are relevant and respectful to the students\' backgrounds. It builds trust and ensures that the curriculum is accessible and engaging for all learners.',
    videos: { demo: 'JeMVNDWSVL4' }
  },

  // 1c: Setting Instructional Outcomes
  {
    id: 'learning-goals',
    title: 'Clear Learning Goals',
    subdomain: '1c',
    domain: 1,
    source: 'Marzano',
    alignment: '1c: Setting Instructional Outcomes',
    description: 'Establish and communicate clear, measurable goals for what students will learn during the lesson.',
    actionSteps: [
      'Define: Identify specific knowledge or skills.',
      'Communicate: Post the goal visibly in the room.',
      'Check: Refer back to the goal throughout the lesson.'
    ],
    detailedSummary: 'Marzano emphasizes that learning is most effective when students understand exactly what they are expected to learn. Clear learning goals go beyond just "doing an activity"; they focus on the specific cognitive outcome. A proficient teacher ensures students can articulate the goal and understand how their current work relates to it.',
    videos: { demo: '4rvrlEjp87I' },
    literature: { book: 'New Art and Science', pages: 'Chapter 1' }
  },
  {
    id: 'strategic-investment',
    title: 'Strategic Investment',
    subdomain: '1c',
    domain: 1,
    source: 'TLAC 3.0',
    alignment: '1c: Setting Instructional Outcomes',
    description: 'Invest students in the instructional goal by making the "Why" compelling and relevant to their lives.',
    actionSteps: [
      'The Hook: Start with a story or problem that highlights the goal\'s value.',
      'Challenge: Set a high bar that motivates students to work hard.',
      'Celebration: Acknowledge when the class makes progress toward the goal.'
    ],
    detailedSummary: 'Strategic Investment is about building buy-in. It ensures that students don\'t just see the goal as a requirement, but as a desirable achievement. By making the outcomes valuable and exciting, teachers increase the psychological "stakes" of the lesson, leading to higher levels of focus and persistence.',
    videos: { demo: 'bZyiURfJn_0' }
  },
  {
    id: 'student-friendly-rubrics',
    title: 'Success Criteria',
    subdomain: '1c',
    domain: 1,
    source: 'Hattie',
    alignment: '1c: Setting Instructional Outcomes',
    description: 'Provide students with clear, jargon-free rubrics that show exactly what proficient work looks like.',
    actionSteps: [
      'Deconstruct: Break the goal into observable "Success Criteria."',
      'Model: Show examples of work at different levels.',
      'Self-Assess: Have students use the rubric to check their own progress.'
    ],
    detailedSummary: 'Instructional outcomes are only effective if students know how to reach them. By providing "Success Criteria" (the specific steps or qualities of high-quality work), teachers empower students to take ownership of their learning. This technique ensures that the standards are transparent and that students can answer the question: "How will I know I have learned it?"',
    videos: { demo: 'CygTwWsoXfE' }
  },

  // 1d: Knowledge of Resources
  {
    id: 'resource-curation',
    title: 'Curating Digital Resources',
    subdomain: '1d',
    domain: 1,
    source: 'DangRenBo',
    alignment: '1d: Knowledge of Resources',
    description: 'Utilize specialized digital tools and professional literature to enhance lesson depth.',
    actionSteps: [
      'Explore: Identify high-quality digital repositories.',
      'Evaluate: Select resources that match specific student needs.',
      'Integrate: Embed resources seamlessly into instruction.'
    ],
    detailedSummary: 'A proficient teacher is aware of a wide range of resources—both traditional and digital—that can enhance instruction. This technique involves the systematic curation of materials that support differentiation and provide challenge.',
    videos: { demo: 'xS0EFsIcaI4' }
  },
  {
    id: 'case-study-analysis',
    title: 'Smart Case Studies',
    subdomain: '1d',
    domain: 1,
    source: 'DangRenBo',
    alignment: '1d: Knowledge of Resources',
    description: 'Use real-world case studies and artifacts to deepen understanding.',
    actionSteps: [
      'Select: Choose a case study that mirrors the unit objective.',
      'Analyze: Have students extract key variables and data.',
      'Apply: Use case study findings to solve new problems.'
    ],
    detailedSummary: 'Using rich, authentic resources like case studies provides students with a bridge between theory and practice. This technique demonstrates a teacher\'s awareness of external resources.',
    videos: { demo: 'IN4MBaOdLRY' }
  },
  {
    id: 'professional-networks',
    title: 'Learning Networks',
    subdomain: '1d',
    domain: 1,
    source: 'Edutopia',
    alignment: '1d: Knowledge of Resources',
    description: 'Leverage professional associations, local experts, and online communities to bring "outside" expertise into the classroom.',
    actionSteps: [
      'Connect: Identify an expert or organization related to your unit.',
      'Collaborate: Use guest speakers (virtual or in-person) or professional datasets.',
      'Update: Stay current with the latest instructional research in your field.'
    ],
    detailedSummary: 'A proficient teacher goes beyond the textbook. By connecting with external professional communities and resources, teachers provide students with current, high-fidelity information. This technique ensures that the instructional program is enriched by professional expertise from outside the school building.',
    videos: { demo: 'gjIQVhiMWdA' }
  },

  // 1e: Designing Coherent Instruction
  {
    id: 'double-plan',
    title: 'The Double Plan',
    subdomain: '1e',
    domain: 1,
    source: 'TLAC 3.0',
    alignment: '1e: Designing Coherent Instruction',
    description: 'Plan what students will be doing at every stage of the lesson.',
    actionSteps: [
      'T-Chart: Create a two-column plan (Teacher Do / Student Do).',
      'Accountability: Ensure every student has a task during transitions.',
      'Alignment: Verify that student activities directly lead to the objective.'
    ],
    detailedSummary: 'The Double Plan prevents the passive student trap by planning the specific actions students will take.',
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
    detailedSummary: 'By varying intensity, teachers prevent fatigue and keep students engaged throughout the period.',
    videos: { demo: 'fZ2RfDxVikM' }
  },
  {
    id: 'scaffolding-complex-tasks',
    title: 'Scaffolding',
    subdomain: '1e',
    domain: 1,
    source: 'Edutopia',
    alignment: '1e: Designing Coherent Instruction',
    description: 'Break complex learning tasks into smaller, manageable steps with clear "on-ramps" for all students.',
    actionSteps: [
      'Chunk: Divide the lesson into 10-15 minute focused segments.',
      'Bridge: Use mini-lessons to address prerequisite gaps.',
      'Support: Provide temporary aids (like sentence starters or templates) that are faded over time.'
    ],
    detailedSummary: 'Coherent instruction is structured to support learning. Scaffolding ensures that all students can access high-level content by providing the necessary support at the right time. A proficient teacher designs these supports in advance, ensuring that the lesson moves from simple to complex in a logical, supportive sequence.',
    videos: { demo: '5O0dJjNlrNs' }
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
      'Identify: Choose a checkpoint.',
      'Standard: Define passing quality.',
      'Verify: Mark correct work.'
    ],
    detailedSummary: 'Affirmative Checking embeds formative assessment into the flow, preventing students from practicing errors.',
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
      'Vertical Alignment: Answer columns.',
      'Immediate Feedback: Scan desks in seconds.'
    ],
    detailedSummary: 'Increases formative assessment efficiency, allowing higher feedback frequency.',
    videos: { demo: 'HEFxSiGse3U' }
  },
  {
    id: 'exit-tickets',
    title: 'The Exit Ticket',
    subdomain: '1f',
    domain: 1,
    source: 'TLAC 3.0',
    alignment: '1f: Designing Student Assessments',
    description: 'A 2-3 minute daily assessment at the end of class to measure student mastery of the day\'s objective.',
    actionSteps: [
      'Design: Create one or two questions that directly test the core objective.',
      'Collect: Gather as students leave (Threshold).',
      'Analyze: Sort into "Got it," "Almost," and "Don\'t have it" to plan tomorrow\'s lesson.'
    ],
    detailedSummary: 'The Exit Ticket is the ultimate tool for designing assessment. It provides the teacher with 100% data on student learning every single day. A proficient teacher uses this data to immediately adjust the next day\'s lesson, ensuring that no student is left behind.',
    videos: { demo: '0hX0H5K0_0U' }
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
      'Narrate: Highlight those meeting expectations.',
      'Assume Best Intent: Frame as reminders.',
      'Praise Effort: Precise growth identification.'
    ],
    detailedSummary: 'Builds rapport by focusing on desired outcomes and avoiding public scolding.',
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
    description: 'Specific and timely feedback on actions.',
    actionSteps: [
      'Be Specific: Identify the exact action.',
      'Timely: Praise immediately.',
      'Respect Dignity: Use appropriate mode.'
    ],
    detailedSummary: 'Reinforces habits and builds respect by showing effort is noticed.',
    videos: { demo: 'pz3ACmHPfqs' }
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
    detailedSummary: 'Building small moments of celebration into the daily routine creates a warm classroom community.',
    videos: { demo: '5GuZNgZNEzI' }
  },

  // 2b: Establishing a Culture for Learning
  {
    id: 'culture-of-error',
    title: 'Culture of Error',
    subdomain: '2b',
    domain: 2,
    source: 'Uncommon Schools',
    alignment: '2b: Establishing a Culture for Learning',
    description: 'Mistakes are tools for learning.',
    actionSteps: [
      'Normalize: "I\'m glad you made that mistake."',
      'Check: Encourage honesty about confusion.',
      'Pivot: Adjust based on data.'
    ],
    detailedSummary: 'Shifts focus to learning process, where errors are data points rather than failures.',
    videos: { demo: 'UDJsoamKtNQ' },
    literature: { book: 'TLAC 3.0', pages: 'Chapter 3' }
  },
  {
    id: 'high-expectations',
    title: 'High Expectations',
    subdomain: '2b',
    domain: 2,
    source: 'TLAC 3.0',
    alignment: '2b: Establishing a Culture for Learning',
    description: 'Belief that every student can reach high standards.',
    actionSteps: [
      'No Opt Out: Never leave a student confused.',
      'Wait Time: Provide thinking space.',
      'Academic Language: Use professional terms.'
    ],
    detailedSummary: 'Value placed on hard work showing respect for student potential.',
    videos: { demo: 'yOSrb5E0xks' }
  },
  {
    id: 'student-pride',
    title: 'The Wall of Excellence',
    subdomain: '2b',
    domain: 2,
    source: 'Edutopia',
    alignment: '2b: Establishing a Culture for Learning',
    description: 'Display high-quality student work publicly to signal what constitutes excellence in your classroom.',
    actionSteps: [
      'Select: Choose work that shows growth or high achievement.',
      'Annotate: Add small notes explaining *why* this work is excellent.',
      'Rotate: Ensure a diverse range of students have their work featured over time.'
    ],
    detailedSummary: 'Culture for Learning is established when students see that the teacher values their hard work. By displaying artifacts of excellence, teachers provide a concrete "North Star" for all students to aim for. It signals that high-quality work is the standard and something to be proud of.',
    videos: { demo: 'MO4T_pQBVQc' }
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
    description: 'Professional authority through calm communication.',
    actionSteps: [
      'Economy: Fewer words, more weight.',
      'Wait: Full attention before starting.',
      'Tone: Calm and steady.'
    ],
    detailedSummary: 'Establishing authority through presence and clarity without talking over students.',
    videos: { demo: '9bJdrxHg8fQ' }
  },
  {
    id: 'do-it-again',
    title: 'Do It Again',
    subdomain: '2c',
    domain: 2,
    source: 'TLAC 3.0',
    alignment: '2c: Managing Classroom Procedures',
    highReward: true,
    description: 'Redo procedures until correct.',
    actionSteps: [
      'Neutral Correction: "Let\'s try that again."',
      'Redo: Immediately.',
      'Success: Acknowledge the hit.'
    ],
    detailedSummary: 'Builds muscle memory for routines, focusing on practice over scolding.',
    videos: { demo: 'jOvXM-_6z5M' }
  },
  {
    id: 'tight-transitions',
    title: 'Tight Transitions',
    subdomain: '2c',
    domain: 2,
    source: 'TLAC 3.0',
    alignment: '2c: Managing Classroom Procedures',
    description: 'Explicitly teach and time the transition between activities to minimize instructional time loss.',
    actionSteps: [
      'The Countdown: Give a clear 10-second limit for a transition.',
      'Visuals: Use a timer projected on the board.',
      'Routines: Teach the exact moves (e.g. "Papers forward").'
    ],
    detailedSummary: 'A proficient teacher manages procedures so they occur smoothly with little loss of instructional time. Tight Transitions ensure that students move from one phase of the lesson to the next with speed and purpose, keeping the focus on learning.',
    videos: { demo: 'Yfye2NHvIc8' }
  },
  {
    id: 'threshold',
    title: 'Threshold',
    subdomain: '2c',
    domain: 2,
    source: 'Wong / TLAC',
    alignment: '2c: Managing Classroom Procedures',
    description: 'Meet students at the door to set the tone.',
    actionSteps: [
      'Greeting: Handshake or eye contact.',
      'Instruction: Give Bellwork before they sit.',
      'Correction: Address behavior early.'
    ],
    detailedSummary: 'Establish rapport and expectations the moment students arrive.',
    videos: { demo: 'Sc6qt1comUE' }
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
    description: 'Visibly scan the room.',
    actionSteps: [
      'Radar: Intentional scan.',
      'Invisible Columns: Move through rows.',
      'Narrate: Acknowledge on-task students.'
    ],
    detailedSummary: 'Teacher presence ensures students stay on task.',
    videos: { demo: 'e4xB3Ha2SKI' }
  },
  {
    id: 'least-invasive-intervention',
    title: 'Least Invasive Intervention',
    subdomain: '2d',
    domain: 2,
    source: 'TLAC 3.0',
    alignment: '2d: Managing Student Behavior',
    highReward: true,
    description: 'Address behavior without stopping instruction.',
    actionSteps: [
      'Non-verbal: Simple hand gesture.',
      'Proximity: Move closer.',
      'Quick Correction: Whispered instruction.'
    ],
    detailedSummary: 'Maximize instructional time by addressing behavior subtly.',
    videos: { demo: 'j88sZpGefeU' }
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
    detailedSummary: 'Proficient teachers ensure behavior standards are clear.',
    videos: { demo: 'ElUhlsRuPHE' }
  },

  // 2e: Organizing Physical Space
  {
    id: 'invisible-columns-space',
    title: 'The Grid',
    subdomain: '2e',
    domain: 2,
    source: 'TLAC 3.0',
    alignment: '2e: Organizing Physical Space',
    description: 'Arrange for maximum visibility.',
    actionSteps: [
      'Clear Paths: No obstructions for movement.',
      'Proximity: Use space to influence student focus.',
      'Visibility: Position so all students are in sightline.'
    ],
    detailedSummary: 'Circulation allows for real-time monitoring and feedback.',
    videos: { demo: 'e4xB3Ha2SKI' }
  },
  {
    id: 'front-table',
    title: 'The Front Table',
    subdomain: '2e',
    domain: 2,
    source: 'DangRenBo',
    alignment: '2e: Organizing Physical Space',
    description: 'Space for targeted small group instruction.',
    actionSteps: [
      'Layout: Small group gathering.',
      'Visuals: board visibility.',
      'Rotations: Move based on data.'
    ],
    detailedSummary: 'Targeted differentiation without disrupting the rest of the class.',
    videos: { demo: 'aTD30bWJzB0' }
  },
  {
    id: 'visual-aids',
    title: 'Anchor Charts',
    subdomain: '2e',
    domain: 2,
    source: 'Edutopia',
    alignment: '2e: Organizing Physical Space',
    description: 'Design the physical walls of the classroom to be functional "learning supports."',
    actionSteps: [
      'Strategize: Only post charts related to the current unit.',
      'Standardize: Use consistent layouts and high-contrast text.',
      'Reference: Point to the charts during instruction to model use.'
    ],
    detailedSummary: 'A proficient teacher makes effective use of physical resources. Anchor Charts serve as an "extra teacher" in the room, providing students with a visual scaffold for complex procedures or concepts. This technique ensures that the physical environment is safe and learning is accessible to all.',
    videos: { demo: 'X6zgFoCBgqI' }
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
    description: 'Require complete sentences and academic language.',
    actionSteps: [
      'Sentence Starters: Provide leads.',
      'The Cue: "Full sentence, please."',
      'Vocabulary: Require domain terms.'
    ],
    detailedSummary: 'Bridges conversational language and academic discourse.',
    videos: { demo: 'RDo5sDSwFkQ' }
  },
  {
    id: 'call-and-response',
    title: 'Call and Response',
    subdomain: '3a',
    domain: 3,
    source: 'TLAC 3.0',
    alignment: '3a: Communicating With Students',
    description: 'Choral response for key facts.',
    actionSteps: [
      'Cue: Standard countdown.',
      'The Fill: Pause before key word.',
      'Repeat: For full participation.'
    ],
    detailedSummary: 'Reinforces key terms and ensures participation.',
    videos: { demo: 'BeYZ2uJWDD0' }
  },
  {
    id: 'vocabulary-movement',
    title: 'Action Vocabulary',
    subdomain: '3a',
    domain: 3,
    source: 'Uncommon Schools',
    alignment: '3a: Communicating With Students',
    description: 'Pair new academic vocabulary with a specific physical movement or gesture.',
    actionSteps: [
      'Define: Explain the word clearly.',
      'Gesture: Create a simple, related move (e.g. "Expand").',
      'Choral: Have the class say the word and perform the move together.'
    ],
    detailedSummary: 'The teacher\'s explanation of content is clear and invites thinking. By using movement, teachers make abstract terms concrete and memorable. This technique is highly effective for language learners and increases the clarity of instructional purpose.',
    videos: { demo: '38JeYKqOZ_g' }
  },

  // 3b: Questioning and Discussion
  {
    id: 'cold-call',
    title: 'Cold Call',
    subdomain: '3b',
    domain: 3,
    source: 'Uncommon Schools',
    alignment: '3b: Questioning and Discussion',
    highReward: true,
    description: 'Call on students regardless of raised hands.',
    actionSteps: [
      'Question First: Ask the class.',
      'Wait: 3-5 seconds.',
      'Select: Name the student.'
    ],
    detailedSummary: 'Increases accountability and attention.',
    videos: { demo: '5xdNVAqsiKU' }
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
      'Wait Time 1.0: Pause before naming.',
      'Wait Time 2.0: Pause after a student speaks.',
      'Narrate: "I see 10 people thinking..."'
    ],
    detailedSummary: 'Improves complexity of student responses.',
    videos: { demo: 'PvJw9ge8yFQ' }
  },
  {
    id: 'no-opt-out',
    title: 'No Opt Out',
    subdomain: '3b',
    domain: 3,
    source: 'TLAC 3.0',
    alignment: '3b: Questioning and Discussion',
    highReward: true,
    description: 'Repeat correct answer after initial confusion.',
    actionSteps: [
      'Identify: Student doesn\'t know.',
      'Pivot: Ask peer or give cue.',
      'Return: Back to original student.'
    ],
    detailedSummary: 'Foundational for high expectations.',
    videos: { demo: 'NUL51AmaKfM' }
  },
  {
    id: 'stretch-it',
    title: 'Stretch It',
    subdomain: '3b',
    domain: 3,
    source: 'TLAC 3.0',
    alignment: '3b: Questioning and Discussion',
    description: 'Push students to higher levels after a correct answer.',
    actionSteps: [
      'Ask "How": Explain logic.',
      'Ask "What Else": Seek evidence.',
      'Connect: Link prior learning.'
    ],
    detailedSummary: 'Constantly pushes students to the edge of understanding.',
    videos: { demo: 'rdszNzs0N80' }
  },

  // 3c: Engaging Students in Learning
  {
    id: 'turn-and-talk',
    title: 'Turn and Talk',
    subdomain: '3c',
    domain: 3,
    source: 'Teaching Channel',
    alignment: '3c: Engaging Students in Learning',
    highReward: true,
    description: 'Timed discussion with a partner.',
    actionSteps: [
      'Assign Roles: Speaker and Listener.',
      'Provide Starters: "I liked how you..."',
      'Monitor: Eavesdrop for highlight points.'
    ],
    detailedSummary: 'High-ratio engagement through peer discussion.',
    videos: { demo: 'Bs0ZjYi-4aU' }
  },
  {
    id: 'everybody-writes',
    title: 'Everybody Writes',
    subdomain: '3c',
    domain: 3,
    source: 'TLAC 3.0',
    alignment: '3c: Engaging Students in Learning',
    highReward: true,
    description: 'Write thoughts before discussion.',
    actionSteps: [
      'Prompt: Clear task.',
      'Wait: 1-2 minutes.',
      'Transition: Move to talk.'
    ],
    detailedSummary: 'Forces rigorous thinking before contribution.',
    videos: { demo: 'D-KayMWv0pI' }
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
    detailedSummary: 'Ratio is the ultimate measure of engagement.',
    videos: { demo: 'MFhNM-9UAwo' }
  },

  // 3d: Using Assessment in Instruction
  {
    id: 'retrieval-practice-routine',
    title: 'Blast From the Past',
    subdomain: '3d',
    domain: 3,
    source: 'Uncommon Schools',
    alignment: '3d: Using Assessment in Instruction',
    description: 'Daily warm-up on previous material.',
    actionSteps: [
      'Routine: Daily 5-minute recall.',
      'Show Thinking: Show the work.',
      'Target: Mix current and past unit skills.'
    ],
    detailedSummary: 'Strengthens the act of learning and prevents forgetting.',
    videos: { demo: '96xBOchLlWk' }
  },
  {
    id: 'show-me-assessment',
    title: 'Show Me',
    subdomain: '3d',
    domain: 3,
    source: 'TLAC 3.0',
    alignment: '3d: Using Assessment in Instruction',
    description: 'Simultaneous signals for 100% data.',
    actionSteps: [
      'Wait: Solve time.',
      'Signal: "One, two, show me!"',
      'Scan: Immediate data check.'
    ],
    detailedSummary: 'Class-wide feedback with no hiding.',
    videos: { demo: 'pHp5dVqW3CQ' }
  },
  {
    id: 'self-assessment-checks',
    title: 'Confidence Scales',
    subdomain: '3d',
    domain: 3,
    source: 'Marzano',
    alignment: '3d: Using Assessment in Instruction',
    description: 'Have students rate their own understanding of a specific learning goal on a 1-4 scale.',
    actionSteps: [
      'Prompt: "On your fingers, show me your level of confidence with X."',
      'Define: 1 = Confused, 4 = I can teach this.',
      'Adjust: Group students based on their self-ratings for targeted support.'
    ],
    detailedSummary: 'Assessment is regularly used in instruction through self-assessment by students. By having students monitor their own progress, teachers increase metacognition and responsibility.',
    videos: { demo: 'ydMDAGKHW7Q' }
  },

  // 3e: Demonstrating Flexibility and Responsiveness
  {
    id: 'plan-for-error-flex',
    title: 'Plan for Error',
    subdomain: '3e',
    domain: 3,
    source: 'TLAC 3.0',
    alignment: '3e: Demonstrating Flexibility and Responsiveness',
    description: 'Anticipate mistakes and prepare pivots.',
    actionSteps: [
      'Predict: Identify hard parts.',
      'Pivot: Plan for failure.',
      'Adjust: Re-teach immediately.'
    ],
    detailedSummary: 'Ensures momentum isn\'t lost.',
    videos: { demo: 'qmuv5rs6p4A' }
  },
  {
    id: 'hinge-points-flex',
    title: 'Hinge Questions',
    subdomain: '3e',
    domain: 3,
    source: 'Visible Learning',
    alignment: '3e: Demonstrating Flexibility and Responsiveness',
    description: 'Diagnostic deciding whether to move on.',
    actionSteps: [
      'Design: High-quality distractor MCQs.',
      'Check: At transition point.',
      'Decision: Re-teach if necessary.'
    ],
    detailedSummary: 'Data needed for real-time adjustment.',
    videos: { demo: '7himF8J3ick' }
  },
  {
    id: 'red-yellow-green',
    title: 'Traffic Light Checks',
    subdomain: '3e',
    domain: 3,
    source: 'Teaching Channel',
    alignment: '3e: Demonstrating Flexibility and Responsiveness',
    description: 'Use colored cups or cards to allow students to signal their need for help in real-time.',
    actionSteps: [
      'Implement: Every desk gets a red, yellow, and green card.',
      'Protocol: Green = working fine; Yellow = need help soon; Red = stuck.',
      'Responsive: Pivot your circulation based on the colors you see.'
    ],
    detailedSummary: 'Proficient teachers promote the successful learning of all students. Traffic Light checks provide a constant, low-stakes data stream that allows the teacher to adjust their lesson on the fly to meet individual student needs.',
    videos: { demo: 'smUSKbcSSJQ' } // Wait time video shows general responsive moves
  },

  // --- DOMAIN 4: PROFESSIONAL RESPONSIBILITIES ---

  // 4a: Reflecting on Teaching
  {
    id: 'reflection-logs-4a',
    title: 'Before/After Reflection',
    subdomain: '4a',
    domain: 4,
    source: 'HDKWA PD Portal',
    alignment: '4a: Reflecting on Teaching',
    description: 'Record successes to inform practice.',
    actionSteps: [
      'Record: Use the PD Report.',
      'Analyze: Why did it work?',
      'Next Steps: Commit to change.'
    ],
    detailedSummary: 'Tangible record of growth.',
    videos: { demo: 'aJgm_HozVxc' }
  },
  {
    id: 'video-reflection',
    title: 'Video Self-Critique',
    subdomain: '4a',
    domain: 4,
    source: 'Teaching Channel',
    alignment: '4a: Reflecting on Teaching',
    description: 'Record yourself teaching a 10-minute segment and analyze your own "teacher moves."',
    actionSteps: [
      'Record: Focus on a specific technique (e.g. Wait Time).',
      'Watch: Look for student responses specifically.',
      'Evaluate: Compare your performance to the "Proficient" descriptor.'
    ],
    detailedSummary: 'A proficient teacher provides an accurate and objective description of the lesson. Video reflection is the most powerful tool for seeing what you actually do, rather than what you think you do.',
    videos: { demo: '0uIU8ZrG7yc' }
  },

  // 4b: Maintaining Accurate Records
  {
    id: 'smart-ledgers-4b',
    title: 'Smart Ledgers',
    subdomain: '4b',
    domain: 4,
    source: 'DangRenBo',
    alignment: '4b: Maintaining Accurate Records',
    description: 'Efficient tracking systems.',
    actionSteps: [
      'Digitize: Use trackers.',
      'Own and Track: Student responsibility.',
      'Update Daily: Usable data.'
    ],
    detailedSummary: 'Effective progress tracking.',
    videos: { demo: 'IN4MBaOdLRY' }
  },
  {
    id: 'gradebook-transparency',
    title: 'The Open Gradebook',
    subdomain: '4b',
    domain: 4,
    source: 'Edutopia',
    alignment: '4b: Maintaining Accurate Records',
    description: 'Give students and families real-time access to progress and mastery data.',
    actionSteps: [
      'Sync: Ensure your digital gradebook is updated within 24 hours.',
      'Visualize: Use charts or progress bars to show mastery trends.',
      'Discuss: Use the data as a basis for parent-teacher conferences.'
    ],
    detailedSummary: 'Systems for maintaining information on student progress are fully effective. Transparency ensures that there are no surprises and that everyone is focused on growth.',
    videos: { demo: 'vsyQfmx_ej4' }
  },

  // 4c: Communicating with Families
  {
    id: 'home-contributions-4c',
    title: 'Engaging the Home',
    subdomain: '4c',
    domain: 4,
    source: 'Visible Learning',
    alignment: '4c: Communicating with Families',
    description: 'Positive communication with parents.',
    actionSteps: [
      'Positive Calls: Not just for issues.',
      'Transparency: Explain the "Why".',
      'Feedback Loop: Two-way channel.'
    ],
    detailedSummary: 'Partnership supports learning at home.',
    videos: { demo: 'f9uw1RwBjAg' }
  },
  {
    id: 'newsletters',
    title: 'Instructional Updates',
    subdomain: '4c',
    domain: 4,
    source: 'Edutopia',
    alignment: '4c: Communicating with Families',
    description: 'Send regular, high-signal updates to families about the unit\'s learning goals and student successes.',
    actionSteps: [
      'Content: Highlight the "Exemplar" for the week.',
      'Context: Explain how parents can support the current unit.',
      'Celebration: Include photos of student work (with permission).'
    ],
    detailedSummary: 'Teacher communicates frequently with families about the instructional program. Regular updates build a sense of community and shared purpose.',
    videos: { demo: 'JeMVNDWSVL4' }
  },

  // 4d: Participating in a Professional Community
  {
    id: 'professional-community-4d',
    title: 'Contributing to School',
    subdomain: '4d',
    domain: 4,
    source: 'Visible Learning',
    alignment: '4d: Participating in a Professional Community',
    description: 'Collaborate school-wide.',
    actionSteps: [
      'Peer Obs: Invite colleagues.',
      'Shared Planning: Work together.',
      'PD Leadership: Share reflections.'
    ],
    detailedSummary: 'Collective efficacy improves school outcomes.',
    videos: { demo: 'TaNDd2I8mYY' }
  },
  {
    id: 'action-research-teams',
    title: 'PLCs',
    subdomain: '4d',
    domain: 4,
    source: 'Marzano',
    alignment: '4d: Participating in a Professional Community',
    description: 'Join or lead a Professional Learning Community focused on a specific instructional problem.',
    actionSteps: [
      'Focus: Choose one goal (e.g. Literacy in Science).',
      'Cycle: Meet weekly to share data and trial new techniques.',
      'Report: Present findings to the full faculty.'
    ],
    detailedSummary: 'Relationships with colleagues are characterized by mutual support and cooperation. PLCs turn individual expertise into communal knowledge.',
    videos: { demo: 'sh-zHyXm7eI' }
  },

  // 4e: Growing and Developing Professionally
  {
    id: 'professional-growth-4e',
    title: 'Continuous Growth (GROW)',
    subdomain: '4e',
    domain: 4,
    source: 'Visible Learning',
    alignment: '4e: Growing and Developing Professionally',
    description: 'Ownership of development.',
    actionSteps: [
      'Goal Setting: GROW model.',
      'Seek Feedback: Active requests.',
      'Trial: New technique per week.'
    ],
    detailedSummary: 'Systematic repertoire building.',
    videos: { demo: 'WPyebtSrFOw' }
  },
  {
    id: 'pd-leadership',
    title: 'The Master Teacher',
    subdomain: '4e',
    domain: 4,
    source: 'DangRenBo',
    alignment: '4e: Growing and Developing Professionally',
    description: 'Share your expertise by leading workshops or creating demo videos for your colleagues.',
    actionSteps: [
      'Prepare: Choose a technique you have mastered.',
      'Present: Lead a 15-minute "micro-session" during faculty meetings.',
      'Mentor: Offer coaching to a newer colleague.'
    ],
    detailedSummary: 'Teacher seeks out opportunities for professional development and contributes to the growth of others. Mentorship is the hallmark of a master teacher.',
    videos: { demo: '8fCTfmSfjMY' }
  },

  // 4f: Showing Professionalism
  {
    id: 'firm-calm-finesse-4f',
    title: 'Firm Calm Finesse',
    subdomain: '4f',
    domain: 4,
    source: 'TLAC 3.0',
    alignment: '4f: Showing Professionalism',
    description: 'Integrity through calm interactions.',
    actionSteps: [
      'Neutral Tone: Emotional separation.',
      'Consistency: Same standard always.',
      'Integrity: Honest practice.'
    ],
    detailedSummary: 'Models behavior to build trust.',
    videos: { demo: 'kPvG-Q1AnJQ' }
  },
  {
    id: 'advocacy',
    title: 'Student Advocacy',
    subdomain: '4f',
    domain: 4,
    source: 'Edutopia',
    alignment: '4f: Showing Professionalism',
    description: 'Go beyond the classroom to advocate for student needs at the school and community level.',
    actionSteps: [
      'Identify: Notice an systemic barrier to student success.',
      'Communicate: Bring the issue to leadership with proposed solutions.',
      'Act: Lead a project or committee to address the need.'
    ],
    detailedSummary: 'Teacher is honest and exhibits high standards of integrity. Professionalism includes a commitment to the success of all students, even beyond your own classroom walls.',
    videos: { demo: 'MO4T_pQBVQc' }
  }
];
