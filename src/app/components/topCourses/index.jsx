import CourseCard from "../courserCard";
import "./topCourses.css";

const courseCards = [
  {
    cardTitle: 'Business Etiquette Mastery',
    mentorName: 'Sangita Bhattacharya',
    pricing: {
      new: '6,499',
      former: '1,95,000'
    },
    learnables: [
      "Mastering Professional Conversations and Interactions",
      "Writing Clear, Polished, and Professional Emails",
      "Strategies for Productivity and Efficiency",
      "Making a Lasting First Impression and much more....",
    ]
  },
  {
    cardTitle: 'Business Communication Mastery',
    mentorName: 'Sangita Bhattacharya',
    pricing: {
      new: '6,499',
      former: '1,95,000'
    },
    learnables: [
      "Mastering Professional Conversations and Interactions",
      "Writing Clear, Polished, and Professional Emails",
      "Strategies for Productivity and Efficiency",
      "Making a Lasting First Impression and much more....",
    ]
  }
]

const TopCourses = () => {
  return (
    <div className="topCoursesWrapper">
      <h2 className="topCoursesTitle">Our Top Courses</h2>
      <div className="coursesInnerWrapper">
        {courseCards?.map((card, i) => (
          <CourseCard key={i} cardInfo={card} />
        ))}
      </div>
    </div>
  );
};

export default TopCourses;
