import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      category: "Programming & Frameworks",
      skills: ["Python", "Frappe/ERPNext", "HTML/CSS", "JavaScript"],
    },
    {
      category: "ERPNext Implementation",
      skills: [
        "Requirement Analysis",
        "ERPNext Configuration",
        "Workflow Setup",
        "Functional Testing",
        "User Acceptance Testing (UAT)",
        "Data Validation",
      ],
    },
    {
      category: "Database & Tools",
      skills: ["SQL", "Database Fundamentals", "Git", "SDLC"],
    },
    {
      category: "Soft Skills",
      skills: [
        "Analytical Thinking",
        "Team Collaboration",
        "Problem Solving",
        "Attention to Detail",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + categoryIndex * 0.1, duration: 0.6 }}
              className="bg-card p-8 rounded-xl shadow-soft border border-border hover:shadow-medium transition-all duration-300"
            >
              <h3 className="text-xl font-heading font-bold mb-6 text-primary">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
