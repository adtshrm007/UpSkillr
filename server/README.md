<div align="center">

# ⚡ UpSkillr — Server

### Node.js + Express + Socket.io Backend

**The API, real-time engine, and data layer powering UpSkillr.**

<br />

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-5-000000?style=for-the-badge&logo=express)](https://expressjs.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose%209-47A248?style=for-the-badge&logo=mongodb)](https://mongoosejs.com)
[![Socket.io](https://img.shields.io/badge/Socket.io-4-010101?style=for-the-badge&logo=socket.io)](https://socket.io)

<br />

[**Architecture**](#-architecture-overview) · [**API Reference**](#-api-reference) · [**Data Models**](#-data-models) · [**WebSocket Events**](#-websocket-events) · [**Getting Started**](#-getting-started)

</div>

---

## 📌 What This Is

This is the **Node.js backend** for UpSkillr. It exposes a REST API consumed by the React frontend, manages a MongoDB database via Mongoose, and runs a persistent Socket.io server for real-time chat, WebRTC signaling, call state tracking, and live notifications.

**Stack at a glance:**

| Concern | Technology |
|---|---|
| Runtime | Node.js 18+ (ESM) |
| Framework | Express 5 |
| Database | MongoDB + Mongoose 9 |
| Real-Time | Socket.io 4 |
| Auth | JWT (access + refresh tokens via httpOnly cookies) |
| Password Hashing | bcrypt / bcryptjs |
| Security | Helmet, CORS, express-rate-limit |
| Logging | Morgan |
| Dev Server | Nodemon |

---

## 🗂️ Architecture Overview

```
server/
├── server.js                        # Entry point: Express app + Socket.io setup + route mounting
│
└── src/
    ├── models/                      # Mongoose schemas — the data contract
    │   ├── user.model.js            # Users, skills, roles, credits
    │   ├── session.model.js         # Skill swap & mentorship sessions
    │   ├── chatMessage.model.js     # In-session chat messages
    │   ├── courses.model.js         # Course definitions (title, modules, pricing)
    │   ├── courseEnrollment.model.js # User ↔ Course enrollment tracking
    │   ├── creditTransaction.model.js # Credit earn/spend ledger
    │   ├── notification.model.js    # User notification records
    │   ├── review.model.js          # Session reviews & star ratings
    │   └── analytics.model.js       # Platform event tracking
    │
    ├── controllers/                 # Business logic — one file per domain
    │   ├── user.controller.js       # Profile CRUD, skill management
    │   ├── session.controller.js    # Session lifecycle (create → active → complete)
    │   ├── courses.controller.js    # Course CRUD, enrollment, content management
    │   ├── credits.controller.js    # Credit balance, earn, spend
    │   ├── matches.controller.js    # AI-powered peer/mentor matching algorithm
    │   ├── review.controller.js     # Submit and fetch session reviews
    │   ├── notification.controller.js # Create, fetch, mark-read notifications
    │   ├── chat.controller.js       # Fetch persisted chat history
    │   ├── analytics.controller.js  # Usage stats and growth metrics
    │   ├── admin.controller.js      # Platform-wide user/content management
    │   └── userActivity.controller.js # Activity feed and streak tracking
    │
    ├── routes/                      # Route definitions — map URLs to controllers
    │   ├── user.routes.js           # /user/*
    │   ├── session.routes.js        # /sessions/*
    │   ├── courses.routes.js        # /courses/*
    │   ├── credits.routes.js        # /credits/*
    │   ├── matches.route.js         # /matches/*
    │   ├── review.routes.js         # /reviews/*
    │   ├── notification.routes.js   # /notifications/*
    │   ├── chat.routes.js           # /chat/*
    │   ├── analytics.routes.js      # /analytics/*
    │   ├── activity.routes.js       # /activity/*
    │   └── admin.routes.js          # /admin/*
    │
    ├── middleware/
    │   └── authVerify.js            # JWT middleware — verifies access token from cookie
    │
    └── utils/
        ├── connectDB.js             # MongoDB connection with retry logic
        └── socket.js                # Socket.io instance initializer (initIO)
```

---

## 🚀 Entry Point: `server.js`

`server.js` is the single boot file that wires everything together:

1. **Creates** an Express app and wraps it in a native `http.Server`
2. **Initializes** Socket.io on the HTTP server
3. **Registers** Socket.io auth middleware (JWT from cookie)
4. **Defines** all WebSocket event handlers
5. **Registers** global HTTP middleware (Helmet, CORS, rate limiting, Morgan)
6. **Mounts** all REST route modules
7. **Connects** to MongoDB, then starts listening

---

## 📡 API Reference

The base URL in development is `http://localhost:5000`. All routes require `Content-Type: application/json` unless noted.

### Authentication

Authentication is **cookie-based**. The server sets `accessToken` and `refreshToken` as `httpOnly` cookies on login. Clients must send requests with `credentials: 'include'` (or `withCredentials: true` in Axios).

The `authVerify` middleware reads the `accessToken` cookie to authenticate protected routes.

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/user/register` | ❌ | Create a new user account |
| `POST` | `/user/login` | ❌ | Authenticate, receive access + refresh cookies |
| `POST` | `/user/logout` | ✅ | Clear auth cookies |
| `GET` | `/user/me` | ✅ | Get the current authenticated user |
| `PUT` | `/user/profile` | ✅ | Update profile, bio, skills |

### Sessions

Sessions represent a scheduled or live skill swap or mentorship interaction.

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/sessions` | ✅ | Create a new session request |
| `GET` | `/sessions` | ✅ | List sessions for current user |
| `GET` | `/sessions/:id` | ✅ | Get full session details |
| `POST` | `/sessions/:id/end` | ✅ | End session + trigger credit settlement |

### Matches

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/matches` | ✅ | Get AI-ranked peer/mentor matches for current user |
| `GET` | `/matches/search` | ✅ | Search users by skill, name, or level |

### Courses

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/courses` | ✅ | List all available courses |
| `POST` | `/courses` | ✅ | Create a new course (instructor role) |
| `GET` | `/courses/:id` | ✅ | Get course details and modules |
| `PUT` | `/courses/:id` | ✅ | Update course content |
| `DELETE` | `/courses/:id` | ✅ | Delete a course |
| `POST` | `/courses/:id/enroll` | ✅ | Enroll in a course |

### Credits

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/credits/balance` | ✅ | Get current credit balance |
| `GET` | `/credits/history` | ✅ | Get full transaction ledger |

### Reviews

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/reviews` | ✅ | Submit a review for a completed session |
| `GET` | `/reviews/:userId` | ✅ | Get all reviews for a user |

### Notifications

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/notifications` | ✅ | Fetch all notifications for current user |
| `PUT` | `/notifications/:id/read` | ✅ | Mark a notification as read |

### Chat

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/chat/:sessionId` | ✅ | Fetch persisted message history for a session |

### Analytics

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/analytics/me` | ✅ | Get personal usage stats (sessions, hours, growth) |

### Admin *(admin role required)*

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/admin/users` | ✅ Admin | List all users with filters |
| `PUT` | `/admin/users/:id` | ✅ Admin | Update user role or status |
| `GET` | `/admin/stats` | ✅ Admin | Platform-wide metrics |

---

## 🗄️ Data Models

### `User`

The core identity model. Tracks skills, credits, role, and reputation.

```js
{
  username: String,           // Unique display name
  email: String,              // Unique, indexed
  password: String,           // bcrypt hash
  role: ['user', 'admin'],    // Access control
  skillsOffered: [String],    // Skills this user can teach
  skillsWanted: [String],     // Skills this user wants to learn
  creditBalance: Number,      // Current Skill Credit balance
  bio: String,
  avatarUrl: String,
  createdAt: Date
}
```

### `Session`

Represents a live or completed skill exchange between two users.

```js
{
  participants: [ObjectId],      // Refs to User
  type: ['swap', 'mentorship'],  // Session type
  skill: String,                 // Skill being exchanged
  status: ['pending', 'active', 'completed', 'cancelled'],
  scheduledAt: Date,
  callStartedAt: Date,           // Server-side call timer start
  actualCallMinutes: Number,     // Accumulated call time
  creditsCost: Number,           // Credits charged (mentorship sessions)
  feedback: { rating, text }     // Post-session review
}
```

### `ChatMessage`

Persisted in-session chat messages.

```js
{
  session: ObjectId,    // Ref to Session
  sender: ObjectId,     // Ref to User
  senderName: String,
  message: String,
  timestamp: Date
}
```

### `CreditTransaction`

Append-only ledger for all credit movements.

```js
{
  user: ObjectId,
  type: ['earn', 'spend', 'purchase'],
  amount: Number,
  reason: String,       // e.g. "session_completed", "mentorship_fee"
  relatedSession: ObjectId,
  createdAt: Date
}
```

### `Notification`

User notification records pushed via Socket.io and persisted for the notification center.

```js
{
  recipient: ObjectId,
  type: String,         // e.g. "session_request", "review_received"
  message: String,
  isRead: Boolean,
  createdAt: Date
}
```

### `Review`

Post-session ratings and written feedback.

```js
{
  reviewer: ObjectId,    // Who wrote it
  reviewee: ObjectId,    // Who received it
  session: ObjectId,
  rating: Number,        // 1–5
  comment: String,
  createdAt: Date
}
```

---

## 🔌 WebSocket Events

The Socket.io server runs on the same port as the HTTP server. Authentication is enforced via middleware on `io.use(...)` — sockets without a valid `accessToken` cookie are rejected.

### Auth Flow

On connection, the server extracts `accessToken` from the cookie header, verifies it with `ACCESS_TOKEN_SECRET`, and attaches `socket.userId` for all subsequent event handlers.

### Events Reference

| Direction | Event | Payload | Description |
|---|---|---|---|
| Client → Server | `join_room` | `roomId: string` | Join a session chat/call room |
| Client → Server | `send_message` | `{ roomId, senderId, senderName, message, timestamp }` | Send a chat message — persisted to MongoDB |
| Client → Server | `call_ready` | `{ sessionId }` | Signal readiness for a video call |
| Client → Server | `call_leave` | `{ sessionId }` | Leave call, flush elapsed minutes to session |
| Client → Server | `webrtc_signal` | `{ roomId, signal }` | Relay WebRTC offer/answer/ICE candidate |
| Server → Client | `receive_message` | Chat message object | Broadcast incoming message to all in room |
| Server → Client | `call_active` | `{ sessionId }` | Both participants ready — call begins |
| Server → Client | `call_waiting` | `{ sessionId }` | Only one participant ready |
| Server → Client | `call_paused` | `{ sessionId, actualCallMinutes }` | One participant left |
| Server → Client | `call_duration_update` | `{ actualCallMinutes }` | Periodic duration sync |
| Server → Client | `new_notification` | `{ message, type }` | Real-time notification push |

### Call State Machine

```
User A: call_ready ──┐
                     ├─→ [Both ready] → call_active (broadcast to both)
User B: call_ready ──┘

User leaves: call_leave → flushes duration to DB → call_paused (to remaining user)
```

---

## 🛡️ Security

### Authentication Middleware (`authVerify.js`)

Applied to all protected routes. Reads `accessToken` from the `httpOnly` cookie, verifies signature with `ACCESS_TOKEN_SECRET`, and attaches the decoded user to `req.user`.

```js
// Usage in any route file
import authVerify from '../middleware/authVerify.js';

router.get('/protected', authVerify, controller);
```

### HTTP Security Stack

| Layer | Package | What It Does |
|---|---|---|
| Security headers | `helmet` | Sets X-Frame-Options, CSP, HSTS, etc. |
| CORS | `cors` | Restricts origins to `CLIENT_ORIGIN` env var |
| Rate limiting | `express-rate-limit` | 200 req / 15 min per IP |
| Request logging | `morgan` | Dev-mode HTTP request logs |
| Cookie parsing | `cookie-parser` | Parses incoming cookies |
| Body limit | Express JSON | `10mb` max payload |

### Token Configuration

| Token | Secret Env Var | Default Expiry |
|---|---|---|
| Access Token | `ACCESS_TOKEN_SECRET` | 1 day (`ACCESS_TOKEN_EXPIRY`) |
| Refresh Token | `REFRESH_TOKEN_SECRET` | 10 days (`REFRESH_TOKEN_EXPIRY`) |

> ⚠️ **Rotate secrets before every production deployment.** Never use the development secrets in production.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher
- **MongoDB** — local instance or [MongoDB Atlas](https://cloud.mongodb.com)

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env
```

Edit `server/.env`:

```env
# Server
PORT=5000
NODE_ENV=development

# Auth — generate secure random strings for production
ACCESS_TOKEN_SECRET=your-access-token-secret
REFRESH_TOKEN_SECRET=your-refresh-token-secret
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_EXPIRY=10d

# Database
MONGO_DB_URI=mongodb://localhost:27017/upskillr
# For Atlas:
# MONGO_DB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/upskillr

# CORS
CLIENT_ORIGIN=http://localhost:5173
```

### 3. Start Development Server

```bash
npm run dev
```

Starts with **Nodemon** — auto-restarts on file changes.

The server boots on **http://localhost:5000**.

**Verify it's running:**

```bash
curl http://localhost:5000
# → { "status": "ok", "app": "UpSkillr API" }
```

### 4. Check Database Connection

On a successful boot, the console will print:

```
✅ Server running on port 5000 — MongoDB connected
```

If you see `❌ DB connection failed`, check your `MONGO_DB_URI` value and ensure MongoDB is running.

---

## 📐 Developer Conventions

| Rule | Convention |
|---|---|
| Module system | ESM (`"type": "module"`) — use `import/export` |
| Async | `async/await` throughout — no callback chains |
| Error handling | `try/catch` in controllers; global `app.use(err, req, res, next)` as fallback |
| Models | `[name].model.js` in `src/models/` |
| Controllers | `[name].controller.js` in `src/controllers/` |
| Routes | `[name].routes.js` in `src/routes/`, mounted in `server.js` |
| Auth check | Always use `authVerify` middleware — never manually read cookies in controllers |

### Adding a New Feature

1. **Model:** Create `src/models/[feature].model.js` with a Mongoose schema.
2. **Controller:** Create `src/controllers/[feature].controller.js` with handler functions.
3. **Routes:** Create `src/routes/[feature].routes.js`, import the controller, and define endpoints.
4. **Mount:** Import the router in `server.js` and call `app.use('/feature', featureRouter)`.
5. **Auth:** Wrap protected endpoints with `authVerify`.

---

## 🤝 Contributing

1. All business logic lives in controllers — keep routes thin (just mapping URLs to handlers).
2. Validate all user-supplied input before hitting the database.
3. Use `try/catch` in every async controller and pass errors to `next(err)`.
4. Never log sensitive data (tokens, passwords, full request bodies) — use Morgan for access logs only.
5. Test real-time Socket.io events manually using the connected frontend; WebSocket-specific unit tests require additional infrastructure.

---

<div align="center">

**UpSkillr Server** — Part of the [UpSkillr monorepo](../README.md)

[📖 Root README](../README.md) · [🖥️ Client README](../client/README.md) · [🐛 Issues](https://github.com/yourusername/upskillr/issues)

</div>
