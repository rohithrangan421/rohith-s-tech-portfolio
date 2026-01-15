import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, TestTube, Users } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code2,
      title: "Development",
      description:
        "Python & ERPNext expertise with hands-on project experience",
    },
    {
      icon: TestTube,
      title: "ERPNext Implementation",
      description:
        "Requirement analysis, system configuration, workflow setup, testing, and user validation",
    },
    {
      icon: Database,
      title: "Database Skills",
      description: "SQL fundamentals and database management",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong team player with excellent communication skills",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-muted-foreground leading-relaxed mb-12 text-center"
          >
            A motivated Junior ERPNext Developer with 7 months of hands-on
            experience in developing and customizing ERPNext/Frappe
            applications. Experienced in understanding business requirements,
            configuring workflows, implementing server-side and client-side
            logic, testing modules, and resolving bugs. Worked on real-time
            systems including Route sales app, Healthcare Appointment System,
            Taxi Service System, and Online Course Portal. Possess strong
            analytical skills, attention to detail, and a solid understanding of
            the Software Development Life Cycle (SDLC), with a collaborative and
            problem-solving approach.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-primary p-3 rounded-lg">
                    <highlight.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
