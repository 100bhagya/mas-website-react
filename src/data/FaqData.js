import Gear from "../images/gear.png";
import Book from "../images/book.png";
import Mail from "../images/mail.png";
import User from "../images/user.png";

const Data = [
  {
    id: 1,
    tag: "General",
    icon: Gear,
    bgcolor: "blue",
    questions: [
      {
        question: "Who can apply for courses offered by My Analytics School?",
        answer:
          "All those who are willing to start their journey as professionals in the field of business analytics, product analytics and data analytics can apply for the course.",
        open: true,
      },
      {
        question: "What is the duration of the program?",
        answer:
          "It will begin from the middle of May and will go on till you are placed.",
        open: false,
      },
      {
        question: "What is the experience of the mentors offering guidance?",
        answer:
          "Our mentors are graduates from IIT-BHU having 0-3 years of experience in the relevant fields.",
        open: false,
      },
      {
        question:
          "How does My Analytics School look after my personalized needs for placement preparation?",
        answer:
          "My Analytics School prioritizes your needs and provides customized one-to-one mentorship along with regularly tracking your progress and providing feedback.",
        open: false,
      },
      {
        question:
          "What all will be covered by My Analytics School in the program?",
        answer:
          "We will be providing regular tests and covering both technical and non-technical aspects along with mock interviews related to analytics placement.",
        open: false,
      },
      {
        question:
          "What is the USP of the course curriculum offered by My Analytics School?",
        answer:
          "The course is designed by people who have experienced the same journey before and hence My Analytics School course will focus on dealing with the target areas for better results.",
        open: false,
      },
    ],
  },
  {
    id: 2,
    tag: "Courses",
    icon: Book,
    bgcolor: "red",
    questions: [
      {
        question: "What is the course content of the program?",
        answer:
          "For gaining more info about the course content please click here",
        open: false,
      },
      {
        question: "Will I get a certificate of the completed courses?",
        answer:
          "Yes, you will be getting a certificate of completion for most of the courses from top-level learning platforms.",
        open: false,
      },
      {
        question: "How many tests will I get?",
        answer:
          "We will be providing more than 200 tests consisting of sectional, combined and company specific tests.",
        open: false,
      },
      {
        question: "Will a test be available in case I miss it on one occasion?",
        answer:
          "We will recommend you to take the test on the scheduled date but in case of your unavailability for the test, it will be provided later too.",
        open: false,
      },
      {
        question: "Does your program provide interview sessions for practice?",
        answer:
          "Yes, we will be providing extensive mock interviews and group discussion sessions from november.",
        open: false,
      },
      {
        question:
          "Is it mandatory to complete all the courses and attempt all the tests?",
        answer:
          "As for the courses, you can always skip the ones you have already done but we recommend you to appear in all the tests.",
        open: false,
      },
      {
        question:
          "What if I have already completed some of the courses that are offered by you?",
        answer:
          "In case you have already completed some courses, we will be providing you optional courses, advanced learning materials and opportunities to get involved in advanced projects.",
        open: false,
      },
      {
        question: "Will I get any hands-on working opportunity?",
        answer:
          "Ofcourse, you will get hands-on working opportunities while working through various capstone projects.",
        open: false,
      },
    ],
  },
  {
    id: 3,
    tag: "ISA",
    icon: Mail,

    questions: [
      {
        question: "What is ISA and how does it work?",
        answer:
          "ISA (Income Share Agreement) is basically a model of investment which students have to sign at the time of registration and they become entitled to pay a small amount of their salary.",
        open: false,
      },
      {
        question: "When do my ISA repayments start?",
        answer:
          "ISA repayments start as soon as you start getting your first salary.",
        open: false,
      },
      {
        question: "What is the true cost of ISA?",
        answer: "To know the true cost of ISA please click here",
        open: false,
      },
      {
        question: "Is there an alternative method of payment apart from ISA?",
        answer:
          "There are multiple payment options available. For more information regarding payment structures, please click here",
        open: false,
      },
      {
        question: "Do I need to submit any document after getting placed?",
        answer:
          "Yes, you need to submit the offer letter and other relevant documents to ensure a smooth ISA transaction.",
        open: false,
      },
      {
        question:
          "What happens in case I leave my job or get fired in between?",
        answer:
          "In case you are fired/you leave the job/you switch the job before completion of ISA, your ISA will be paused and will resume with your next job till completion. (Not applicable in case you don't wish to do a job further).",
        open: false,
      },
    ],
  },
  {
    id: 4,
    tag: "HR",
    icon: User,
    questions: [
      {
        question: "What is the HR structure for off-campus placements?",
        answer:
          "At My Analytics School we have an efficient HR network for providing ample off-campus interview opportunities.",
        open: false,
      },
      {
        question: "When will the phase of off-campus interviews start?",
        answer:
          "Off-campus interviews will begin as soon as we are done with the first phase of campus placement.",
        open: false,
      },
      {
        question:
          "Will I be eligible for off-campus opportunities even after getting an offer from campus?",
        answer:
          "Yes, you will remain eligible for off-campus opportunities even after getting campus offers.",
        open: false,
      },
      {
        question:
          "In case I get multiple offers, will it be mandatory to choose the one offered by My Analytics School?",
        answer:
          "No, you will always have the right to choose whatever offer you consider suitable.",
        open: false,
      },
      {
        question:
          "Till when My Analytics School will help me in finding a job if I do not get any offer from campus?",
        answer: "We will help you to get placed till 15th May,2022.",
        open: false,
      },
    ],
  },
];

export default Data;
