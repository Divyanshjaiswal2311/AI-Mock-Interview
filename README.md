#  AI Mock Interview - AI-Powered Interview Practice Platform
DemoLink = https://vercel.com/divyanshu-jaiswals-projects-e940d47a/ai-mock-interview

<div align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react" alt="React 18.3.1" />
  <img src="https://img.shields.io/badge/TypeScript-5.6.2-blue?style=for-the-badge&logo=typescript" alt="TypeScript 5.6.2" />
  <img src="https://img.shields.io/badge/Vite-6.0.5-purple?style=for-the-badge&logo=vite" alt="Vite 6.0.5" />
  <img src="https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS 3.4.17" />
</div>

<div align="center">
  <img src="https://img.shields.io/badge/Firebase-11.10.0-orange?style=for-the-badge&logo=firebase" alt="Firebase 11.10.0" />
  <img src="https://img.shields.io/badge/Clerk-5.41.0-green?style=for-the-badge&logo=clerk" alt="Clerk 5.41.0" />
  <img src="https://img.shields.io/badge/Gemini-0.21.0-yellow?style=for-the-badge&logo=google" alt="Google Gemini 0.21.0" />
</div>

<br />

<div align="center">
  <h3> Master Your Technical Interviews with AI-Powered Practice Sessions</h3>
  <p>Practice with AI-generated questions, get instant feedback, and boost your confidence to ace any technical interview.</p>
</div>

---

##  Features

###  **AI-Powered Question Generation**
- **Role-specific questions** generated using Google Gemini AI
- **Experience-level customization** for personalized practice
- **Tech stack targeting** for relevant technical questions
- **Dynamic question bank** that adapts to your needs

###  **Voice-Based Practice**
- **Natural speech recognition** for realistic interview simulation
- **Real-time transcription** of your answers
- **Webcam preview** (optional, no recording)
- **Practice anywhere, anytime** with your microphone

###  **Instant AI Feedback**
- **Detailed analysis** of your responses
- **1-10 rating system** with actionable insights
- **Comparison with expected answers** for learning
- **Personalized improvement suggestions**

###  **Progress Tracking**
- **Performance analytics** over time
- **Interview history** and results
- **Skill development insights** 
- **Dashboard with comprehensive overview**

###  **Secure Authentication**
- **Clerk-powered authentication** with social login options
- **User data protection** and privacy
- **Secure API endpoints** for all interactions

---

##  Tech Stack

### **Frontend**
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript 5.6.2** - Type-safe development experience
- **Vite 6.0.5** - Lightning-fast build tool and dev server
- **Tailwind CSS 3.4.17** - Utility-first CSS framework

### **UI Components**
- **shadcn/ui** - Beautiful, accessible component library
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React** - Beautiful & consistent icon toolkit
- **Framer Motion** - Production-ready motion library

### **Backend & Services**
- **Firebase Firestore** - NoSQL cloud database
- **Clerk** - Authentication and user management
- **Google Gemini AI** - Advanced AI question generation and feedback

### **Development Tools**
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatting
- **Husky** - Git hooks for quality assurance

---

##  Getting Started

### **Prerequisites**
- Node.js 18+ 
- npm, yarn, or pnpm
- Firebase project with Firestore enabled
- Clerk application with publishable key
- Google Gemini API key

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ai-mock-interview.git
   cd ai-mock-interview
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Setup**
   Create a `.env` file in the project root:
   ```env
   # Clerk Authentication
   VITE_CLERK_PUBLISHABLE_KEY=pk_live_or_test_...
   
   # Google Gemini AI
   VITE_GEMINI_API_KEY=your_gemini_api_key
   
   # Firebase Configuration
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

---

##  Usage

### **1. Create Your Interview**
- Navigate to `/generate/create`
- Fill in job details (role, experience, tech stack)
- AI generates 5 personalized questions

### **2. Practice & Record**
- Start your mock interview
- Answer questions using voice recognition
- Get real-time feedback and ratings

### **3. Review & Improve**
- Analyze your performance
- Review AI feedback and suggestions
- Track progress over time

---

##  Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── ...             # Feature-specific components
├── routes/              # Page components
├── layouts/             # Layout wrappers
├── config/              # Configuration files
├── handlers/            # Business logic handlers
├── lib/                 # Utility functions
├── types/               # TypeScript type definitions
├── scripts/             # AI integration scripts
└── provider/            # Context providers
```

---

##  Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run preview          # Preview production build

# Code Quality
npm run lint             # Run ESLint
npm run type-check       # TypeScript type checking

# Testing
npm run test             # Run tests
npm run test:watch       # Run tests in watch mode
```

---

##  Deployment

### **Firebase Hosting (Recommended)**
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase
firebase init hosting

# Build and deploy
npm run build
firebase deploy
```

### **Vercel**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### **Netlify**
```bash
# Build the project
npm run build

# Deploy to Netlify (drag and drop dist folder)
```

---

##  Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_CLERK_PUBLISHABLE_KEY` | Clerk authentication key | ✅ |
| `VITE_GEMINI_API_KEY` | Google Gemini AI API key | ✅ |
| `VITE_FIREBASE_API_KEY` | Firebase API key | ✅ |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase auth domain | ✅ |
| `VITE_FIREBASE_PROJECT_ID` | Firebase project ID | ✅ |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket | ✅ |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase messaging sender ID | ✅ |
| `VITE_FIREBASE_APP_ID` | Firebase app ID | ✅ |

---

##  Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### **Development Guidelines**
- Follow TypeScript best practices
- Use conventional commit messages
- Ensure all tests pass
- Update documentation as needed

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
##  Acknowledgments

- **Google Gemini AI** for intelligent question generation
- **Clerk** for seamless authentication
- **Firebase** for reliable backend services
- **shadcn/ui** for beautiful components
- **Vite** for lightning-fast development

---

##  Support

- **Documentation**: [Project Wiki](https://github.com/Divyanshujaiswal2311/ai-mock-interview/wiki)
- **Issues**: [GitHub Issues](https://github.com/Divyanshujaiswal2311/ai-mock-interview/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Divyanshukjaiswal2311/ai-mock-interview/discussions)
- **Email**: jaiswaldivyanshu2311@gmail.com

---
<div align="center">
  <p>Made with love by Divyanshu Jaiswal</p>
  <p>Star this repository if you find it helpful! </p>
</div>


