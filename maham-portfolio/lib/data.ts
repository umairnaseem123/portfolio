// Fill these in before publishing. Empty values hide the matching button/card.
export const EMAIL = "mahammahamriaz51@gmail.com";
export const LINKEDIN: string = "https://www.linkedin.com/in/maham-riaz-911389310/";
export const GITHUB: string = ""; // e.g. "https://github.com/your-handle"
export const CV_URL: string = "/Maham-Riaz-CV.pdf";

export const navLinks = ["about", "skills", "projects", "education", "experience", "certifications", "contact"];

export const skills: Record<string, string[]> = {
  Programming: ["Python", "C++", "Java", "JavaScript", "SQL", "Assembly Language"],
  "Web Development": ["HTML", "CSS", "JavaScript"],
  Networking: ["Cisco Packet Tracer", "VLANs", "OSPF", "RIP", "Inter-VLAN Communication", "ACLs"],
  Tools: ["Git", "GitHub", "Ubuntu", "MATLAB (GUI)", "MS Office", "Teams"],
  Concepts: ["Object-Oriented Programming", "File Handling", "Embedded Systems"],
};

type Project = { name: string; tag: string; tech: string[]; points: string[]; github?: string; demo?: string };
export const projects: Project[] = [
  { name: "Automatic Car Parking System", tag: "Embedded Systems", tech: [], points: ["Designed and developed an automated car parking system using embedded system concepts", "Implemented parking slot management and vehicle entry/exit control"] },
  { name: "Harborview Secure Network Design", tag: "Cisco Packet Tracer", tech: [], points: ["Designed and implemented a secure network topology", "Configured VLANs, OSPF/RIP routing and inter-VLAN communication", "Applied ACLs to improve network security and manage traffic"] },
  { name: "Cab Booking Application", tag: "Application", tech: [], points: ["Developed a cab booking application with separate user and driver modules", "Implemented booking management and ride request functionality"] },
  { name: "Student Management System", tag: "C++", tech: ["C++", "File Handling", "OOP"], points: ["Developed a system to manage student records efficiently", "Used file handling for permanent data storage", "Applied OOP principles for a modular, maintainable design"] },
  { name: "PDF Converter", tag: "Java", tech: ["Java", "iText"], points: ["Developed a Java application that converts documents into PDF format", "Integrated the iText library for accurate, high-quality PDF generation"] },
  { name: "Car Sale & Purchase Website", tag: "Web", tech: ["HTML", "CSS", "JavaScript"], points: ["Developed a responsive website for buying and selling vehicles", "Implemented vehicle listing, browsing and search functionality", "Designed a user-friendly interface"] },
];

export const experience = [
  { role: "Python Programming Intern", org: "CodeAlpha", period: "", points: [] as string[] }, // add period + 2–3 bullets
];

export const certs = [
  { title: "Web Development", by: "Coursera" },
  { title: "Python Programming", by: "Coursera" },
  { title: "OOP in Java", by: "Coursera" },
  { title: "Computer Networks", by: "Cisco Networking Academy" },
];
