export interface DanielsonComponent {
  id: string; // e.g., "3b"
  title: string;
  proficientDescriptor: string;
}

export interface DanielsonDomain {
  id: number;
  title: string;
  proficientDescriptor: string;
  components: DanielsonComponent[];
}

export const DANIELSON_FRAMEWORK: DanielsonDomain[] = [
  {
    id: 1,
    title: "Planning and Preparation",
    proficientDescriptor: "Teachers organize instruction for student learning by understanding the curriculum and their students, drawing on high-quality resources, and planning coherent lessons and assessments that support learning.",
    components: [
      { id: "1a", title: "Applying Knowledge of Content and Pedagogy", proficientDescriptor: "The teacher understands the content, pedagogy, and relationships within and across disciplines that support effective instruction." },
      { id: "1b", title: "Knowing and Valuing Students", proficientDescriptor: "The teacher understands students' identities, strengths, prior knowledge, and current knowledge and skills well enough to plan accessible learning." },
      { id: "1c", title: "Setting Instructional Outcomes", proficientDescriptor: "Instructional outcomes are purposeful, rigorous, and aligned with disciplinary learning and the learners in front of the teacher." },
      { id: "1d", title: "Using Resources Effectively", proficientDescriptor: "The teacher selects and uses high-quality resources and instructional materials to strengthen planning and learning." },
      { id: "1e", title: "Planning Coherent Instruction", proficientDescriptor: "Learning activities are sequenced and connected so they build toward the intended outcomes." },
      { id: "1f", title: "Designing and Analyzing Assessments", proficientDescriptor: "Assessment is aligned to outcomes and provides evidence that informs instruction and next steps." }
    ]
  },
  {
    id: 2,
    title: "Learning Environments",
    proficientDescriptor: "Teachers establish conditions and qualities of environments that are conducive to learning, support student success, and attend to student identities, wellbeing, and belonging.",
    components: [
      { id: "2a", title: "Cultivating Respectful and Affirming Environments", proficientDescriptor: "Teacher-student and student-student interactions demonstrate care, respect, and dignity, and students feel they belong and can take academic risks." },
      { id: "2b", title: "Fostering a Culture for Learning", proficientDescriptor: "Teachers and students communicate that important learning, effort, and high expectations matter." },
      { id: "2c", title: "Maintaining Purposeful Environments", proficientDescriptor: "Routines and procedures are clear, efficient, and preserve instructional purpose and time." },
      { id: "2d", title: "Supporting Positive Student Behavior", proficientDescriptor: "Behavior expectations are clear, and responses are respectful, consistent, and focused on learning." },
      { id: "2e", title: "Organizing Spaces for Learning", proficientDescriptor: "The physical environment is safe, accessible, and intentionally arranged to support instructional purposes." }
    ]
  },
  {
    id: 3,
    title: "Learning Experiences",
    proficientDescriptor: "Teachers prepare and adapt learning experiences grounded in deep understanding of content and standards, designed to engage students in important work and shaped by students' goals, strengths, needs, and lives.",
    components: [
      { id: "3a", title: "Communicating About Purpose and Content", proficientDescriptor: "Purpose, content, and directions are communicated clearly and precisely so students can think and act productively." },
      { id: "3b", title: "Using Questioning and Discussion Techniques", proficientDescriptor: "Questions and discussion techniques promote reasoning, evidence, and student-to-student talk." },
      { id: "3c", title: "Engaging Students in Learning", proficientDescriptor: "Tasks and structures keep students intellectually active, collaborating, and accountable for the work of learning." },
      { id: "3d", title: "Using Assessment for Learning", proficientDescriptor: "Teachers and students use evidence during learning to check understanding and guide next steps." },
      { id: "3e", title: "Responding Flexibly to Student Needs", proficientDescriptor: "The teacher notices student needs, questions, and interests, then adjusts instruction responsively to support success." }
    ]
  },
  {
    id: 4,
    title: "Principled Teaching",
    proficientDescriptor: "Teachers reflect, collaborate, grow, and act in service of students, extending their practice beyond the classroom in ways that support students and school community.",
    components: [
      { id: "4a", title: "Engaging in Reflective Practice", proficientDescriptor: "Reflection is evidence-based, specific, and focused on student learning, strengths, and opportunities for growth." },
      { id: "4b", title: "Documenting Student Progress", proficientDescriptor: "Systems for recording student progress are accurate, current, and useful for action and communication." },
      { id: "4c", title: "Engaging Families and Communities", proficientDescriptor: "Teachers communicate with families and communities in ways that support learning, belonging, and shared understanding." },
      { id: "4d", title: "Contributing to School Community and Culture", proficientDescriptor: "Teachers contribute to the school community and culture through collaboration, support, and shared responsibility." },
      { id: "4e", title: "Growing and Developing Professionally", proficientDescriptor: "Teachers seek professional learning and apply it to improve practice." },
      { id: "4f", title: "Acting in Service of Students", proficientDescriptor: "Teachers act with integrity, equity, and advocacy in service of students and the profession." }
    ]
  }
];
