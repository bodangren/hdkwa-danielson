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
    proficientDescriptor: "The teacher demonstrates solid understanding of the content and its structure, and of the students' backgrounds and levels of development. Plans and practice reflect instructional goals that are clear and appropriate.",
    components: [
      { id: "1a", title: "Demonstrating Knowledge of Content and Pedagogy", proficientDescriptor: "Teacher can identify important concepts in the discipline and how they relate to one another." },
      { id: "1b", title: "Demonstrating Knowledge of Students", proficientDescriptor: "Teacher displays knowledge of typical developmental characteristics, learning styles, and skills of groups of students." },
      { id: "1c", title: "Setting Instructional Outcomes", proficientDescriptor: "Instructional outcomes represent high expectations and are related to the central concepts of the discipline." },
      { id: "1d", title: "Demonstrating Knowledge of Resources", proficientDescriptor: "Teacher is fully aware of resources available through the school or district to enhance own knowledge and for use in the classroom." },
      { id: "1e", title: "Designing Coherent Instruction", proficientDescriptor: "Learning activities are coordinated and support the instructional outcomes." },
      { id: "1f", title: "Designing Student Assessments", proficientDescriptor: "All the instructional outcomes are assessed through a clear assessment plan; results are used to inform future instruction." }
    ]
  },
  {
    id: 2,
    title: "The Classroom Environment",
    proficientDescriptor: "The teacher creates a culture of learning and has a clear set of procedures and behavior expectations. Student interactions are respectful and classroom management is efficient.",
    components: [
      { id: "2a", title: "Creating an Environment of Respect and Rapport", proficientDescriptor: "Teacher-student interactions are friendly and demonstrate general caring and respect." },
      { id: "2b", title: "Establishing a Culture for Learning", proficientDescriptor: "Teacher and students consistently show that they value the importance of learning and hard work." },
      { id: "2c", title: "Managing Classroom Procedures", proficientDescriptor: "Classroom routines and procedures are well-established and occur smoothly with little loss of instructional time." },
      { id: "2d", title: "Managing Student Behavior", proficientDescriptor: "Standards of conduct are clear to all students; teacher response to student misbehavior is appropriate and respects student dignity." },
      { id: "2e", title: "Organizing Physical Space", proficientDescriptor: "The physical environment is safe and learning is accessible to all students; teacher makes effective use of physical resources." }
    ]
  },
  {
    id: 3,
    title: "Instruction",
    proficientDescriptor: "The teacher's instruction is clear and uses variety in delivery. Students are intellectually engaged in learning and the teacher uses assessment to provide feedback and adjust instruction.",
    components: [
      { id: "3a", title: "Communicating With Students", proficientDescriptor: "The teacher's explanation of content is clear and invites student participation and thinking." },
      { id: "3b", title: "Using Questioning and Discussion Techniques", proficientDescriptor: "Teacher's questions are of high quality and invite a true discussion among students." },
      { id: "3c", title: "Engaging Students in Learning", proficientDescriptor: "The lesson has a clearly defined structure, and the activities and materials are appropriate to the students and the outcomes." },
      { id: "3d", title: "Using Assessment in Instruction", proficientDescriptor: "Assessment is regularly used in instruction through self-assessment by students and monitoring of progress by the teacher." },
      { id: "3e", title: "Demonstrating Flexibility and Responsiveness", proficientDescriptor: "Teacher promotes the successful learning of all students, making minor adjustments as needed to the lesson." }
    ]
  },
  {
    id: 4,
    title: "Professional Responsibilities",
    proficientDescriptor: "The teacher is regular and systematic in reflecting on practice and professional growth. They maintain accurate records and communicate effectively with families and colleagues.",
    components: [
      { id: "4a", title: "Reflecting on Teaching", proficientDescriptor: "Teacher provides an accurate and objective description of the lesson, citing specific evidence as to whether it was successful." },
      { id: "4b", title: "Maintaining Accurate Records", proficientDescriptor: "Teacher's systems for maintaining information on student completion of assignments and student progress in learning are fully effective." },
      { id: "4c", title: "Communicating with Families", proficientDescriptor: "Teacher communicates frequently with families about the instructional program and conveys information about individual student progress." },
      { id: "4d", title: "Participating in a Professional Community", proficientDescriptor: "Teacher's relationships with colleagues are characterized by mutual support and cooperation." },
      { id: "4e", title: "Growing and Developing Professionally", proficientDescriptor: "Teacher seeks out opportunities for professional development and makes a systematic effort to conduct action research." },
      { id: "4f", title: "Showing Professionalism", proficientDescriptor: "Teacher is honest and exhibits high standards of integrity and ethical conduct." }
    ]
  }
];
