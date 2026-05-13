<div align="center">

# ⚡ UpSkillr — Client

### React 19 + Vite 7 Frontend

**The UI layer powering UpSkillr's peer-to-peer skill exchange platform.**

<br />

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![Socket.io](https://img.shields.io/badge/Socket.io-4-010101?style=for-the-badge&logo=socket.io)](https://socket.io)

<br />

[**Architecture**](#-architecture-overview) · [**Pages & Routes**](#-pages--routing) · [**State Management**](#-state-management) · [**Services**](#-api-services) · [**Getting Started**](#-getting-started)

</div>

---

## 📌 What This Is

This is the **React frontend** for UpSkillr. It handles all user-facing interactions: authentication, the learning dashboard, live session rooms with WebRTC video, real-time chat, course creation, credits management, and admin tooling — all delivered as a blazing-fast SPA.

**Stack at a glance:**

| Concern | Technology |
|---|---|
| Framework | React 19 + Vite 7 |
| Styling | Tailwind CSS v4 + Vanilla CSS |
| Routing | React Router DOM v7 |
| Real-Time | Socket.io Client v4 |
| Video/Audio | WebRTC (native browser API) |
| Charts | Recharts v3 |
| HTTP Client | Axios v1 |
| State | Context API + Custom Hooks |

---

## 🗂️ Architecture Overview

```
client/
├── src/
│   ├── App.jsx                    # Root router — defines all public & protected routes
│   ├── main.jsx                   # Entry point, mounts <App /> to DOM
│   ├── index.css                  # Global design tokens & base styles
│   │
│   ├── pages/                     # Top-level route components (one per page)
│   │   ├── HomePage.jsx           # Landing page (public)
│   │   ├── LoginPage.jsx          # Sign-in form (public)
│   │   ├── SignUp.jsx             # Registration form (public)
│   │   ├── DashboardPage.jsx      # User hub — sessions, stats, feed
│   │   ├── ProfilePage.jsx        # Editable user profile & skills
│   │   ├── PublicProfilePage.jsx  # Read-only profile for other users
│   │   ├── TopMatchesAndSearches.jsx  # Peer/mentor discovery & search
│   │   ├── TopTeachers.jsx        # Mentor leaderboard
│   │   ├── SessionsPage.jsx       # Session history & management
│   │   ├── LearningRoom.jsx       # Live session: video, chat, WebRTC
│   │   ├── CreditsPage.jsx        # Skill Credits wallet & transactions
│   │   ├── NotificationsPage.jsx  # Notification center
│   │   ├── CourseCreatorDashboard.jsx  # Course builder for instructors
│   │   └── AdminDashboard.jsx     # Platform admin panel (admin-only)
│   │
│   ├── components/
│   │   ├── common/                # Shared structural components
│   │   │   └── ProtectedRoute.jsx # Auth guard wrapping protected pages
│   │   └── ui/                    # Reusable UI primitives (buttons, cards, modals...)
│   │
│   ├── context/                   # Global React Context providers
│   │   ├── Auth.context.jsx       # Authenticated user state + login/logout
│   │   ├── Toast.context.jsx      # App-wide toast notification system
│   │   └── Dashboard.context.jsx  # Dashboard-scoped shared state
│   │
│   ├── hooks/
│   │   └── useSocket.js           # Socket.io hook: connect, emit, subscribe
│   │
│   └── services/                  # API call modules (one per domain)
│       ├── api.js                 # Axios instance with base URL & interceptors
│       ├── auth.service.js        # Login, signup, logout, /me
│       ├── session.service.js     # Create, fetch, end sessions
│       ├── courses.service.js     # Course CRUD & enrollment
│       ├── credits.service.js     # Credit balance & transactions
│       ├── matches.service.js     # AI-powered peer/mentor matching
│       ├── mentors.service.js     # Mentor listings
│       ├── review.service.js      # Session reviews & ratings
│       ├── notification.service.js # Notification fetching & marking read
│       ├── chat.service.js        # In-session chat history
│       ├── analytics.service.js   # User growth & session analytics
│       └── admin.service.js       # Admin-only endpoints
│
├── public/                        # Static assets served as-is
├── index.html                     # Vite HTML entry
├── vite.config.js                 # Vite + Tailwind plugin config
├── eslint.config.js               # ESLint flat config (v9)
├── .env                           # Local environment variables (not committed)
└── .env.example                   # Template for env setup
```

---

## 🗺️ Pages & Routing

All routing is defined in `src/App.jsx` using React Router v7. Routes are either **public** or **protected** (wrapped in `<ProtectedRoute>`).

### Public Routes

| Path | Page | Description |
|---|---|---|
| `/` | `HomePage` | Landing page with platform introduction |
| `/login` | `LoginPage` | User authentication form |
| `/signup` | `SignUp` | New account registration |

### Protected Routes *(require authentication)*

| Path | Page | Description |
|---|---|---|
| `/dashboard` | `DashboardPage` | Main user hub — stats, sessions, feed |
| `/profile` | `ProfilePage` | Edit your profile and skill listings |
| `/user/:id` | `PublicProfilePage` | View any user's public profile |
| `/room/:id` | `LearningRoom` | Live session room with video & chat |
| `/explore` | `TopMatchesAndSearches` | Discover and search for peers/mentors |
| `/sessions` | `SessionsPage` | Session history and management |
| `/mentors` | `TopTeachers` | Browse top-rated mentors |
| `/credits` | `CreditsPage` | Skill Credits wallet & transactions |
| `/notifications` | `NotificationsPage` | Notification center |
| `/creator` | `CourseCreatorDashboard` | Build and manage courses |

### Admin-Only Routes

| Path | Page | Description |
|---|---|---|
| `/admin` | `AdminDashboard` | Platform analytics & user management |

> **How protection works:** `<ProtectedRoute>` reads from `AuthContext`. If no authenticated user is found, it redirects to `/login`. Admin routes additionally check an `adminOnly` prop.

---

## 🔌 Real-Time Layer

Real-time features are powered by **Socket.io** and accessed app-wide through the `useSocket` hook.

### `useSocket.js`

```js
const { on, emit } = useSocket();

// Subscribe to events
on('new_notification', (data) => { ... });
on('receive_message', (msg) => { ... });
on('call_active', ({ sessionId }) => { ... });

// Emit events
emit('join_room', roomId);
emit('send_message', { roomId, senderId, message });
emit('call_ready', { sessionId });
emit('webrtc_signal', { roomId, signal });
```

### Socket Events Reference

| Direction | Event | Description |
|---|---|---|
| Client → Server | `join_room` | Join a session chat/call room |
| Client → Server | `send_message` | Send a chat message (persisted to DB) |
| Client → Server | `call_ready` | Signal readiness to start a video call |
| Client → Server | `call_leave` | Leave an active call |
| Client → Server | `webrtc_signal` | Relay WebRTC offer/answer/ICE candidate |
| Server → Client | `receive_message` | Incoming chat message |
| Server → Client | `call_active` | Both users ready — call begins |
| Server → Client | `call_waiting` | Waiting for the other participant |
| Server → Client | `call_paused` | Other user left the call |
| Server → Client | `new_notification` | Real-time notification push |

---

## 🧠 State Management

UpSkillr uses a **Context API + Custom Hooks** pattern — no Redux overhead.

### Contexts

| Context | File | Provides |
|---|---|---|
| `AuthContext` | `Auth.context.jsx` | `user`, `login()`, `logout()`, `isAuthenticated` |
| `ToastContext` | `Toast.context.jsx` | `toast({ message, type })` — triggers app-wide toasts |
| `DashboardContext` | `Dashboard.context.jsx` | Shared state scoped to the Dashboard page |

### Usage Pattern

```jsx
// In any component
import { useAuth } from './context/Auth.context';
import { useToast } from './context/Toast.context';

const { user, logout } = useAuth();
const { toast } = useToast();

toast({ message: 'Session booked!', type: 'success' });
```

---

## 📡 API Services

All HTTP calls go through a **centralized Axios instance** in `services/api.js`, which handles base URL, credentials (cookies), and response interceptors automatically.

```js
// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,   // sends httpOnly cookies automatically
});
```

Domain-specific service files wrap `api` with named functions:

```js
// services/session.service.js
export const createSession = (data) => api.post('/sessions', data);
export const getSession = (id) => api.get(`/sessions/${id}`);
export const endSession = (id, feedback) => api.post(`/sessions/${id}/end`, feedback);
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher
- Backend server running at `http://localhost:5000` *(see [server README](../server/README.md))*

### 1. Install Dependencies

```bash
cd client
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env
```

Edit `client/.env`:

```env
VITE_API_URL=http://localhost:5000
VITE_SOCKET_URL=http://localhost:5000
VITE_ENV=development
```

> **Note:** The backend runs on port **5000** by default. Match this to your server's `PORT`.

### 3. Start Development Server

```bash
npm run dev
```

Opens at **http://localhost:5173** with HMR enabled.

### 4. Other Commands

```bash
npm run build     # Production build → ./dist/
npm run preview   # Preview production build locally
npm run lint      # Run ESLint checks
```

---

## 🧱 Key Technical Decisions

### Why Vite 7?
Near-instant dev server startup and HMR. With 14+ pages and dozens of components, Webpack-based tooling would be noticeably slower. Vite's ESM-first approach keeps the feedback loop tight.

### Why Tailwind CSS v4?
Tailwind v4 ships as a Vite plugin (`@tailwindcss/vite`) — zero config, no `tailwind.config.js` needed. LightningCSS handles transforms at native speed.

### Why Context API (not Redux)?
The app's state is highly co-located — auth state, toasts, and dashboard data are each scoped to their consumers. Context API covers these cases cleanly without the boilerplate overhead of Redux or Zustand.

### Why Recharts?
Recharts renders React components, making it trivial to integrate with our existing data-fetching hooks and style consistently with Tailwind.

---

## 📐 Code Conventions

| Rule | Convention |
|---|---|
| Components | PascalCase, functional, one file per component |
| Hooks | `use` prefix, camelCase (e.g., `useSocket`) |
| Services | camelCase files, named exports per endpoint |
| Context | `Context.jsx` suffix, custom `use[Name]` hook exported |
| CSS | Tailwind utilities first; `index.css` for design tokens |
| Async | `async/await` — no `.then()` chains |

---

## 🔒 Security Notes

- **Cookies only:** Auth tokens are stored in `httpOnly` cookies set by the server — never in `localStorage` or `sessionStorage`. XSS cannot access them.
- **Protected routes:** All sensitive pages are wrapped in `<ProtectedRoute>`, which checks the auth context before rendering.
- **CORS:** The Axios instance sends `withCredentials: true`, allowing cross-origin cookie exchange with the backend's CORS policy.
- **Admin guard:** The `/admin` route uses an additional `adminOnly` prop on `<ProtectedRoute>` to check user role.

---

## 🤝 Contributing

1. Keep components small and focused — one responsibility per file.
2. Add new pages to `App.jsx` and wrap in `<ProtectedRoute>` if auth is required.
3. All API calls must go through `services/` — never call `axios` directly from a component.
4. Use the `useToast` hook for all user-facing feedback — no `alert()`.
5. Test real-time features against the live backend, not mocks, as WebSocket state is hard to replicate.

---

<div align="center">

**UpSkillr Client** — Part of the [UpSkillr monorepo](../README.md)

[📖 Root README](../README.md) · [🔌 Server README](../server/README.md) · [🐛 Issues](https://github.com/yourusername/upskillr/issues)

</div>
