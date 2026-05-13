<div align="center">

<br />

# ⚡ UpSkillr

### *The Skill-Exchange Economy for Developers*

**Learn by Teaching. Grow by Sharing. Build Together.**

<br />

[![Status](https://img.shields.io/badge/Status-Active%20Development-6366f1?style=for-the-badge)](https://github.com/yourusername/upskillr)
[![License](https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge)](./LICENSE)
[![Node](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js)](https://nodejs.org)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb)](https://mongodb.com/atlas)

<br />

[**Explore Features**](#-core-features) · [**Quick Start**](#-getting-started) · [**API Docs**](#-api-documentation) · [**Roadmap**](#-roadmap) · [**Contribute**](#-contributing)

<br />

</div>

---

## 🔥 The Problem We're Solving

> **The tech industry has a knowledge hoarding problem.**

Every day, millions of developers sit on valuable expertise — React patterns they've perfected, system design knowledge they've hard-won, DevOps tricks that took months to learn — and that knowledge goes nowhere.

At the same time, developers trying to level up are left with three broken options:

| Option | The Reality |
|--------|-------------|
| 📺 Watch tutorials | Passive learning. No real feedback. No accountability. |
| 💸 Pay for bootcamps | $10,000–$20,000 price tags. One-size-fits-all curriculum. |
| 🙏 Find a mentor | Cold outreach. Low reply rates. Expensive hourly rates. |

**None of these create a feedback loop. None of them scale.**

There's no platform where a senior React developer can *trade* what they know with a DevOps engineer who wants to learn React — and vice versa. Knowledge that should be flowing freely is locked behind paywalls, cold DMs, and luck.

---

## 💡 Our Solution

**UpSkillr** is a **peer-to-peer skill exchange platform** where developers trade expertise directly, mentor each other through a credit economy, and grow together in structured communities.

Think of it as **Airbnb for developer knowledge** — where every developer is both a host *and* a guest. You teach what you know, you learn what you need, and the platform handles everything in between.

```
You know React.         Someone else knows System Design.
You want System Design. They want React.

→ UpSkillr connects you. You both walk away smarter. Zero cost.
```

No gatekeeping. No expensive intermediaries. Just developers helping developers — at scale.

---

## 🎯 Who Is UpSkillr For?

| Persona | Use Case |
|---------|----------|
| 🧑‍💻 **Junior Developer** | Learn in-demand skills from real practitioners, not outdated courses |
| 🚀 **Mid-Level Engineer** | Fill knowledge gaps, prep for senior roles, expand into new domains |
| 👨‍🏫 **Senior Developer** | Monetize expertise, build reputation, give back to the community |
| 🔄 **Career Switcher** | Get guided, practical help transitioning into tech roles |
| 🏢 **Tech Teams** | Up-skill team members through structured cohort programs |

---

## ✨ Core Features

### 🔄 Skill Swap — The Free Peer Exchange

The heart of UpSkillr. Trade skills directly with other developers, **completely free**.

- **1-on-1 Exchanges:** Teach React, learn System Design. Teach Python, learn DevOps.
- **Real-Time Sessions:** Integrated WebRTC video, live code sharing, and in-session chat.
- **No Cost:** Both parties earn XP and grow their profile — no credits needed.
- **Flexible Scheduling:** 30-minute quick calls to multi-hour deep dives.

> **Why it matters:** This is peer learning as it was meant to be — mutual, practical, and genuinely valuable for both sides.

---

### 🎓 Paid Mentorship — Credit-Based Expert Access

For when you need structured guidance from a seasoned professional.

- **Skill Credits Economy:** Earn credits by teaching; spend them on mentors. Or purchase directly.
- **Verified Mentors:** Ranked by community ratings, teaching history, and specialization.
- **Structured Learning:** Code reviews, technical deep dives, career coaching.
- **Cross-Timezone Booking:** Flexible scheduling built for global teams.

**Credit Tiers:**

| Mentor Level | Rate | Best For |
|---|---|---|
| Peer Expert | 5–10 credits/hr | Specific skill gaps, quick unblocking |
| Mid-Level Pro | 10–20 credits/hr | Career guidance, project mentorship |
| Industry Expert | 20–50 credits/hr | Architecture reviews, senior prep |

---

### 👥 Tech Communities & Cohorts — Learn at Scale

Structured, community-driven learning environments for focused growth.

- **30-Day Sprints:** Intensive skill mastery in one domain (React, System Design, DevOps).
- **Semester Programs:** Long-form, project-based learning with real assessments.
- **Special Interest Groups:** Niche communities for Web3, ML, embedded systems, and more.
- **Resource Hub:** Shared notes, recordings, links, and curated materials — all in one place.
- **Expert Office Hours:** Live sessions with mentors embedded inside your community.

---

### 🤖 AI-Powered Growth Engine

The intelligence layer that makes UpSkillr uniquely effective.

- **Personalized Roadmaps:** AI analyzes your skill profile, goals, and pace — then generates a custom learning path.
- **Smart Matching:** Connects you with the right peer, mentor, or cohort based on compatibility, not just tags.
- **Streak & Progress Tracking:** Visualize your growth over time, maintain momentum with streaks and milestones.
- **Adaptive Recommendations:** The system learns what works for *you* and adjusts continuously.

---

## 🛠️ Technology Stack

UpSkillr is built for **performance, real-time collaboration, and scale**.

### Frontend

| Technology | Purpose |
|---|---|
| **React 18 + Vite** | Blazing-fast UI with modular component architecture |
| **Tailwind CSS + Vanilla CSS** | Glassmorphic, premium design system |
| **Socket.io Client** | Real-time notifications, chat, and live events |
| **WebRTC** | Peer-to-peer video & audio for sessions |
| **Context API + Custom Hooks** | Lightweight, scalable state management |

### Backend

| Technology | Purpose |
|---|---|
| **Node.js + Express.js** | Scalable REST API and HTTP layer |
| **MongoDB + Mongoose** | Flexible document store for dynamic skill data |
| **Socket.io** | WebSocket layer for signaling and real-time events |
| **JWT Authentication** | Stateless, secure auth with refresh token support |
| **WebRTC Perfect Negotiation** | Robust peer connection setup and recovery |

### Infrastructure

| Component | Solution |
|---|---|
| **Cloud Hosting** | AWS / Railway / Render |
| **Database** | MongoDB Atlas (managed, globally distributed) |
| **CDN** | Cloudflare (edge caching, DDoS protection) |
| **Email** | SendGrid (transactional emails) |
| **AI/ML** | OpenAI API (roadmap generation, matching) |

---

## 📂 Project Structure

```
📦 UpSkillr/
 ├── 📂 client/                          # React Frontend (Vite)
 │   └── 📂 src/
 │       ├── 📂 components/
 │       │   ├── 📂 ui/                  # Glassmorphic UI primitives
 │       │   ├── 📂 features/            # Feature-specific components
 │       │   │   ├── 📂 SkillSwap/
 │       │   │   ├── 📂 Mentorship/
 │       │   │   ├── 📂 Communities/
 │       │   │   └── 📂 Dashboard/
 │       │   └── 📂 shared/              # Layout, nav, shared components
 │       ├── 📂 pages/
 │       │   ├── Dashboard.jsx           # User hub & upcoming sessions
 │       │   ├── LearningRoom.jsx        # Live session interface
 │       │   ├── Explore.jsx             # Browse peers & mentors
 │       │   ├── Profile.jsx             # Public profile & skill portfolio
 │       │   └── Communities.jsx         # Cohort discovery & joining
 │       ├── 📂 context/                 # Auth, Toast, Dashboard state
 │       ├── 📂 services/                # API, auth, skills, sessions, sockets
 │       ├── 📂 hooks/                   # useAuth, useSocket, useVideoCall
 │       └── 📂 utils/                   # Constants, formatters, validators
 │
 ├── 📂 server/                          # Node.js Backend
 │   └── 📂 src/
 │       ├── 📂 models/                  # Mongoose schemas (User, Skill, Session…)
 │       ├── 📂 controllers/             # Business logic per feature
 │       ├── 📂 routes/                  # REST API route definitions
 │       ├── 📂 middleware/              # Auth, error handling, logging
 │       ├── 📂 services/                # Email, AI, analytics integrations
 │       └── server.js                   # Express + Socket.io entry point
 │
 ├── 📂 docs/                            # API reference, architecture, deployment
 └── README.md
```

---

## 🚀 Getting Started

### Prerequisites

| Requirement | Version |
|---|---|
| Node.js | v18.x or higher |
| npm | v9.x or higher |
| MongoDB | Local or [Atlas](https://cloud.mongodb.com) |
| Git | Any recent version |

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/upskillr.git
cd upskillr
```

### 2. Install Dependencies

```bash
# Install frontend dependencies
cd client && npm install

# Install backend dependencies
cd ../server && npm install
```

### 3. Configure Environment Variables

Copy the example env files and fill in your values:

```bash
cp client/.env.example client/.env
cp server/.env.example server/.env
```

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

# Authentication
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRE=7d

# Email (Optional)
SENDGRID_API_KEY=your-sendgrid-key
SENDER_EMAIL=noreply@upskillr.com

# AI Features (Optional)
OPENAI_API_KEY=your-openai-api-key

# CORS
CORS_ORIGIN=http://localhost:5173
```

### 4. Run in Development Mode

```bash
# Terminal 1 — Start the backend (port 6000)
cd server && npm run dev

# Terminal 2 — Start the frontend (port 5173)
cd client && npm run dev
```

Open **http://localhost:5173** in your browser.

### 5. Verify Your Setup

- ✅ Frontend loads at `http://localhost:5173`
- ✅ API health check responds at `http://localhost:6000/api/health`
- ✅ WebSocket connection established (visible in browser DevTools console)

---

## 📡 API Documentation

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/auth/register` | Create a new account |
| `POST` | `/api/auth/login` | Authenticate and receive token |
| `POST` | `/api/auth/logout` | Invalidate session |
| `GET` | `/api/auth/me` | Get current user profile |

### Skills

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/skills` | List all skills with filters (`?category=&level=&page=`) |
| `POST` | `/api/skills` | Create a new skill listing |
| `GET` | `/api/skills/:id` | Get skill details, mentors, and peers |

### Sessions

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/sessions` | Initiate a skill swap or mentorship session |
| `GET` | `/api/sessions/:id` | Get session details and chat history |
| `POST` | `/api/sessions/:id/end` | End session and submit feedback |
| `POST` | `/api/sessions/:id/messages` | Send in-session chat message |

> 📘 Full API reference: [docs/API.md](./docs/API.md)

---

## 💻 Development Guide

### Code Conventions

- **ES6+** with async/await throughout — no callback pyramids.
- **Functional React components** with hooks — no class components.
- **camelCase** for variables/functions; **PascalCase** for components and models.
- **JSDoc** for all exported functions; inline comments for non-obvious logic.

### Common Tasks

<details>
<summary><strong>Add a new skill category</strong></summary>

1. Update `server/src/models/Skill.js` with the new enum value.
2. Add UI for it in `client/src/components/features/SkillSwap/`.
3. Add or update the route in `server/src/routes/skillRoutes.js`.
4. Test via Postman or the frontend.

</details>

<details>
<summary><strong>Create a new page</strong></summary>

1. Create a component in `client/src/pages/`.
2. Register the route in `client/src/App.jsx`.
3. Add the API service in `client/src/services/`.
4. Link from the navigation header.

</details>

<details>
<summary><strong>Add a Socket.io event</strong></summary>

1. Define the listener in `client/src/hooks/useSocket.js`.
2. Emit the event from your component.
3. Handle it in `server/src/server.js` socket handler.
4. Broadcast to relevant connected clients.

</details>

### Running Tests

```bash
cd client && npm test        # Frontend tests
cd server && npm test        # Backend tests
npm run lint                  # ESLint check
npm run format                # Prettier formatting
```

---

## 🛡️ Security & Best Practices

### Authentication & Authorization
- **JWT** stored in `httpOnly` cookies — not localStorage. XSS-safe by default.
- **CORS** locked to trusted origins only.
- **Bcrypt** password hashing (salt rounds ≥ 10).

### Data Protection
- **HTTPS enforced** in production — no plain HTTP.
- **Server-side input validation** on every endpoint.
- **Mongoose ODM** sanitizes queries against NoSQL injection.
- **React's automatic escaping** + DOMPurify for user-generated content.

### WebRTC Security
- **DTLS-SRTP** encryption on all peer connections.
- **ICE candidate filtering** to prevent IP leakage.
- **Perfect Negotiation pattern** for robust, race-condition-free signaling.

### Developer Checklist
- [ ] Never commit `.env` files — use `.env.example` as the template.
- [ ] Rotate JWT secrets on every production deployment.
- [ ] Apply rate limiting to all public API endpoints.
- [ ] Run `npm audit` and resolve critical vulnerabilities before shipping.
- [ ] Log all security events (failed logins, privilege escalations).

---

## 🗓️ Roadmap

### ✅ Phase 0 — Foundation *(Shipped)*
- User auth, profiles, and skill listings
- Skill Swap with WebRTC video + chat
- Credit system for paid mentorship
- Community discovery and cohort pages

---

### ⚙️ Phase 1 — AI Integration *(In Progress)*
- [ ] **Recommendation Engine** — Vector-based mentor/peer matching
- [ ] **Roadmap Generator** — LLM-powered personalized learning paths
- [ ] **Analytics Dashboard** — Skill growth trends and session insights
- [ ] **Smart Notifications** — Context-aware alerts and nudges

---

### 🚀 Phase 2 — Community & Collaboration *(Planned)*
- [ ] Full cohort management with event scheduling
- [ ] Persistent Knowledge Base for session notes and resources
- [ ] Group channels (Discord-style) within communities
- [ ] Collaborative coding challenges and team builds

---

### 🎮 Phase 3 — Gamification & Marketplace *(Planned)*
- [ ] Expanded rank system: Code Legend tiers and badges
- [ ] Credit Marketplace — buy, sell, and transfer Skill Credits
- [ ] Global weekly/monthly leaderboards
- [ ] Achievement system with shareable milestone cards

---

### 📱 Phase 4 — Mobile & Scale *(Future)*
- [ ] Native iOS & Android apps (React Native)
- [ ] Offline session playback
- [ ] Full accessibility audit (WCAG 2.1 AA)
- [ ] Multi-language support (i18n)

---

## 🤝 Contributing

We're building UpSkillr in the open and **welcome contributors at all levels**.

### How to Contribute

1. **Fork** the repository on GitHub.
2. **Create** a feature branch: `git checkout -b feature/your-feature-name`
3. **Commit** with clear, descriptive messages.
4. **Push** to your fork and open a **Pull Request** against `main`.

### Pull Request Standards

- Reference the related issue in your PR description (`Closes #123`).
- Include screenshots or recordings for any UI changes.
- Update relevant documentation and tests.
- Keep PRs focused — one feature or fix per PR.

> 📘 Detailed guidelines: [docs/CONTRIBUTING.md](./docs/CONTRIBUTING.md)

---

## 📞 Support & Community

| Channel | Purpose |
|---|---|
| 🐛 [GitHub Issues](https://github.com/yourusername/upskillr/issues) | Bug reports and feature requests |
| 💬 [GitHub Discussions](https://github.com/yourusername/upskillr/discussions) | Questions, ideas, and brainstorming |
| 🎮 [Discord](https://discord.gg/upskillr) | Real-time community chat |
| 📧 [support@upskillr.com](mailto:support@upskillr.com) | Urgent or private matters |

### Quick Links

- 📖 [Full Documentation](./docs/)
- 🔌 [API Reference](./docs/API.md)
- 🏗️ [Architecture Overview](./docs/ARCHITECTURE.md)
- ❓ [FAQ](./docs/FAQ.md)

---

## 📄 License

UpSkillr is open-source software licensed under the **[MIT License](./LICENSE)**.  
You're free to use, modify, and distribute it — commercially or otherwise.

---

<div align="center">

<br />

### Built with ❤️ by developers, for developers.

**UpSkillr** — *Because the best way to master something is to teach it.*

<br />

[🌐 Website](https://upskillr.com) &nbsp;·&nbsp; [🐦 Twitter](https://twitter.com/upskillr) &nbsp;·&nbsp; [💬 Discord](https://discord.gg/upskillr) &nbsp;·&nbsp; [⭐ Star this repo](https://github.com/yourusername/upskillr)

<br />

*If UpSkillr helped you grow, consider giving it a ⭐ — it helps more developers find it.*

</div>
