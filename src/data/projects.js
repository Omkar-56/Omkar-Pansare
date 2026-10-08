const projects = [
  {
    name: "SubTrack",
    category: "Full Stack · AI",
    description:
      "A smart recurring-expense and subscription manager featuring spend analytics, renewal forecasting, and AI-powered receipt parsing.",
    highlights: [
      "Gemini AI automated receipt & invoice scanner",
      "Interactive 12-month spend trends & forecast",
      "Automated Gmail renewal alerts & free trial guard",
    ],
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Gemini AI", "Tailwind CSS"],
    liveUrl: "https://sub-track-silk.vercel.app",
    githubUrl: "https://github.com/Omkar-56/SubTrack",
    year: "2026",
  },
  {
    name: "Unalone",
    category: "Full Stack · Social",
    description:
      "Connects people through location-aware event discovery and meetup planning, making it effortless to discover and join activities happening nearby.",
    highlights: [
      "Location-aware real-time event discovery & mapping",
      "Spontaneous meetup creation & RSVP coordination",
      "Interactive feeds & community networking",
    ],
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://unalone-flax.vercel.app/",
    githubUrl: "https://github.com/Omkar-56/unalone",
    year: "2026",
  },
  {
    name: "Personal Cloud Storage",
    category: "Full Stack · Cloud",
    description:
      "A self-hosted personal cloud storage platform inspired by Google Drive with secure hierarchical file management and object storage.",
    highlights: [
      "Nested folder hierarchy & multi-file uploads",
      "MinIO / AWS S3 presigned URL previews & streaming",
      "Password-protected and expiring shareable links",
    ],
    stack: ["React", "Node.js", "Express", "PostgreSQL", "MinIO / S3"],
    liveUrl: null,
    githubUrl: "https://github.com/Omkar-56/Personal-Cloud-Storage",
    year: "2025",
  },
  {
    name: "DeepShield (DF-Detector)",
    category: "Deep Learning · Microservices",
    description:
      "A deepfake video detection platform using hybrid EfficientNet-B0 and LSTM architecture to detect spatial and temporal frame manipulations.",
    highlights: [
      "Hybrid CNN-LSTM spatial & temporal artifact analysis",
      "Video hash-based caching to avoid redundant GPU inference",
      "Go & Python microservices communicating via gRPC",
    ],
    stack: ["Python", "PyTorch", "Go", "React", "gRPC", "Docker"],
    liveUrl: null,
    githubUrl: "https://github.com/Omkar-56/DF-Detector",
    year: "2025",
  },
  {
    name: "Leaf Disease Classifier",
    category: "Computer Vision · Health AI",
    description:
      "An end-to-end deep learning web application that diagnoses potato leaf diseases and segments infected lesions with pixel-level precision.",
    highlights: [
      "Classification of Early Blight, Late Blight, & Healthy leaves",
      "Pixel-precise semantic segmentation masks for diseased areas",
      "High-performance FastAPI inference backend containerized with Docker",
    ],
    stack: ["TensorFlow", "FastAPI", "React", "Docker", "Tailwind CSS"],
    liveUrl: null,
    githubUrl: "https://github.com/Omkar-56/Leaf-Classification-and-Segmentation",
    year: "2025",
  },
];

export default projects;
