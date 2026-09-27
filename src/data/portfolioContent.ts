import { ProfileInfo, Project, JourneyStage, SkillCategory, ExperienceItem } from '@/types/portfolio';

export const profileData: ProfileInfo = {
  name: 'Vishak',
  roles: ['AI ENGINEER', 'PYTHON DEVELOPER', 'AI / ML'],
  headline: 'BUILDING INTELLIGENCE. CREATING WHAT\'S NEXT.',
  subheadline: 'An AI Engineer\'s Journey',
  editorialStatement:
    'Composing neural architectures, predictive pipelines, and automated intelligence with mathematical rigor and software craftsmanship.',
  aboutStory: [
    'I am an Artificial Intelligence & Data Science scholar dedicated to transforming mathematical intuition into resilient, self-orchestrating computational systems using Python, Machine Learning, and Computer Vision.',
    'My philosophy centers on dissecting real-world friction and systematically engineering elegant, scalable software pipelines that create tangible leverage.',
    'As a person first and engineer second, my drive is fueled by persistent curiosity—building from first principles, writing clean modular code, and pursuing systems that make technology genuinely intelligent and human-centric.'
  ],
  education: {
    degree: 'Bachelor of Technology',
    major: 'Artificial Intelligence & Data Science',
    institution: 'Loyola Institute of Technology and Science',
    cgpa: '8.5 / 10.0',
    graduationYear: '2027',
    location: 'India',
  },
  interests: [
    'Python',
    'Machine Learning',
    'Deep Learning',
    'Computer Vision',
    'OpenCV',
    'NumPy',
    'Pandas',
    'Django',
    'HTML',
    'CSS',
    'JavaScript',
    'Git',
    'GitHub',
    'NLP fundamentals',
    'Generative AI',
    'Automation',
    'Intelligent applications'
  ],
  contact: {
    email: 'vishak3416@gmail.com',
    resumeUrl: '#experience',
    location: 'India (IST)',
    status: 'Available for AI Roles',
  },
};

export const prepPitchProject: Project = {
  id: 'preppitch',
  title: 'PREPPITCH',
  actLabel: '04 — FEATURED BENCHMARK',
  tagline: 'PRACTICE UNTIL YOUR PITCH IS PERFECT.',
  description:
    'PrepPitch is an AI-powered student mock interview evaluation platform designed to mentor aspiring candidates through authentic interview iterations, providing structured diagnostics across conceptual articulation, tone, and technical precision.',
  technologies: ['Python', 'Django', 'Machine Learning', 'NLP', 'Database', 'AI'],
  isFlagship: true,
  responsibilities: [
    'Dataset collection: Aggregated realistic student interview question-and-answer corpora across multiple domains.',
    'Dataset preparation & cleaning: Sanitized text corpora, normalized responses, and eliminated noise.',
    'Data labelling: Structured and tagged interview question taxonomies by technical competency and difficulty.',
    'Model training: Trained scoring models on interview rubric benchmarks for response assessment.',
    'Model evaluation: Evaluated scoring accuracy, consistency, and precision across diverse test cohorts.',
    'Interview Evaluation Engine: Architected the algorithmic logic to parse candidate responses and compute actionable rubrics.',
    'AI/ML backend integration: Seamlessly integrated evaluation endpoints into the Django web architecture.'
  ],
  flowSteps: [
    {
      number: '01',
      title: 'Student Input',
      detail: 'Candidate onboarding, domain selection, and baseline calibration.',
      accent: false,
    },
    {
      number: '02',
      title: 'Select Job Role',
      detail: 'Industry taxonomy calibration across software, data, and ML domains.',
      accent: false,
    },
    {
      number: '03',
      title: 'Select Interview Type',
      detail: 'Technical competency, HR round, or behavioral assessment mode.',
      accent: false,
    },
    {
      number: '04',
      title: 'AI Mock Interview',
      detail: 'Dynamic contextual question generation and real-time prompt orchestration.',
      accent: true,
    },
    {
      number: '05',
      title: 'Answer Questions',
      detail: 'Multi-format candidate response capture and input stream ingestion.',
      accent: false,
    },
    {
      number: '06',
      title: 'AI Evaluation',
      detail: 'Evaluation Engine runs semantic analysis, syntactic checks, and accuracy scoring.',
      accent: true,
    },
    {
      number: '07',
      title: 'Score + Feedback',
      detail: 'Multi-metric benchmark breakdown with granular areas for improvement.',
      accent: true,
    },
    {
      number: '08',
      title: 'Performance History',
      detail: 'Longitudinal telemetry tracking trajectory, consistency, and interview readiness.',
      accent: false,
    },
  ],
};

export const drowsinessProject: Project = {
  id: 'drowsiness-detection',
  title: 'DRIVER DROWSINESS DETECTION',
  actLabel: '05 — VISION SYSTEM',
  tagline: 'REAL-TIME OCULAR TELEMETRY & FATIGUE MITIGATION.',
  description:
    'An edge-optimized computer vision system performing continuous facial landmark localization and ocular telemetry. Calculates Eye Aspect Ratio (EAR) across frame sequences to avert operator fatigue and trigger millisecond acoustic alarms.',
  technologies: ['Python', 'OpenCV', 'Computer Vision', 'CNN / Deep Learning concepts'],
  flowSteps: [
    {
      number: '01',
      title: 'Webcam Feed Ingestion',
      detail: 'Continuous video stream capture with real-time frame buffering.',
      tech: 'OpenCV VideoCapture',
    },
    {
      number: '02',
      title: 'Face Detection',
      detail: 'Frontal face localization isolating region of interest (ROI).',
      tech: 'Haar Cascade / Deep Face Detector',
    },
    {
      number: '03',
      title: 'Eye Landmark Localization',
      detail: 'Pinpointing 6 ocular coordinate landmarks per eye (p1 to p6).',
      tech: 'Facial Landmark Coordinates',
    },
    {
      number: '04',
      title: 'Eye Aspect Ratio (EAR)',
      detail: 'Computing Euclidean distance ratios: EAR = (||p2-p6|| + ||p3-p5||) / (2||p1-p4||).',
      tech: 'Euclidean Geometric Logic',
      accent: true,
    },
    {
      number: '05',
      title: 'Drowsiness Detection',
      detail: 'Tracking consecutive frames below critical threshold (EAR < 0.22 for N frames).',
      tech: 'Temporal Threshold Filter',
      accent: true,
    },
    {
      number: '06',
      title: 'Acoustic / Visual Alert',
      detail: 'Immediate audio frequency dispatch and visual telemetry warning.',
      tech: 'Alarm Engine',
      accent: true,
    },
  ],
};

export const housePriceProject: Project = {
  id: 'house-price-prediction',
  title: 'HOUSE PRICE PREDICTION',
  actLabel: '06 — PREDICTIVE ANALYTICS',
  tagline: 'MULTIDIMENSIONAL REGRESSION & REAL ESTATE VALUATION.',
  description:
    'A machine learning predictive case study parsing demographic indices, architectural variances, and spatial attributes to generate accurate valuation forecasts.',
  technologies: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'Matplotlib', 'Machine Learning'],
  flowSteps: [
    {
      number: '01',
      title: 'Dataset Ingestion',
      detail: 'Structured real estate transaction records with dimensional attributes.',
    },
    {
      number: '02',
      title: 'Preprocessing & Cleaning',
      detail: 'Null value imputation, outlier isolation, and categorical encoding.',
    },
    {
      number: '03',
      title: 'Feature Engineering',
      detail: 'Square-footage normalization, location clustering, and correlation matrix analysis.',
    },
    {
      number: '04',
      title: 'Regression Modeling',
      detail: 'Benchmarking linear, regularized, and ensemble regression estimators.',
      accent: true,
    },
    {
      number: '05',
      title: 'Price Prediction',
      detail: 'Real-time property appraisal inference with confidence boundaries.',
      accent: true,
    },
    {
      number: '06',
      title: 'Evaluation Metrics',
      detail: 'Cross-validation benchmarking with R² Score, RMSE, and Mean Absolute Error.',
    },
  ],
};

export const archiveProjects: Project[] = [
  {
    id: 'movie-ticket-booking',
    title: 'Movie Ticket Booking System',
    actLabel: 'ARCHIVE // 01',
    tagline: 'CONCURRENT RESERVATION & TRANSACTION INTEGRITY.',
    description:
      'Full-stack booking apparatus with concurrent seat reservation logic, zero double-booking tolerances, relational database storage, and transactional consistency.',
    technologies: ['Python', 'SQL / Database', 'Full Stack Architecture'],
  },
  {
    id: 'food-ordering-platform',
    title: 'Food Ordering Commerce Platform',
    actLabel: 'ARCHIVE // 02',
    tagline: 'DYNAMIC CATALOG & ORDER ORCHESTRATION.',
    description:
      'Dynamic catalog browsing with real-time shopping cart dispatch, address orchestration, responsive checkout, and customer order management flows.',
    technologies: ['Python', 'REST API', 'UI Architecture', 'HTML / CSS / JS'],
  },
  {
    id: 'rics-camera-project',
    title: 'RICS Camera Vision Project',
    actLabel: 'ARCHIVE // 03',
    tagline: 'OPTICAL SENSOR EDGE INFERENCE & FRAME INDEXING.',
    description:
      'Embedded optical pipeline utilizing optical sensors for rapid frame indexing, spatial feature isolation, and edge-level computer vision processing.',
    technologies: ['Embedded Python', 'Edge Computer Vision', 'Linux'],
  },
];

export const journeyStages: JourneyStage[] = [
  {
    stageNumber: 'STAGE 01',
    title: 'Pythonic Foundations',
    description:
      'Mastered functional logic, modular architecture, object-oriented design, algorithmic complexity, and data structures in Python.',
    tagline: 'THE CORE SYNTAX OF THOUGHT',
  },
  {
    stageNumber: 'STAGE 02',
    title: 'Machine Learning',
    description:
      'Explored supervised learning heuristics, regression, classification algorithms, feature engineering, and scikit-learn pipelines.',
    tagline: 'DISCOVERING PATTERNS IN DATA',
  },
  {
    stageNumber: 'STAGE 03',
    title: 'Deep Learning',
    description:
      'Dived into neural network architectures, multi-layer perceptrons, backpropagation, activation dynamics, and loss convergence.',
    tagline: 'NEURAL WEIGHTS & CONVERGENCE',
  },
  {
    stageNumber: 'STAGE 04',
    title: 'Computer Vision',
    description:
      'Built spatial image processing workflows, OpenCV pipelines, facial landmark detectors, and real-time ocular tracking systems.',
    tagline: 'TEACHING MACHINES TO SEE',
  },
  {
    stageNumber: 'STAGE 05',
    title: 'Natural Language Processing',
    description:
      'Investigated textual representations, token embeddings, semantic similarity metrics, and evaluation heuristics.',
    tagline: 'DECIPHERING HUMAN LANGUAGE',
  },
  {
    stageNumber: 'STAGE 06',
    title: 'Generative AI & Intelligent Apps',
    description:
      'Designed end-to-end intelligent systems, automated workflows, Django backend integrations, and modern AI application flows.',
    tagline: 'ORCHESTRATING COGNITIVE SYSTEMS',
  },
  {
    stageNumber: 'STAGE 07 • HORIZON',
    title: 'Production AI Engineering',
    description:
      'Focused on high-reliability inference serving, robust data validation pipelines, system safety, and real-world impact.',
    tagline: 'ENGINEERING FOR THE FUTURE',
    isHorizon: true,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming',
    skills: ['Python', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    category: 'AI & Machine Learning',
    skills: ['Machine Learning', 'Deep Learning', 'NLP Fundamentals', 'Generative AI'],
  },
  {
    category: 'Computer Vision',
    skills: ['OpenCV', 'Computer Vision'],
  },
  {
    category: 'Data Science',
    skills: ['NumPy', 'Pandas'],
  },
  {
    category: 'Backend Systems',
    skills: ['Django'],
  },
  {
    category: 'Tooling & Ops',
    skills: ['Git', 'GitHub'],
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    company: 'Nexvra Solutions',
    role: 'Python Developer / Python Developer Intern',
    type: 'Internship',
    badge: 'Independently Secured',
    highlight:
      'Awarded through an external competitive job search and direct technical assessment—not a college placement.',
    description:
      'Engineered modular Python software components, developed backend logic, and contributed to software application architecture and testing workflows.',
    responsibilities: [
      'Independently pursued and secured role via external competitive technical screening.',
      'Developed and debugged clean, maintainable Python backend components.',
      'Participated in application workflow logic and software validation.'
    ],
  },
  {
    company: 'IT Desk',
    role: 'Machine Learning Intern',
    type: 'Internship',
    description:
      'Worked with machine learning datasets, statistical modeling workflows, data preprocessing, and predictive analytics implementations.',
    responsibilities: [
      'Preprocessed and structured datasets for ML model experimentation.',
      'Conducted exploratory data analysis and feature evaluation.',
      'Evaluated machine learning algorithms for predictive accuracy.'
    ],
  },
  {
    company: 'G-Tech',
    role: 'Deep Learning Intern',
    type: 'Internship',
    description:
      'Explored deep learning architectures, neural network concepts, model training procedures, and convolutional transformations.',
    responsibilities: [
      'Studied and experimented with multi-layer neural network concepts.',
      'Assisted in data pipeline preparation for deep learning training sessions.',
      'Monitored loss convergence and model evaluation metrics.'
    ],
  },
  {
    company: 'MyInspection',
    role: 'Internship',
    type: 'Internship',
    description:
      'Contributed to software inspection processes, quality testing methodologies, and procedural system evaluations.',
    responsibilities: [
      'Participated in system quality assurance reviews and software inspection checks.',
      'Documented operational workflows and testing observations.'
    ],
  },
];
