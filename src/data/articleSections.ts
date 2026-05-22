import { TechniqueArticleSections } from '../types';

export const articleSections: Record<string, TechniqueArticleSections> = {
  // --- DOMAIN 1: PLANNING & PREPARATION ---

  'exemplar-planning': {
    inThisVideo: 'Watch how the teacher pauses during planning to write out the exact student response before designing the lesson. Notice where the teacher marks vocabulary that must appear and identifies the precise reasoning steps students need to produce.',
    coachsNuance: 'The exemplar is a planning document, not a handout. The value comes from anticipating where students will substitute vague language or skip justification, then designing instruction to protect those exact spots. A weak exemplar that accepts half-answers will produce weak lessons.',
    forTeachers: [
      'Complete the exact task students will face before writing any materials.',
      'Highlight the vocabulary, notation, and reasoning steps that define a strong response.',
      'Predict the three most likely shortcuts or omissions students will make.',
      'Convert each prediction into a mini-model, scaffold, or checkpoint within the lesson sequence.',
      'Use the exemplar to create a one-line quality checklist you can scan during circulation.'
    ],
    forLeaders: [
      'Check whether the teacher can produce the exemplar verbally when asked; memorization signals shallow planning.',
      'Look for evidence that the exemplar influenced task design, not just the answer key.',
      'Ask how the teacher adjusted the lesson after writing the exemplar.',
      'Notice whether student work samples match the precision described in the exemplar.'
    ],
    commonMistakes: [
      'Writing a generic sample answer instead of the exact response students should produce.',
      'Creating the exemplar after the lesson is already designed, treating it as decoration.',
      'Accepting vague language in the exemplar, which then lowers the lesson standard.',
      'Failing to turn exemplar insights into actual lesson moves such as models or checkpoints.'
    ]
  },

  'knowledge-organizers': {
    inThisVideo: 'Notice how the teacher distills the entire unit to one page, arranging vocabulary and relationships in the sequence students need them rather than the textbook order. Watch for the deliberate removal of coverage that does not serve the objective.',
    coachsNuance: 'The organizer fails when it becomes a comprehensive glossary. Its power comes from ruthless reduction: the teacher decides what students must retrieve without hesitation and what can be looked up. That decision reveals the teacher\'s grasp of the content hierarchy.',
    forTeachers: [
      'Reduce the unit to the facts, terms, and relationships students must know cold.',
      'Arrange information in instructional sequence, not textbook sequence.',
      'Add brief relationship labels such as causes, contrasts with, or leads to.',
      'Audit every item against the lesson plan; remove anything never used.',
      'Plan three retrieval moments when students will revisit the organizer purposefully.'
    ],
    forLeaders: [
      'Ask whether the organizer fits on one page; bulk usually signals lack of prioritization.',
      'Check if the sequence matches the lesson order or the textbook order.',
      'Look for evidence that students actually use the organizer during work, not just receive it.',
      'Notice whether the teacher can explain why each item was included and why each exclusion was cut.'
    ],
    commonMistakes: [
      'Treating the organizer as a vocabulary list instead of a relational map.',
      'Including every term from the textbook rather than the few that matter most.',
      'Giving students the organizer without planning when and how they will use it.',
      'Arranging content by chapter order rather than by instructional need.'
    ]
  },

  'concept-mapping': {
    inThisVideo: 'Observe how the teacher places the central concept in the middle and draws labeled connections rather than unlabeled lines. Watch for the moment when the teacher identifies a conceptual bridge students may not infer on their own.',
    coachsNuance: 'Unlabeled lines are the enemy. A concept map that shows ideas connected by mystery teaches students that relationships do not need explanation. The labels force the teacher to clarify the actual logic of the discipline before teaching it.',
    forTeachers: [
      'Start with the central concept and branch to supporting ideas students must understand.',
      'Label every connection with the relationship, not just a line.',
      'Identify prerequisite concepts that must be reviewed before students can access new learning.',
      'Flag common false links students may make and plan examples that correct them.',
      'Use the map to sequence instruction from familiar ideas toward complex relationships.'
    ],
    forLeaders: [
      'Look for labeled connections; unlabeled lines signal incomplete content understanding.',
      'Ask the teacher to explain one bridge that students may not infer independently.',
      'Check whether the map influenced lesson sequencing or just decorated a slide.',
      'Notice if students can explain relationships using the same labels the teacher planned.'
    ],
    commonMistakes: [
      'Drawing unlabeled lines that do not force the teacher to clarify relationships.',
      'Creating a map that mirrors the textbook outline instead of the content logic.',
      'Failing to identify prerequisite gaps that block students from accessing the map.',
      'Using the map only as a display rather than a sequencing and teaching tool.'
    ]
  },

  'student-centered-research': {
    inThisVideo: 'Watch how the teacher designs one focused question tied to upcoming learning rather than a broad survey. Notice how responses are sorted for patterns that actually change the lesson plan, not just collected and filed.',
    coachsNuance: 'The trap is collecting data that cannot change the plan. If the teacher already knows the entry point and examples before gathering student input, the research is performative. The question must be designed so the answer could genuinely revise instruction.',
    forTeachers: [
      'Design one focused question tied to the upcoming unit, not a broad interest inventory.',
      'Use a format that reveals readiness: prior knowledge, misconceptions, or language needs.',
      'Sort responses for patterns rather than reading them as isolated anecdotes.',
      'Revise the lesson based on the patterns: examples, entry points, or supports.',
      'Document the connection between evidence and the planning choice you made.'
    ],
    forLeaders: [
      'Ask what specific planning decision changed because of the student data.',
      'Check whether the question was designed to reveal actionable information.',
      'Look for evidence that the data changed grouping, examples, or supports.',
      'Notice whether the teacher can articulate the pattern, not just individual responses.'
    ],
    commonMistakes: [
      'Asking questions that cannot change the lesson plan even if answered differently.',
      'Collecting data and then teaching the same lesson regardless of what was learned.',
      'Using broad surveys instead of focused diagnostic questions.',
      'Reading responses as entertainment rather than sorting them for instructional patterns.'
    ]
  },

  'differentiated-instruction': {
    inThisVideo: 'Observe how the teacher uses a quick pre-assessment to form planning categories rather than fixed student labels. Watch for the moment when the teacher decides which support to fade and when students can move between paths.',
    coachsNuance: 'Differentiation fails when it becomes three separate worksheets with different expectations. The path should vary while the outcome stays constant. The real test is whether every path produces comparable evidence of the same learning target.',
    forTeachers: [
      'Use a quick pre-assessment that reveals readiness for the specific target.',
      'Form two or three planning categories, not fixed student labels.',
      'Design paths to the same outcome with different entry points and supports.',
      'Plan when students can move between paths based on new evidence.',
      'Ensure every path produces comparable evidence of the same learning target.'
    ],
    forLeaders: [
      'Check whether the learning target is identical across paths or diluted for some students.',
      'Ask how the teacher decides who needs which path and when movement happens.',
      'Look for evidence that supports are temporary and designed to be faded.',
      'Notice whether the assessment measures the same outcome regardless of path taken.'
    ],
    commonMistakes: [
      'Creating separate worksheets with lower expectations instead of different paths to the same goal.',
      'Locking students into fixed groups regardless of new evidence.',
      'Differentiating by workload rather than by support and access.',
      'Failing to plan how supports will be removed over time.'
    ]
  },

  'cultural-competency': {
    inThisVideo: 'Watch how the teacher audits existing materials for who is visible and who is missing. Notice the deliberate replacement of generic examples with contexts that are locally recognizable and intellectually serious.',
    coachsNuance: 'Cultural responsiveness collapses into decoration when examples are swapped in for representation alone. The test is whether the new context helps students understand the concept more deeply. If the same learning happens with or without the swap, the design is shallow.',
    forTeachers: [
      'Audit the lesson for who is visible, who is absent, and whose experience is treated as normal.',
      'Replace generic contexts with locally recognizable, intellectually serious examples.',
      'Ensure every selected example helps students understand the concept more deeply.',
      'Gather student input on whether examples feel accurate and useful before finalizing.',
      'Plan respectful options for students to connect experience without requiring disclosure.'
    ],
    forLeaders: [
      'Ask how the selected examples deepen content understanding rather than decorate it.',
      'Check whether student input influenced material selection.',
      'Look for evidence that examples require background knowledge some students may lack.',
      'Notice whether the teacher can explain why each example was chosen and what it teaches.'
    ],
    commonMistakes: [
      'Adding culturally relevant examples that do not actually deepen the concept.',
      'Treating cultural responsiveness as decoration rather than instructional design.',
      'Choosing examples that require background knowledge some students lack.',
      'Assuming one example fits all students from a given background.'
    ]
  },

  'learning-goals': {
    inThisVideo: 'Notice how the teacher separates the activity from the intended learning. Watch for the specific verb that matches the thinking level required, and observe how the goal is translated into student-readable language without weakening rigor.',
    coachsNuance: 'The most common failure is writing that students will complete a worksheet or build a model. Those describe activities, not learning. A strong goal names what students will know, understand, or be able to do, and uses a verb that matches the assessment.',
    forTeachers: [
      'Name the knowledge or skill students should have by the end of the lesson.',
      'Use a verb that matches the level of thinking the assessment requires.',
      'Translate the goal into student-readable language without weakening rigor.',
      'Decide where the goal will be introduced, monitored, and assessed.',
      'Remove or revise activities that do not move students toward the outcome.'
    ],
    forLeaders: [
      'Check whether the goal describes learning or activity.',
      'Ask how the verb in the goal aligns with the assessment task.',
      'Look for evidence that the goal is referenced during instruction.',
      'Notice whether activities that do not serve the goal were removed or kept.'
    ],
    commonMistakes: [
      'Writing goals that describe activities instead of learning outcomes.',
      'Using vague verbs like understand or learn that cannot be assessed.',
      'Creating goals that do not align with the unit assessment.',
      'Posting the goal once and never returning to it during the lesson.'
    ]
  },

  'strategic-investment': {
    inThisVideo: 'Watch how the teacher opens the lesson with a situation where the learning will clearly help students solve something or judge something. Notice how the challenge and payoff are named so students know why the work deserves attention.',
    coachsNuance: 'Motivational stories attached to the side of the lesson do not work. The investment must be connected to the exact outcome. If students could solve the opening problem without the lesson content, the investment is fake and students will notice.',
    forTeachers: [
      'Identify a meaningful use for the learning: a decision, problem, or audience students recognize.',
      'Open the lesson with the situation, not the content.',
      'Name both the challenge and the payoff so students see why the work matters.',
      'Plan checkpoints where students can see their progress toward the useful outcome.',
      'Verify that students cannot solve the opening problem without the lesson content.'
    ],
    forLeaders: [
      'Ask whether the opening situation requires the lesson content to solve it.',
      'Check if students can articulate why the lesson outcome is worth pursuing.',
      'Look for checkpoints where students see progress toward the meaningful use.',
      'Notice whether the investment faded after the opening or persisted through the lesson.'
    ],
    commonMistakes: [
      'Attaching a motivational story that does not require the lesson content.',
      'Opening with an interesting video or anecdote that is disconnected from the objective.',
      'Naming a payoff that students could achieve without mastering the learning goal.',
      'Letting the investment disappear after the first five minutes of class.'
    ]
  },

  'student-friendly-rubrics': {
    inThisVideo: 'Observe how the teacher limits the rubric to the few features that matter most for the task. Watch for concrete descriptors that describe observable evidence rather than abstract quality words like excellent or weak.',
    coachsNuance: 'Vague quality words train students to guess what the teacher wants. A strong rubric describes visible evidence so students can compare their own work against the descriptor and know what to revise. The teacher should be able to use the same rubric to grade without translation.',
    forTeachers: [
      'Limit the rubric to the few features that matter most for this task.',
      'Describe observable evidence rather than vague quality words.',
      'Include concrete examples or model excerpts for each level when possible.',
      'Decide how the rubric will be introduced, guide revision, and align with assessment.',
      'Test the rubric by grading one sample; if interpretation varies, rewrite the descriptor.'
    ],
    forLeaders: [
      'Check whether descriptors name visible evidence or only abstract quality labels.',
      'Ask two teachers to score the same sample using the rubric and compare results.',
      'Look for evidence that students use the rubric to revise before submission.',
      'Notice whether the rubric criteria match the learning goal and assessment.'
    ],
    commonMistakes: [
      'Using labels like excellent or weak without concrete descriptors.',
      'Creating rubrics with too many criteria that dilute focus.',
      'Writing criteria that describe effort or behavior rather than learning evidence.',
      'Giving students the rubric only after work is submitted.'
    ]
  },

  'resource-curation': {
    inThisVideo: 'Watch how the teacher selects the resource because it solves a specific instructional problem, not because it looks polished. Notice the annotations and framing added so students know exactly what to pull from the material.',
    coachsNuance: 'The trap is choosing resources for surface quality rather than instructional fit. A beautiful simulation that does not clarify the misconception is worse than a plain text that does. The teacher must name the job the resource must do before searching.',
    forTeachers: [
      'Name the job the resource must do before searching: clarify, model, practice, or make visible.',
      'Evaluate resources for accuracy, level, accessibility, bias, and alignment.',
      'Add guiding questions, annotations, or a viewing purpose so students know what to extract.',
      'Decide exactly where the resource belongs in the lesson sequence.',
      'Test access, permissions, and compatibility before students use it independently.'
    ],
    forLeaders: [
      'Ask what specific instructional problem the resource solves.',
      'Check whether students have a clear purpose for using the resource.',
      'Look for evidence that the resource was selected for fit rather than polish.',
      'Notice whether the teacher knows when to stop using the resource.'
    ],
    commonMistakes: [
      'Choosing resources because they look polished rather than because they fit the instructional need.',
      'Giving students a link without a clear purpose or guiding questions.',
      'Using a resource that takes over the lesson instead of supporting it.',
      'Failing to test access, ads, or device compatibility before student use.'
    ]
  },

  'case-study-analysis': {
    inThisVideo: 'Notice how the teacher chooses a case that shares the important variables of the lesson, not just the topic. Watch for the prompts that move students from observation to interpretation to transfer.',
    coachsNuance: 'An interesting case that does not prepare students for the target reasoning is a waste of time. The case must contain the same variables, tensions, and decision points students will face independently. If students enjoy the case but cannot connect it to the next task, the planning failed.',
    forTeachers: [
      'Choose a case that shares the variables, tensions, and decision points of the learning goal.',
      'Prepare prompts that move from observation to interpretation to transfer.',
      'Identify the background knowledge and vocabulary students need before analyzing.',
      'Connect the case structure explicitly to the task students will complete next.',
      'Use the case as a rehearsal, not as an isolated enrichment activity.'
    ],
    forLeaders: [
      'Ask how the case prepares students for the independent task that follows.',
      'Check whether the case contains the same reasoning demands as the learning goal.',
      'Look for the explicit connection between case analysis and the next task.',
      'Notice whether students can explain how the case helped them solve the next problem.'
    ],
    commonMistakes: [
      'Selecting a case that is interesting but does not match the reasoning demands.',
      'Using the case as an isolated activity without connecting it to the next task.',
      'Failing to prepare students with the background knowledge needed for analysis.',
      'Stopping at interpretation without requiring transfer to a new situation.'
    ]
  },

  'professional-networks': {
    inThisVideo: 'Watch how the teacher identifies where the lesson would benefit from current or specialized expertise. Notice the preparation given to students so the outside source is not treated as a guest appearance.',
    coachsNuance: 'Outside sources become novelty acts when students do not know why they are listening. The teacher must define the exact contribution the source will make and prepare students with a lens. Without that framing, the expert is entertainment, not instruction.',
    forTeachers: [
      'Identify where the lesson needs current, specialized, or local expertise.',
      'Define the exact contribution the source will make to the lesson.',
      'Prepare students with context and a listening or reading lens.',
      'Plan how students will use the information in a product or discussion.',
      'Send the learning goal and focus in advance if inviting a person.'
    ],
    forLeaders: [
      'Ask what specific instructional gap the outside source fills.',
      'Check whether students have a clear purpose for engaging with the source.',
      'Look for evidence that the information was used in a task, not just consumed.',
      'Notice whether the teacher followed up so the source became part of instruction.'
    ],
    commonMistakes: [
      'Bringing in an expert without defining what students should learn from them.',
      'Treating the outside source as entertainment rather than instruction.',
      'Failing to prepare students with a purpose or lens for engagement.',
      'Letting the source dominate the lesson without connecting to student work.'
    ]
  },

  'double-plan': {
    inThisVideo: 'Observe the two-column format where every teacher move has a corresponding student action. Watch for the moment when the teacher finds empty student time and replaces it with a concrete task.',
    coachsNuance: 'The Double Plan reveals whether the lesson is a sequence of teacher moves with students waiting around. The hardest part is being honest about passive time. If the student column says listen while the teacher explains for ten minutes, the plan needs revision.',
    forTeachers: [
      'Map the lesson in two columns: teacher action and student action at every stage.',
      'Check every transition for a concrete student task, not just a teacher direction.',
      'Remove any step that does not move students closer to the objective.',
      'Plan what students do when they finish early or need help.',
      'Verify that each phase produces evidence of student thinking.'
    ],
    forLeaders: [
      'Look for empty student time in the plan and ask what task fills it.',
      'Check whether the student column contains actions or just passive listening.',
      'Ask how the teacher knows whether students are learning during each phase.',
      'Notice whether early finishers and struggling students have planned tasks.'
    ],
    commonMistakes: [
      'Writing teacher actions without corresponding student tasks.',
      'Accepting long periods of passive listening as legitimate student work.',
      'Planning activities that do not connect to the learning objective.',
      'Forgetting to plan for early finishers and students who need support.'
    ]
  },

  'change-the-pace': {
    inThisVideo: 'Watch how the teacher maps cognitive demand over time and plans a purposeful shift that keeps the same learning goal active. Notice the defined product of each segment and the transition that protects instructional time.',
    coachsNuance: 'Pace changes fail when they become movement without intellectual progress. The shift must change how students process the same content, not just break monotony. Each segment needs a visible product so the teacher knows whether learning happened before switching.',
    forTeachers: [
      'Map cognitive demand over time: listening, reading, writing, solving, discussing.',
      'Plan a purposeful shift before fatigue affects accuracy.',
      'Define the product of each segment so learning is visible before switching.',
      'Script transitions with materials and directions so time is not lost.',
      'Remove activities that create movement but no intellectual progress.'
    ],
    forLeaders: [
      'Ask how the pace change serves the learning goal rather than breaking monotony.',
      'Check whether each segment has a defined product.',
      'Time a transition and ask how it could be tightened.',
      'Notice whether the pace change renewed attention or just created movement.'
    ],
    commonMistakes: [
      'Adding activities that create movement without intellectual progress.',
      'Changing pace so frequently that students never reach depth.',
      'Failing to define the product of each segment before switching.',
      'Losing instructional time to unclear transitions or material delays.'
    ]
  },

  'scaffolding-complex-tasks': {
    inThisVideo: 'Observe how the teacher analyzes the final task and identifies the points of highest difficulty. Watch for the planned removal of supports so students do not become permanently dependent on the scaffold.',
    coachsNuance: 'Scaffolding fails when it becomes a permanent crutch. Every support must have a removal plan. If students always use the sentence frame, they may never learn to structure the response independently. The sequence must move from high support to independent application.',
    forTeachers: [
      'Analyze the final task for knowledge, vocabulary, procedure, and reasoning demands.',
      'Design temporary supports for the points of highest difficulty.',
      'Plan the removal of each scaffold so students do not become dependent.',
      'Sequence from model to guided attempt to independent application.',
      'Verify that every scaffold points toward the same final outcome.'
    ],
    forLeaders: [
      'Ask when each scaffold will be removed and how independence will be assessed.',
      'Check whether supports create a simplified alternative task or access to the same goal.',
      'Look for evidence that students can complete the task without the scaffold.',
      'Notice whether scaffolding is planned in advance or improvised during confusion.'
    ],
    commonMistakes: [
      'Providing permanent supports that students never learn to do without.',
      'Creating a simplified alternative task instead of access to the same goal.',
      'Improvising scaffolds during confusion rather than planning them in advance.',
      'Failing to sequence from high support toward independent application.'
    ]
  },

  'affirmative-checking': {
    inThisVideo: 'Watch how the teacher identifies the hinge moment in the lesson and designs a brief check that requires demonstration, not just confidence reporting. Notice how the result immediately influences the next instructional decision.',
    coachsNuance: 'The trap is asking Do you understand? and accepting nods. Affirmative checking requires students to produce something that proves the core idea. The teacher must decide in advance what answer, reasoning, or evidence shows readiness and what happens if it is missing.',
    forTeachers: [
      'Identify the hinge moment where misunderstanding would make the next task unproductive.',
      'Design a brief check that requires demonstration of the key understanding.',
      'Define the success standard and the response for each result category.',
      'Build the check into materials so responses are easy to see quickly.',
      'Act on the results immediately: move on, reteach, or target support.'
    ],
    forLeaders: [
      'Ask what evidence the check requires and whether it proves understanding.',
      'Check if the teacher decided the next move for each result category before class.',
      'Time the check and the response to see if feedback is immediate.',
      'Notice whether students who fail the check receive support before the lesson advances.'
    ],
    commonMistakes: [
      'Asking Do you understand? and accepting nods or thumbs up as evidence.',
      'Designing checks that measure recall instead of the key understanding.',
      'Collecting responses without planning what to do with each result.',
      'Letting the lesson advance even when most students fail the check.'
    ]
  },

  'standardize-format': {
    inThisVideo: 'Notice how the teacher decides what evidence is needed and designs a consistent layout so the same type of thinking appears in the same place across all student work. Watch for the test using a sample response.',
    coachsNuance: 'Standardization is not about visual neatness; it is about reducing the time between student work and teacher interpretation. If the teacher cannot locate the key evidence in seconds, the format needs revision. The student should also know where to put each type of thinking.',
    forTeachers: [
      'Decide what evidence you need and design a consistent place for each type.',
      'Use boxes, columns, or labeled spaces so thinking appears predictably.',
      'Test the format with a sample response: can you find the key evidence quickly?',
      'Verify that students understand where to put each type of thinking.',
      'Use standardized formats for exit tickets, constructed responses, and multi-step work.'
    ],
    forLeaders: [
      'Ask whether the format reduces interpretation time or just enforces neatness.',
      'Check if the teacher can scan for patterns quickly using the format.',
      'Look for evidence that students know where to place each type of thinking.',
      'Notice whether the format reveals conceptual errors distinct from calculation errors.'
    ],
    commonMistakes: [
      'Designing formats for visual neatness rather than quick interpretation.',
      'Creating formats that are too complex for students to use independently.',
      'Failing to test whether the format actually speeds up feedback.',
      'Using the same format for every task regardless of the evidence needed.'
    ]
  },

  'exit-tickets': {
    inThisVideo: 'Watch how the teacher designs the exit ticket before the lesson so it aligns tightly with the objective. Notice the prompt that requires independent demonstration and the sorting into got it, almost, and not yet.',
    coachsNuance: 'Exit tickets become closing routines when they ask how students felt about the lesson. They become assessment tools when they require independent demonstration of the core learning. The teacher must sort by error pattern, not just score, and use the results to plan tomorrow.',
    forTeachers: [
      'Design the ticket before the lesson so it aligns tightly with the objective.',
      'Include at least one prompt that requires independent demonstration of core learning.',
      'Decide in advance what counts as got it, almost, and not yet.',
      'Sort responses by error pattern rather than just score.',
      'Use the results to plan the next lesson before leaving school.'
    ],
    forLeaders: [
      'Ask whether the ticket requires demonstration or just self-report.',
      'Check if the teacher sorted by error pattern and planned a response.',
      'Look for evidence that tomorrow\'s plan was influenced by today\'s ticket.',
      'Time the analysis and ask whether it happened the same day.'
    ],
    commonMistakes: [
      'Asking students whether they liked the lesson or felt they understood it.',
      'Designing tickets that only measure recall instead of the core objective.',
      'Collecting tickets without analyzing patterns or planning a response.',
      'Waiting too long to analyze results so the data becomes stale.'
    ]
  },

  // --- DOMAIN 2: LEARNING ENVIRONMENTS ---

  'positive-framing': {
    inThisVideo: 'Watch how the teacher redirects behavior by naming the desired action rather than the problem. Notice the calm assumption that students can fix the issue immediately, and the naming of students already meeting the expectation.',
    coachsNuance: 'Positive framing fails when it becomes fake cheerfulness or avoids accountability. The expectation must remain firm and visible. The art is preserving dignity while making the standard unmistakable, especially during moments when the room could turn negative.',
    forTeachers: [
      'Translate every correction into the next visible action you want.',
      'Assume students can and will fix the issue immediately.',
      'Name students already meeting the expectation so the standard stays public.',
      'Script two or three positive versions of corrections you know you will need.',
      'Reserve this move for transitions, reminders, and off-task moments.'
    ],
    forLeaders: [
      'Listen for whether the correction names the desired action or only the problem.',
      'Check if the tone assumes compliance or expresses frustration.',
      'Notice whether on-task students are named, keeping the standard visible.',
      'Ask whether the teacher has scripted phrases for predictable corrections.'
    ],
    commonMistakes: [
      'Using sarcasm or vague positivity instead of a clear, firm direction.',
      'Narrating frustration or debating with students during correction.',
      'Failing to name the standard so students know what to do instead.',
      'Overusing positive framing for serious violations that need direct consequence.'
    ]
  },

  'precise-praise': {
    inThisVideo: 'Observe how the teacher replaces vague praise with evidence-based praise that names the exact action and connects it to the standard. Watch for the brief delivery that keeps learning moving.',
    coachsNuance: 'Precise praise is not about being nice; it is about teaching students what excellence looks like. The praise must identify a repeatable action, not a fixed trait. If students cannot replicate what was praised, the praise was ornamental.',
    forTeachers: [
      'Name the exact action, not a vague trait like good job.',
      'Connect the praise to the classroom standard or learning goal.',
      'Deliver it briefly so the focus stays on the work, not the performer.',
      'Praise choices and strategies students can repeat, not fixed abilities.',
      'Scan for specific moves worth naming during independent work and discussion.'
    ],
    forLeaders: [
      'Listen for whether praise names an action or only a general trait.',
      'Check if the praised action connects to a visible standard.',
      'Notice whether the praise teaches the class what excellence looks like.',
      'Ask whether students could replicate the praised action without guessing.'
    ],
    commonMistakes: [
      'Using vague praise like good job or well done without naming the action.',
      'Praising fixed traits like being smart instead of repeatable choices.',
      'Delivering praise so effusively that it becomes about the teacher, not the standard.',
      'Praising participation without connecting it to the quality of the contribution.'
    ]
  },

  'joy-factor': {
    inThisVideo: 'Watch for small, repeatable rituals that reinforce belonging without interrupting learning. Notice how joy is bounded with a clear start and stop so the teacher can return to instruction smoothly.',
    coachsNuance: 'The Joy Factor collapses when it becomes entertainment that steals focus from the task. Joy must reinforce academic purpose and belonging, not replace them. If students have to perform, be embarrassed, or share personal information to participate, the ritual is exclusionary.',
    forTeachers: [
      'Build one or two repeatable rituals that support learning rather than interrupt it.',
      'Plan joy into moments where energy typically drops: start, after challenge, before revision.',
      'Keep it inclusive; students should not have to perform or disclose to participate.',
      'Bound the ritual with a clear start and stop so instruction resumes smoothly.',
      'Connect joy to effort, improvement, or shared academic progress.'
    ],
    forLeaders: [
      'Ask whether the ritual reinforces learning or distracts from it.',
      'Check if all students can participate without performance or disclosure.',
      'Notice whether the teacher can return to instruction smoothly after the ritual.',
      'Look for evidence that joy is connected to academic effort rather than entertainment.'
    ],
    commonMistakes: [
      'Using joy as entertainment that steals focus from the learning task.',
      'Creating rituals that require students to perform or share personal information.',
      'Letting the ritual expand until it consumes instructional time.',
      'Copying a routine that feels artificial for the age, culture, or subject.'
    ]
  },

  'culture-of-error': {
    inThisVideo: 'Observe how the teacher responds to wrong answers with curiosity rather than shutdown. Watch for the routine that makes error analysis normal, such as comparing two solutions or revising the misconception together.',
    coachsNuance: 'Culture of Error is not about accepting wrong answers as fine. It is about treating errors as evidence that makes the class smarter. The repair step matters most: students must revise the answer, annotate the misconception, or write the rule that prevents the same mistake next time.',
    forTeachers: [
      'Respond to wrong answers with curiosity: What made you choose that?',
      'Use routines like My Favorite No or comparing two solutions to normalize analysis.',
      'Name the thinking inside the error so the class learns from it.',
      'Protect students from embarrassment by keeping tone neutral.',
      'Reserve time for repair: revision, annotation, or writing the preventive rule.'
    ],
    forLeaders: [
      'Listen for how the teacher responds to the first wrong answer.',
      'Check if errors are analyzed for thinking or simply replaced with the right answer.',
      'Look for a repair step where students revise or annotate the misconception.',
      'Notice whether the routine was built before high-stakes moments.'
    ],
    commonMistakes: [
      'Accepting wrong answers without analysis or correction.',
      'Replacing the error immediately without understanding the thinking behind it.',
      'Discussing errors without requiring students to revise or repair them.',
      'Using error analysis to embarrass rather than to instruct.'
    ]
  },

  'high-expectations': {
    inThisVideo: 'Watch how the teacher defines the standard before students begin and uses language that communicates belief and obligation. Notice the follow-through when students need more support rather than quiet exemption.',
    coachsNuance: 'High expectations fail when they become demands without support. The teacher must hold the line and also provide the scaffold needed to meet it. The danger is that the same students are repeatedly excused from the full expectation while others are pushed; that signals low expectations disguised as differentiation.',
    forTeachers: [
      'Define the standard before students begin and show what it looks like.',
      'Use language that communicates belief and obligation: This is not finished yet.',
      'Pair high expectations with scaffolds: models, stems, guided practice, revision time.',
      'Require revision when work is careless or incomplete, not as punishment but as norm.',
      'Track whether the same students are repeatedly excused from the full expectation.'
    ],
    forLeaders: [
      'Ask what the standard is and how students know what it looks like.',
      'Check whether high expectations are paired with adequate support.',
      'Notice whether the same students are consistently excused from the full bar.',
      'Look for revision as a routine rather than a punishment.'
    ],
    commonMistakes: [
      'Stating high expectations without showing what they look like.',
      'Demanding quality without providing the support to produce it.',
      'Quietly exempting struggling students from the full expectation.',
      'Accepting partial answers without pressing for the complete standard.'
    ]
  },

  'student-pride': {
    inThisVideo: 'Notice how the teacher selects work that teaches a specific standard rather than decorating the room. Watch for the annotations that point to exact features students should notice and emulate.',
    coachsNuance: 'The Wall of Excellence fails when it becomes a trophy case for already-polished work. Its purpose is to make quality visible and teachable. If the display never changes, students stop looking. If the annotations are vague, students cannot replicate what made the work strong.',
    forTeachers: [
      'Select work that clearly shows the thinking or craftsmanship you want repeated.',
      'Add annotations that point to exact features: evidence use, structure, precision.',
      'Rotate examples so the display stays connected to current learning.',
      'Include work from a range of students over time.',
      'Refer to the wall during instruction so students use it as a working tool.'
    ],
    forLeaders: [
      'Ask what specific standard the displayed work teaches.',
      'Check whether annotations name exact features or use vague praise.',
      'Notice how often the display is refreshed and whether it connects to current units.',
      'Look for evidence that students refer to the wall during their own work.'
    ],
    commonMistakes: [
      'Using the wall as decoration or a popularity contest.',
      'Displaying only polished final products without showing growth.',
      'Adding vague labels like great work instead of specific feature annotations.',
      'Never refreshing the display so it becomes invisible to students.'
    ]
  },

  'strong-voice': {
    inThisVideo: 'Watch how the teacher gives one clear direction and then stops talking. Notice the stillness, the neutral tone, and the deliberate pause that lets students act before the teacher adds more language.',
    coachsNuance: 'Strong Voice is not about volume or intimidation. It is about removing verbal clutter so the direction is easy to follow. The hardest part is stopping after one direction. Most teachers over-explain, which trains students to wait for the third repetition before acting.',
    forTeachers: [
      'Give one clear direction, then stop talking and wait.',
      'Avoid narrating frustration, debating, or adding explanations while students decide.',
      'Stand where you can be seen and use deliberate pauses.',
      'Name the observable action and the time frame: In three seconds, notebooks open.',
      'If students do not respond, repeat with less language, not more emotion.'
    ],
    forLeaders: [
      'Count the number of directions given before the pause.',
      'Check whether the teacher stops talking after the first direction.',
      'Notice body position and whether the teacher is visible to the whole room.',
      'Listen for emotional escalation versus calm, brief repetition.'
    ],
    commonMistakes: [
      'Giving multiple directions before pausing, creating confusion about which to follow.',
      'Narrating frustration or escalating volume to force compliance.',
      'Explaining the rationale while students are still deciding whether to comply.',
      'Repeating with more words and more emotion rather than less of both.'
    ]
  },

  'do-it-again': {
    inThisVideo: 'Observe how the teacher stops a routine neutrally, names the gap, and has students repeat the exact move immediately. Watch for the calm, matter-of-fact tone that makes it feel like rehearsal rather than punishment.',
    coachsNuance: 'Do It Again becomes punitive when the teacher adds frustration or shame. It works as rehearsal only when the standard was taught beforehand and the tone is calm. The same routine should not require repeated restarts; if it does, the system, not the students, needs fixing.',
    forTeachers: [
      'Stop the routine neutrally and name the gap without blame.',
      'Have students repeat the exact move immediately.',
      'Keep the tone calm and matter-of-fact so it feels like rehearsal.',
      'Name what worked after the improved version.',
      'If the same routine needs repeated restarts, fix the system: directions, setup, or time target.'
    ],
    forLeaders: [
      'Listen for the tone: calm rehearsal or frustrated punishment?',
      'Check whether the standard was taught before the restart was demanded.',
      'Notice whether the teacher names what worked after the improved version.',
      'Track how often the same routine is restarted and whether the system is the problem.'
    ],
    commonMistakes: [
      'Using Do It Again with frustration or shame rather than calm rehearsal.',
      'Demanding restarts for routines that were never explicitly taught.',
      'Failing to name what the improved version did correctly.',
      'Restarting the same routine repeatedly without fixing the underlying system issue.'
    ]
  },

  'tight-transitions': {
    inThisVideo: 'Watch how the teacher scripts the exact sequence before the transition begins and uses a visible timer so students know the finish line. Notice the scan and narration of the standard rather than extra talk during the move.',
    coachsNuance: 'Tight transitions are not about rushing students; they are about reducing ambiguity. The time is lost to unclear directions, missing materials, and uncertain destinations, not to slow movement. A well-designed transition feels calm and purposeful.',
    forTeachers: [
      'Script the exact sequence: materials, movement, voice level, destination, finish line.',
      'Use a timer or countdown so the transition has a clear endpoint.',
      'Teach and rehearse the most common transitions before expecting fluency.',
      'Scan and narrate the standard rather than filling the room with extra talk.',
      'Audit after class: where was time lost and what detail needs adjustment?'
    ],
    forLeaders: [
      'Time the transition and compare it to the planned duration.',
      'Check whether the direction included materials, destination, and first task.',
      'Notice whether the teacher narrated the standard or talked through the whole move.',
      'Ask what adjustment the teacher will make before the next lesson.'
    ],
    commonMistakes: [
      'Giving vague directions like get ready without specifying the sequence.',
      'Talking through the entire transition instead of letting students move.',
      'Failing to rehearse transitions before expecting students to execute them.',
      'Blaming students for slow transitions when the directions or materials were unclear.'
    ]
  },

  'threshold': {
    inThisVideo: 'Observe how the teacher uses the doorway to greet, scan, and reset small issues before students enter fully. Notice the first academic direction given before students sit down, making the learning climate visible immediately.',
    coachsNuance: 'Threshold fails when it becomes a social chat or a public correction zone. The greeting must combine warmth and purpose. Students should feel welcomed and also immediately oriented toward learning. The first direction should be visible from the entrance.',
    forTeachers: [
      'Stand at the doorway with a consistent greeting, quick scan, and first academic direction.',
      'Reset small issues quietly before students enter fully.',
      'Give the first learning task before students take their seats.',
      'Prepare materials and the first direction before students arrive.',
      'Keep a small set of private reset phrases for predictable issues.'
    ],
    forLeaders: [
      'Watch the first thirty seconds: is there a greeting, a scan, and an academic direction?',
      'Check whether resets are private or public.',
      'Notice whether the first task is visible and started before the teacher begins formal instruction.',
      'Ask what students experience at the doorway: belonging, purpose, or chaos?' 
    ],
    commonMistakes: [
      'Using the doorway only for social chat without academic purpose.',
      'Making the doorway a public correction zone that embarrasses students.',
      'Failing to give a first academic direction before students sit down.',
      'Starting class with logistics that could have been posted instead.'
    ]
  },

  'be-seen-looking': {
    inThisVideo: 'Watch how the teacher moves deliberately through the room instead of staying fixed. Notice the scan that checks both behavior and evidence of learning, and the naming of specific on-task behavior.',
    coachsNuance: 'Be Seen Looking is preventive, not reactive. The goal is to change behavior before it becomes misbehavior by making monitoring visible. If the teacher only scans for problems, students learn that attention means trouble. Scanning for quality makes on-task behavior feel noticed and valued.',
    forTeachers: [
      'Move deliberately through the room instead of staying fixed.',
      'Scan for both behavior and evidence of learning: first line written, strategy chosen.',
      'Make your looking visible: pause, lift eyes, step to the side.',
      'Name specific on-task behavior so students know what is being reinforced.',
      'Plan where you will stand during each lesson segment.'
    ],
    forLeaders: [
      'Map the teacher\'s movement path during a lesson segment.',
      'Check whether the scan includes evidence of learning or only behavior.',
      'Listen for whether the teacher names on-task behavior, not just mistakes.',
      'Notice whether proximity or eye contact prevents corrections before they are needed.'
    ],
    commonMistakes: [
      'Staying behind the desk or fixed at the board during independent work.',
      'Scanning only for problems rather than naming on-task behavior.',
      'Looking without being seen, so students do not know they are monitored.',
      'Using the scan only to catch misbehavior rather than to reinforce quality.'
    ]
  },

  'least-invasive-intervention': {
    inThisVideo: 'Observe the ladder of responses: presence first, then nonverbal cue, then private whisper, then escalation only if needed. Watch how the student stays in the lesson and the rest of the class remains focused.',
    coachsNuance: 'The ladder matters. Teachers who skip straight to public correction train students to wait for the loud response before complying. The smallest move that works preserves learning time and dignity. But cycling through the lowest step forever is unfair to classmates; escalation must happen when needed.',
    forTeachers: [
      'Start with presence: move closer, pause, make eye contact.',
      'Use nonverbal cues before breaking the lesson flow.',
      'Escalate to a private whisper only if the first move fails.',
      'Plan common cues in advance so students know what they mean.',
      'Escalate to a brief conference or consequence when private cues fail repeatedly.'
    ],
    forLeaders: [
      'Watch the first response to off-task behavior: is it the smallest move that could work?',
      'Check whether the student stays in the lesson after the correction.',
      'Notice if the teacher cycles through the lowest step forever without escalating.',
      'Ask how the rest of the class is affected by the intervention.'
    ],
    commonMistakes: [
      'Skipping straight to public correction or consequence without trying smaller moves.',
      'Using the same low-level cue repeatedly without ever escalating.',
      'Making the intervention so visible that it disrupts the whole class.',
      'Failing to plan common cues so students do not understand the signal.'
    ]
  },

  'art-of-consequence': {
    inThisVideo: 'Watch how the teacher separates the student from the behavior and uses calm language that names the action and the next step. Notice the brief delivery and the immediate return to instruction.',
    coachsNuance: 'Consequences fail when they become emotional or unpredictable. Students must be able to predict what will happen when a standard is broken. The art is being firm without drama, fair without negotiation, and focused on returning everyone to learning.',
    forTeachers: [
      'Separate the student from the behavior in your language.',
      'Deliver the consequence close to the moment, briefly, and calmly.',
      'Keep the language about the action, not the student\'s character.',
      'Follow up privately when the pattern or relationship requires it.',
      'Define common consequences in advance so students can predict the response.'
    ],
    forLeaders: [
      'Listen for whether the language addresses the action or the character.',
      'Check if the consequence is timely, proportional, and consistent.',
      'Notice whether the teacher returns to instruction quickly after delivery.',
      'Ask whether students can predict what will happen when a standard is broken.'
    ],
    commonMistakes: [
      'Delivering consequences with sarcasm, lectures, or emotional escalation.',
      'Negotiating consequences in the moment, making them unpredictable.',
      'Addressing the student\'s character instead of the specific action.',
      'Failing to return to instruction, letting the consequence dominate the period.'
    ]
  },

  'invisible-columns-space': {
    inThisVideo: 'Notice how the teacher arranges desks and pathways so every student can be seen and reached quickly. Watch for the intentional positioning during different lesson modes: front for instruction, sides for discussion, back for independent work.',
    coachsNuance: 'The Grid is not about one perfect layout. It is about sightlines and circulation. A layout that works for discussion may fail for independent practice. The teacher must be willing to adjust the room to match the learning task rather than forcing every mode into the same arrangement.',
    forTeachers: [
      'Arrange desks so you can see and reach every student quickly.',
      'Create clear paths for circulation, especially to students who need frequent support.',
      'Position yourself intentionally during each lesson mode.',
      'Revise the layout after watching where bottlenecks occur.',
      'Adjust the room to match the learning task, not force every mode into one layout.'
    ],
    forLeaders: [
      'Check sightlines from the main instruction spots to every student.',
      'Map the teacher\'s movement path during a lesson segment.',
      'Notice whether the layout supports the current task or blocks it.',
      'Ask whether the teacher has tested the layout during different lesson modes.'
    ],
    commonMistakes: [
      'Keeping one layout for all lesson modes regardless of the task.',
      'Creating furniture islands that hide students or trap the teacher at the front.',
      'Failing to adjust the layout after identifying bottlenecks.',
      'Ignoring accessibility, collaboration, or safe movement in the design.'
    ]
  },

  'front-table': {
    inThisVideo: 'Watch how the teacher uses the table as a working instructional station, not a punishment seat. Notice the evidence used to call students, the tight teaching sequence, and the quick return to independent work.',
    coachsNuance: 'The Front Table becomes stigmatized when it is only for struggling students. It works best when all students see it as a place where everyone goes for coaching. The record of who came, why, and what next step they need is essential; without it, the table feels responsive but fails to inform future planning.',
    forTeachers: [
      'Set up a clear, consistent place for targeted small-group support.',
      'Call students based on evidence: exit ticket data, missed attempt, or readiness for extension.',
      'Teach tightly: identify misconception, model one example, have students try one with feedback.',
      'Rotate groups quickly rather than keeping students for long periods.',
      'Keep a record of who came, why, and what next step they need.'
    ],
    forLeaders: [
      'Ask whether students see the table as a coaching station or a punishment seat.',
      'Check if the teacher uses evidence to decide who comes to the table.',
      'Notice how long students stay and whether they return to independent work quickly.',
      'Look for a record that informs future grouping and follow-up.'
    ],
    commonMistakes: [
      'Using the front table only for struggling students, creating stigma.',
      'Keeping students at the table for too long, making them miss independent practice.',
      'Teaching without a record of who came and what they still need.',
      'Calling students based on intuition rather than evidence.'
    ]
  },

  'visual-aids': {
    inThisVideo: 'Observe how the teacher selects only visuals that students will use during the current unit. Watch for the explicit reference back to the chart during instruction so students see it as a working tool.',
    coachsNuance: 'Anchor charts become wallpaper when they are never referenced after being posted. The test is whether students use the chart to answer questions, revise work, or solve problems without asking the teacher. If they do not, the chart is decoration, not instruction.',
    forTeachers: [
      'Post only visuals that students will use again during the current unit.',
      'Keep language and layout simple enough for students to read without help.',
      'Point back to the chart during instruction so students see it as a tool.',
      'Remove or cover outdated visuals so the room does not become visual noise.',
      'Place charts near the area where students will use them.'
    ],
    forLeaders: [
      'Ask whether students actually use the chart during work.',
      'Check if the teacher refers to the chart during instruction.',
      'Notice whether outdated visuals have been removed or are creating noise.',
      'Look at the walls from a student\'s seat: can they read and use the chart?' 
    ],
    commonMistakes: [
      'Posting every chart ever made until the walls become visual noise.',
      'Creating charts that are too text-dense for students to read independently.',
      'Never referencing the chart after posting it.',
      'Treating charts as decoration rather than instructional tools.'
    ]
  },

  // --- DOMAIN 3: INSTRUCTION ---

  'format-matters': {
    inThisVideo: 'Watch how the teacher models one strong answer using the target vocabulary and sentence structure, then gives a brief cue when a response is too brief. Notice the quick, respectful correction that makes the academic expectation feel normal.',
    coachsNuance: 'The danger is turning sentence practice into a grammar drill. The goal is precision in service of the concept. If students can say the sentence but still misunderstand the content, the technique has become performative. The sentence must help them explain the idea more clearly.',
    forTeachers: [
      'Model one strong answer using the target vocabulary and structure before students respond.',
      'Use a brief cue like full sentence or use the term when a response is too brief.',
      'Have students restate the idea with the target vocabulary before moving on.',
      'Plan where the sentence will appear in written work and require its use.',
      'Collect or scan the written response so language practice produces evidence.'
    ],
    forLeaders: [
      'Listen for whether the cue presses for precision or just compliance.',
      'Check if students can explain the concept using the target vocabulary.',
      'Notice whether the sentence practice connects to written work.',
      'Ask whether the technique improved explanation quality or just memorized phrases.'
    ],
    commonMistakes: [
      'Turning sentence practice into grammar drill disconnected from content.',
      'Accepting vague responses without pressing for the target vocabulary.',
      'Practicing orally without requiring the same precision in writing.',
      'Using the cue punitively rather than as a normal academic expectation.'
    ]
  },

  'call-and-response': {
    inThisVideo: 'Observe how the teacher keeps the phrase brief and returns to it during independent work. Watch for the signal that is identical each time so students know when to respond together.',
    coachsNuance: 'Choral rehearsal fails when it becomes a performance. If students are mouthing along without meaning, the routine is useless. The teacher must follow the choral response with an individual application: use the phrase in a problem, explain it in context, or write it in a sentence.',
    forTeachers: [
      'Choose one short statement, term, or rule that every student needs to know cold.',
      'Use the same signal each time so students know when to respond.',
      'Return to the phrase during independent work so it becomes usable.',
      'Follow with one cold call asking a student to explain the phrase in context.',
      'Keep the response identical until it is fluent, then ask for application.'
    ],
    forLeaders: [
      'Listen for whether the phrase is content-specific or generic.',
      'Check if the teacher follows choral response with individual application.',
      'Notice whether students can explain the phrase or only repeat it.',
      'Ask how the choral response connects to the next task.'
    ],
    commonMistakes: [
      'Using call-and-response for everything, diluting its impact.',
      'Letting students mouth along without understanding the meaning.',
      'Changing the wording so students memorize sound without grasping the term.',
      'Never asking students to use the phrase independently after choral practice.'
    ]
  },

  'vocabulary-movement': {
    inThisVideo: 'Watch how the teacher pairs the gesture to the meaning rather than creating a cute movement. Notice the sequence where students say the word, make the gesture, and use the term in a complete sentence.',
    coachsNuance: 'Gestures fail when they are conceptually weak. A movement that does not match the meaning becomes a distraction. The teacher must be able to explain why the gesture fits the word, and students should eventually be able to recall the term without the movement.',
    forTeachers: [
      'Select one or two central terms that will appear in discussion and writing.',
      'Assign a gesture that physically represents the meaning, not just any movement.',
      'Have students say the word, make the gesture, and use the term in a sentence.',
      'Ask students to explain why the gesture fits the word.',
      'Fade the gesture to a silent cue so students retrieve the term independently.'
    ],
    forLeaders: [
      'Ask how the gesture represents the meaning of the term.',
      'Check if students can explain why the movement fits the word.',
      'Notice whether the gesture is used as a bridge to writing, not a substitute.',
      'Look for evidence that students can recall the term without the movement.'
    ],
    commonMistakes: [
      'Creating cute movements that do not match the conceptual meaning.',
      'Using gestures as a substitute for written practice and assessment.',
      'Never fading the gesture so students remain dependent on the movement.',
      'Selecting peripheral vocabulary rather than central terms.'
    ]
  },

  'cold-call': {
    inThisVideo: 'Observe the order: question first, think time, then name. Watch how the pause allows every student to prepare before knowing who will speak. Notice the neutral tone and the prompt for elaboration when the answer is partial.',
    coachsNuance: 'Cold Call fails when it becomes a gotcha for inattentiveness. It should communicate that every student\'s thinking matters. The think time is essential; without it, Cold Call rewards speed instead of thought and punishes students who process more slowly.',
    forTeachers: [
      'Pose the question to the entire class before naming anyone.',
      'Pause long enough for students to think and prepare an answer.',
      'Name a student after the pause, then prompt for a fuller response if needed.',
      'Track who has spoken so participation spreads across the room.',
      'Pair with Everybody Writes or Turn and Talk when questions require more preparation.'
    ],
    forLeaders: [
      'Listen for the order: question, pause, then name.',
      'Check whether the pause is long enough for real thinking.',
      'Notice whether the tone is neutral or punitive.',
      'Track participation patterns across gender, language level, and achievement.'
    ],
    commonMistakes: [
      'Using Cold Call as a gotcha for students who are not paying attention.',
      'Naming a student before posing the question, eliminating think time.',
      'Giving insufficient pause so only fast processors can answer.',
      'Calling on the same students repeatedly while others remain silent.'
    ]
  },

  'wait-time': {
    inThisVideo: 'Watch the deliberate silence after the question. Count along with the teacher. Notice how the pause improves the quality of the first response and invites students who need more processing time.',
    coachsNuance: 'Wait time is not dead air; it is instructional time. The hardest part is resisting the urge to rephrase. Rephrasing too quickly trains students to wait for the easier version and rewards speed over thought. The silence must be held intentionally.',
    forTeachers: [
      'Count silently after asking a question before calling on anyone.',
      'Leave silence after a student speaks before you rephrase or redirect.',
      'Use the pause to scan and decide who is ready and who needs support.',
      'Narrate the expectation: I am giving everyone time to think.',
      'Mark questions that deserve a longer pause and decide what students do while waiting.'
    ],
    forLeaders: [
      'Time the pause after a question; three to five seconds is a minimum.',
      'Check whether the teacher rephrases too quickly.',
      'Notice whether the pause improves response quality.',
      'Ask what students are expected to do during the wait time.'
    ],
    commonMistakes: [
      'Rephrasing the question before students have time to process the first version.',
      'Filling the silence with extra talk that interrupts thinking.',
      'Using wait time only after easy questions that do not need it.',
      'Calling on the first hand, which trains students to answer quickly rather than deeply.'
    ]
  },

  'no-opt-out': {
    inThisVideo: 'Observe how the teacher identifies the smallest support needed: a repeat, a cue, a peer model, or the first step. Watch for the return to the original student so they finish the answer in their own voice.',
    coachsNuance: 'No Opt Out becomes harsh when the support is inadequate or the return feels like a trap. The message must be that support will be provided and participation will not disappear. The teacher must have a repertoire of scaffolds ready so the moment does not become improvised pressure.',
    forTeachers: [
      'Acknowledge what the student has right before offering support.',
      'Provide the smallest support needed: repeat, cue, peer model, or first step.',
      'Return to the original student so they finish the answer in their own words.',
      'Use the student\'s success to reset the expectation for the whole class.',
      'Plan common scaffolds in advance so you are not improvising under pressure.'
    ],
    forLeaders: [
      'Listen for the support provided before the return to the original student.',
      'Check whether the tone communicates support or embarrassment.',
      'Notice if the original student finishes the answer or is rescued by the teacher.',
      'Ask how the teacher uses the moment to reset expectations for the class.'
    ],
    commonMistakes: [
      'Using No Opt Out punitively, making students feel trapped.',
      'Providing inadequate support and then demanding the answer anyway.',
      'Never returning to the original student, letting someone else answer instead.',
      'Applying No Opt Out to questions that are too complex for the support available.'
    ]
  },

  'stretch-it': {
    inThisVideo: 'Watch how the teacher uses the correct answer as a starting point rather than a finish line. Notice the follow-up that presses for reasoning, evidence, or a new example rather than generic praise.',
    coachsNuance: 'Stretch It fails when it becomes random challenge disconnected from the objective. The follow-up must serve the lesson goal. If the objective is reasoning, ask for justification; if it is transfer, give a new case. Vague praise followed by a harder problem is not stretching; it is changing the subject.',
    forTeachers: [
      'Follow the first correct response with Why? or How do you know?',
      'Ask students to connect the answer to earlier learning or a new example.',
      'Choose the stretch based on the lesson goal: reasoning, transfer, or precision.',
      'Invite other students to build on the stretched response.',
      'Prepare two stretch paths for key questions: deepen the idea or transfer to a new case.'
    ],
    forLeaders: [
      'Listen for whether the follow-up connects to the lesson goal or is random.',
      'Check if the stretched response shows deeper understanding or just more work.',
      'Notice whether other students are invited to build on the stretched idea.',
      'Ask how the teacher prepared stretch paths before the lesson.'
    ],
    commonMistakes: [
      'Stretching every answer, which drags pacing and loses focus.',
      'Asking a harder problem disconnected from the lesson objective.',
      'Giving vague praise instead of a specific follow-up question.',
      'Making Stretch It a private exchange between teacher and one student.'
    ]
  },

  'turn-and-talk': {
    inThisVideo: 'Observe how the teacher states the prompt and the product before students turn. Watch for the assigned listening expectation and the circulation that gathers strong ideas and misconceptions to bring back.',
    coachsNuance: 'Turn and Talk becomes chatter when the prompt is too open or the product is unclear. The task must be tight enough to produce useful talk. The teacher must also decide in advance how to bring the class back: asking for the best idea heard is more accountable than asking who wants to share.',
    forTeachers: [
      'State the prompt and the expected product before students turn.',
      'Assign a listening expectation: paraphrase, add on, or challenge.',
      'Circulate to listen for strong ideas, misconceptions, and students to call on.',
      'Bring the class back by asking for the best idea heard, not who wants to share.',
      'Provide sentence stems for agreeing, challenging, and asking for evidence.'
    ],
    forLeaders: [
      'Check whether the prompt is tight enough to produce academic talk.',
      'Listen for the assigned listening expectation.',
      'Notice whether the teacher circulates and uses what was heard.',
      'Ask how the teacher brings the class back and whether it holds partners accountable.'
    ],
    commonMistakes: [
      'Giving an open prompt that produces social chatter instead of academic talk.',
      'Letting students discuss without a clear product or time limit.',
      'Bringing the class back by asking who wants to share rather than for the best idea.',
      'Failing to circulate so the teacher does not know what was discussed.'
    ]
  },

  'everybody-writes': {
    inThisVideo: 'Watch the silence as every student writes. Notice how the teacher holds the pause long enough for all students to produce something, then uses the writing as the basis for discussion.',
    coachsNuance: 'Everybody Writes fails when the prompt is too long or the writing is never used. The prompt must be answerable in a short burst, and the writing must become the evidence base for the next discussion or cold call. Without that use, the writing is busywork.',
    forTeachers: [
      'Give a prompt that can be answered in a short burst of writing.',
      'Hold the silence long enough for every student to produce something.',
      'Circulate and scan for common errors, strong examples, and students to call on.',
      'Use the writing as the evidence base for the next discussion or cold call.',
      'Keep the writing short: one sentence, one diagram, one equation, one evidence quote.'
    ],
    forLeaders: [
      'Check whether every student is actually writing during the silent period.',
      'Notice whether the writing is used in the next segment or ignored.',
      'Ask how the teacher decides who to call on based on what was written.',
      'Look for evidence that quieter students enter discussion with a prepared thought.'
    ],
    commonMistakes: [
      'Giving a prompt that is too long for the time allocated.',
      'Letting early finishers pull the class into discussion before others finish.',
      'Never using the writing as evidence for the next segment.',
      'Assigning writing that is too long for the teacher to scan quickly.'
    ]
  },

  'ratio-thinking': {
    inThisVideo: 'Watch how the teacher shortens explanations and converts them into student tasks. Notice the shift from teacher explanation to student reading, writing, explaining, and solving.',
    coachsNuance: 'High ratio does not mean the teacher disappears. It means the teacher designs tight prompts, checks work constantly, and intervenes strategically while students do the heavy lifting. The danger is creating tasks that look active but require no real thinking.',
    forTeachers: [
      'Identify moments where students can explain, solve, classify, or justify instead of watching.',
      'Shorten teacher explanations and convert them into student tasks.',
      'Use partner talk, quick writing, whiteboards, and student-to-student response.',
      'Monitor for passive signals: copying without deciding, waiting for confirmation.',
      'After the lesson, mark one segment where students could have done more thinking.'
    ],
    forLeaders: [
      'Track who is talking and who is thinking during a lesson segment.',
      'Check whether student tasks require real processing or just copying.',
      'Notice whether the teacher intervenes strategically or rescues students too quickly.',
      'Ask how the teacher revised one segment to increase student thinking.'
    ],
    commonMistakes: [
      'Confusing activity with thinking: busywork looks active but produces no cognition.',
      'Removing teacher guidance so completely that students are lost.',
      'Never checking whether students are actually processing or just performing.',
      'Allowing a few students to dominate while others remain passive.'
    ]
  },

  'retrieval-practice-routine': {
    inThisVideo: 'Watch how the teacher begins class with prompts drawn from yesterday, last week, and earlier units. Notice the mix of question types and the immediate use of results to decide whether to reteach or move ahead.',
    coachsNuance: 'Retrieval practice fails when students use notes. The point is to measure what they can bring back to mind without support. If the routine becomes a copying exercise, it measures transcription, not memory. The teacher must design prompts that force independent recall.',
    forTeachers: [
      'Begin with three to five prompts from yesterday, last week, and earlier units.',
      'Require answers without notes so the routine measures retrieval, not copying.',
      'Mix question types: vocabulary, procedure, explanation, and one connection to today.',
      'Review quickly, then act on the evidence: reteach, review, or move ahead.',
      'Track missed items over time and recycle them until retrieval is fluent.'
    ],
    forLeaders: [
      'Check whether students answered without notes or resources.',
      'Ask how the teacher used the results to inform the next instructional move.',
      'Notice whether missed items from previous days reappear in later retrieval.',
      'Look for evidence that the routine is a diagnostic, not just a warm-up filler.'
    ],
    commonMistakes: [
      'Allowing students to use notes, which measures copying instead of retrieval.',
      'Using the routine as a filler rather than a diagnostic tool.',
      'Never acting on the results to inform the next lesson.',
      'Recycling the same questions in the same format so students memorize rather than retrieve.'
    ]
  },

  'show-me-assessment': {
    inThisVideo: 'Observe the single focused question and the simultaneous reveal on a clear signal. Watch how the teacher scans for patterns rather than grading every response, then acts immediately on what is seen.',
    coachsNuance: 'Show Me fails when the question is vague or the response does not reveal different thinking. If every wrong answer looks the same, the teacher knows students are confused but not why. Good Show Me questions expose the exact misconception the teacher is prepared to address.',
    forTeachers: [
      'Ask one focused question with a response format that can be scanned quickly.',
      'Give think time first, then have all students reveal on a clear signal.',
      'Scan for patterns: ready, widespread error, or split responses.',
      'Act immediately: reteach, compare answers, pull a small group, or move forward.',
      'Design the prompt so wrong answers reveal the specific misconception you can address.'
    ],
    forLeaders: [
      'Check whether the question is focused enough to produce a scannable pattern.',
      'Notice whether students revealed simultaneously or copied from neighbors.',
      'Ask what the teacher did with the results within the next minute.',
      'Look for evidence that wrong answers revealed why students were confused.'
    ],
    commonMistakes: [
      'Asking vague questions like Does everyone get it?',
      'Letting students reveal at different times so they copy from neighbors.',
      'Collecting responses without an immediate plan for each result category.',
      'Designing questions where wrong answers do not reveal the specific misconception.'
    ]
  },

  'self-assessment-checks': {
    inThisVideo: 'Watch how the teacher defines each confidence level in concrete terms before asking students to rate themselves. Notice the pairing of the rating with evidence: one example, one underlined step, or one question.',
    coachsNuance: 'Self-assessment becomes decorative when it stops at collecting numbers. Students must know what action moves them from yellow to green. Without that path, the rating is a feeling, not a tool. The teacher must pair every rating with a specific next step.',
    forTeachers: [
      'Define each confidence level in concrete, observable terms before rating.',
      'Pair the rating with evidence: one example, one underlined step, or one question.',
      'Respond to greens with independent practice, yellows with a hint, reds with a brief model.',
      'Teach students that ratings can change and what action moves them forward.',
      'Use private signals when public ratings may distort honesty.'
    ],
    forLeaders: [
      'Ask what each color means and whether the definition is concrete.',
      'Check if the teacher responds differently to each rating.',
      'Notice whether students know what action moves them from one level to the next.',
      'Look for evidence paired with the rating, not just a number.'
    ],
    commonMistakes: [
      'Collecting self-ratings without defining what each level means.',
      'Stopping at the number without pairing it with evidence or a next step.',
      'Using public ratings that pressure students to overstate confidence.',
      'Responding the same way to all ratings regardless of need.'
    ]
  },

  'plan-for-error-flex': {
    inThisVideo: 'Watch how the teacher names the most likely mistake before the lesson and prepares the exact response. Notice the quick pivot when the error appears, keeping the repair short enough to preserve momentum.',
    coachsNuance: 'Planning for error is not pessimism; it is professional foresight. The trap is preparing only for the errors you have seen before. After each lesson, compare predicted errors with actual errors. If students made a different mistake, add it to the next plan so the knowledge base grows.',
    forTeachers: [
      'Identify the one or two mistakes students are most likely to make.',
      'Prepare the exact response: contrasting example, simpler problem, visual model, or question sequence.',
      'Watch for the planned error during guided practice and written work.',
      'Name the misconception without blame and guide the class to repair it.',
      'After the lesson, compare predicted errors with actual errors and update the plan.'
    ],
    forLeaders: [
      'Ask what errors the teacher predicted and what responses were prepared.',
      'Check whether the predicted errors actually appeared during the lesson.',
      'Notice how the teacher responded when the error appeared.',
      'Look for evidence that the teacher updates predictions based on new mistakes.'
    ],
    commonMistakes: [
      'Improvising responses to errors without planning them in advance.',
      'Preparing only for errors seen in previous years, missing new misconceptions.',
      'Stopping the whole class for an error that only a few students made.',
      'Never updating the prediction list based on what actually happened.'
    ]
  },

  'hinge-points-flex': {
    inThisVideo: 'Observe the hinge question placed after the key explanation. Watch the simultaneous response and the immediate decision based on preplanned thresholds: move on, justify, or reteach.',
    coachsNuance: 'A hinge question is only valuable if it changes what happens next. It must expose the central misconception, not just ask for recall. The teacher must decide the thresholds before class so the response is based on evidence, not mood.',
    forTeachers: [
      'Write the hinge question before class and place it after the key explanation.',
      'Design the question to expose the central misconception, not just recall.',
      'Have every student answer simultaneously through cards, whiteboards, or a poll.',
      'Act immediately based on preplanned thresholds: move on, justify, or reteach.',
      'Decide the thresholds before class so the response is evidence-based.'
    ],
    forLeaders: [
      'Ask what misconception the hinge question exposes.',
      'Check whether every student answered before discussion.',
      'Notice whether the teacher acted immediately or delayed the decision.',
      'Look for preplanned thresholds rather than improvised responses.'
    ],
    commonMistakes: [
      'Asking a recall question that does not expose the central misconception.',
      'Letting students discuss before answering, which hides individual thinking.',
      'Delaying the decision or basing it on mood rather than evidence.',
      'Never deciding thresholds in advance so the response is improvised.'
    ]
  },

  'red-yellow-green': {
    inThisVideo: 'Watch how the teacher introduces the signal system before work begins and then scans continuously. Notice the response priority: red first, then yellow, while verifying green students by sampling their work.',
    coachsNuance: 'Traffic lights fail when the teacher has no plan for ten red signals. The system exposes need without solving it. The teacher must prepare options before using the colors: a restart table, peer coach, hint card, or one-minute reteach.',
    forTeachers: [
      'Teach the meaning of each signal before independent work begins.',
      'Scan continuously and respond first to red, then yellow.',
      'Verify green students by sampling their work, since confidence can be inaccurate.',
      'Prepare options for multiple red signals: hint card, peer coach, or brief reteach.',
      'Teach students to change their signal as their status changes.'
    ],
    forLeaders: [
      'Check whether students know what each color means before work begins.',
      'Notice the response priority and whether red signals are addressed first.',
      'Ask what the teacher does when multiple students show red.',
      'Look for evidence that green students are verified by work sampling.'
    ],
    commonMistakes: [
      'Introducing signals without teaching what each color means.',
      'Having no plan for multiple red signals beyond walking around.',
      'Treating red as failure rather than useful information.',
      'Trusting green signals without verifying student work.'
    ]
  },

  // --- DOMAIN 4: PRINCIPLED TEACHING ---

  'reflection-logs-4a': {
    inThisVideo: 'Watch how the teacher writes a brief prediction before the lesson and returns to the same note within 24 hours with observable evidence. Notice how the entry separates description from interpretation and ends with one concrete adjustment.',
    coachsNuance: 'Reflection logs become diaries when they record feelings without decisions. The value comes from turning memory into action. A strong log ends with one next step: revise a rubric, change a sequence, request peer feedback, or reteach a prerequisite. Without that step, the reflection is archival, not professional.',
    forTeachers: [
      'Write a brief prediction before the lesson: what you intend, what you expect, and what evidence would show success.',
      'Return to the note within 24 hours with observable evidence, not just impressions.',
      'Separate description from interpretation, then decide one adjustment.',
      'Review the log weekly for patterns that inform planning or coaching conversations.',
      'End every entry with one next action tied to the evidence.'
    ],
    forLeaders: [
      'Ask whether the reflection ends with one concrete adjustment or only a description.',
      'Check if the evidence is observable rather than impressionistic.',
      'Notice whether the teacher reviews patterns across multiple entries.',
      'Look for evidence that reflection influences future planning.'
    ],
    commonMistakes: [
      'Writing reflections that describe feelings without making decisions.',
      'Waiting too long to return to the note so details become inaccurate.',
      'Never reviewing past entries for patterns across lessons.',
      'Ending the reflection without one concrete next action.'
    ]
  },

  'video-reflection': {
    inThisVideo: 'Observe how the teacher chooses a narrow focus before recording and watches the video multiple times with different lenses. Notice the comparison between intention and impact, and the conversion of observation into a rehearsal plan.',
    coachsNuance: 'Video reflection becomes overwhelming when teachers judge the entire lesson globally. The power comes from narrowing the focus to one practice, scripting what happened, and converting the observation into one specific habit to revise. Broad critique produces anxiety; focused analysis produces improvement.',
    forTeachers: [
      'Choose a narrow focus before recording: directions, wait time, feedback language, or transitions.',
      'Watch once for teacher language, once for student response, and once for intention versus impact.',
      'Identify one practice to keep and one specific habit to revise.',
      'Convert the observation into a rehearsal plan: rewrite a question or adjust a response.',
      'Re-record the same focus later and compare to track improvement.'
    ],
    forLeaders: [
      'Ask what narrow focus the teacher selected before recording.',
      'Check whether the analysis compares intention with impact rather than judging globally.',
      'Notice whether the observation became a rehearsal plan with specific changes.',
      'Look for evidence that the teacher revisited the same focus to measure growth.'
    ],
    commonMistakes: [
      'Watching the video without a narrow focus and judging the whole lesson.',
      'Analyzing teacher performance without tracking student evidence.',
      'Identifying problems without converting them into a specific rehearsal plan.',
      'Never re-recording the same focus to check whether improvement occurred.'
    ]
  },

  'smart-ledgers-4b': {
    inThisVideo: 'Watch how the teacher uses a simple coding system rather than long comments. Notice the predictable update schedule and the action column that turns every entry into a next step rather than a label.',
    coachsNuance: 'Progress trackers become useless when they are too complex to maintain. The test is whether the teacher acts on the data. If the ledger is updated but never used to group, confer, or communicate, it is administrative paperwork, not instructional documentation.',
    forTeachers: [
      'Decide what the tracker must help you know: mastery, missing work, intervention status, or readiness.',
      'Use a simple coding system rather than long comments.',
      'Update on a predictable schedule so the data stays current.',
      'Include an action column for every entry: confer, contact home, reassess, or extend.',
      'Translate codes into plain language when sharing with students and families.'
    ],
    forLeaders: [
      'Ask whether the teacher acts on the data or just collects it.',
      'Check if the coding system is simple enough to maintain consistently.',
      'Notice whether the ledger informs grouping, conferences, or family communication.',
      'Look for evidence that old information is distinguished from current data.'
    ],
    commonMistakes: [
      'Creating a tracking system that is too complex to maintain.',
      'Updating the ledger without ever using the data to inform decisions.',
      'Using vague codes that no longer have clear meaning.',
      'Sharing coded data with families without translating it into plain language.'
    ]
  },

  'gradebook-transparency': {
    inThisVideo: 'Observe how the teacher organizes entries with clear titles, dates, and labels that match the grading policy. Notice the separation of academic evidence from behavior and the routine for students to review and identify next steps.',
    coachsNuance: 'Transparency does not mean posting every detail instantly. It means the record is accurate enough to guide action and clear enough that students and families can understand it. A gradebook that only shows points without describing what learning is secure or missing is a report card, not a planning tool.',
    forTeachers: [
      'Organize entries with clear titles, dates, and skill labels that match your grading policy.',
      'Separate academic evidence from behaviors such as lateness or participation.',
      'Update on a schedule you can maintain and communicate that schedule.',
      'Build routines for students to review the gradebook and identify next steps.',
      'Use the same information in family messages and advisor check-ins.'
    ],
    forLeaders: [
      'Ask whether the gradebook describes learning or only shows points.',
      'Check if academic evidence is separated from behavior.',
      'Notice whether students use the gradebook to plan their own next steps.',
      'Look for consistent marking of missing, incomplete, and reassessment-eligible work.'
    ],
    commonMistakes: [
      'Using cryptic abbreviations that families and students cannot interpret.',
      'Mixing academic evidence with behavior so the record becomes unclear.',
      'Updating so infrequently that the record no longer reflects current learning.',
      'Never teaching students how to use the gradebook as a planning tool.'
    ]
  },

  'home-contributions-4c': {
    inThisVideo: 'Watch how the teacher translates the current learning focus into plain language that families can understand. Notice the one realistic home action that is low burden and connected to the lesson content.',
    coachsNuance: 'Family communication fails when it asks families to become substitute teachers. The action must be realistic and respectful of time. If the message requires special materials, advanced knowledge, or significant time, many families will disengage. One simple question or observation is often enough.',
    forTeachers: [
      'Translate the current learning into plain language families can understand.',
      'Give one realistic home action that is low burden and connected to the content.',
      'Send through a channel families actually use and keep the message short.',
      'Include optional extension questions for families who want more.',
      'Track responses and use them to strengthen future communication.'
    ],
    forLeaders: [
      'Ask whether the home action is realistic for busy families.',
      'Check if the message uses plain language that translates well.',
      'Notice whether families are invited to contribute knowledge or cultural connections.',
      'Look for evidence that communication led to partnership, not just information.'
    ],
    commonMistakes: [
      'Asking families to teach content or supervise complex assignments.',
      'Using school jargon that families cannot translate.',
      'Sending long messages that overwhelm rather than invite partnership.',
      'Never following up on whether families received or used the communication.'
    ]
  },

  'newsletters': {
    inThisVideo: 'Observe how the teacher leads with the instructional focus rather than general announcements. Notice the concrete example of student thinking and the one practical action families can take at home.',
    coachsNuance: 'Instructional updates become generic newsletters when they focus on events and celebrations rather than learning. Families need to know what students are studying, what success looks like, and how they can help. The format should be predictable so families know where to find the information that matters.',
    forTeachers: [
      'Lead with the instructional focus: the central question, skill, or assessment target.',
      'Explain what success looks like in observable terms.',
      'Include one concrete example of student thinking or a common misconception.',
      'Add one practical action families can take at home.',
      'Use accessible language and a predictable format at a dependable rhythm.'
    ],
    forLeaders: [
      'Ask whether the update focuses on learning or on events and announcements.',
      'Check if families can see what success looks like in plain language.',
      'Notice whether the update includes a practical home action.',
      'Look for a predictable rhythm and format that families can rely on.'
    ],
    commonMistakes: [
      'Writing updates that are mostly calendars and celebration lists.',
      'Failing to explain what success looks like in observable terms.',
      'Never including a practical way for families to support learning at home.',
      'Using inconsistent formats so families cannot find what they need.'
    ]
  },

  'professional-community-4d': {
    inThisVideo: 'Watch how the teacher identifies a shared need beyond their own course and brings a concrete contribution: a student work sample, a data summary, or a tested template. Notice how the contribution is framed around the shared problem rather than personal preference.',
    coachsNuance: 'Schoolwide contribution becomes performative when it is about visibility rather than usefulness. The test is whether colleagues can actually use what was shared. A strong contribution includes materials, implementation support, and honest reporting of limitations.',
    forTeachers: [
      'Identify a shared need beyond your own course or section.',
      'Bring a concrete contribution: work sample, data summary, template, or protocol.',
      'Frame the contribution around the shared problem, not personal preference.',
      'Document decisions clearly and follow through by using the agreed routine yourself.',
      'Report results honestly, including limitations, so the team learns accurately.'
    ],
    forLeaders: [
      'Ask whether the contribution solves a real shared problem.',
      'Check if colleagues can actually use the materials or protocols shared.',
      'Notice whether the teacher reported honest results including limitations.',
      'Look for evidence that the contribution strengthened shared practice.'
    ],
    commonMistakes: [
      'Contributing ideas without materials or implementation support.',
      'Framing contributions around personal preference rather than shared need.',
      'Never reporting results so the team cannot learn from the attempt.',
      'Creating extra work for colleagues without offering resources to make it manageable.'
    ]
  },

  'action-research-teams': {
    inThisVideo: 'Observe how the team converts a concern into a specific inquiry question and agrees on a small intervention and comparable evidence. Notice the short cycle and the evidence-first discussion at the follow-up meeting.',
    coachsNuance: 'PLCs become discussion clubs when they trade opinions without testing ideas. The discipline is in the cycle: question, intervention, evidence, decision. If the team skips evidence or never decides whether to keep, revise, or abandon the practice, the collaboration produces talk without improvement.',
    forTeachers: [
      'Convert the concern into a specific inquiry question the team can test.',
      'Agree on a small intervention, the students involved, and the evidence to collect.',
      'Set a short cycle of two to four weeks so learning happens quickly.',
      'Examine evidence before opinions at the follow-up meeting.',
      'Document the conclusion so the learning survives beyond the meeting.'
    ],
    forLeaders: [
      'Ask whether the team is testing an idea or just discussing it.',
      'Check if the evidence is comparable across teachers and examined before opinions.',
      'Notice whether the team decided to keep, revise, or abandon the practice.',
      'Look for documentation that preserves the learning for future teams.'
    ],
    commonMistakes: [
      'Discussing problems without testing a specific intervention.',
      'Collecting anecdotal impressions instead of comparable evidence.',
      'Never deciding whether to keep, revise, or abandon the practice.',
      'Failing to document conclusions so the same issues are revisited endlessly.'
    ]
  },

  'professional-growth-4e': {
    inThisVideo: 'Watch how the teacher uses the GROW sequence to connect a focused goal to implementation, feedback, and evidence. Notice the specific skill named, the colleague asked to observe, and the comparison of evidence to the baseline.',
    coachsNuance: 'Professional growth becomes attendance when the teacher participates in sessions without connecting them to practice. The GROW cycle forces the connection: Goal names the target, Reality examines current evidence, Options identify learning paths, and Way Forward commits to action with dates. One session rarely changes practice; iteration does.',
    forTeachers: [
      'Name a focused goal with a skill, context, and evidence source.',
      'Examine current reality using student work, observation notes, or video.',
      'Identify specific options: observe a colleague, rehearse a routine, revise materials.',
      'Choose a way forward with dates and evidence checkpoints.',
      'Compare post-implementation evidence to the original baseline.'
    ],
    forLeaders: [
      'Ask whether the goal is focused enough to guide observation and practice.',
      'Check if the teacher examined current reality with evidence rather than assumptions.',
      'Notice whether the way forward includes dates and evidence checkpoints.',
      'Look for comparison between baseline and post-implementation evidence.'
    ],
    commonMistakes: [
      'Setting broad aspirations rather than focused growth goals.',
      'Attending professional learning without connecting it to classroom practice.',
      'Never collecting baseline evidence so improvement cannot be measured.',
      'Stopping after one attempt rather than iterating based on feedback.'
    ]
  },

  'pd-leadership': {
    inThisVideo: 'Observe how the teacher narrows the focus to one practice they can demonstrate clearly. Notice the three parts: model, reasoning, and adaptable tool. Watch for the follow-up support offered so colleagues can apply the idea.',
    coachsNuance: 'PD leadership becomes performance when the session is inspirational but not practical. The master teacher shows actual materials, names the decisions behind them, and acknowledges context differences. The goal is not to clone the practice but to make it usable for colleagues in different settings.',
    forTeachers: [
      'Select one practice you understand deeply and can explain clearly.',
      'Prepare three parts: a model, the reasoning behind key decisions, and an adaptable tool.',
      'Show actual materials rather than speaking only in general principles.',
      'Build in time for colleagues to apply the idea to their own context.',
      'Offer follow-up support: observation, shared planning, or resource review.'
    ],
    forLeaders: [
      'Ask whether the session included a model, reasoning, and an adaptable tool.',
      'Check if colleagues had time to apply the idea to their own setting.',
      'Notice whether follow-up support was offered and used.',
      'Look for evidence that the session produced usable practice, not just inspiration.'
    ],
    commonMistakes: [
      'Leading sessions that are inspirational but not practical.',
      'Speaking in general principles without showing actual materials.',
      'Never offering follow-up support so colleagues cannot implement the idea.',
      'Treating leadership as personal performance rather than service to colleagues.'
    ]
  },

  'firm-calm-finesse-4f': {
    inThisVideo: 'Watch how the teacher handles a difficult moment with plain language, a clear next step, and a neutral tone. Notice how the response preserves dignity while upholding the standard, and how follow-up is coordinated with relevant adults.',
    coachsNuance: 'Firm Calm Finesse is not about being nice; it is about being steady. The adult reaction should not become the event. When teachers escalate emotionally, students learn to manage the adult rather than the issue. The steadiness keeps the focus on what students need.',
    forTeachers: [
      'Clarify the principle at stake: safety, fairness, integrity, or access.',
      'State the concern plainly and briefly without lecturing or escalating.',
      'Name the next step clearly and connect it to the student\'s success.',
      'Follow school policy consistently and document the decision.',
      'Coordinate with relevant adults so support is not fragmented.'
    ],
    forLeaders: [
      'Listen for whether the response addresses the action or the character.',
      'Check if the tone is steady and purposeful or emotional and reactive.',
      'Notice whether the next step is clear and connected to student success.',
      'Look for documentation and coordination with support staff.'
    ],
    commonMistakes: [
      'Escalating emotionally so the adult reaction becomes the event.',
      'Delivering long lectures that students tune out.',
      'Inconsistency that makes consequences unpredictable.',
      'Failing to coordinate with other adults so support is fragmented.'
    ]
  },

  'advocacy': {
    inThisVideo: 'Observe how the teacher documents the barrier with evidence from student experience or work. Notice the proposed solution brought to the team and the follow-through until support is in place.',
    coachsNuance: 'Advocacy becomes complaining when it stops at identifying the problem. The teacher must bring a proposed solution, involve the right people, and follow through until the support is actually in place. Persistence matters, but it must remain professional and focused on student need.',
    forTeachers: [
      'Document the barrier with evidence from student experience or work.',
      'Define clearly what is preventing the student from accessing learning.',
      'Bring a proposed solution to the team, leader, or community partner.',
      'Follow through until the support is in place and students benefit.',
      'Use respectful language, protect confidentiality, and stay focused on need.'
    ],
    forLeaders: [
      'Ask whether the teacher brought evidence or only impressions.',
      'Check if a proposed solution accompanied the concern.',
      'Notice whether follow-through continued until support was in place.',
      'Look for professional persistence rather than blame or resignation.'
    ],
    commonMistakes: [
      'Identifying problems without proposing solutions.',
      'Giving up after the first conversation instead of following through.',
      'Using advocacy to blame rather than to solve.',
      'Failing to protect student confidentiality when sharing concerns.'
    ]
  },

};
