import React from "react";
import { SectionHeading } from "../components/SectionHeading";
import { ProfileCard } from "../components/ProfileCard";
import { TeamMember } from "../types";

export const People: React.FC = () => {
  const leadership: TeamMember[] = [
    {
      id: "1",
      name: "Dr. Divya Mohan",
      role: "PI",
      institution:
        "Department of Computing Technologies, SRM Institute of Science & Technology",
      bio: "Assistant Professor of Computer Science and Principal Investigator leading research in AI Ethics and Algorithmic Fairness. Drives strategic project management to ensure technical innovation and excellence.",
      imageUrl: "/assets/PI and CO Pi/dr divya mohan.jpg",
    },
  ];

  const researchers: TeamMember[] = [

    {
      id: "6",
      name: "Sharmista Sen Gupta",
      role: "Field Investigator",
      institution: "SRM Institute of Science & Technology",
      imageUrl: "/assets/research ass and field/Sharmista Sen Gupta.jpeg",
    },

    {
      id: "5",
      name: "Harish Karthi K",
      role: "Field Investigator",
      institution: "SRM Institute of Science & Technology",
      imageUrl: "/assets/research ass and field/HARISH KARTHI K.jpg",
    },
  ];

  const researchInternHeads: TeamMember[] = [
    {
      id: "intern-10",
      name: "Siddharth Ganesh",
      role: "Research Intern",
      institution: "SRM Institute of Science & Technology",
      imageUrl: "/assets/Icssr research interns/Siddharth Ganesh.jpg",
      domain: "Project Management and ML",
    },
    {
      id: "intern-1",
      name: "Aarya Sawant",
      role: "Research Intern",
      institution: "SRM Institute of Science & Technology",
      imageUrl: "/assets/Icssr research interns/Aarya Sawant.jpg",
      domain: "Field Investigator and Media",
    },
    {
      id: "intern-11",
      name: "Yashodhan Singh Rathore",
      role: "Research Intern",
      institution: "SRM Institute of Science & Technology",
      imageUrl: "/assets/Icssr research interns/Yashodhan Singh Rathore.jpg",
      imagePosition: "70% center",
      domain: "Web Development",
    },
    {
      id: "intern-2",
      name: "Archit Gupta",
      role: "Research Intern",
      institution: "SRM Institute of Science & Technology",
      imageUrl: "/assets/Icssr research interns/Archit Gupta.jpg",
      domain: "Responsible AI",
    },
  ];

  const researchInterns: TeamMember[] = [
    {
      id: "intern-3",
      name: "Arya Katoch",
      role: "Research Intern",
      institution: "SRM Institute of Science & Technology",
      imageUrl: "/assets/Icssr research interns/Arya Katoch.jpg",
      domain: "Responsible AI Framework",
    },
    {
      id: "intern-7",
      name: "Pallaprolu Praket Kumar",
      role: "Research Intern",
      institution: "SRM Institute of Science & Technology",
      imageUrl: "/assets/Icssr research interns/Pallaprolu Praket Kumar.jpeg",
      domain: "Database Management and Dashboard",
    },
    {
      id: "intern-9",
      name: "Sangat Singh",
      role: "Research Intern",
      institution: "SRM Institute of Science & Technology",
      imageUrl: "/assets/Icssr research interns/Sangat Singh.jpg",
      domain: "Machine Learning",
    },
    {
      id: "intern-8",
      name: "Sai Priyaa",
      role: "Research Intern",
      institution: "SRM Institute of Science & Technology",
      imageUrl: "/assets/Icssr research interns/SAI PRIYAA.JPG",
      domain: "Machine Learning",
    },
    {
      id: "intern-5",
      name: "Ayush Narania",
      role: "Research Intern",
      institution: "SRM Institute of Science & Technology",
      imageUrl: "/assets/Icssr research interns/Ayush Narania.png",
      domain: "Web Development",
    },
  ];

  const studentInterns: TeamMember[] = [
    {
      id: "student-1",
      name: "S Deepan Kumar",
      role: "Student Intern",
      institution: "SRM Institute of Science & Technology",
      imageUrl: "/assets/Icssr student intern/S Deepan Kumar .jpg",
      domain: "Social Media and Design",
    },
    {
      id: "student-2",
      name: "Nandini Srivastava",
      role: "Student Intern",
      institution: "SRM Institute of Science & Technology",
      imageUrl: "/assets/Icssr student intern/Nandini Srivastava .jpg",
      domain: "Editorial and Design",
    },
    {
      id: "student-3",
      name: "Kenaz P Saji",
      role: "Student Intern",
      institution: "SRM Institute of Science & Technology",
      imageUrl: "/assets/Icssr student intern/Kenaz P Saji .jpg",
      domain: "Social Media and Design",
    },
    {
      id: "student-4",
      name: "Uzair Siddiqui",
      role: "Student Intern",
      institution: "SRM Institute of Science & Technology",
      imageUrl: "/assets/Icssr student intern/uzair siddiqui.jpg",
      domain: "Editorial and Blog",
    },
    {
      id: "student-5",
      name: "Abhiraj Bhowmick",
      role: "Student Intern",
      institution: "SRM Institute of Science & Technology",
      imageUrl: "/assets/Icssr student intern/Abhiraj Bhowmick.jpg",
      domain: "Editorial and Design",
    },
    {
      id: "student-6",
      name: "Advait Bhagwat",
      role: "Student Intern",
      institution: "SRM Institute of Science & Technology",
      imageUrl: "/assets/Icssr student intern/Advait Bhagwat .jpeg",
      domain: "Website Development",
    },
    {
      id: "student-7",
      name: "Shreya Kesari",
      role: "Student Intern",
      institution: "Jawaharlal Nehru University",
      imageUrl: "/assets/Icssr student intern/Shreya Kesari.jpeg",
      domain: "Field Investigator and Social Science Researcher",
    },
    {
      id: "student-8",
      name: "Harshita Mishra",
      role: "Student Intern",
      institution: "Jawaharlal Nehru University",
      imageUrl: "/assets/Icssr student intern/Harshita Mishra.jpeg",
      domain: "Field Investigator and Social Science Researcher",
    },
    {
      id: "student-9",
      name: "Prantika Mukherjee",
      role: "Student Intern",
      institution: "Jawaharlal Nehru University",
      imageUrl: "/assets/Icssr student intern/Prantika Mukherjee.jpeg",
      domain: "Field Investigator and Social Science Researcher",
    },
  ];

  const coLeadership: TeamMember[] = [
    {
      id: "co-1",
      name: "Dr. Papia Sen Gupta",
      role: "Co-PI",
      institution:
        "Centre for Political Studies, School of Social Sciences, JNU",
      imageUrl: "/assets/PI and CO Pi/papia sen gupta.jpg",
    },
    {
      id: "co-2",
      name: "Dr. Neela Ganguly",
      role: "Co-PI",
      institution: "Head of the Department, Guru Nanak College",
      imageUrl: "/assets/PI and CO Pi/dr neela ganguly.jpg",
    },
    {
      id: "co-3",
      name: "Dr. Mathew Arumai M",
      role: "Co-PI",
      institution:
        "Department of Social Work, SRM Institute of Science & Technology",
      imageUrl: "/assets/PI and CO Pi/mathew.jpg",
    },
    {
      id: "co-4",
      name: "Dr. P.Selvaraj",
      role: "Co-PI",
      institution:
        "Department of Computing Technologies, SRM Institute of Science & Technology",
      imageUrl: "/assets/PI and CO Pi/dr selvaraj p.jpg",
    },
    {
      id: "co-5",
      name: "Edward Prathap Singh. K",
      role: "Co-PI",
      institution:
        "Master of Social Work, SRM Institute of Science & Technology",
      imageUrl: "/assets/PI and CO Pi/edward.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SectionHeading
        title="The Team"
        subtitle="Meet the interdisciplinary team behind the project."
      />

      {/* Leadership Section */}
      <div className="mb-20">
        <h3 className="text-xl font-serif font-bold text-navy-900 border-b border-gray-200 pb-4 mb-8">
          Project Director
        </h3>
        <div className="grid grid-cols-1 gap-10 max-w-3xl">
          {leadership.map((member) => (
            <ProfileCard
              key={member.id}
              member={member}
              variant="compact-horizontal"
            />
          ))}
        </div>
      </div>

      {/* Co-Principal Investigators Section */}
      <div className="mb-20">
        <h3 className="text-xl font-serif font-bold text-navy-900 border-b border-gray-200 pb-4 mb-8">
          Co-Principal Investigators
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {coLeadership.map((member) => (
            <ProfileCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      {/* Researchers Grid */}
      <div className="mb-20">
        <h3 className="text-xl font-serif font-bold text-navy-900 border-b border-gray-200 pb-4 mb-8">
          Research Assistants and Field Investigators
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {researchers.map((member) => (
            <ProfileCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      {/* Research Intern Heads Grid */}
      <div className="mb-20">
        <h3 className="text-xl font-serif font-bold text-navy-900 border-b border-gray-200 pb-4 mb-8">
          Research Intern Heads
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {researchInternHeads.map((member) => (
            <ProfileCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      {/* Research Interns Grid */}
      <div>
        <h3 className="text-xl font-serif font-bold text-navy-900 border-b border-gray-200 pb-4 mb-8">
          Research Interns
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {researchInterns.map((member) => (
            <ProfileCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      {/* Student Interns Grid */}
      <div className="mt-20">
        <h3 className="text-xl font-serif font-bold text-navy-900 border-b border-gray-200 pb-4 mb-8">
          Student Interns
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {studentInterns.map((member) => (
            <ProfileCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};
