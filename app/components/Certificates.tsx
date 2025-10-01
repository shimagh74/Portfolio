'use client'
import { Award, Calendar, ExternalLink } from "lucide-react";
import Image from "next/image";

const certificates = [
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    year: "2025",
    description: "Foundational understanding of AWS Cloud concepts, services, security, architecture, pricing, and support to demonstrate cloud fluency and foundational AWS knowledge.",
    credentialId: "17c15fa1-4c17-46d7-b0f5-883a22915ca9",
    verificationUrl: "https://www.credly.com/badges/17c15fa1-4c17-46d7-b0f5-883a22915ca9/public_url",
    badgeImage: "/certificat/Practitioner.png", 
    skills: ["Cloud Computing", "AWS Core Services", "Security & Compliance", "Cloud Architecture", "Billing & Pricing"]
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-secondary text-lighted">
      <div className="container mx-auto px-4 lg:py-[60px]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My Certificates
          </h2>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-primary rounded-xl p-6 border border-blue/20 hover:border-blue/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Certificate Badge Image */}
              <div className="flex justify-center mb-6">
                <Image
                  src={cert.badgeImage}
                  alt={`${cert.title} Badge`}
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>

              {/* Certificate Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="bg-blue/10 p-2 rounded-full mr-3">
                    <Award className="w-5 h-5 text-blue" />
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-blue mr-2" />
                    <span className="text-blue font-semibold">{cert.year}</span>
                  </div>
                </div>
              </div>

              {/* Certificate Title */}
              <h3 className="text-xl font-bold mb-2 text-center">{cert.title}</h3>
              <p className="text-blue text-sm font-medium mb-3 text-center">{cert.issuer}</p>

              {/* Description */}
              <p className="text-lighted/80 text-sm mb-4 leading-relaxed text-center">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-lightedYellow">Key Skills:</h4>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue/20 text-blue text-xs px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verification Link */}
              <div className="text-center">
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue hover:bg-blue-hover text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                >
                  View Badge on Credly
                  <ExternalLink className="w-3 h-3 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lighted/80 mb-4">
            I&apos;m constantly learning and pursuing new certifications to stay current with industry best practices.
          </p>
          <div className="inline-flex items-center bg-blue/10 px-4 py-2 rounded-full">
            <Award className="w-4 h-4 text-blue mr-2" />
            <span className="text-blue text-sm font-medium">More certifications coming soon!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;