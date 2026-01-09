// ================================
// IMAGE IMPORTS (IMPORTANT)
// ================================
import backendArch from "../assets/slides/backend-architecture.png";
import backendFlow from "../assets/slides/backend-data-flow.png";
import appImg from "../assets/slides/APP.png";
import mainComponents from "../assets/slides/Main-System-Components.png";
import keyFeatures from "../assets/slides/Key-Features.png";

import overallArch from "../assets/slides/OverallSystemArchitecture.png";
import layeredArch from "../assets/slides/LayeredArchitectureDesign.png";
import commFlow from "../assets/slides/CommunicationFlow.png";
import dataMgmt from "../assets/slides/DataManagementandProcessing.png";
import deployArch from "../assets/slides/DeploymentArchitecture.png";

import backendOverview from "../assets/slides/BackendArchitectureOverview.png";
import backendCore from "../assets/slides/BackendCoreComponents.png";
import backendComm from "../assets/slides/BackendCommunicationMechanisms.png";
import backendBenefits from "../assets/slides/BackendResponsibilitiesandBenefits.png";

import dbOverview from "../assets/slides/DatabaseDesignOverview.png";
import dbEntities from "../assets/slides/CoreDatabaseEntities.png";
import dbRelations from "../assets/slides/EntityRelationships.png";
import dbBenefits from "../assets/slides/DataManagementandBenefits.png";

// ================================
// SLIDES DATA
// ================================
export const slides = [
  {
    title: "Introduction",
    slides: [
      {
        heading: "Smart Home System Overview",
        points: [
          "The Internet of Things (IoT) enables intelligent environments through automated control.",
          "Smart home systems enhance comfort, energy efficiency, and security.",
          "This project presents a Smart Home System built on a centralized backend architecture.",
          "An Ubuntu-based server acts as the core control unit.",
          "The backend ensures secure, reliable, and scalable operation."
        ],
        image: backendArch
      },
      {
        heading: "System Architecture and Data Flow",
        points: [
          "The backend server represents the logical core of the system.",
          "All subsystems communicate through the server.",
          "The mobile application uses secure REST APIs.",
          "IoT devices exchange real-time data via MQTT.",
          "Centralized data flow ensures consistency."
        ],
        image: backendFlow
      },
      {
        heading: "Motivation and Problem Context",
        points: [
          "Traditional systems rely on manual control.",
          "Existing smart solutions face scalability issues.",
          "Security and real-time responsiveness are challenges.",
          "IoT systems require unified control.",
          "Centralized intelligence improves automation."
        ]
      }
    ]
  },

  {
    title: "Project Overview",
    slides: [
      {
        heading: "Project Overview",
        points: [
          "Complete Smart Home automation system.",
          "Integration of IoT devices, backend, and mobile app.",
          "Real-time monitoring and control.",
          "Focus on scalability and security.",
          "Built using open-source technologies."
        ],
        image: appImg
      },
      {
        heading: "Main System Components",
        points: [
          "Flutter mobile application.",
          "Ubuntu-based backend server.",
          "MQTT communication layer.",
          "Arduino / ESP32 devices.",
          "PostgreSQL database."
        ],
        image: mainComponents
      },
      {
        heading: "Key Features",
        points: [
          "Real-time device control.",
          "Secure authentication.",
          "AI-driven automation.",
          "Face recognition security.",
          "Modular and scalable design."
        ],
        image: keyFeatures
      }
    ]
  },

  {
    title: "System Architecture",
    slides: [
      {
        heading: "Overall System Architecture",
        points: [
          "Layered smart home architecture.",
          "Integration of app, backend, and devices.",
          "Secure and real-time communication.",
          "Clear separation of responsibilities.",
          "Designed for scalability."
        ],
        image: overallArch
      },
      {
        heading: "Layered Architecture Design",
        points: [
          "Presentation layer: Flutter.",
          "Application layer: Flask backend.",
          "Communication layer: MQTT.",
          "Data layer: PostgreSQL.",
          "Device layer: ESP32 / Arduino."
        ],
        image: layeredArch
      },
      {
        heading: "Communication Flow",
        points: [
          "Commands originate from mobile app.",
          "REST APIs handle requests.",
          "MQTT publishes device commands.",
          "Devices execute actions.",
          "Telemetry returns to backend."
        ],
        image: commFlow
      },
      {
        heading: "Data Management and Processing",
        points: [
          "Centralized database.",
          "Real-time state updates.",
          "Persistent logs.",
          "AI-driven decisions.",
          "Monitoring and analysis."
        ],
        image: dataMgmt
      },
      {
        heading: "Deployment Architecture",
        points: [
          "Ubuntu server hosting backend.",
          "MQTT broker as background service.",
          "Independent database service.",
          "24/7 system operation.",
          "Future expansion support."
        ],
        image: deployArch
      }
    ]
  },

  {
    title: "Backend Architecture",
    slides: [
      {
        heading: "Backend Architecture Overview",
        points: [
          "Central control unit.",
          "Manages device communication.",
          "Handles security and logic.",
          "Runs on Ubuntu server.",
          "Ensures system reliability."
        ],
        image: backendOverview
      },
      {
        heading: "Backend Core Components",
        points: [
          "Flask REST APIs.",
          "Authentication module.",
          "MQTT client.",
          "PostgreSQL interface.",
          "AI automation services."
        ],
        image: backendCore
      },
      {
        heading: "Backend Communication Mechanisms",
        points: [
          "REST APIs for mobile app.",
          "MQTT for device messaging.",
          "Low-latency communication.",
          "Asynchronous telemetry.",
          "High performance."
        ],
        image: backendComm
      },
      {
        heading: "Backend Responsibilities and Benefits",
        points: [
          "Centralized security.",
          "Real-time control.",
          "Consistent logging.",
          "AI support.",
          "Easy maintenance."
        ],
        image: backendBenefits
      }
    ]
  },

  {
    title: "Database Design",
    slides: [
      {
        heading: "Database Design Overview",
        points: [
          "Relational database model.",
          "PostgreSQL for reliability.",
          "Stores users, rooms, devices.",
          "Ensures data integrity.",
          "Centralized system state."
        ],
        image: dbOverview
      },
      {
        heading: "Core Database Entities",
        points: [
          "Users.",
          "Rooms.",
          "Devices.",
          "Logs.",
          "Notifications."
        ],
        image: dbEntities
      },
      {
        heading: "Entity Relationships",
        points: [
          "Users access rooms.",
          "Rooms contain devices.",
          "Devices generate logs.",
          "Logs track system activity.",
          "Foreign keys enforce integrity."
        ],
        image: dbRelations
      },
      {
        heading: "Data Management and Benefits",
        points: [
          "Single source of truth.",
          "Historical analysis.",
          "Efficient queries.",
          "AI-driven automation.",
          "Future extensibility."
        ],
        image: dbBenefits
      }
    ]
  },

  // Placeholder sections
  { title: "IoT Communication (MQTT)", slides: [{ points: ["Content coming soon."] }] },
  { title: "Device Control & Automation", slides: [{ points: ["Content coming soon."] }] },
  { title: "Mobile Application (Flutter)", slides: [{ points: ["Content coming soon."] }] },
  { title: "AI & Intelligent Features", slides: [{ points: ["Content coming soon."] }] },
  { title: "Face Recognition System", slides: [{ points: ["Content coming soon."] }] },
  { title: "Security & Authentication", slides: [{ points: ["Content coming soon."] }] },
  { title: "Performance & Testing", slides: [{ points: ["Content coming soon."] }] },
  { title: "Results & Evaluation", slides: [{ points: ["Content coming soon."] }] },
  { title: "Challenges & Limitations", slides: [{ points: ["Content coming soon."] }] },
  { title: "Future Work", slides: [{ points: ["Content coming soon."] }] },
  { title: "Conclusion", slides: [{ points: ["Content coming soon."] }] }
];
