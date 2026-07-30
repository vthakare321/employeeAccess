# Employee Access Directory

A production-style React + TypeScript application for managing employee access. The application demonstrates authentication, role-based authorization, protected routing, reusable component architecture, API integration, and local persistence using the DummyJSON API.

---

# Overview

Employee Access Directory is built using modern React development practices and a feature-based architecture. The project demonstrates how to build a scalable frontend application with authentication, authorization, reusable UI components, API abstraction, and state management.

## Objectives

- Secure authentication
- Role-based access control (RBAC)
- Protected routes
- User management
- Clean architecture
- Type-safe development
- Reusable components
- Production-ready folder structure

---

# Folder Structure

```text
src
├── api
│
├── app
│   ├── App.tsx
│   └── providers
│
├── features
│   ├── auth
│   └── users
│
├── layouts
│
├── routes
│
├── shared
│
├── main.tsx
└── index.css
```

---

# Features

- User Authentication
- Role-Based Authorization (RBAC)
- Protected Routes
- User Listing
- User Details
- Create User
- Edit User
- Server-side Pagination
- Server-side Sorting
- Local Storage Persistence
- Reusable Shared Components
- Feature-Based Architecture
- Axios API Layer
- TanStack React Query
- Zustand State Management
- React Hook Form
- Zod Validation
- TypeScript Support
- Responsive UI

---

# Application Routes

| Route | Description | Access |
|--------|-------------|--------|
| `/login` | Login Page | Public |
| `/users` | User List | Authenticated |
| `/users/:id` | User Details | Authenticated |
| `/users/create` | Create User | Administrator |
| `/users/:id/edit` | Edit User | Administrator, Manager |
| `/forbidden` | Access Denied | Authenticated |
| `*` | Not Found | Public |

---

# Roles & Permissions

The application uses Role-Based Access Control (RBAC).

| Feature | Administrator | Manager | Viewer |
|:---------|:-------------:|:-------:|:------:|
| Login | ✅ | ✅ | ✅ |
| View Users | ✅ | ✅ | ✅ |
| View User Details | ✅ | ✅ | ✅ |
| Create User | ✅ | ❌ | ❌ |
| Edit User | ✅ | ✅ | ❌ |
| Protected Routes | ✅ | ✅ | ✅ |

---

# Demo Credentials

## Administrator

| Username | Password |
|----------|----------|
| `admin` | `Admin@123` |

### Permissions

- View Users
- View User Details
- Create Users
- Edit Users

---

## Manager

| Username | Password |
|----------|----------|
| `manager` | `Manager@123` |

### Permissions

- View Users
- View User Details
- Edit Users

### Restrictions

- Cannot create users

---

## Viewer

| Username | Password |
|----------|----------|
| `viewer` | `Viewer@123` |

### Permissions

- View Users
- View User Details

### Restrictions

- Cannot create users
- Cannot edit users

---

# Technology Stack

| Technology | Purpose |
|------------|----------|
| React 19 | UI Development |
| TypeScript | Type Safety |
| Vite | Build Tool |
| React Router | Client-side Routing |
| Axios | HTTP Client |
| TanStack React Query | Server State Management |
| Zustand | Client State Management |
| React Hook Form | Form Handling |
| Zod | Form Validation |
| Tailwind CSS | Styling |

---

# Why These Libraries?

## React Router

- Client-side routing
- Nested layouts
- Protected routes

## Axios

- Centralized API client
- Request/Response interceptors
- Better error handling

## TanStack React Query

- API caching
- Background refetching
- Loading states
- Error handling
- Query invalidation

## Zustand

- Lightweight global state
- Authentication state management
- Minimal boilerplate

## React Hook Form

- High-performance forms
- Minimal re-renders
- Easy validation integration

## Zod

- Runtime validation
- Type inference
- Schema-based validation

## Tailwind CSS

- Utility-first styling
- Responsive layouts
- Rapid UI development

---

# Project Architecture

The project follows a Feature-Based Architecture with clear separation of concerns.

```text
Presentation Layer
│
├── Pages
├── Components
│
▼
Business Layer
│
├── Hooks
├── Services
├── Mappers
├── Validation
│
▼
Data Layer
│
├── API Client
├── DTOs
├── Local Storage
│
▼
DummyJSON API
```

## Architecture Benefits

- Scalable
- Maintainable
- Modular
- Reusable
- Testable
- Easy to extend

---

# API Endpoints

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | `/auth/login` | Login |
| GET | `/users` | Get Users |
| GET | `/users/{id}` | Get User Details |
| POST | `/users/add` | Create User |
| PUT | `/users/{id}` | Update User |

---

# Environment Variables

Create a `.env` file in the project root.

```env
VITE_API_BASE_URL=https://dummyjson.com
```

---

# Prerequisites

- Node.js (v20 or later)
- npm
- Git

---

# Installation

```bash
git clone <repository-url>

cd employee-access-directory

npm install

npm run dev
```

---

# Local Persistence

DummyJSON provides mock Create and Update APIs and does not persist data.

To simulate persistence:

- Newly created users are stored in Local Storage.
- Updated local users are saved in Local Storage.
- Local users are merged with API data on the first page.

---

# Known Limitations

- Search functionality is currently not implemented.
- Delete User functionality is not implemented.
- DummyJSON Create and Update APIs do not persist data.
- Local users are merged only on the first page.
- Authentication uses mock/demo credentials.

---

# Manual Verification Checklist

## Authentication

- Login as Administrator
- Login as Manager
- Login as Viewer
- Invalid login displays validation errors

## Authorization

### Administrator

- View Users
- View User Details
- Create Users
- Edit Users

### Manager

- View Users
- View User Details
- Edit Users
- Cannot create users

### Viewer

- View Users
- View User Details
- Cannot create users
- Cannot edit users

## Users

- View user list
- View user details
- Create user (Administrator)
- Edit user (Administrator, Manager)
- Pagination works correctly
- Sorting works correctly

## Routing

- Protected routes require authentication
- Unauthorized access redirects to the Forbidden page
- Invalid routes display the Not Found page

---

# AI Disclosure

AI tools were used during development for:

- Architecture guidance
- Best practice recommendations
- Code review
- Documentation assistance

---

# Future Improvements

- User Search
- Delete User
