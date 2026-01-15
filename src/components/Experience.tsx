// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef } from "react";
// import { Briefcase, CheckCircle } from "lucide-react";

// const Experience = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   const responsibilities = [
//     "Assisted in testing and debugging ERPNext modules and workflows",
//     "Validated business requirements and translated them into test scenarios",
//     "Worked collaboratively with developers and QA team members",
//     "Contributed to real-time ERPNext/Frappe system implementations",
//     "Reported bugs and tracked issues through resolution",
//     "Participated in code reviews and documentation",
//   ];

//   return (
//     <section id="experience" className="py-24" ref={ref}>
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
//             Experience
//           </h2>
//           <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
//         </motion.div>

//         <div className="max-w-4xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ delay: 0.3, duration: 0.6 }}
//             className="relative"
//           >
//             {/* Timeline line */}
//             <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary transform md:-translate-x-1/2" />

//             <div className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 gap-8">
//               {/* Left side - Timeline dot and period */}
//               <div className="md:text-right md:pr-12">
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0 }}
//                   animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                   transition={{ delay: 0.5, duration: 0.4 }}
//                   className="absolute left-0 md:left-1/2 top-8 w-8 h-8 bg-gradient-primary rounded-full transform -translate-x-4 md:-translate-x-1/2 flex items-center justify-center shadow-medium"
//                 >
//                   <Briefcase className="h-4 w-4 text-primary-foreground" />
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={isInView ? { opacity: 1, x: 0 } : {}}
//                   transition={{ delay: 0.6, duration: 0.6 }}
//                   className="md:mt-8"
//                 >
//                   <p className="text-sm font-semibold text-primary mb-2">6 Months</p>
//                   <p className="text-sm text-muted-foreground">Jr ERPNext Developer</p>
//                 </motion.div>
//               </div>

//               {/* Right side - Content */}
//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={isInView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ delay: 0.7, duration: 0.6 }}
//                 className="md:pl-12 mt-8"
//               >
//                 <div className="bg-card p-8 rounded-xl shadow-soft border border-border hover:shadow-medium transition-all duration-300">
//                   <h3 className="text-2xl font-heading font-bold mb-2">
//                     Jr ERPNext Developer 
//                   </h3>
//                   <p className="text-primary font-semibold mb-6">
//                     Faircode Infotech
//                   </p>

//                   <div className="space-y-3">
//                     {responsibilities.map((responsibility, index) => (
//                       <motion.div
//                         key={index}
//                         initial={{ opacity: 0, x: -10 }}
//                         animate={isInView ? { opacity: 1, x: 0 } : {}}
//                         transition={{ delay: 0.8 + index * 0.1 }}
//                         className="flex items-start gap-3"
//                       >
//                         <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
//                         <p className="text-muted-foreground">{responsibility}</p>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, CheckCircle } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // 1. Defined the experiences array with Internship first
  const experiences = [
    {
      id: 1,
      role: "ERPNext Developer Intern",
      period: "3 Months",
      company: "Faircode Infotech",
      responsibilities: [
        "Learned the fundamentals of the Frappe Framework and ERPNext architecture",
        "Assisted senior developers with minor bug fixes and customization tasks",
        "Gained hands-on experience with Python scripting for server-side logic",
        "Created basic custom fields and doctypes based on requirements",
        "Participated in daily stand-ups and requirement gathering sessions",
      ],
    },
    {
      id: 2,
      role: "Jr ERPNext Developer",
      period: "6 Months",
      company: "Faircode Infotech",
      responsibilities: [
        "Assisted in testing and debugging ERPNext modules and workflows",
        "Validated business requirements and translated them into test scenarios",
        "Worked collaboratively with developers and QA team members",
        "Contributed to real-time ERPNext/Frappe system implementations",
        "Reported bugs and tracked issues through resolution",
        "Participated in code reviews and documentation",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Continuous Timeline line running through the whole section */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
              className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 gap-8 mb-16 last:mb-0"
            >
              
              {/* 
                 THE BLUE SYMBOL (BRIEFCASE ICON)
                 Positioned absolutely relative to the grid row. 
                 md:left-1/2 puts it exactly in the center.
              */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.4 }}
                className="absolute left-0 md:left-1/2 top-0 w-8 h-8 bg-gradient-primary rounded-full transform -translate-x-4 md:-translate-x-1/2 flex items-center justify-center shadow-medium z-10"
              >
                <Briefcase className="h-4 w-4 text-primary-foreground" />
              </motion.div>

              {/* LEFT SIDE (Desktop): Period & Role text */}
              <div className="md:text-right md:pr-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <p className="text-sm font-semibold text-primary mb-1 mt-1">
                    {exp.period}
                  </p>
                  <p className="text-sm text-muted-foreground md:block hidden">
                    {exp.role}
                  </p>
                </motion.div>
              </div>

              {/* RIGHT SIDE: The Details Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="md:pl-12 mt-2 md:mt-0"
              >
                <div className="bg-card p-8 rounded-xl shadow-soft border border-border hover:shadow-medium transition-all duration-300">
                  <h3 className="text-2xl font-heading font-bold mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-primary font-semibold mb-6">
                    {exp.company}
                  </p>

                  <div className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.8 + idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground text-sm">{responsibility}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;