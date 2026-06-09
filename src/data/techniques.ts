import { Technique } from '../types';

export const techniques: Technique[] = [
  // --- DOMAIN 1: PLANNING & PREPARATION ---
  
  // 1a: Applying Knowledge of Content and Pedagogy
  {
    id: 'exemplar-planning',
    title: 'Exemplar Planning',
    subdomain: '1a',
    domain: 1,
    source: 'TLAC 3.0',
    alignment: '1a: Applying Knowledge of Content and Pedagogy',
    description: 'Create an ideal student response (an "exemplar") before the lesson to define the exact standard of excellence.',
    actionSteps: [
      'Draft: Write the perfect answer you want students to produce.',
      'Analyze: Identify the key vocabulary and logic steps required.',
      'Check: Use the exemplar to evaluate student work in real-time.'
    ],
    detailedSummary: 'Exemplar Planning is the discipline of solving your own lesson tasks before the students do. By creating a high-quality model response, you clarify the "finish line" for the lesson. This process helps you anticipate common misconceptions, identify essential vocabulary, and set a precise standard for what constitutes "proficient" work. It transforms your monitoring from "looking for work" to "looking for quality."',
    videos: { demo: 'LXEY7vr-Yvs' },
    literature: { book: 'TLAC 3.0', pages: '45-48' }
  },
  {
    id: 'knowledge-organizers',
    title: 'Knowledge Organizers',
    subdomain: '1a',
    domain: 1,
    source: 'TLAC 3.0',
    alignment: '1a: Applying Knowledge of Content and Pedagogy',
    description: 'Build a one-page map of the unit that names the facts, vocabulary, and relationships students need to handle the content.',
    actionSteps: [
      'Distill the unit to the few ideas students must know before they can do the work independently.',
      'Show how the ideas connect so students can see the sequence instead of memorizing isolated facts.',
      'Use the organizer during review so students can retrieve and rehearse the content on purpose.'
    ],
    detailedSummary: 'A knowledge organizer is a planning tool before it is a student handout. It forces the teacher to decide what matters most, where the gaps are, and how the content should be organized for recall and transfer.',
    videos: { demo: '6DNTfuEcQek' },
    literature: { book: 'TLAC 3.0', pages: 'Technique 5' }
  },
  {
    id: 'concept-mapping',
    title: 'Concept Mapping',
    subdomain: '1a',
    domain: 1,
    source: 'Visible Learning',
    alignment: '1a: Applying Knowledge of Content and Pedagogy',
    description: 'Draw and revise a map of the unit so students can see which ideas connect, depend on one another, or lead to a bigger principle.',
    actionSteps: [
      'Put the central idea in the middle and branch out to the supporting concepts or examples.',
      'Label each connection with the relationship, not just a line.',
      'Return to the map after instruction so students can add, remove, or correct links.'
    ],
    detailedSummary: 'Concept mapping shows whether the teacher understands the structure of the content well enough to teach it. The map becomes useful when it exposes the missing links that students need in order to reason through the unit.',
    videos: { demo: 'qNuz8s66N1E' }
  },

  // 1b: Knowing and Valuing Students
  {
    id: 'student-centered-research',
    title: 'The Student Perspective',
    subdomain: '1b',
    domain: 1,
    source: 'Visible Learning',
    alignment: '1b: Knowing and Valuing Students',
    description: 'Use surveys, quick prompts, or student work to see what learners already know before you choose examples, groups, or entry points.',
    actionSteps: [
      'Ask for one response that reveals prior knowledge, interest, or lived experience relevant to the unit.',
      'Sort the answers for patterns that change how you should open the lesson.',
      'Adjust examples, supports, or grouping before instruction begins.'
    ],
    detailedSummary: 'The point is to collect information that changes the lesson design. The teacher uses the data to pick the right entry point, the right example, and the right amount of support.',
    videos: { demo: 'VhVaUo1fQuA' },
    literature: { book: 'Visible Learning (The Sequel)', pages: 'Chapter 4' }
  },
  {
    id: 'differentiated-instruction',
    title: 'Differentiated Paths',
    subdomain: '1b',
    domain: 1,
    source: 'Marzano',
    alignment: '1b: Knowing and Valuing Students',
    description: 'Keep the same learning target but vary the path, support, or product so students can reach it from different starting points.',
    actionSteps: [
      'Use a quick pre-assessment to identify who needs support, extension, or a different entry point.',
      'Build two or three routes to the same outcome instead of writing separate lessons for every student.',
      'Regroup students after evidence shows who needs more modeling, practice, or challenge.'
    ],
    detailedSummary: 'Differentiation should change the path, not lower the goal. The teacher uses evidence about readiness to decide where students enter, what support they get, and how they show the learning.',
    videos: { demo: 'qW6slc3hu1o' }
  },
  {
    id: 'cultural-competency',
    title: 'Culturally Responsive Design',
    subdomain: '1b',
    domain: 1,
    source: 'Edutopia',
    alignment: '1b: Knowing and Valuing Students',
    description: 'Choose examples, texts, and tasks that reflect students accurately and let them connect the content to their own lived experience.',
    actionSteps: [
      'Audit the lesson for who is visible, who is missing, and whose experiences are being treated as normal.',
      'Swap in examples, names, contexts, or texts that are more locally and culturally specific.',
      'Invite students to explain whether the examples feel accurate, useful, and respectful.'
    ],
    detailedSummary: 'Culturally responsive design is not decorative representation. It is the deliberate work of choosing content that students can recognize, trust, and use to make sense of the lesson.',
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
    description: 'Write the lesson goal as a learning outcome, not an activity, so students know what they should know, understand, or do by the end.',
    actionSteps: [
      'Name the knowledge or skill students should have by the end of the lesson.',
      'Phrase it in student language so the goal is readable without translation.',
      'Return to the goal during the lesson when the work starts to drift away from it.'
    ],
    detailedSummary: 'A clear goal keeps the teacher focused on learning rather than activity. Students can use it to judge whether the work in front of them is actually moving them toward mastery.',
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
    description: 'Make the goal matter by tying it to a problem, decision, or audience students can immediately recognize as worth the effort.',
    actionSteps: [
      'Open with a situation where the learning will clearly help students solve something, judge something, or create something.',
      'Name the challenge and the payoff so the class knows why the work deserves attention.',
      'Mark progress during the lesson so students can see how the goal is becoming usable.'
    ],
    detailedSummary: 'Strategic investment works when the teacher connects the task to a real use, a real audience, or a real decision. The lesson feels worthwhile because students can see what the learning is for.',
    videos: { demo: 'bZyiURfJn_0' }
  },
  {
    id: 'student-friendly-rubrics',
    title: 'Success Criteria',
    subdomain: '1c',
    domain: 1,
    source: 'Hattie',
    alignment: '1c: Setting Instructional Outcomes',
    description: 'Turn the goal into plain-language, observable success criteria that students can use before, during, and after the task.',
    actionSteps: [
      'Break the goal into a few visible features students can check without guessing.',
      'Show what each level looks like with concrete examples instead of abstract labels.',
      'Have students use the criteria to revise their work before they hand it in.'
    ],
    detailedSummary: 'Success criteria are useful when they describe visible evidence, not just vague quality words. The teacher uses them to make the target transparent and to give students something real to compare their work against.',
    videos: { demo: 'CygTwWsoXfE' }
  },

  // 1d: Using Resources Effectively
  {
    id: 'resource-curation',
    title: 'Curating Digital Resources',
    subdomain: '1d',
    domain: 1,
    source: 'DangRenBo',
    alignment: '1d: Using Resources Effectively',
    description: 'Choose one strong digital or print resource and use it for a specific job in the lesson instead of throwing in extra materials.',
    actionSteps: [
      'Pick the resource because it solves a planning problem, not because it looks polished.',
      'Annotate it or frame it so students know exactly what to pull from it.',
      'Use it at the right moment, then stop using it once the task no longer needs it.'
    ],
    detailedSummary: 'Resource curation is about fit. The teacher selects materials that do one job well: clarify content, deepen thinking, or give students a better way into the task.',
    videos: { demo: 'xS0EFsIcaI4' }
  },
  {
    id: 'case-study-analysis',
    title: 'Smart Case Studies',
    subdomain: '1d',
    domain: 1,
    source: 'DangRenBo',
    alignment: '1d: Using Resources Effectively',
    description: 'Use a realistic case or artifact that mirrors the unit problem so students can analyze it before they have to solve a new one.',
    actionSteps: [
      'Pick a case that shares the important variables of the lesson, not just the topic.',
      'Ask students to pull out the evidence, constraints, and key decisions from the case.',
      'Use the case as a rehearsal for the next task, not as an end in itself.'
    ],
    detailedSummary: 'A case study only helps when it prepares students to think with the content. The teacher uses it to make the reasoning visible and to set up a similar challenge later.',
    videos: { demo: 'IN4MBaOdLRY' }
  },
  {
    id: 'professional-networks',
    title: 'Learning Networks',
    subdomain: '1d',
    domain: 1,
    source: 'Edutopia',
    alignment: '1d: Using Resources Effectively',
    description: 'Bring in a professional source, expert, or community resource that gives the lesson current information the teacher alone cannot supply.',
    actionSteps: [
      'Find one outside source that actually improves the lesson content or model.',
      'Prepare students with a question or lens so the source has a clear purpose.',
      'Use the contact or material to sharpen the lesson, not to add novelty.'
    ],
    detailedSummary: 'Professional networks matter when they improve the quality of the lesson content. The teacher uses them to keep the work current, accurate, and connected to the real discipline.',
    videos: { demo: 'gjIQVhiMWdA' }
  },

  // 1e: Planning Coherent Instruction
  {
    id: 'double-plan',
    title: 'The Double Plan',
    subdomain: '1e',
    domain: 1,
    source: 'TLAC 3.0',
    alignment: '1e: Planning Coherent Instruction',
    description: 'Plan the teacher move and the student work side by side so every stage of the lesson keeps students accountable.',
    actionSteps: [
      'Map the lesson in two columns: what the teacher does and what students do.',
      'Check every transition for a concrete student task, not just a teacher direction.',
      'Remove any step that does not move students closer to the objective.'
    ],
    detailedSummary: 'The Double Plan keeps the lesson from becoming a sequence of teacher moves with students waiting around. When the student action is planned as deliberately as the teacher action, the lesson stays coherent and every phase has a clear purpose.',
    videos: { demo: 'hSj4uCkfz5k' },
    literature: { book: 'TLAC 3.0', pages: '58-61' }
  },
  {
    id: 'change-the-pace',
    title: 'Change the Pace',
    subdomain: '1e',
    domain: 1,
    source: 'TLAC 3.0',
    alignment: '1e: Planning Coherent Instruction',
    description: 'Vary the way students work so the lesson stays active without losing its instructional focus.',
    actionSteps: [
      'Alternate between listening, writing, discussing, and solving so students are not doing one mode too long.',
      'Use short, visible time windows so each phase has urgency and a finish line.',
      'Reset the room quickly before switching tasks so students know exactly what to do next.'
    ],
    detailedSummary: 'Changing the pace is not about entertainment. It is about shifting the work enough to keep students cognitively active while preserving the lesson objective, the structure, and the teacher\'s control of the room.',
    videos: { demo: 'fZ2RfDxVikM' }
  },
  {
    id: 'scaffolding-complex-tasks',
    title: 'Scaffolding',
    subdomain: '1e',
    domain: 1,
    source: 'Edutopia',
    alignment: '1e: Planning Coherent Instruction',
    description: 'Break complex learning tasks into smaller, manageable steps with clear "on-ramps" for all students.',
    actionSteps: [
      'Chunk: Divide the lesson into 10-15 minute focused segments.',
      'Bridge: Use mini-lessons to address prerequisite gaps.',
      'Support: Provide temporary aids (like sentence starters or templates) that are faded over time.'
    ],
    detailedSummary: 'Coherent instruction is structured to support learning. Scaffolding ensures that all students can access high-level content by providing the necessary support at the right time. A proficient teacher designs these supports in advance, ensuring that the lesson moves from simple to complex in a logical, supportive sequence.',
    videos: { demo: '5O0dJjNlrNs' }
  },

  // 1f: Designing and Analyzing Assessments
  {
    id: 'affirmative-checking',
    title: 'Affirmative Checking',
    subdomain: '1f',
    domain: 1,
    source: 'TLAC 3.0',
    alignment: '1f: Designing and Analyzing Assessments',
    description: 'Use short checkpoints to verify that students can demonstrate the key learning before the lesson moves forward.',
    actionSteps: [
      'Choose one point in the lesson where student work can prove the core idea.',
      'State the exact standard for success before students begin.',
      'Use the result to decide whether to reteach, move on, or give a quick correction.'
    ],
    detailedSummary: 'Affirmative Checking makes the assessment visible inside the lesson instead of waiting for the end. Students know what counts as success, and the teacher gets a clear signal before the class moves into the next phase.',
    videos: { demo: 'YBWhU11MqpU' },
    literature: { book: 'TLAC 3.0', pages: '107-110' }
  },
  {
    id: 'standardize-format',
    title: 'Standardize the Format',
    subdomain: '1f',
    domain: 1,
    source: 'TLAC 3.0',
    alignment: '1f: Designing and Analyzing Assessments',
    description: 'Use a consistent layout so you can see student thinking quickly and give feedback without delay.',
    actionSteps: [
      'Put the same kind of answer in the same place on every page or slide.',
      'Use columns, boxes, or labeled spaces so your eyes can find responses immediately.',
      'Design the format so you can scan for mistakes, patterns, or misconceptions in seconds.'
    ],
    detailedSummary: 'Standardizing the format reduces the time between student work and teacher response. When the layout is predictable, the teacher can scan faster, give more feedback, and catch errors before they spread.',
    videos: { demo: 'HEFxSiGse3U' },
    literature: { book: 'TLAC 3.0', pages: '87-91' }
  },
  {
    id: 'exit-tickets',
    title: 'The Exit Ticket',
    subdomain: '1f',
    domain: 1,
    source: 'TLAC 3.0',
    alignment: '1f: Designing and Analyzing Assessments',
    description: 'A 2-3 minute daily assessment at the end of class to measure student mastery of the day\'s objective.',
    actionSteps: [
      'Design: Create one or two questions that directly test the core objective.',
      'Collect: Gather as students leave (Threshold).',
      'Analyze: Sort into "Got it," "Almost," and "Don\'t have it" to plan tomorrow\'s lesson.'
    ],
    detailedSummary: 'The Exit Ticket is the ultimate tool for designing assessment. It provides the teacher with 100% data on student learning every single day. A proficient teacher uses this data to immediately adjust the next day\'s lesson, ensuring that no student is left behind.',
    videos: { demo: '0hX0H5K0_0U' },
    literature: { book: 'TLAC 3.0', pages: '228-240' }
  },

  // --- DOMAIN 2: LEARNING ENVIRONMENTS ---

  // 2a: Cultivating Respectful and Affirming Environments
  {
    id: 'positive-framing',
    title: 'Positive Framing',
    subdomain: '2a',
    domain: 2,
    source: 'TLAC 3.0',
    alignment: '2a: Cultivating Respectful and Affirming Environments',
    description: 'Redirect behavior by naming the desired action and making the next step clear.',
    actionSteps: [
      'Describe the behavior you want to see instead of only pointing out what is wrong.',
      'Use a calm reminder that assumes students can fix the issue right away.',
      'Acknowledge the students who are already meeting the expectation so the standard stays visible.'
    ],
    detailedSummary: 'Positive framing keeps the teacher focused on the desired behavior, not on public correction. It preserves student dignity while still making the expectation unmistakable.',
    videos: { demo: 'KT4ET0PAWVI' },
    literature: { book: 'TLAC 3.0', pages: '477-484' }
  },
  {
    id: 'precise-praise',
    title: 'Precise Praise',
    subdomain: '2a',
    domain: 2,
    source: 'TLAC 3.0',
    alignment: '2a: Cultivating Respectful and Affirming Environments',
    description: 'Name exactly what a student did well and why that move mattered.',
    actionSteps: [
      'Point to the exact action, not a vague trait like "good job."',
      'Connect the praise to the learning or behavior standard the student met.',
      'Deliver it quickly and in a way that keeps the focus on learning, not on performance.'
    ],
    detailedSummary: 'Precise praise works because students can repeat what the teacher actually named. It reinforces the standard, shows that effort is noticed, and helps the rest of the class see what success looks like.',
    videos: { demo: 'pz3ACmHPfqs' },
    literature: { book: 'TLAC 3.0', pages: '485-489' }
  },
  {
    id: 'joy-factor',
    title: 'The Joy Factor',
    subdomain: '2a',
    domain: 2,
    source: 'TLAC 3.0',
    alignment: '2a: Cultivating Respectful and Affirming Environments',
    description: 'Use small rituals, shared language, and light moments to build belonging without losing academic focus.',
    actionSteps: [
      'Build one or two repeatable routines that students can recognize and enjoy.',
      'Use humor or shared language only when it supports the learning, not when it distracts from it.',
      'Celebrate class progress in ways that make the room feel safe and connected.'
    ],
    detailedSummary: 'The Joy Factor is about classroom climate that helps students stay willing to take risks. The point is not entertainment; it is making the room feel human, predictable, and worth participating in.',
    videos: { demo: '5GuZNgZNEzI' },
    literature: { book: 'TLAC 3.0', pages: '497-501' }
  },

  // 2b: Fostering a Culture for Learning
  {
    id: 'culture-of-error',
    title: 'Culture of Error',
    subdomain: '2b',
    domain: 2,
    source: 'TLAC 3.0',
    alignment: '2b: Fostering a Culture for Learning',
    description: 'Treat errors as evidence about what students understand and what still needs instruction.',
    actionSteps: [
      'Respond to mistakes without embarrassment or shutdown.',
      'Ask students to explain what they were thinking before correcting the error.',
      'Use the mistake to decide whether to reteach, model, or practice again.'
    ],
    detailedSummary: 'A culture of error matters because students are more likely to think out loud when mistakes are treated as information. That openness gives the teacher better evidence and gives students more room to learn.',
    videos: { demo: 'UDJsoamKtNQ' },
    literature: { book: 'TLAC 3.0', pages: '111-119' }
  },
  {
    id: 'high-expectations',
    title: 'High Expectations',
    subdomain: '2b',
    domain: 2,
    source: 'TLAC 3.0',
    alignment: '2b: Fostering a Culture for Learning',
    description: 'Communicate and enforce a high academic standard for every student in the room.',
    actionSteps: [
      'Name the standard clearly so students know what high-quality work looks like.',
      'Keep the task demanding enough to require real thinking and revision.',
      'Follow through when students need more support so the expectation stays real.'
    ],
    detailedSummary: 'High expectations show up in the task, the language, and the follow-through. Students notice when the teacher holds the line and also provides the support needed to meet it.',
    videos: { demo: 'yOSrb5E0xks' }
  },
  {
    id: 'student-pride',
    title: 'The Wall of Excellence',
    subdomain: '2b',
    domain: 2,
    source: 'Edutopia',
    alignment: '2b: Fostering a Culture for Learning',
    description: 'Display student work with annotations that show what makes it strong so the standard is visible, not just the artifact.',
    actionSteps: [
      'Choose work that clearly shows the kind of thinking or craftsmanship you want repeated.',
      'Add notes that point out the exact feature worth noticing, such as evidence, structure, or precision.',
      'Refresh the display often enough that it feels like a living standard, not a trophy case.'
    ],
    detailedSummary: 'A wall of excellence works when it teaches students how to improve. The teacher is making quality visible, naming the feature that makes it strong, and giving students a model to aim at.',
    videos: { demo: 'MO4T_pQBVQc' }
  },

  // 2c: Maintaining Purposeful Environments
  {
    id: 'strong-voice',
    title: 'Strong Voice',
    subdomain: '2c',
    domain: 2,
    source: 'TLAC 3.0',
    alignment: '2c: Maintaining Purposeful Environments',
    highReward: true,
    description: 'Use calm, concise language to direct the room without over-talking or escalating.',
    actionSteps: [
      'Say only what students need to hear, then pause and let them respond.',
      'Avoid explaining the routine more than once when the room already knows the expectation.',
      'Keep tone neutral so the authority comes from clarity, not volume.'
    ],
    detailedSummary: 'Strong Voice is about the teacher controlling the room through precision and composure. The move works because students hear one clear direction, understand the expectation, and have a chance to comply immediately.',
    videos: { demo: '9bJdrxHg8fQ' },
    literature: { book: 'TLAC 3.0', pages: '455-476' }
  },
  {
    id: 'do-it-again',
    title: 'Do It Again',
    subdomain: '2c',
    domain: 2,
    source: 'TLAC 3.0',
    alignment: '2c: Maintaining Purposeful Environments',
    highReward: true,
    description: 'Have students repeat a routine or procedure until it meets the standard you want to keep.',
    actionSteps: [
      'Interrupt the routine neutrally when it is off standard.',
      'Have the class repeat the exact move or sequence right away.',
      'Acknowledge the successful version so students know what to repeat next time.'
    ],
    detailedSummary: 'Do It Again creates practice instead of debate. Students learn that routines matter, the teacher will insist on the standard, and the right version is worth repeating until it sticks.',
    videos: { demo: 'jOvXM-_6z5M' },
    literature: { book: 'TLAC 3.0', pages: '413-424' }
  },
  {
    id: 'tight-transitions',
    title: 'Tight Transitions',
    subdomain: '2c',
    domain: 2,
    source: 'TLAC 3.0',
    alignment: '2c: Maintaining Purposeful Environments',
    description: 'Pre-teach and time the handoff between tasks so students move cleanly with materials, attention, and purpose.',
    actionSteps: [
      'Name the exact sequence students should follow when the task changes.',
      'Use a visible timer or count so the transition has a finish line.',
      'Rehearse the move until students can complete it without extra directions.'
    ],
    detailedSummary: 'Tight transitions protect instructional time because students already know the handoff. The teacher spends less time fixing drift and more time teaching.',
    videos: { demo: 'Yfye2NHvIc8' }
  },
  {
    id: 'threshold',
    title: 'Threshold',
    subdomain: '2c',
    domain: 2,
    source: 'Wong / TLAC',
    alignment: '2c: Maintaining Purposeful Environments',
    description: 'Greet students at the door, set the tone, and give the first academic direction before they sit down.',
    actionSteps: [
      'Use the doorway to greet students and notice who needs a quick reset.',
      'Give the first learning task or expectation before students take their seats.',
      'Correct small issues immediately so the lesson begins with purpose.'
    ],
    detailedSummary: 'Threshold is a simple way to start the period with both relationship and purpose. The teacher meets students at the door, sets the tone, and prevents the first few minutes from disappearing into drift.',
    videos: { demo: 'Sc6qt1comUE' }
  },

  // 2d: Supporting Positive Student Behavior
  {
    id: 'be-seen-looking',
    title: 'Be Seen Looking',
    subdomain: '2d',
    domain: 2,
    source: 'TLAC 3.0',
    alignment: '2d: Supporting Positive Student Behavior',
    highReward: true,
    description: 'Move and scan so students know you are noticing their work and their behavior.',
    actionSteps: [
      'Scan the room deliberately instead of staying fixed in one spot.',
      'Move through the space often enough that every student knows you can see them.',
      'Name specific on-task behavior so students understand what is being reinforced.'
    ],
    detailedSummary: 'Be Seen Looking works because visible monitoring changes student behavior before the teacher has to stop instruction. Presence is preventive when students know the teacher is already watching for quality.',
    videos: { demo: 'e4xB3Ha2SKI' }
  },
  {
    id: 'least-invasive-intervention',
    title: 'Least Invasive Intervention',
    subdomain: '2d',
    domain: 2,
    source: 'TLAC 3.0',
    alignment: '2d: Supporting Positive Student Behavior',
    highReward: true,
    description: 'Correct behavior with the smallest possible move that still gets the student back on task.',
    actionSteps: [
      'Start with the least disruptive cue that the student can read immediately.',
      'Use proximity or a brief nonverbal signal before you break the lesson flow.',
      'Escalate only if the first move does not work.'
    ],
    detailedSummary: 'Least Invasive Intervention protects learning time because the correction happens without turning the entire room toward the misbehavior. The student gets the message, and the lesson keeps moving.',
    videos: { demo: 'j88sZpGefeU' },
    literature: { book: 'TLAC 3.0', pages: '439-443' }
  },
  {
    id: 'art-of-consequence',
    title: 'Art of the Consequence',
    subdomain: '2d',
    domain: 2,
    source: 'TLAC 3.0',
    alignment: '2d: Supporting Positive Student Behavior',
    description: 'Apply consequences consistently while keeping the interaction calm, brief, and focused on the behavior.',
    actionSteps: [
      'Address the issue close to the moment it happens.',
      'Use the same standard every time so students can predict the response.',
      'Keep the language about the action, not the student’s character.'
    ],
    detailedSummary: 'The consequence matters most when it is predictable, respectful, and tied to the standard the student already knows. That keeps the teacher fair and keeps the room focused on learning.',
    videos: { demo: 'ElUhlsRuPHE' },
    literature: { book: 'TLAC 3.0', pages: '448-454' }
  },

  // 2e: Organizing Spaces for Learning
  {
    id: 'invisible-columns-space',
    title: 'The Grid',
    subdomain: '2e',
    domain: 2,
    source: 'TLAC 3.0',
    alignment: '2e: Organizing Spaces for Learning',
    description: 'Arrange the room so the teacher can see and reach every student quickly.',
    actionSteps: [
      'Keep clear paths so movement is easy and unobstructed.',
      'Place yourself so you can scan all students without turning your back to the room.',
      'Use your movement through the room to signal attention and support.'
    ],
    detailedSummary: 'The Grid is about space as a management tool. When the teacher can move and see clearly, it is easier to monitor learning, prevent behavior drift, and deliver quick support.',
    videos: { demo: 'e4xB3Ha2SKI' }
  },
  {
    id: 'front-table',
    title: 'The Front Table',
    subdomain: '2e',
    domain: 2,
    source: 'DangRenBo',
    alignment: '2e: Organizing Spaces for Learning',
    description: 'Use a defined space for targeted small-group reteaching or guided practice without interrupting the rest of the class.',
    actionSteps: [
      'Set up a clear, consistent place where a small group can gather for focused support.',
      'Place the model, task, or materials where the group can see them without distraction.',
      'Move students there based on evidence that they need a smaller reteach or a guided first attempt.'
    ],
    detailedSummary: 'The Front Table is a differentiation move, not just a seating arrangement. It gives the teacher a fast way to reteach, model, or check a small group while the rest of the room keeps working.',
    videos: { demo: 'aTD30bWJzB0' }
  },
  {
    id: 'visual-aids',
    title: 'Anchor Charts',
    subdomain: '2e',
    domain: 2,
    source: 'Edutopia',
    alignment: '2e: Organizing Spaces for Learning',
    description: 'Use wall space for current charts, models, and reminders that students actually need during the lesson or unit.',
    actionSteps: [
      'Post only the visual supports students will use again, not every pretty thing you have.',
      'Keep the language and layout simple enough for students to read without help.',
      'Point back to the chart during instruction so students see how it functions as a tool for the current task.'
    ],
    detailedSummary: 'Anchor charts are part of instruction when they help students act. The teacher uses them as a working reference for the routine, concept, or process students need right now.',
    videos: { demo: 'X6zgFoCBgqI' }
  },

  // --- DOMAIN 3: INSTRUCTION ---

  // 3a: Communicating About Purpose and Content
  {
    id: 'format-matters',
    title: 'Academic Sentence Practice',
    subdomain: '3a',
    domain: 3,
    source: 'TLAC 3.0',
    alignment: '3a: Communicating About Purpose and Content',
    description: 'Require students to answer in complete sentences and use the lesson vocabulary when they explain their thinking.',
    actionSteps: [
      'Model one strong answer that uses the target vocabulary and the sentence structure you want students to copy.',
      'Use a short cue such as "full sentence" when a response is too brief or vague.',
      'Ask students to restate key ideas with the academic terms before the class moves on.'
    ],
    detailedSummary: 'Academic sentence practice helps students rehearse the language of the lesson instead of defaulting to fragments or casual talk. The teacher uses the cue to press for precision, complete thought, and the vocabulary students will need in writing and discussion.',
    videos: { demo: 'RDo5sDSwFkQ' },
    literature: { book: 'TLAC 3.0', pages: '173-180' }
  },
  {
    id: 'call-and-response',
    title: 'Choral Rehearsal',
    subdomain: '3a',
    domain: 3,
    source: 'TLAC 3.0',
    alignment: '3a: Communicating About Purpose and Content',
    description: 'Use whole-class choral response to rehearse a definition, procedure, or key phrase before students have to use it independently.',
    actionSteps: [
      'Choose one short statement, term, or rule that every student needs to know cold.',
      'Use the same signal each time so students know when to respond together.',
      'Return to the phrase later in the lesson so students hear and use it again.'
    ],
    detailedSummary: 'Choral rehearsal is useful when the class needs a quick, shared practice of essential language. It gives every student a voice, tightens pacing, and creates a common reference point for the rest of the lesson.',
    videos: { demo: 'BeYZ2uJWDD0' },
    literature: { book: 'TLAC 3.0', pages: '301-306' }
  },
  {
    id: 'vocabulary-movement',
    title: 'Gesture Vocabulary',
    subdomain: '3a',
    domain: 3,
    source: 'Uncommon Schools',
    alignment: '3a: Communicating About Purpose and Content',
    description: 'Pair a key term with a simple gesture so students can recall and use the word while the lesson is moving.',
    actionSteps: [
      'Teach the word with a short definition and one concrete example.',
      'Assign a gesture that matches the meaning of the term and is easy to repeat.',
      'Have students say the word, make the gesture, and use the term in a sentence.'
    ],
    detailedSummary: 'The gesture is a memory aid, not a distraction. It gives students one more way to retrieve the term later when they read, write, or discuss the idea in the lesson.',
    videos: { demo: '38JeYKqOZ_g' }
  },

  // 3b: Using Questioning and Discussion Techniques
  {
    id: 'cold-call',
    title: 'Cold Call',
    subdomain: '3b',
    domain: 3,
    source: 'Uncommon Schools',
    alignment: '3b: Using Questioning and Discussion Techniques',
    highReward: true,
    description: 'Ask the question first, give think time, and then name the student so the whole room stays accountable.',
    actionSteps: [
      'Pose the question to the entire class before naming anyone.',
      'Pause long enough for students to think and prepare an answer.',
      'Name a student after the wait, then prompt for a fuller response if needed.'
    ],
    detailedSummary: 'Cold Call keeps the work with the whole class instead of only the volunteers. Because anyone can be asked, more students listen, think, and stay ready to answer.',
    videos: { demo: '5xdNVAqsiKU' }
  },
  {
    id: 'wait-time',
    title: 'Wait Time',
    subdomain: '3b',
    domain: 3,
    source: 'TLAC 3.0',
    alignment: '3b: Using Questioning and Discussion Techniques',
    highReward: true,
    description: 'Pause long enough after a question or student response for better thinking and a fuller answer.',
    actionSteps: [
      'Count silently before calling on anyone.',
      'Leave a short silence after a student speaks before you rephrase or redirect.',
      'Use the pause to scan the room and decide who should speak next.'
    ],
    detailedSummary: 'Wait time improves the quality of student thinking because it gives students room to process, retrieve, and formulate a response. The pause is part of the instruction, not dead air.',
    videos: { demo: 'PvJw9ge8yFQ' },
    literature: { book: 'TLAC 3.0', pages: '276-281' }
  },
  {
    id: 'no-opt-out',
    title: 'No Opt Out',
    subdomain: '3b',
    domain: 3,
    source: 'TLAC 3.0',
    alignment: '3b: Using Questioning and Discussion Techniques',
    highReward: true,
    description: 'Do not let a student end the turn without reaching the correct answer or a better one.',
    actionSteps: [
      'Acknowledge what the student has right, then give a cue, peer support, or model.',
      'Return to the original student so they finish the answer in their own words.',
      'Use the student\'s success to reset the expectation for the whole class.'
    ],
    detailedSummary: 'No Opt Out protects the expectation that every student can answer. The teacher does the support work needed to get there, but the final answer still comes from the original student.',
    videos: { demo: 'NUL51AmaKfM' },
    literature: { book: 'TLAC 3.0', pages: '139-152' }
  },
  {
    id: 'stretch-it',
    title: 'Stretch It',
    subdomain: '3b',
    domain: 3,
    source: 'TLAC 3.0',
    alignment: '3b: Using Questioning and Discussion Techniques',
    description: 'Press a correct answer for explanation, evidence, connection, or a more complex application.',
    actionSteps: [
      'Follow the first correct response with "Why?" or "How do you know?"',
      'Ask students to connect the answer to earlier learning or a new example.',
      'Press for precision until the response shows actual understanding, not just recall.'
    ],
    detailedSummary: 'Stretch It turns a correct answer into deeper thinking. The teacher uses the student\'s first response as a starting point, then asks for reasoning, evidence, and transfer.',
    videos: { demo: 'rdszNzs0N80' },
    literature: { book: 'TLAC 3.0', pages: '161-172' }
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
    description: 'Give partners a short, timed discussion with a clear prompt and an expected product.',
    actionSteps: [
      'State the prompt before students turn so both partners know the task.',
      'Assign a listening expectation such as paraphrase, add on, or challenge.',
      'Bring the class back together by asking for the strongest idea heard.'
    ],
    detailedSummary: 'Turn and Talk raises participation when students need rehearsal before whole-group sharing. The task is tight enough to produce useful talk, not just chatter.',
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
    description: 'Require every student to put thinking on paper before discussion or sharing begins.',
    actionSteps: [
      'Give a prompt that can be answered in a short burst of writing.',
      'Hold the silence long enough for every student to produce something.',
      'Use the writing as the evidence base for the next discussion or cold call.'
    ],
    detailedSummary: 'Everybody Writes improves the quality of discussion because students have something concrete to say. It also helps quieter students enter the conversation with a thought already formed.',
    videos: { demo: 'D-KayMWv0pI' },
    literature: { book: 'TLAC 3.0', pages: '324-326' }
  },
  {
    id: 'fase-reading',
    title: 'FASE Reading',
    subdomain: '3c',
    domain: 3,
    source: 'TLAC 3.0',
    alignment: '3c: Engaging Students in Learning',
    highReward: true,
    description: 'A system for student read-alouds that keeps every student reading, listening, and accountable by using short, unpredictable, frequently switched turns.',
    actionSteps: [
      'Ask a student to start reading without specifying how long they will read, so the rest of the class cannot tune out until the turn ends.',
      'Keep turns short — often two to four sentences — so every student invests energy in expressive reading.',
      'Select the next reader unpredictably, naming students who have not volunteered as often as those who have, so participation stays universal and leverage stays high.',
      'Transition between readers with a short, consistent phrase such as "pick up, please" to keep the narrative thread unbroken and protect reading time.',
      'Use bridging by reading a short segment yourself between student readers, modeling expressive reading or resuscitating momentum.',
      'Use spot-check or oral cloze by leaving a key word out and signaling with a tone shift so students fill in the blank, revealing whether they are following along.',
      'Use a placeholder such as "hold your place; track me" to keep students anchored in the text across brief discussions.'
    ],
    detailedSummary: 'FASE Reading is a system for student read-alouds that maximizes the value and viability of this crucial classroom activity, building students\' fluency in and enjoyment of reading. The acronym FASE reminds teachers of four things to reinforce when students read aloud: Fluency, Accountability, Social, and Expressive. The name also evokes a phase, because the technique is meant to happen in recurring short cycles that yield to other activities and return later. FASE Reading addresses two recurring objections: leverage concerns, the worry that one reader leaves the rest of the class passive, and self-esteem concerns, the worry that struggling readers will be embarrassed. Leverage is built by making reader identity and turn length unpredictable. Short durations and quick, consistent transitions reduce transaction costs, keep energy high, and let the teacher cut a struggling reader off cleanly without implicit judgment. Because everyone reads but no one knows who or for how long, the system protects the weakest readers while also creating a shared experience that builds belonging.',
    videos: { demo: 'fase-reading-placeholder' },
    literature: { book: 'TLAC 3.0', pages: '209-222' }
  },
  {
    id: 'ratio-thinking',
    title: 'The T/S Ratio',
    subdomain: '3c',
    domain: 3,
    source: 'TLAC 3.0',
    alignment: '3c: Engaging Students in Learning',
    description: 'Increase the amount of work students do by shifting thinking, talk, and evidence from the teacher to the room.',
    actionSteps: [
      'Ask fewer explaining questions and more questions that require student processing.',
      'Use partner talk, written responses, and student-to-student explanation before you step in.',
      'Check whether students are doing the heavy lifting or simply watching the teacher think aloud.'
    ],
    detailedSummary: 'High ratio is visible when students are the ones reading, writing, talking, solving, and justifying. The teacher still guides the lesson, but the cognitive work belongs to students.',
    videos: { demo: 'MFhNM-9UAwo' }
  },

  // 3d: Using Assessment for Learning
  {
    id: 'retrieval-practice-routine',
    title: 'Blast From the Past',
    subdomain: '3d',
    domain: 3,
    source: 'Uncommon Schools',
    alignment: '3d: Using Assessment for Learning',
    description: 'Begin the lesson with a short recall routine that revisits prior learning before new content starts.',
    actionSteps: [
      'Select a few questions from yesterday, last week, or an earlier unit.',
      'Mix in a small amount of current content so students must discriminate and recall.',
      'Use the responses to decide whether to reteach, review, or move ahead.'
    ],
    detailedSummary: 'Retrieval practice strengthens memory by asking students to bring learning back to mind without notes. A regular routine gives the teacher quick evidence and students repeated access to important knowledge.',
    videos: { demo: '96xBOchLlWk' }
  },
  {
    id: 'show-me-assessment',
    title: 'Show Me',
    subdomain: '3d',
    domain: 3,
    source: 'TLAC 3.0',
    alignment: '3d: Using Assessment for Learning',
    description: 'Collect simultaneous responses so you can see how the whole class is doing at once.',
    actionSteps: [
      'Ask one clear question with one clear response format.',
      'Have all students reveal their answer at the same time.',
      'Scan quickly for patterns, then decide whether to reteach, correct, or move on.'
    ],
    detailedSummary: 'Show Me turns assessment into a whole-class snapshot. It reduces hiding, speeds up feedback, and gives the teacher a fast read on whether the class is ready for the next step.',
    videos: { demo: 'pHp5dVqW3CQ' },
    literature: { book: 'TLAC 3.0', pages: '104-106' }
  },
  {
    id: 'self-assessment-checks',
    title: 'Confidence Scales',
    subdomain: '3d',
    domain: 3,
    source: 'Marzano',
    alignment: '3d: Using Assessment for Learning',
    description: 'Ask students to rate their own understanding against a clear target so you can group and support them.',
    actionSteps: [
      'Define what each confidence level means before students self-rate.',
      'Have students show the rating quickly and anonymously if needed.',
      'Use the pattern of responses to decide who needs a model, a prompt, or more practice.'
    ],
    detailedSummary: 'Self-assessment works when students have a shared scale and the teacher uses the results. The point is not the number itself; it is making students think about their own readiness and giving the teacher a quick diagnostic.',
    videos: { demo: 'ydMDAGKHW7Q' }
  },

  // 3e: Responding Flexibly to Student Needs
  {
    id: 'plan-for-error-flex',
    title: 'Plan for Error',
    subdomain: '3e',
    domain: 3,
    source: 'TLAC 3.0',
    alignment: '3e: Responding Flexibly to Student Needs',
    description: 'Anticipate the most likely misunderstanding and prepare the corrective move before the lesson begins.',
    actionSteps: [
      'Name the point where students are most likely to slip.',
      'Plan the example, prompt, or re-teach move you will use if that happens.',
      'Keep the pivot short so you can recover the lesson without losing momentum.'
    ],
    detailedSummary: 'Planning for error is proactive teaching. The teacher does not wait for confusion to appear before deciding how to respond.',
    videos: { demo: 'qmuv5rs6p4A' }
  },
  {
    id: 'hinge-points-flex',
    title: 'Hinge Questions',
    subdomain: '3e',
    domain: 3,
    source: 'Visible Learning',
    alignment: '3e: Responding Flexibly to Student Needs',
    description: 'Build one mid-lesson question that tells you whether to continue, reteach, or change course.',
    actionSteps: [
      'Write a question that exposes the key misconception, not just recall.',
      'Choose response options or evidence that make student thinking visible quickly.',
      'Use the results immediately to decide the next instructional move.'
    ],
    detailedSummary: 'A hinge question gives the teacher a decision point. It is useful because the response determines whether the class is ready to proceed or needs another explanation.',
    videos: { demo: '7himF8J3ick' }
  },
  {
    id: 'red-yellow-green',
    title: 'Traffic Light Checks',
    subdomain: '3e',
    domain: 3,
    source: 'Teaching Channel',
    alignment: '3e: Responding Flexibly to Student Needs',
    description: 'Use a simple signal system so students can ask for help without stopping the whole class.',
    actionSteps: [
      'Teach students what each color means and how quickly they should use it.',
      'Scan the room and respond first to the students who signal red or yellow.',
      'Teach students to move back to green once they are ready to continue independently.'
    ],
    detailedSummary: 'Traffic light checks make need visible in real time. The teacher can intervene without waiting for students to raise a hand or drift off task.',
    videos: { demo: 'smUSKbcSSJQ' } // Wait time video shows general responsive moves
  },

  // --- DOMAIN 4: PRINCIPLED TEACHING ---

  // 4a: Engaging in Reflective Practice
  {
    id: 'reflection-logs-4a',
    title: 'Before/After Reflection',
    subdomain: '4a',
    domain: 4,
    source: 'HDKWA PD Portal',
    alignment: '4a: Engaging in Reflective Practice',
    description: 'Write a brief before-and-after note that captures what happened, what students did, and what should change next time.',
    actionSteps: [
      'Record one move you tried, one student response, and one piece of evidence.',
      'Name the part that worked and the part that needs a different response next time.',
      'Turn the note into one adjustment before the next lesson or observation.'
    ],
    detailedSummary: 'Reflection logs are useful when they turn memory into a decision. The teacher leaves with evidence and one concrete adjustment, not just a feeling, and can compare the next lesson against the last one.',
    videos: { demo: 'aJgm_HozVxc' }
  },
  {
    id: 'video-reflection',
    title: 'Video Self-Critique',
    subdomain: '4a',
    domain: 4,
    source: 'Teaching Channel',
    alignment: '4a: Engaging in Reflective Practice',
    description: 'Review a short clip of your teaching to compare what you intended, what you said, and what students actually did.',
    actionSteps: [
      'Record a short segment with one focus area, such as questioning, pacing, or response to student error.',
      'Watch once for teacher language and once for student response.',
      'Choose one habit to keep and one move to adjust before the next rehearsal.'
    ],
    detailedSummary: 'Video self-critique makes practice visible. It helps the teacher see the exact place where intention and implementation diverged so the next attempt is more precise.',
    videos: { demo: '0uIU8ZrG7yc' }
  },

  // 4b: Documenting Student Progress
  {
    id: 'smart-ledgers-4b',
    title: 'Progress Tracker',
    subdomain: '4b',
    domain: 4,
    source: 'DangRenBo',
    alignment: '4b: Documenting Student Progress',
    description: 'Track evidence of student progress in a way that makes next steps and follow-up easy to see.',
    actionSteps: [
      'Use one coding system for mastery, missing work, or intervention status.',
      'Update the record on a regular schedule so the data stays usable.',
      'Use the record to decide which students need a check-in, reteach, or extension.'
    ],
    detailedSummary: 'Progress tracking is useful only when it helps the teacher act. Smart records turn scattered data into a quick reference for support and communication.',
    videos: { demo: 'IN4MBaOdLRY' }
  },
  {
    id: 'gradebook-transparency',
    title: 'The Open Gradebook',
    subdomain: '4b',
    domain: 4,
    source: 'Edutopia',
    alignment: '4b: Documenting Student Progress',
    description: 'Keep students and families informed about progress, missing work, and the next step toward mastery.',
    actionSteps: [
      'Update the record quickly enough that it still reflects current learning.',
      'Use a mastery or progress view that shows what students have and what they still need.',
      'Review the data with students so the record becomes a planning tool, not just an archive.'
    ],
    detailedSummary: 'Transparency matters when it helps students and families see where the work stands. The record should support action, not just reporting.',
    videos: { demo: 'vsyQfmx_ej4' }
  },

  // 4c: Engaging Families and Communities
  {
    id: 'home-contributions-4c',
    title: 'Home Learning Update',
    subdomain: '4c',
    domain: 4,
    source: 'Visible Learning',
    alignment: '4c: Engaging Families and Communities',
    description: 'Send family communication that tells them what students are learning and how they can support it at home.',
    actionSteps: [
      'Name the current learning so families know what the class is studying.',
      'Give one prompt, question, or routine that families can use at home.',
      'Keep the message short, specific, and easy to translate or share.'
    ],
    detailedSummary: 'Family communication works when it makes the learning visible and gives families a concrete way to help. The message should respect family time and avoid unnecessary school jargon.',
    videos: { demo: 'f9uw1RwBjAg' }
  },
  {
    id: 'newsletters',
    title: 'Instructional Updates',
    subdomain: '4c',
    domain: 4,
    source: 'Edutopia',
    alignment: '4c: Engaging Families and Communities',
    description: 'Send a regular family-facing update that explains what students are learning, what success looks like, and how families can support the work at home.',
    actionSteps: [
      'Lead with the learning: name the unit, goal, or big idea students are working on.',
      'Show the evidence: include one concrete example of student work, thinking, or a common misconception.',
      'Invite partnership: give families one specific action they can take or question they can ask at home.'
    ],
    detailedSummary: 'Instructional Updates are a family-communication routine, not a general newsletter. The purpose is to keep families informed about the instructional program, make the learning visible in plain language, and give them a practical way to support students between school and home.',
    videos: { demo: 'JeMVNDWSVL4' }
  },

  // 4d: Contributing to School Community and Culture
  {
    id: 'professional-community-4d',
    title: 'Schoolwide Contribution',
    subdomain: '4d',
    domain: 4,
    source: 'Visible Learning',
    alignment: '4d: Contributing to School Community and Culture',
    description: 'Contribute to a school team by sharing evidence, building common routines, or helping solve a shared instructional problem.',
    actionSteps: [
      'Bring one piece of student work, data, or observation to the team.',
      'Offer one routine, prompt, or resource that colleagues can actually use.',
      'Follow up by trying the shared decision and reporting back on what happened.'
    ],
    detailedSummary: 'School community grows when colleagues trade useful practice, not just opinions. The teacher contributes by making the work of improvement concrete and visible.',
    videos: { demo: 'TaNDd2I8mYY' }
  },
  {
    id: 'action-research-teams',
    title: 'Inquiry PLC',
    subdomain: '4d',
    domain: 4,
    source: 'Marzano',
    alignment: '4d: Contributing to School Community and Culture',
    description: 'Work with a PLC to test one instructional question, study student evidence, and adjust the next cycle.',
    actionSteps: [
      'Choose one problem of practice and one shared measure of success.',
      'Try the agreed move in your setting or lesson window.',
      'Return with evidence so the team can refine the next trial.'
    ],
    detailedSummary: 'A PLC is useful when it behaves like a study group. The team learns by trying something, looking at the evidence, and deciding what to change next.',
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
    description: 'Set one professional learning goal, get feedback on it, and try the new move in practice.',
    actionSteps: [
      'Name the specific skill you want to strengthen.',
      'Ask a colleague or coach to watch for that one thing.',
      'Try the move again after the feedback and note what changed.'
    ],
    detailedSummary: 'Professional growth becomes real when the teacher chooses a target and practices it deliberately. The point is not attendance; it is improved practice over time.',
    videos: { demo: 'WPyebtSrFOw' }
  },
  {
    id: 'pd-leadership',
    title: 'The Master Teacher',
    subdomain: '4e',
    domain: 4,
    source: 'DangRenBo',
    alignment: '4e: Growing and Developing Professionally',
    description: 'Share a practice you know well by modeling it, explaining it, and supporting colleagues as they try it.',
    actionSteps: [
      'Choose one technique or routine you can demonstrate clearly.',
      'Show the move in a short session and name the decisions behind it.',
      'Offer follow-up support so colleagues can try it in their own setting.'
    ],
    detailedSummary: 'Leading professional learning is service to the profession. The teacher contributes useful practice, not just enthusiasm, and helps others apply it.',
    videos: { demo: '8fCTfmSfjMY' }
  },

  // 4f: Acting in Service of Students
  {
    id: 'firm-calm-finesse-4f',
    title: 'Firm Calm Finesse',
    subdomain: '4f',
    domain: 4,
    source: 'TLAC 3.0',
    alignment: '4f: Acting in Service of Students',
    description: 'Handle hard moments with honesty, calm, and consistency so the response stays centered on student success.',
    actionSteps: [
      'State the issue plainly without lecturing or escalating.',
      'Set the next step clearly and keep the tone neutral.',
      'Follow through in a way that preserves dignity and trust.'
    ],
    detailedSummary: 'Acting in service of students sometimes means making hard decisions calmly. The teacher\'s steadiness keeps the focus on what students need, not on the adult reaction.',
    videos: { demo: 'kPvG-Q1AnJQ' }
  },
  {
    id: 'advocacy',
    title: 'Student Advocacy',
    subdomain: '4f',
    domain: 4,
    source: 'Edutopia',
    alignment: '4f: Acting in Service of Students',
    description: 'Identify a barrier to student success and take action with the right people to remove it.',
    actionSteps: [
      'Document the barrier with evidence from student experience or work.',
      'Bring a proposed solution to the team, leader, or community partner.',
      'Follow through until the support is in place and students can benefit.'
    ],
    detailedSummary: 'Advocacy is part of principled teaching because students do better when adults solve the systems that block them. The work extends beyond your own setting when that is what students need.',
    videos: { demo: 'MO4T_pQBVQc' }
  }
];
