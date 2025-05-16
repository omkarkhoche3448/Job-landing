import React from 'react';
import { ArrowRight, Zap, Globe, GraduationCap, CheckCircle, FileText } from "lucide-react";
import Tag from "../components/Tag";

const features = [
  "AI extension",
  "Smart Filters",
  "Job Alerts",
  "Resume Builder",
  "Salary Insights",
  "ML Powered Job Matching",
  "Quick Search Commands",
];

const mainFeatures = [
  {
    title: "Global Opportunities",
    description: "Access remote internships from around the world with competitive pay and flexible working hours.",
    icon: <Globe size={24} />,
    details: [
      { label: "Top Regions", items: ["United States", "Europe", "Asia Pacific", "India"] }
    ]
  },
  {
    title: "Career Fields",
    description: "Explore opportunities across all professional fields with competitive compensation packages.",
    icon: <GraduationCap size={24} />,
    details: [
      { label: "Popular Fields", items: ["UI/UX Design", "Web Development", "Data Science", "Product Management", "Marketing", "Content Creation"] }
    ]
  },
  {
    title: "Resume Builder",
    description: "Create professional resumes with our expertly designed templates that highlight your strengths for each job application.",
    icon: <FileText size={24} />,
    details: [
      { label: "Resume Features", items: ["ATS-optimized templates", "Keyword optimization", "Skills matching technology", "Export to multiple formats"] }
    ]
  }
];

const steps = [
  {
    step: "1",
    title: "Upload your resume once",
    description: "Our AI scans and understands your experience, skills, and achievements"
  },
  {
    step: "2",
    title: "Store the context of your resume",
    description: "Your profile is securely saved for future applications"
  },
  {
    step: "3",
    title: "AI analyzes company & role",
    description: "We research the company and position requirements"
  },
  {
    step: "4",
    title: "Get personalized answers instantly",
    description: "Receive tailored responses that match what recruiters are looking for"
  }
];

const FeatureBox = ({ title, description, icon, children, className }) => (
  <div className={`bg-neutral-900 border border-white/10 rounded-2xl p-6 hover:border-lime-400/30 transition-all duration-300 ${className}`}>
    <div className="flex items-center gap-3 mb-4">
      <div className="bg-lime-400 text-neutral-900 p-2.5 rounded-xl">
        {icon}
      </div>
      <h3 className="text-lg font-medium">{title}</h3>
    </div>
    <p className="text-white/50 text-sm leading-relaxed mb-4 h-[60px]">{description}</p>
    {children}
  </div>
);

const FeatureDetails = ({ label, items }) => (
  <div className="bg-black/10 rounded-xl p-4 border border-white/5 h-[140px]">
    <div className="flex justify-between items-center mb-3">
      <h4 className="text-sm font-medium">{label}</h4>
    </div>
    <div className="grid grid-cols-2 gap-2">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2 ">
          <div className="h-2 w-2 rounded-full bg-lime-400"></div>
          <span className="text-xs">{item}</span>
        </div>
      ))}
    </div>
  </div>
);

const StepItem = ({ step, title, description }) => (
  <div className="flex items-start">
    <div className="h-8 w-8 rounded-full bg-lime-400/20 text-lime-400 flex items-center justify-center text-sm font-medium mr-3 shrink-0">
      {step}
    </div>
    <div>
      <h5 className="font-medium text-white">{title}</h5>
      <p className="text-sm text-white/60 mt-1">{description}</p>
    </div>
  </div>
);

const ComprehensiveSection = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden" id="features">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lime-400/5 to-transparent"></div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header section */}
        <div className="text-center mb-12">
          <div className="flex justify-center">
            <Tag>Features</Tag>
          </div>

          <h2 className="text-4xl lg:text-5xl font-medium mt-4 max-w-2xl mx-auto leading-tight">
            <span className="text-lime-400">AI-Powered</span> Job Application Tools
          </h2>

          <p className="text-white/50 mt-4 text-lg max-w-2xl mx-auto">
            Our AI tools help you apply to multiple jobs efficiently with personalized responses tailored to each position.
          </p>
        </div>

        {/* Main feature */}
        <div className="mb-12 bg-neutral-900 border border-lime-400/30 rounded-2xl p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-400/20 text-lime-400 text-sm mb-4">
                <Zap size={14} />
                <span>Featured Tool</span>
              </div>

              <h3 className="text-2xl font-semibold mb-4">AI Browser Extension</h3>

              <p className="text-white/70 mb-6">
                Our AI browser extension automatically fills job applications based on your resume, skills, and the job description, saving you hours of repetitive form filling.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-lime-400">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">One-click application</h4>
                    <p className="text-xs text-white/60 mt-0.5">Just click "Apply" and our extension automatically fills all form fields</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-lime-400">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Smart context matching</h4>
                    <p className="text-xs text-white/60 mt-0.5">Adapts your resume information to match the specific job requirements</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-lime-400">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Works across job platforms</h4>
                    <p className="text-xs text-white/60 mt-0.5">Compatible with LinkedIn, Indeed, Glassdoor and most major job sites</p>
                  </div>
                </div>
              </div>
              
              
            </div>
            
            <div className="bg-black/10 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-medium mb-4 text-lime-400">How it works</h4>
              
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <StepItem key={index} {...step} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {mainFeatures.map((feature, index) => (
            <FeatureBox key={index} title={feature.title} description={feature.description} icon={feature.icon}>
              {feature.details.map((detail, idx) => (
                <FeatureDetails key={idx} {...detail} />
              ))}
            </FeatureBox>
          ))}
        </div>
      </div>
      
      <div className="my-8 sm:my-12 flex items-center justify-center flex-wrap gap-2 sm:gap-3 max-w-3xl mx-auto px-3 sm:px-4">
        <div className="w-full flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {features.map((feature) => (
            <div
              className="bg-neutral-900 border border-white/10 inline-flex px-2.5 sm:px-3 md:px-5 py-1.5 md:py-2 rounded-xl sm:rounded-2xl gap-2 sm:gap-3 items-center hover:scale-105 hover:border-lime-400/30 transition duration-500 group"
              key={feature}
            >
              <span className="bg-lime-400 text-neutral-900 w-4 h-4 sm:w-5 sm:h-5 rounded-full inline-flex items-center justify-center text-base sm:text-xl group-hover:rotate-45 transition duration-500">
                &#10038;
              </span>
              <span className="font-medium text-sm sm:text-base md:text-lg whitespace-nowrap">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveSection;