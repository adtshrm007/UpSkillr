# UpSkillr — The Tech Learning & Collaboration Ecosystem

**Learn, Teach, and Grow in Tech — All in One Platform.**

> UpSkillr is a modern, developer-first platform designed to facilitate peer-to-peer tech learning, mentorship, and community-driven growth. Unlike traditional platforms, UpSkillr treats engineering knowledge as a currency, enabling a circular economy of skill sharing where every interaction creates value.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Product Vision](#-product-vision)
- [Core Features](#-core-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [API Documentation](#-api-documentation)
- [Development Guide](#-development-guide)
- [Security & Best Practices](#-security--best-practices)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [Support & Community](#-support--community)

---

## 📌 Overview

UpSkillr transforms tech education through a **skill-sharing economy** where developers exchange knowledge directly with peers or learn from mentors using a credit-based system. The platform leverages real-time collaboration, AI-powered matching, and community engagement to accelerate career growth.

### Key Differentiators

- **Zero-Cost Peer Learning:** Mutual skill swaps require no credits—both parties win.
- **Verified Expertise:** Mentors ranked by community reviews and teaching history.
- **Real-Time Collaboration:** Built-in video, chat, and code-sharing for immersive sessions.
- **AI-Optimized:** Smart matching, personalized roadmaps, and learning optimization.
- **Community-Driven:** Cohort-based learning with group discussions and shared resources.

---

## 🚀 Product Vision

UpSkillr aims to be the **complete tech growth platform** where users can:

| Goal | Description |
|------|-------------|
| **Learn** | Acquire any tech skill from verified peers or industry-experienced mentors |
| **Teach** | Share expertise to earn Skill Credits and build professional reputation |
| **Collaborate** | Engage in real-time sessions, cohorts, and community-driven projects |
| **Grow** | Follow AI-optimized roadmaps, track progress, and achieve mastery |

### The Skill-Sharing Economy

UpSkillr enables a **circular economy of knowledge**:
- Every teaching session strengthens your profile.
- Every learning experience adds credentials to your skill set.
- Credits earned through teaching unlock premium mentorship.
- Community contributions build global reputation.

---

## ✨ Core Features

### 1. **Skill Swap** (Peer-to-Peer Learning)

The heart of UpSkillr—direct peer-to-peer knowledge exchange.

**Key Benefits:**
- **Mutual Exchange:** Trade skills 1-on-1 (e.g., teach React, learn System Design).
- **Zero Cost:** Both parties earn XP and session history with no credit expenditure.
- **Real-Time Collaboration:** Integrated WebRTC video, in-session chat, and shared resources.
- **Flexible Duration:** Sessions adapt from 30-minute quick calls to multi-hour deep dives.

**How It Works:**
1. Browse peer skills in the **Skill Exchange marketplace**.
2. Request a swap with someone learning what you teach.
3. Schedule a real-time session with built-in tools.
4. Earn XP, badges, and session history.

---

### 2. **Paid Mentorship** (Credit-Based Learning)

Accelerate growth with structured learning from experienced professionals.

**Features:**
- **Credit-Based Economy:** Spend **Skill Credits** earned from teaching or purchased directly.
- **Verified Mentors:** Ranked by community ratings, years of experience, and specialization.
- **Structured Sessions:** Access to expert guidance, code reviews, and technical deep dives.
- **Flexible Scheduling:** Book sessions aligned with mentor availability across time zones.
- **Session History:** Complete records for future reference and resume building.

**Pricing Model:**
- **Entry-Level Mentors:** 5-10 credits/hour
- **Mid-Level Mentors:** 10-20 credits/hour
- **Expert Mentors:** 20-50 credits/hour

---

### 3. **Tech Communities & Cohorts**

Intensive, bootcamp-style learning communities for accelerated growth.

**Features:**
- **Live Collaborative Sessions:** Real-time coding, discussions, and problem-solving.
- **Resource Hub:** Shared notes, session recordings, links, and learning materials.
- **Peer Discussions:** Channel-based conversations, Q&A forums, and collaborative projects.
- **Progress Tracking:** Cohort-wide leaderboards, milestone tracking, and completion badges.
- **Expert Access:** Community mentors available for live office hours and guidance.

**Cohort Types:**
- **30-Day Sprints:** Intensive skill mastery in specific domains (e.g., React, System Design).
- **Semester-Long Programs:** Deep, structured learning with projects and assessments.
- **Special Interest Groups:** Niche communities (e.g., Web3, ML, DevOps).

---

### 4. **AI-Powered Learning Experience**

Smart, data-driven features that optimize your growth trajectory.

**Key Components:**

#### **Personalized Tech Roadmaps**
- AI analyzes your current skills, goals, and learning pace.
- Generates customized learning paths with milestones and resources.
- Adapts recommendations based on your progress and preferences.

#### **Smart Matching**
- **Peer Matching:** Connect with learners seeking complementary skills.
- **Mentor Matching:** Suggest mentors aligned with your goals and learning style.
- **Cohort Recommendations:** Suggest communities matching your interests.

#### **Learning Optimization**
- **Streak Tracking:** Maintain 5-day learning streaks for rewards.
- **Progress Analytics:** Visualize skill growth, time invested, and achievements.
- **Adaptive Suggestions:** Contextual recommendations to keep momentum.
- **Goal Tracking:** Break down learning into manageable milestones.

---

## 🛠️ Technology Stack

### **Frontend Architecture**

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | React.js (Vite) | Fast, modular UI development |
| **Styling** | Tailwind CSS + Vanilla CSS | Glassmorphic, premium design system |
| **Real-Time** | Socket.io-client | Live notifications, chat, events |
| **Video/Audio** | WebRTC | Peer-to-peer video sessions |
| **State Management** | Context API + Custom Hooks | Lightweight, scalable state |
| **Build Tool** | Vite | Lightning-fast HMR and bundling |

### **Backend Architecture**

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Runtime** | Node.js | JavaScript server runtime |
| **Framework** | Express.js | Minimal, flexible HTTP server |
| **Database** | MongoDB + Mongoose | Flexible schema, document-oriented |
| **Real-Time** | Socket.io | Signaling, notifications, events |
| **Auth** | JWT (JSON Web Tokens) | Stateless, scalable authentication |
| **Video Signaling** | WebRTC Perfect Negotiation | Robust peer connection setup |

### **Deployment & Infrastructure**

| Component | Options | Notes |
|-----------|---------|-------|
| **Hosting** | AWS / Heroku / Railway | Scalable cloud infrastructure |
| **Database** | MongoDB Atlas | Managed cloud MongoDB |
| **CDN** | Cloudflare | Global edge caching |
| **Email** | SendGrid / Mailgun | Transactional email service |

---

## 📂 Project Structure

```
📦 UpSkillr/
 ├── 📂 client/                          # React Frontend (Vite)
 │   ├── 📂 src/
 │   │   ├── 📂 components/
 │   │   │   ├── 📂 ui/                  # Glassmorphic UI components
 │   │   │   │   ├── Button.jsx
 │   │   │   │   ├── Card.jsx
 │   │   │   │   ├── Modal.jsx
 │   │   │   │   └── ... (other UI primitives)
 │   │   │   ├── 📂 features/            # Feature-specific components
 │   │   │   │   ├── 📂 SkillSwap/
 │   │   │   │   ├── 📂 Mentorship/
 │   │   │   │   ├── 📂 Communities/
 │   │   │   │   └── 📂 Dashboard/
 │   │   │   └── 📂 shared/              # Reusable layout components
 │   │   ├── 📂 pages/
 │   │   │   ├── Dashboard.jsx           # User overview & sessions
 │   │   │   ├── LearningRoom.jsx        # Session interface
 │   │   │   ├── Explore.jsx             # Browse peers & mentors
 │   │   │   ├── Profile.jsx             # User profile & skills
 │   │   │   ├── Communities.jsx         # Cohort discovery
 │   │   │   └── Settings.jsx            # User preferences
 │   │   ├── 📂 context/
 │   │   │   ├── AuthContext.jsx         # Authentication state
 │   │   │   ├── ToastContext.jsx        # Notifications
 │   │   │   └── DashboardContext.jsx    # Dashboard state
 │   │   ├── 📂 services/
 │   │   │   ├── api.js                  # Axios instance & interceptors
 │   │   │   ├── authService.js          # Auth API calls
 │   │   │   ├── skillService.js         # Skill management
 │   │   │   ├── sessionService.js       # Session management
 │   │   │   └── socketService.js        # Socket.io setup
 │   │   ├── 📂 hooks/
 │   │   │   ├── useAuth.js
 │   │   │   ├── useSocket.js
 │   │   │   └── useVideoCall.js
 │   │   ├── 📂 utils/
 │   │   │   ├── constants.js            # App-wide constants
 │   │   │   ├── formatters.js           # Data formatting helpers
 │   │   │   └── validators.js           # Form & data validation
 │   │   ├── App.jsx                     # Root component
 │   │   ├── index.css                   # Design system & globals
 │   │   └── main.jsx                    # Entry point
 │   ├── public/
 │   │   ├── favicon.ico
 │   │   └── ... (static assets)
 │   ├── package.json
 │   ├── vite.config.js
 │   └── .env.example
 │
 ├── 📂 server/                          # Node.js Backend
 │   ├── 📂 src/
 │   │   ├── 📂 models/                  # Mongoose schemas
 │   │   │   ├── User.js
 │   │   │   ├── Skill.js
 │   │   │   ├── Session.js
 │   │   │   ├── SkillCredit.js
 │   │   │   ├── Feedback.js
 │   │   │   └── Community.js
 │   │   ├── 📂 controllers/             # Business logic
 │   │   │   ├── authController.js
 │   │   │   ├── skillController.js
 │   │   │   ├── sessionController.js
 │   │   │   ├── mentorController.js
 │   │   │   ├── communityController.js
 │   │   │   └── analyticsController.js
 │   │   ├── 📂 routes/                  # API endpoints
 │   │   │   ├── authRoutes.js
 │   │   │   ├── skillRoutes.js
 │   │   │   ├── sessionRoutes.js
 │   │   │   ├── userRoutes.js
 │   │   │   └── communityRoutes.js
 │   │   ├── 📂 middleware/
 │   │   │   ├── auth.js                 # JWT verification
 │   │   │   ├── errorHandler.js         # Centralized error handling
 │   │   │   └── logger.js               # Request logging
 │   │   ├── 📂 services/                # External integrations
 │   │   │   ├── emailService.js         # Transactional emails
 │   │   │   ├── aiService.js            # AI/ML recommendations
 │   │   │   └── analyticsService.js     # Event tracking
 │   │   ├── 📂 utils/
 │   │   │   ├── validators.js           # Input validation
 │   │   │   ├── jwt.js                  # Token utilities
 │   │   │   └── helpers.js              # General utilities
 │   │   ├── 📂 config/
 │   │   │   ├── database.js             # MongoDB connection
 │   │   │   └── socketConfig.js         # Socket.io setup
 │   │   └── server.js                   # Express & Socket.io entry
 │   ├── package.json
 │   ├── .env.example
 │   └── .gitignore
 │
 ├── 📂 docs/                            # Documentation
 │   ├── API.md                          # API reference
 │   ├── ARCHITECTURE.md                 # System design
 │   ├── DEPLOYMENT.md                   # Production setup
 │   └── CONTRIBUTING.md                 # Developer guide
 │
 ├── README.md                           # This file
 ├── .gitignore
 └── package.json                        # Root workspace

```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v16.x or higher)
- **npm** or **yarn** (v7.x or higher)
- **MongoDB** (local or Atlas cloud)
- **Git**

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/upskillr.git
cd upskillr
```

### 2. Install Dependencies

**Frontend:**
```bash
cd client
npm install
```

**Backend:**
```bash
cd ../server
npm install
```

### 3. Configure Environment Variables

**Create `.env` files in both directories:**

**`client/.env`:**
```env
VITE_API_URL=http://localhost:6000
VITE_SOCKET_URL=http://localhost:6000
VITE_ENV=development
```

**`server/.env`:**
```env
# Server
PORT=6000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/upskillr
# OR for Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/upskillr

# Authentication
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRE=7d

# Email Service (Optional)
SENDGRID_API_KEY=your-sendgrid-key
SENDER_EMAIL=noreply@upskillr.com

# AI Service (Optional)
OPENAI_API_KEY=your-openai-api-key

# CORS
CORS_ORIGIN=http://localhost:5173
```

### 4. Run in Development Mode

**Start MongoDB (if local):**
```bash
mongod
```

**Terminal 1 - Backend (Port 6000):**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend (Port 5173):**
```bash
cd client
npm run dev
```

Open http://localhost:5173 in your browser.

### 5. Verify Installation

- Frontend loads without errors.
- Backend API responds at `http://localhost:6000/api/health`.
- WebSocket connection established (check browser console).

---

## 📡 API Documentation

### Authentication Endpoints

**POST** `/api/auth/register`
- Register a new user.
- Body: `{ email, password, username, displayName }`
- Returns: `{ user, token }`

**POST** `/api/auth/login`
- Authenticate user.
- Body: `{ email, password }`
- Returns: `{ user, token }`

**POST** `/api/auth/logout`
- Invalidate session.
- Headers: `Authorization: Bearer <token>`

**GET** `/api/auth/me`
- Get current user profile.
- Headers: `Authorization: Bearer <token>`
- Returns: `{ user }`

### Skill Endpoints

**GET** `/api/skills`
- List all skills with filters.
- Query: `?category=backend&level=intermediate&page=1`
- Returns: `{ skills, total, page }`

**POST** `/api/skills`
- Create a new skill.
- Headers: `Authorization: Bearer <token>`
- Body: `{ name, category, level, description }`
- Returns: `{ skill }`

**GET** `/api/skills/:skillId`
- Get skill details and reviews.
- Returns: `{ skill, mentors, peers }`

### Session Endpoints

**POST** `/api/sessions`
- Initiate a new session (skill swap or mentorship).
- Headers: `Authorization: Bearer <token>`
- Body: `{ type, skillId, peerId, mentorId, startTime, duration }`
- Returns: `{ session, offer }`

**GET** `/api/sessions/:sessionId`
- Get session details.
- Returns: `{ session, messages }`

**POST** `/api/sessions/:sessionId/end`
- End a session and collect feedback.
- Headers: `Authorization: Bearer <token>`
- Body: `{ rating, feedback }`

**POST** `/api/sessions/:sessionId/messages`
- Send a message in session chat.
- Headers: `Authorization: Bearer <token>`
- Body: `{ message }`
- Emits WebSocket event: `message:new`

For complete API documentation, see [docs/API.md](./docs/API.md).

---

## 💻 Development Guide

### Code Style & Conventions

- **JavaScript:** ES6+ with async/await.
- **React:** Functional components with hooks.
- **Naming:** camelCase for variables/functions, PascalCase for components.
- **Comments:** JSDoc for functions, inline comments for complex logic.

### Common Development Tasks

**Add a New Skill Type:**

1. Update `server/src/models/Skill.js` with new category.
2. Create UI component in `client/src/components/features/SkillSwap/`.
3. Add API endpoint in `server/src/routes/skillRoutes.js`.
4. Test with API client (Postman/Insomnia).

**Create a New Page:**

1. Create component in `client/src/pages/`.
2. Add route in `client/src/App.jsx`.
3. Create corresponding service in `client/src/services/`.
4. Add navigation link in header.

**Add Socket.io Events:**

1. Define listener in `client/src/hooks/useSocket.js`.
2. Emit event from component using hook.
3. Handle event in `server/src/server.js` socket handler.
4. Broadcast to affected clients.

### Testing Guidelines

```bash
# Run frontend tests
cd client && npm test

# Run backend tests
cd server && npm test

# Run linting
npm run lint

# Format code
npm run format
```

---

## 🛡️ Security & Best Practices

### Authentication & Authorization

- **JWT Tokens:** Stateless authentication, stored securely in httpOnly cookies.
- **CORS:** Configured to accept requests only from trusted origins.
- **Password Security:** Bcrypt hashing with salt rounds of 10+.

### Data Protection

- **HTTPS Only:** All production communication encrypted.
- **Input Validation:** Server-side validation on all endpoints.
- **SQL/NoSQL Injection:** Mongoose prevents injection attacks.
- **XSS Prevention:** React's automatic escaping + sanitization libraries.

### WebRTC Security

- **DTLS-SRTP:** Encrypted peer connections.
- **ICE Candidates:** Filtered to prevent IP leaks.
- **Perfect Negotiation:** Robust signaling to prevent connection drops.

### Best Practices

1. **Never commit `.env` files.** Use `.env.example` as template.
2. **Rotate JWT secrets regularly** in production.
3. **Rate limit API endpoints** to prevent abuse.
4. **Log security events** (failed auth, admin actions).
5. **Keep dependencies updated:** `npm audit` regularly.
6. **Use HTTPS in production.**

---

## 🗓️ Roadmap

### Phase 1: AI Integration & Smart Features ⚙️ *In Progress*

- [ ] **Recommendation Engine:** Vector-based matching for mentors/peers.
- [ ] **Roadmap Generator:** LLM-powered learning paths.
- [ ] **Analytics Dashboard:** Detailed progress tracking & insights.
- [ ] **Smart Notifications:** Context-aware alerts & suggestions.

### Phase 2: Community & Collaboration 🚀 *Planned*

- [ ] **Cohort Management:** Backend support for community events.
- [ ] **Knowledge Base:** Persistent repository for session notes.
- [ ] **Group Chat:** Community-wide channels (Discord-style).
- [ ] **Collaborative Projects:** Group coding challenges & builds.

### Phase 3: Gamification & Marketplace 🎮 *Planned*

- [ ] **Code Legend Tiers:** Expanded rank system with badges.
- [ ] **Credit Marketplace:** Buy/sell/transfer Skill Credits securely.
- [ ] **Global Leaderboards:** Weekly/monthly achievement rankings.
- [ ] **Achievement System:** Badges for milestones & contributions.

### Phase 4: Mobile & Accessibility 📱 *Future*

- [ ] Native iOS/Android apps (React Native).
- [ ] Offline session playback.
- [ ] Accessibility audit & improvements.
- [ ] Multi-language support.

---

## 🤝 Contributing

We love contributions! Here's how to help:

### Getting Started

1. **Fork** the repository.
2. **Create** a feature branch: `git checkout -b feature/your-feature`.
3. **Commit** changes with clear messages.
4. **Push** to your fork and create a **Pull Request**.

### PR Guidelines

- Link related issues in PR description.
- Include screenshots for UI changes.
- Update documentation if needed.
- Ensure tests pass: `npm test`.
- Keep PRs focused and reasonably sized.

### Code Review Process

1. Automated checks (linting, tests).
2. Manual review by maintainers.
3. Feedback & iteration.
4. Merge upon approval.

See [CONTRIBUTING.md](./docs/CONTRIBUTING.md) for detailed guidelines.

---

## 📞 Support & Community

### Getting Help

- **GitHub Issues:** Report bugs and request features.
- **Discussions:** Ask questions and brainstorm in GitHub Discussions.
- **Discord:** Join our community server for real-time chat.
- **Email:** support@upskillr.com for urgent matters.

### Community Resources

- **Docs:** [docs/](./docs/)
- **API Reference:** [docs/API.md](./docs/API.md)
- **Architecture:** [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md)
- **FAQ:** [docs/FAQ.md](./docs/FAQ.md)

### Stay Connected

- Follow us on [Twitter](https://twitter.com/upskillr)
- Star ⭐ this repo if you find it helpful!
- Share your learnings and achievements with #UpSkillr

---

## 📄 License

UpSkillr is licensed under the **MIT License**. See [LICENSE](./LICENSE) for details.

---

## 🙏 Acknowledgments

Special thanks to:
- Our community of developers contributing feedback and ideas.
- Open-source projects: React, Express, Socket.io, WebRTC.
- Early adopters testing and refining the platform.

---

<div align="center">

### Made with ❤️ by the UpSkillr Team

**Master your craft through collaboration.**

[Website](https://upskillr.com) • [Twitter](https://twitter.com/upskillr) • [Discord](https://discord.gg/upskillr) • [Contribute](./CONTRIBUTING.md)

</div>
