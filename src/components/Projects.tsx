import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  ExternalLink,
  Database,
  Calendar,
  Car,
  GraduationCap,
} from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Route Sales Management System",
      description:
        "End-to-end route sales solution for managing field sales operations, customer visits, order processing, and real-time sales tracking.",
      tech: ["Frappe", "ERPNext", "Python", "React", "Material UI"],
      icon: Database,
      features: [
        "Route & sales area setup",
        "Customer & retailer management",
        "Order booking & invoice generation",
        "Payment collection tracking",
        "Sales reports & performance analytics",
      ],
    },
    {
      title: "Healthcare Appointment System",
      description:
        "Patient care management platform with doctor registration, appointment scheduling, and prescription workflows.",
      tech: ["ERPNext", "Python", "SQL"],
      icon: Calendar,
      features: [
        "Patient/doctor registration",
        "Appointment booking",
        "Prescription management",
        "Medical records",
      ],
    },
    {
      title: "Taxi Service Management",
      description:
        "End-to-end taxi service solution managing drivers, vehicles, availability, and ride bookings.",
      tech: ["Frappe", "Python", "JavaScript"],
      icon: Car,
      features: [
        "Driver/car registration",
        "Availability check",
        "Ride bookings",
        "Real-time tracking",
      ],
    },
    {
      title: "Online Course Portal",
      description:
        "Educational platform for course management with student enrollment, lessons, assignments, and certification.",
      tech: ["ERPNext", "Python", "HTML/CSS"],
      icon: GraduationCap,
      features: [
        "Student enrollment",
        "Course lessons",
        "Assignment tracking",
        "Certificate generation",
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="group bg-card rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden border border-border"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-gradient-primary p-3 rounded-lg">
                    <project.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-foreground">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm text-muted-foreground flex items-center"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
