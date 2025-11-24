import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "rohith.rangan@example.com",
      href: "mailto:rohith.rangan@example.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 XXXXX XXXXX",
      href: "tel:+91XXXXXXXXXX",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/rohithrangan",
      href: "https://linkedin.com/in/rohithrangan",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/rohithrangan",
      href: "https://github.com/rohithrangan",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.label !== "Email" && method.label !== "Phone" ? "_blank" : undefined}
                rel={method.label !== "Email" && method.label !== "Phone" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                className="group bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 border border-border flex items-center gap-4"
              >
                <div className="bg-gradient-primary p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <method.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">{method.label}</p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {method.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center bg-gradient-primary p-12 rounded-2xl shadow-medium"
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
              Let's discuss how I can contribute to your team with my skills in Python development, ERPNext, and quality assurance.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-background text-primary hover:bg-background/90 transition-colors text-lg px-8"
              onClick={() => window.location.href = "mailto:rohith.rangan@example.com"}
            >
              Send Me an Email
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
