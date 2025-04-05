
import React, { useState } from 'react';
import AnimatedCard from './AnimatedCard';
import { X, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<null | number>(null);

  const projects = [
    {
      title: "AI-Powered Website Chatbot",
      description: "An intelligent chatbot using React and OpenAI's GPT models to provide instant customer support and information.",
      tech: ["React", "OpenAI API", "Node.js", "TailwindCSS"],
      longDescription: "This AI-powered chatbot uses natural language processing to understand user queries and provide accurate, helpful responses in real-time. Integrated with a knowledge base, it can handle customer inquiries, route complex issues to human agents, and learn from interactions to continuously improve."
    },
    {
      title: "Personalized News Aggregator",
      description: "AI Curator that collects and organizes news based on user preferences and reading habits.",
      tech: ["Python", "TensorFlow", "API Integration", "NoSQL"],
      longDescription: "This news aggregator uses machine learning algorithms to understand user preferences and reading patterns, curating a personalized news feed that evolves over time. It incorporates sentiment analysis to provide balanced viewpoints and includes discovery features to expand users' exposure to diverse topics."
    },
    {
      title: "AI Dashboard with Behavioral Insights",
      description: "Interactive dashboard that visualizes user behavior and provides actionable insights.",
      tech: ["React", "D3.js", "Python", "AI Analytics"],
      longDescription: "This comprehensive dashboard visualizes complex behavioral data in intuitive formats, highlighting patterns and anomalies. It incorporates predictive analytics to forecast trends and recommend optimization strategies, with customizable views for different stakeholders."
    },
    {
      title: "Voice-Controlled Web App",
      description: "Web application that responds to voice commands for hands-free navigation and control.",
      tech: ["JavaScript", "Web Speech API", "React", "Accessibility"],
      longDescription: "This innovative web application uses speech recognition technology to enable completely hands-free navigation and interaction. It includes natural language understanding to interpret complex commands and provides both visual and audio feedback, with a focus on accessibility and inclusive design."
    },
    {
      title: "AI-Based Code Reviewer",
      description: "Automated tool that analyzes code for bugs, security vulnerabilities, and performance issues.",
      tech: ["Python", "NLP", "Static Analysis", "Git Integration"],
      longDescription: "This AI-powered code review tool automatically scans repositories to identify potential issues, suggest optimizations, and enforce coding standards. It learns from accepted and rejected suggestions to improve its recommendations over time, integrating seamlessly with existing development workflows."
    },
    {
      title: "Multi-modal Chatbot",
      description: "Advanced chatbot that processes text, image, and audio inputs for comprehensive assistance.",
      tech: ["Python", "TensorFlow", "Computer Vision", "NLP"],
      longDescription: "This cutting-edge chatbot can understand and process multiple types of input - text, images, and audio - to provide comprehensive assistance. It can analyze images for content, transcribe and interpret audio messages, and maintain context across different input modes for a seamless user experience."
    },
    {
      title: "Fine-Tuned LLM for Legal Docs",
      description: "Specialized language model for analyzing and generating legal documents with high accuracy.",
      tech: ["PyTorch", "Transformers", "Legal NLP", "Document Processing"],
      longDescription: "This specialized AI model has been fine-tuned on extensive legal corpora to understand complex legal terminology and document structures. It can analyze contracts for potential issues, draft standardized legal documents, and extract key information from dense legal texts, significantly reducing manual review time."
    },
    {
      title: "Real-Time Transcription Tool",
      description: "Application that converts speech to text in real-time with high accuracy across multiple languages.",
      tech: ["Python", "Speech Recognition", "WebSockets", "NLP"],
      longDescription: "This efficient transcription tool provides real-time speech-to-text conversion with support for multiple languages and specialized terminology. It includes speaker differentiation, punctuation prediction, and custom vocabulary options, making it ideal for meetings, interviews, and accessibility applications."
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">AI Portfolio</h2>
          <p className="section-subtitle mx-auto">
            Explore some of my recent AI and data-driven projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedCard 
              key={index} 
              className="p-6 h-full"
              glowOnHover={true}
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button 
                  onClick={() => setSelectedProject(index)}
                  className="text-primary hover:text-primary/80 transition-colors flex items-center"
                >
                  Learn More
                  <ExternalLink className="ml-1 h-4 w-4" />
                </button>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-scale-up">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold gradient-text">{projects[selectedProject].title}</h3>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <p className="text-muted-foreground mb-6">{projects[selectedProject].longDescription}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={() => setSelectedProject(null)}
                className="button-primary w-full mt-4"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
