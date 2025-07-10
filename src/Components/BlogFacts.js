
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./blog.css";

const blogData = [
  {
    id: 0,
    title: "Top 10 Ways to Enhance Oral Hygiene",
    facts: [
      "Brushing twice a day reduces plaque buildup by 50%.",
      "Flossing daily helps prevent gum disease.",
      "Electric toothbrushes clean more thoroughly than manual ones.",
      "Changing your toothbrush every 3 months maintains effectiveness.",
      "Drinking water after meals helps flush out food particles.",
      "Chewing sugar-free gum stimulates saliva, protecting enamel.",
      "Mouthwash reduces bacteria and freshens breath.",
      "Tongue scraping can reduce bad breath significantly.",
      "Avoiding sugary snacks decreases risk of cavities.",
      "Regular dental visits catch issues before they worsen."
    ]
  },
  {
    id: 1,
    title: "How Sleep Affects Your Mental Health",
    facts: [
      "Poor sleep is linked to increased risk of anxiety and depression.",
      "REM sleep helps process emotions and memories.",
      "Sleep deprivation affects decision-making and attention.",
      "Insomnia may increase cortisol, the stress hormone.",
      "7–9 hours of sleep supports emotional resilience.",
      "Sleep disorders like apnea are common in people with PTSD.",
      "Meditation before sleep improves quality of rest.",
      "Cognitive Behavioral Therapy is effective for chronic insomnia."
    ]
  },
  {
    id: 2,
    title: "Why Regular Checkups Matter",
    facts: [
      "Early detection is key for treating chronic diseases.",
      "Blood pressure checks can reveal silent hypertension.",
      "Routine blood tests help monitor vital organ function.",
      "Checkups often detect cancers at early stages.",
      "Doctors screen for mental health concerns too.",
      "Vaccines are updated during regular visits.",
      "Health education during visits empowers patients."
    ]
  },
  {
    id: 3,
    title: "Nutrition Tips for a Healthy Heart",
    facts: [
      "Fiber-rich foods reduce bad cholesterol.",
      "Leafy greens are rich in nitrates that lower blood pressure.",
      "Omega-3 fatty acids help lower triglycerides.",
      "Reducing sodium intake prevents hypertension.",
      "Whole grains support steady blood sugar levels.",
      "Avoiding trans fats reduces heart attack risk.",
      "Drinking water instead of soda improves heart health."
    ]
  },
  {
    id: 4,
    title: "Understanding Diabetes Prevention",
    facts: [
      "Weight loss reduces risk of developing type 2 diabetes.",
      "Physical activity improves insulin sensitivity.",
      "Whole grains and fiber regulate blood sugar.",
      "Sugary drinks drastically spike glucose levels.",
      "Sleep quality influences insulin resistance.",
      "Genetics plays a role, but lifestyle matters more.",
      "Stress management helps stabilize blood sugar levels."
    ]
  }
];

const BlogFacts = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogData.find((b) => b.id === parseInt(id));

  return (
    <div className="blog-facts-page">
      <button
        className="back-btn"
        onClick={() => navigate("/blogs")}
      >
        ← Back to Blogs
      </button>
      <h2 className="facts-title">{blog.title}</h2>
      <ul className="facts-list">
        {blog.facts.map((fact, i) => (
          <li key={i} className="fact-item">{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default BlogFacts;
