<<<<<<< HEAD
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
=======
>>>>>>> 89d7c5265de06a3cfbe22d5999aeee6494ea5c8d
export const slides = [
  {
    title: "Introduction",
    slides: [
      {
        heading: "Smart Home System Overview",
        points: [
<<<<<<< HEAD
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
=======
          "The Internet of Things (IoT) enables intelligent environments through automated control and real-time communication.",
          "Smart home systems enhance comfort, energy efficiency, and security by integrating connected devices.",
          "This project presents a Smart Home System built on a centralized backend architecture.",
          "An Ubuntu-based server acts as the core control unit, managing communication between mobile applications, IoT devices, databases, and AI services.",
          "The backend ensures secure, reliable, and scalable operation of the entire system."
        ],
        image: "/slides/backend-architecture.png"
      },
      {
        heading:"System Architecture and Data Flow",
        points: [
          "The backend server represents the logical core of the system.",
          "All subsystems communicate through the server using defined interfaces.",
          "The mobile application uses secure REST APIs for interaction.",
          "IoT devices exchange real-time data via MQTT publish–subscribe.",
          "Centralized data flow ensures consistency and reliability."
        ],
        image: "/slides/backend-data-flow.png"
>>>>>>> 89d7c5265de06a3cfbe22d5999aeee6494ea5c8d
      },
      {
        heading: "Motivation and Problem Context",
        points: [
<<<<<<< HEAD
          "Traditional systems rely on manual control.",
          "Existing smart solutions face scalability issues.",
          "Security and real-time responsiveness are challenges.",
          "IoT systems require unified control.",
          "Centralized intelligence improves automation."
=======
        "Traditional home systems rely on manual control and lack automation.",
        "Existing smart solutions face scalability and integration issues.",
        "Security and real-time responsiveness are major challenges.",
        "IoT systems require unified control and intelligent decision-making.",
        "This project proposes a centralized smart home solution."
>>>>>>> 89d7c5265de06a3cfbe22d5999aeee6494ea5c8d
        ]
      }
    ]
  },
<<<<<<< HEAD

=======
>>>>>>> 89d7c5265de06a3cfbe22d5999aeee6494ea5c8d
  {
    title: "Project Overview",
    slides: [
      {
        heading: "Project Overview",
        points: [
<<<<<<< HEAD
          "Complete Smart Home automation system.",
          "Integration of IoT devices, backend, and mobile app.",
          "Real-time monitoring and control.",
          "Focus on scalability and security.",
          "Built using open-source technologies."
        ],
        image: appImg
=======
          "The project implements a complete Smart Home automation system.",
          "It integrates IoT devices, a backend server, and a mobile application.",
          "Users can monitor and control devices remotely in real time.",
          "The system focuses on scalability, security, and automation.",
          "Open-source technologies ensure flexibility and extensibility."
        ],
        image: "/slides/APP.png"
>>>>>>> 89d7c5265de06a3cfbe22d5999aeee6494ea5c8d
      },
      {
        heading: "Main System Components",
        points: [
<<<<<<< HEAD
          "Flutter mobile application.",
          "Ubuntu-based backend server.",
          "MQTT communication layer.",
          "Arduino / ESP32 devices.",
          "PostgreSQL database."
        ],
        image: mainComponents
=======
          "Flutter mobile application for user interaction.",
          "Ubuntu-based backend server for centralized control.",
          "MQTT communication layer for real-time messaging.",
          "Arduino/ESP32 devices for physical actuation.",
          "PostgreSQL database for persistent data storage."
        ],
        image: "/slides/Main-System-Components.png"
>>>>>>> 89d7c5265de06a3cfbe22d5999aeee6494ea5c8d
      },
      {
        heading: "Key Features",
        points: [
<<<<<<< HEAD
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

=======
          "Real-time device control using MQTT.",
          "Secure authentication and access control.",
          "AI-based automation and decision making.",
          "Face recognition for smart security.",
          "Modular and scalable system design."
        ],
        image: "/slides/Key-Features.png"
      }
    ]
  },
  {
  title: "Problem Statement",
  slides: [
    {
      heading: "Existing Challenges in Smart Home Systems",
      points: [
        "Traditional home control systems rely on manual operation.",
        "Many smart home solutions lack unified architecture.",
        "Limited interoperability between heterogeneous devices.",
        "Poor scalability when expanding system functionality.",
        "Inconsistent user experience across platforms."
      ],
      image: "/slides/Existing-Challenges.png"
    },
    {
      heading: "Security and System Limitations",
      points: [
        "Weak authentication exposes systems to unauthorized access.",
        "Lack of real-time monitoring reduces reliability.",
        "Absence of efficient centralized control.",
        "Limited use of intelligent automation and AI.",
        "Dependence on cloud services increases latency and privacy risks."
      ],
      image: "/slides/Key-Features.png"
    }
  ]
}
,
  {
    title: "Objectives",
    slides: [
      {
        heading: "Project Objectives",
        points: [
          "Design and implement a Smart Home automation system.",
          "Develop a centralized backend for control and management.",
          "Enable real-time communication with IoT devices.",
          "Support scalability and future system expansion.",
          "Provide an intuitive mobile application interface."
        ],
        image: "/slides/Security-Objectives.png"
      },
      {
        heading: "Technical and Security Objectives",
        points: [
          "Implement secure authentication and access control.",
          "Use MQTT for low-latency device communication.",
          "Integrate AI for intelligent automation.",
          "Apply face recognition for enhanced security.",
          "Ensure system reliability and fault tolerance."
        ],
        image: "/slides/Project-Objectives.png"
      }
    ]
  },
>>>>>>> 89d7c5265de06a3cfbe22d5999aeee6494ea5c8d
  {
    title: "System Architecture",
    slides: [
      {
        heading: "Overall System Architecture",
        points: [
<<<<<<< HEAD
          "Layered smart home architecture.",
          "Integration of app, backend, and devices.",
          "Secure and real-time communication.",
          "Clear separation of responsibilities.",
          "Designed for scalability."
        ],
        image: overallArch
=======
          "The system follows a layered smart home architecture.",
          "It integrates mobile applications, backend services, and IoT devices.",
          "Secure and real-time communication is supported.",
          "Each layer has a defined role and responsibility.",
          "The architecture ensures scalability and maintainability."
        ],
        image: "/slides/OverallSystemArchitecture.png"
>>>>>>> 89d7c5265de06a3cfbe22d5999aeee6494ea5c8d
      },
      {
        heading: "Layered Architecture Design",
        points: [
<<<<<<< HEAD
          "Presentation layer: Flutter.",
          "Application layer: Flask backend.",
          "Communication layer: MQTT.",
          "Data layer: PostgreSQL.",
          "Device layer: ESP32 / Arduino."
        ],
        image: layeredArch
=======
          "Presentation layer using Flutter mobile application.",
          "Application layer based on Flask backend services.",
          "Communication layer using MQTT messaging protocol.",
          "Data layer implemented with PostgreSQL database.",
          "Device layer consisting of Arduino and ESP32 controllers."
        ],
        image: "/slides/LayeredArchitectureDesign.png"
>>>>>>> 89d7c5265de06a3cfbe22d5999aeee6494ea5c8d
      },
      {
        heading: "Communication Flow",
        points: [
<<<<<<< HEAD
          "Commands originate from mobile app.",
          "REST APIs handle requests.",
          "MQTT publishes device commands.",
          "Devices execute actions.",
          "Telemetry returns to backend."
        ],
        image: commFlow
=======
          "User commands originate from the mobile application.",
          "Requests are sent to the backend through REST APIs.",
          "Backend publishes commands via MQTT topics.",
          "IoT devices subscribe and execute control actions.",
          "Feedback and telemetry are returned using MQTT."
        ],
        image: "/slides/CommunicationFlow.png"
>>>>>>> 89d7c5265de06a3cfbe22d5999aeee6494ea5c8d
      },
      {
        heading: "Data Management and Processing",
        points: [
<<<<<<< HEAD
          "Centralized database.",
          "Real-time state updates.",
          "Persistent logs.",
          "AI-driven decisions.",
          "Monitoring and analysis."
        ],
        image: dataMgmt
=======
          "Centralized database stores users and device information.",
          "Device states and logs are updated in real time.",
          "Backend processes telemetry and control data.",
          "AI and automation depend on stored system data.",
          "Logging enables monitoring and fault analysis."
        ],
        image: "/slides/DataManagementandProcessing.png"
>>>>>>> 89d7c5265de06a3cfbe22d5999aeee6494ea5c8d
      },
      {
        heading: "Deployment Architecture",
        points: [
<<<<<<< HEAD
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

=======
          "Backend services are hosted on an Ubuntu server.",
          "MQTT broker runs as a background messaging service.",
          "Database operates independently for reliability.",
          "System supports continuous 24/7 operation.",
          "Architecture supports future system expansion."
        ],
        image: "/slides/DeploymentArchitecture.png"
      }
    ]
  },
>>>>>>> 89d7c5265de06a3cfbe22d5999aeee6494ea5c8d
  {
    title: "Backend Architecture",
    slides: [
      {
        heading: "Backend Architecture Overview",
        points: [
<<<<<<< HEAD
          "Central control unit.",
          "Manages device communication.",
          "Handles security and logic.",
          "Runs on Ubuntu server.",
          "Ensures system reliability."
        ],
        image: backendOverview
=======
          "The backend server is the central control unit of the system.",
          "It manages communication between mobile app and IoT devices.",
          "System logic, security, and data processing are centralized.",
          "Backend services run on an Ubuntu-based server.",
          "This design ensures reliability and scalability."
        ],
        image: "/slides/BackendArchitectureOverview.png"
>>>>>>> 89d7c5265de06a3cfbe22d5999aeee6494ea5c8d
      },
      {
        heading: "Backend Core Components",
        points: [
<<<<<<< HEAD
          "Flask REST APIs.",
          "Authentication module.",
          "MQTT client.",
          "PostgreSQL interface.",
          "AI automation services."
        ],
        image: backendCore
=======
          "Flask REST API for handling client requests.",
          "Authentication module for user access control.",
          "MQTT client for real-time device messaging.",
          "PostgreSQL interface for data storage.",
          "AI services for intelligent automation."
        ],
        image: "/slides/BackendCoreComponents.png"
>>>>>>> 89d7c5265de06a3cfbe22d5999aeee6494ea5c8d
      },
      {
        heading: "Backend Communication Mechanisms",
        points: [
<<<<<<< HEAD
          "REST APIs for mobile app.",
          "MQTT for device messaging.",
          "Low-latency communication.",
          "Asynchronous telemetry.",
          "High performance."
        ],
        image: backendComm
=======
          "Secure REST APIs connect the mobile application to the backend.",
          "MQTT enables real-time, low-latency device control.",
          "User commands are translated into MQTT messages.",
          "Device telemetry is received asynchronously.",
          "Hybrid communication improves performance and reliability."
        ],
        image: "/slides/BackendCommunicationMechanisms.png"
>>>>>>> 89d7c5265de06a3cfbe22d5999aeee6494ea5c8d
      },
      {
        heading: "Backend Responsibilities and Benefits",
        points: [
<<<<<<< HEAD
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

=======
          "Centralized authentication and authorization.",
          "Real-time device control and monitoring.",
          "Consistent data logging and synchronization.",
          "Support for AI-based automation.",
          "Ease of maintenance and future expansion."
        ],
        image: "/slides/BackendResponsibilitiesandBenefits.png"
      }
    ]
  },
>>>>>>> 89d7c5265de06a3cfbe22d5999aeee6494ea5c8d
  {
    title: "Database Design",
    slides: [
      {
        heading: "Database Design Overview",
        points: [
<<<<<<< HEAD
          "Relational database model.",
          "PostgreSQL for reliability.",
          "Stores users, rooms, devices.",
          "Ensures data integrity.",
          "Centralized system state."
        ],
        image: dbOverview
=======
          "A relational database is used to manage smart home data.",
          "PostgreSQL is selected for reliability and scalability.",
          "The database stores users, devices, rooms, and logs.",
          "Relational constraints ensure data integrity.",
          "Centralized storage maintains consistent system state."
        ],
        image: "/slides/DatabaseDesignOverview.png"
>>>>>>> 89d7c5265de06a3cfbe22d5999aeee6494ea5c8d
      },
      {
        heading: "Core Database Entities",
        points: [
<<<<<<< HEAD
          "Users.",
          "Rooms.",
          "Devices.",
          "Logs.",
          "Notifications."
        ],
        image: dbEntities
=======
          "Users table for credentials, roles, and permissions.",
          "Rooms table representing logical home areas.",
          "Devices table storing device metadata and state.",
          "Device logs for tracking system events.",
          "Notifications table for user alerts."
        ],
        image: "/slides/CoreDatabaseEntities.png"
>>>>>>> 89d7c5265de06a3cfbe22d5999aeee6494ea5c8d
      },
      {
        heading: "Entity Relationships",
        points: [
<<<<<<< HEAD
          "Users access rooms.",
          "Rooms contain devices.",
          "Devices generate logs.",
          "Logs track system activity.",
          "Foreign keys enforce integrity."
        ],
        image: dbRelations
=======
          "Users can access multiple rooms.",
          "Rooms contain multiple IoT devices.",
          "Devices generate state updates and logs.",
          "Logs are linked to users and devices.",
          "Foreign keys enforce referential integrity."
        ],
        image: "/slides/EntityRelationships.png"
>>>>>>> 89d7c5265de06a3cfbe22d5999aeee6494ea5c8d
      },
      {
        heading: "Data Management and Benefits",
        points: [
<<<<<<< HEAD
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
=======
          "Database acts as the single source of truth.",
          "Historical logs enable monitoring and analysis.",
          "Optimized schema supports efficient queries.",
          "Data supports AI-driven automation decisions.",
          "Schema allows future system expansion."
        ],
        image: "/slides/DataManagementandBenefits.png"
      }
    ]
  },
  {
    title: "IoT Communication (MQTT)",
    slides: [{ points: ["Content coming soon."] }]
  },
  {
    title: "Device Control & Automation",
    slides: [{ points: ["Content coming soon."] }]
  },
  {
    title: "Mobile Application (Flutter)",
    slides: [{ points: ["Content coming soon."] }]
  },
  {
    title: "AI & Intelligent Features",
    slides: [{ points: ["Content coming soon."] }]
  },
  {
    title: "Face Recognition System",
    slides: [{ points: ["Content coming soon."] }]
  },
  {
    title: "Security & Authentication",
    slides: [{ points: ["Content coming soon."] }]
  },
  {
    title: "Performance & Testing",
    slides: [{ points: ["Content coming soon."] }]
  },
  {
    title: "Results & Evaluation",
    slides: [{ points: ["Content coming soon."] }]
  },
  {
    title: "Challenges & Limitations",
    slides: [{ points: ["Content coming soon."] }]
  },
  {
    title: "Future Work",
    slides: [{ points: ["Content coming soon."] }]
  },
  {
    title: "Conclusion",
    slides: [{ points: ["Content coming soon."] }]
  }
>>>>>>> 89d7c5265de06a3cfbe22d5999aeee6494ea5c8d
];
