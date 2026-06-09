import { describe, it, expect } from 'vitest';
import exemplarPlanning from './techniques/exemplar-planning';
import planForError from './techniques/plan-for-error';
import deliveryMoves from './techniques/delivery-moves';
import doublePlan from './techniques/double-plan';
import knowledgeOrganizers from './techniques/knowledge-organizers';
import replaceSelfReport from './techniques/replace-self-report';
import retrievalPractice from './techniques/retrieval-practice';
import standardizeFormat from './techniques/standardize-format';
import activeObservation from './techniques/active-observation';
import showMe from './techniques/show-me';
import affirmativeChecking from './techniques/affirmative-checking';
import cultureOfError from './techniques/culture-of-error';
import showCall from './techniques/show-call';
import ownAndTrack from './techniques/own-and-track';
import noOptOut from './techniques/no-opt-out';
import rightIsRight from './techniques/right-is-right';
import stretchIt from './techniques/stretch-it';
import formatMatters from './techniques/format-matters';
import withoutApology from './techniques/without-apology';
import doNow from './techniques/do-now';
import takeTheSteps from './techniques/take-the-steps';
import boardPaper from './techniques/board-paper';
import accountableIndependentReading from './techniques/accountable-independent-reading';
import faseReading from './techniques/fase-reading';
import circulate from './techniques/circulate';
import exitTicket from './techniques/exit-ticket';
import changeThePace from './techniques/change-the-pace';
import brightenTheLines from './techniques/brighten-the-lines';
import allHands from './techniques/all-hands';
import workTheClock from './techniques/work-the-clock';
import everyMinuteMatters from './techniques/every-minute-matters';
import phrasingFundamentals from './techniques/phrasing-fundamentals';
import waitTime from './techniques/wait-time';
import coldCall from './techniques/cold-call';
import callAndResponse from './techniques/call-and-response';
import meansOfParticipation from './techniques/means-of-participation';
import breakItDown from './techniques/break-it-down';
import everybodyWrites from './techniques/everybody-writes';
import silentSolo from './techniques/silent-solo';
import frontTheWriting from './techniques/front-the-writing';
import artOfTheSentence from './techniques/art-of-the-sentence';
import regularRevision from './techniques/regular-revision';
import turnAndTalk from './techniques/turn-and-talk';
import habitsOfDiscussion from './techniques/habits-of-discussion';
import batchProcess from './techniques/batch-process';
import disciplinedDiscussion from './techniques/disciplined-discussion';
import thresholdStrongStart from './techniques/threshold-strong-start';
import habitsOfAttention from './techniques/habits-of-attention';
import engineerEfficiency from './techniques/engineer-efficiency';
import routineBuilding from './techniques/routine-building';
import doItAgain from './techniques/do-it-again';
import whatToDo from './techniques/what-to-do';
import radarBeSeenLooking from './techniques/radar-be-seen-looking';
import makeExpectationsVisible from './techniques/make-expectations-visible';
import leastInvasiveIntervention from './techniques/least-invasive-intervention';
import firmCalmFinesse from './techniques/firm-calm-finesse';
import artOfConsequence from './techniques/art-of-consequence';
import strongVoice from './techniques/strong-voice';
import positiveFraming from './techniques/positive-framing';
import precisePraise from './techniques/precise-praise';
import warmStrict from './techniques/warm-strict';
import emotionalConstancy from './techniques/emotional-constancy';
import joyFactor from './techniques/joy-factor';

const techniques = [
  exemplarPlanning,
  planForError,
  deliveryMoves,
  doublePlan,
  knowledgeOrganizers,
  replaceSelfReport,
  retrievalPractice,
  standardizeFormat,
  activeObservation,
  showMe,
  affirmativeChecking,
  cultureOfError,
  showCall,
  ownAndTrack,
  noOptOut,
  rightIsRight,
  stretchIt,
  formatMatters,
  withoutApology,
  doNow,
  takeTheSteps,
  boardPaper,
  accountableIndependentReading,
  faseReading,
  circulate,
  exitTicket,
  changeThePace,
  brightenTheLines,
  allHands,
  workTheClock,
  everyMinuteMatters,
  phrasingFundamentals,
  waitTime,
  coldCall,
  callAndResponse,
  meansOfParticipation,
  breakItDown,
  everybodyWrites,
  silentSolo,
  frontTheWriting,
  artOfTheSentence,
  regularRevision,
  turnAndTalk,
  habitsOfDiscussion,
  batchProcess,
  disciplinedDiscussion,
  thresholdStrongStart,
  habitsOfAttention,
  engineerEfficiency,
  routineBuilding,
  doItAgain,
  whatToDo,
  radarBeSeenLooking,
  makeExpectationsVisible,
  leastInvasiveIntervention,
  firmCalmFinesse,
  artOfConsequence,
  strongVoice,
  positiveFraming,
  precisePraise,
  warmStrict,
  emotionalConstancy,
  joyFactor,
];

const WORD_RANGE = { min: 250, max: 300 };

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

describe('techniques detailedSummary word count', () => {
  it.each(techniques)('$title should have detailedSummary between $WORD_RANGE.min and $WORD_RANGE.max words', (technique) => {
    if (!technique.detailedSummary) {
      expect.fail(`Technique "${technique.title}" is missing detailedSummary`);
    }
    const count = countWords(technique.detailedSummary);
    expect(count, `"${technique.title}" detailedSummary has ${count} words (expected ${WORD_RANGE.min}-${WORD_RANGE.max})`).toBeGreaterThanOrEqual(WORD_RANGE.min);
    expect(count).toBeLessThanOrEqual(WORD_RANGE.max);
  });
});