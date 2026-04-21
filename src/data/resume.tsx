import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Rajdeep Rudra",
  initials: "RR",
  url: "https://github.com/rajdeeprudra",
  location: "India",
  locationLink: "https://maps.app.goo.gl/LG8RdKDMCNtcBL1bA?g_st=aw", 
  summary:
    "I build things that actually work. Currently going deep on solana. Background in full-stack (Next.js, Node.js, TypeScript) with a focus on distributed, real-time architectures. Shipped products from 0→1. Now pointing everything at WEB3",
  avatarUrl: "/Profile.jpeg",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "rajdeeprudra2003@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rajdeeprudra",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rajdeep-rudra-a88085192",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/rajdeep_rudra03",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Email",
        url: "mailto:rajdeeprudra2003@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      resume: {
        name: "Resume",
        url: "/Resume.pdf",
        icon: Icons.file,
        navbar: true,
      },
    },
  },
} as const;
