# GitHub Profile Explorer

A clean and simple mobile application built with **React Native, Expo, and TypeScript** for the **TechnoJam Club Task**.

The app allows users to search for GitHub profiles and view important profile information using the official **GitHub REST API**.

---

## 🚀 Features

- 🔍 Search GitHub users by username
- 👤 Display profile picture and username
- 📝 Display name and bio
- 👥 Show followers and following
- 📦 Show public repositories
- 📍 Display location and company when available
- 🌐 Open the user's GitHub profile
- 📅 Display GitHub account creation date
- 🔄 Loading states while fetching data
- ⚠️ User-friendly error handling
- 📱 Clean and responsive mobile UI
- 🧭 Navigation between Search and Profile screens

---

## 🛠️ Technologies Used

- **React Native**
- **Expo**
- **TypeScript**
- **React Navigation**
- **GitHub REST API**
- **Expo Vector Icons**

---

## 📡 GitHub API

This project uses the official GitHub REST API to retrieve public user profile information.

API endpoint:

```text
https://api.github.com/users/{username}
```

Example:

```text
https://api.github.com/users/octocat
```

No GitHub login or personal access token is required for the basic public profile search used in this project.

> GitHub API rate limits may apply to unauthenticated requests.

---

## 📱 App Flow

```text
Search Screen
      ↓
Enter GitHub Username
      ↓
Fetch GitHub API
      ↓
Profile Screen
      ↓
View Profile Information
```

---

## 📂 Project Structure

```text
github-profile-explorer/
│
├── src/
│   ├── components/
│   │   ├── EmptyState.tsx
│   │   ├── ErrorState.tsx
│   │   ├── InfoRow.tsx
│   │   ├── LoadingState.tsx
│   │   ├── PrimaryButton.tsx
│   │   ├── SectionCard.tsx
│   │   └── StatCard.tsx
│   │
│   ├── navigation/
│   │   ├── RootNavigator.tsx
│   │   └── types.ts
│   │
│   ├── screens/
│   │   ├── ProfileScreen.tsx
│   │   └── SearchScreen.tsx
│   │
│   ├── services/
│   │   └── githubApi.ts
│   │
│   ├── theme/
│   │   └── colors.ts
│   │
│   ├── types/
│   │   └── github.ts
│   │
│   └── utils/
│       ├── errors.ts
│       └── format.ts
│
├── App.tsx
├── app.json
├── babel.config.js
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/github-profile-explorer.git
```

### 2. Open the project

```bash
cd github-profile-explorer
```

### 3. Install dependencies

```bash
npm install
```

### 4. Check TypeScript

```bash
npm run typecheck
```

### 5. Start the Expo development server

```bash
npx expo start
```

---

## 📲 Running the App

After starting Expo, you can run the application using:

### Android Emulator

Press:

```text
a
```

in the Expo terminal.

### Physical Android Device

1. Install **Expo Go** on your Android phone.
2. Connect your phone and computer to the same Wi-Fi network.
3. Run:

```bash
npx expo start
```

4. Scan the QR code using Expo Go.

### iOS

Open the project with an iOS simulator or scan the Expo QR code using the appropriate Expo workflow.

---

## 🧪 Testing Checklist

- [ ] Search with a valid GitHub username
- [ ] Search with an invalid username
- [ ] Check loading state
- [ ] Check error message
- [ ] Check profile picture
- [ ] Check followers and following
- [ ] Check public repository count
- [ ] Check navigation to profile screen
- [ ] Check GitHub profile link
- [ ] Test on an Android emulator or physical device

---

## 🎯 TechnoJam Club Task

This project was developed as part of the **TechnoJam Club Task – Hard: API & Advanced App Development**.

### Task Requirements Covered

- ✅ Create a search screen
- ✅ Use the GitHub REST API
- ✅ Display GitHub profile information
- ✅ Add navigation between screens
- ✅ Create a clean mobile UI
- ✅ Run the application on an emulator or physical device
- ✅ Push the project to GitHub

---

## 📸 Screenshots

Add your application screenshots here after testing the project.

Example:

```text
screenshots/
├── search-screen.png
└── profile-screen.png
```

---

## 🔐 Privacy & API

The application only requests publicly available GitHub profile information through the GitHub REST API.

No GitHub password or private account information is requested by this application.

---

## 📄 License

This project is created for educational and club-task purposes.
