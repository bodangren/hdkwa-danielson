import { Technique } from '@/types';

interface CoachingContent {
  implementationGuide: string;
  videoSummary: string;
  teacherActions: string[];
  leaderLookFors: string[];
  commonMistakes: string[];
  image: {
    src: string;
    alt: string;
  };
}

const DOMAIN_LOOK_FORS: Record<string, string[]> = {
  '1': [
    'The lesson materials make the intended learning outcome visible before students begin work.',
    'The teacher has anticipated misconceptions and uses prepared examples or checks to surface them early.',
    'Students can explain how the task connects to the unit goal rather than treating it as isolated work.'
  ],
  '2': [
    'Routines are explained with few words and students know exactly what to do next.',
    'Corrections are calm, brief, and focused on the standard rather than on the student personally.',
    'The teacher protects learning time by resetting procedures before small issues become public interruptions.'
  ],
  '3': [
    'Students do the cognitive work through speaking, writing, explaining, or revising rather than watching passively.',
    'The teacher uses wait time, monitoring, and follow-up questions to make student thinking visible.',
    'Participation patterns show broad accountability, not reliance on the same confident volunteers.'
  ],
  '4': [
    'The teacher names evidence from the lesson and uses it to adjust the next instructional decision.',
    'Records, reflections, or communication artifacts are specific enough to support follow-up action.',
    'Professional learning connects back to observable student outcomes.'
  ]
};

const SUBDOMAIN_LOOK_FORS: Record<string, string[]> = {
  '2c': [
    'Transitions and routines have a clear start signal, a clear finish line, and minimal lost time.',
    'Students can complete the procedure without repeated teacher narration.'
  ],
  '2d': [
    'The teacher scans deliberately and intervenes early with the least disruptive move available.',
    'Behavior feedback preserves student dignity while still making the expectation unmistakable.'
  ],
  '3b': [
    'Questions are asked before students are named, so everyone has a reason to think.',
    'Follow-up prompts require evidence, reasoning, or connection rather than one-word participation.'
  ],
  '3c': [
    'The task design causes most students to speak, write, solve, rehearse, or compare ideas.',
    'The teacher monitors for quality while students work, then uses student responses to advance the lesson.'
  ],
  '3d': [
    'The teacher collects evidence of understanding during the lesson rather than waiting until the end.',
    'Feedback or adjustment follows quickly from what students reveal.'
  ]
};

function stripStepLabel(step: string) {
  const [, detail] = step.split(/:\s(.+)/);
  return detail || step;
}

function stripTrailingPunctuation(value: string) {
  return value.trim().replace(/[.!?]+$/, '');
}

function lowerFirst(value: string) {
  return value.charAt(0).toLowerCase() + value.slice(1);
}

function componentName(technique: Technique) {
  return technique.alignment.includes(':')
    ? technique.alignment.split(':').slice(1).join(':').trim()
    : `Danielson component ${technique.subdomain}`;
}

function buildImplementationGuide(technique: Technique) {
  const steps = technique.actionSteps.map(stripStepLabel);
  const firstStep = stripTrailingPunctuation(steps[0] || technique.description);
  const secondStep = stripTrailingPunctuation(steps[1] || 'make the expectation visible to students');
  const thirdStep = stripTrailingPunctuation(steps[2] || 'check the quality of student response');
  const description = stripTrailingPunctuation(lowerFirst(technique.description));
  const component = componentName(technique);

  return `${technique.title} should be treated as a small, repeatable professional habit rather than a one-time activity. It supports ${component} because it turns an abstract Danielson expectation into something visible: what the teacher says, what students do, and what evidence appears during the lesson. Before using it, choose one precise moment in the lesson where the technique will improve learning: ${description}. Script the launch in plain language, decide what student success will look like, and prepare any prompt, model, timer, or seating move that will make the routine easy to execute.

During implementation, keep the routine tight and observable. Start with the first move: ${firstStep}. Then protect the quality of the moment by making sure students understand the expectation and have enough time to respond. The middle move is usually where the technique succeeds or fails: ${secondStep}. Watch the room carefully, listen for student thinking, and resist the urge to over-explain. The final move should return attention to learning: ${thirdStep}. If the first attempt is uneven, reset neutrally and try again. The goal is not performance for an observer; the goal is a classroom habit students can predict and eventually internalize.

After class, record one piece of evidence: a student quote, a work sample pattern, a timing improvement, or a moment where engagement shifted. Then decide whether to repeat the technique exactly, tighten the directions, or pair it with a complementary move. For PD reporting, the strongest reflection names the class, the lesson moment, the student response, and the adjustment you will make next time.`;
}

function publicAssetPath(path: string) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return process.env.NODE_ENV === 'production'
    ? `/hdkwa-danielson${normalizedPath}`
    : normalizedPath;
}

function buildVideoSummary(technique: Technique) {
  return `Use the highlighted video as the concrete model for ${technique.title}. While watching, focus less on the label of the technique and more on the sequence: how the teacher launches it, what students are expected to do, how long the teacher waits, and how the teacher brings attention back to the learning goal. A useful viewing pass is to pause after the first teacher move and predict what you would say next in your own classroom. On a second pass, watch for evidence connected to ${technique.subdomain}: student participation, clarity of directions, quality of thinking, or the calmness of the reset.`;
}

function buildTeacherActions(technique: Technique) {
  return [
    `Choose one upcoming lesson moment where ${technique.title} will solve a real instructional problem.`,
    `Script the first 10 seconds so the routine starts cleanly and students know what success looks like.`,
    ...technique.actionSteps.map((step) => stripStepLabel(step)),
    'After the lesson, save one concrete evidence note in your PD reflection.'
  ].slice(0, 6);
}

function buildLeaderLookFors(technique: Technique) {
  return [
    ...(SUBDOMAIN_LOOK_FORS[technique.subdomain] || []),
    ...(DOMAIN_LOOK_FORS[String(technique.domain)] || []),
    `The teacher can explain why ${technique.title} was chosen for this lesson and what changed in student response.`
  ].slice(0, 5);
}

function buildCommonMistakes(technique: Technique) {
  return [
    'Using the technique as a compliance move without connecting it to the learning goal.',
    'Explaining for too long before students have a chance to think, speak, write, or act.',
    `Trying to perfect ${technique.title} in every class at once instead of practicing it in one planned lesson moment.`
  ];
}

export function getTechniqueCoaching(technique: Technique): CoachingContent {
  return {
    implementationGuide: technique.coaching?.implementationGuide || buildImplementationGuide(technique),
    videoSummary: technique.coaching?.videoSummary || buildVideoSummary(technique),
    teacherActions: technique.coaching?.teacherActions || buildTeacherActions(technique),
    leaderLookFors: technique.coaching?.leaderLookFors || buildLeaderLookFors(technique),
    commonMistakes: technique.coaching?.commonMistakes || buildCommonMistakes(technique),
    image: {
      src: publicAssetPath(`/technique-images/${technique.id}.png`),
      alt: `Generated classroom visual for ${technique.title}, aligned to ${technique.alignment}`
    }
  };
}
