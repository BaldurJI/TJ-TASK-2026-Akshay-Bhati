# GitHub Profile Explorer

A clean and responsive mobile application built using **React Native, Expo, and TypeScript** for the **TechnoJam Club Task – Hard: API & Advanced App Development**.

The application allows users to search for GitHub profiles by username and view publicly available profile information using the official **GitHub REST API**.

---

## 🚀 Features

* 🔍 Search GitHub profiles by username
* 👤 Display GitHub profile picture
* 📝 Display username, name, and bio
* 👥 Display followers and following count
* 📦 Display public repository count
* 📍 Display location when available
* 🏢 Display company information when available
* 🌐 Open the user's GitHub profile
* 📅 Display account creation date
* ⏳ Loading state while fetching profile data
* ⚠️ User-friendly error handling
* 📱 Clean and responsive mobile interface
* 🧭 Navigation between Search and Profile screens

---

## 🛠️ Technologies Used

* **React Native**
* **Expo**
* **TypeScript**
* **React Navigation**
* **GitHub REST API**
* **Expo Vector Icons**

---

## 🎯 TechnoJam Club Task

This project was developed for the:

**TechnoJam Club – Hard: API & Advanced App Development**

### Task Requirements

| Requirement                     | Status      |
| ------------------------------- | ----------- |
| Create a search screen          | ✅ Completed |
| Use GitHub REST API             | ✅ Completed |
| Display profile picture         | ✅ Completed |
| Display username                | ✅ Completed |
| Display name                    | ✅ Completed |
| Display bio                     | ✅ Completed |
| Display followers               | ✅ Completed |
| Display following               | ✅ Completed |
| Display public repositories     | ✅ Completed |
| Add navigation between screens  | ✅ Completed |
| Create a clean mobile UI        | ✅ Completed |
| Run on emulator/physical device | ✅ Supported |
| Push project to GitHub          | ✅ Completed |

---

# 🧠 Approach

The application follows a simple API-based architecture.

1. The user enters a GitHub username on the Search screen.
2. The application validates the entered username.
3. A request is sent to the GitHub REST API.
4. GitHub returns the user's public profile information.
5. The application processes the API response.
6. The user is navigated to the Profile screen.
7. The profile information is displayed using reusable UI components.
8. Loading and error states are handled when necessary.

### Application Flow

```text
User
 │
 ▼
Search Screen
 │
 │ Enter GitHub Username
 ▼
Input Validation
 │
 ▼
GitHub REST API
 │
 ▼
API Response
 │
 ├───────────────┐
 │               │
 ▼               ▼
Success         Error
 │               │
 ▼               ▼
Profile Screen  Error Message
 │
 ▼
Display Profile
Information
```

---

# 🔄 Algorithm

```text
START

1. Open the application.

2. Display the Search Screen.

3. Ask the user to enter a GitHub username.

4. Check whether the username is valid.

5. Send a GET request to:
   https://api.github.com/users/{username}

6. Receive the API response.

7. Check the response status.

8. If the user exists:
      a. Get profile picture.
      b. Get username.
      c. Get name.
      d. Get bio.
      e. Get followers.
      f. Get following.
      g. Get public repositories.
      h. Get other available information.
      i. Navigate to the Profile Screen.

9. If the user does not exist:
      Display an appropriate error message.

10. If a network/API error occurs:
      Display an error message.

11. Display the retrieved profile information.

12. END
```

---

# 📡 GitHub REST API

The application uses the official GitHub REST API to retrieve public GitHub user information.

### API Endpoint

```text
https://api.github.com/users/{username}
```

### Example

```text
https://api.github.com/users/octocat
```

The API response provides information such as:

```text
login
avatar_url
name
bio
company
location
blog
followers
following
public_repos
created_at
```

The application uses this information to create the profile screen.

> GitHub API rate limits may apply to unauthenticated requests.

---

# 📱 Application Screens

## 1. Search Screen

The Search Screen allows the user to:

* Enter a GitHub username
* Start the profile search
* See a loading indicator while data is being fetched
* Receive an error message if the username is invalid or the request fails

---

## 2. Profile Screen

The Profile Screen displays:

* Profile picture
* Name
* GitHub username
* Bio
* Followers
* Following
* Public repositories
* Location
* Company
* Website
* GitHub account creation date
* Link to the GitHub profile

---

# 📸 Screenshots

> Add screenshots of the **actual working application** in this section.

### Search Screen

![Search Screen](screenshots/search-screen.png)

The Search Screen allows users to enter a GitHub username and search for the profile.

---

### Profile Screen

![Profile Screen](screenshots/profile-screen.png)

The Profile Screen displays the GitHub user's profile information retrieved from the GitHub REST API.

---

### Error Handling

![Error Screen](screenshots/error-screen.png)

The application displays a user-friendly message when a GitHub profile cannot be found or an API/network error occurs.

---

# 📂 Project Structure

```text
github-profile-explorer/
│
├── src/
│   │
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

# ⚙️ Installation

## Prerequisites

Make sure the following are installed:

* Node.js
* npm
* Expo
* Android Studio / Android Emulator
  **or**
* Expo Go on a physical Android device

---

## 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/github-profile-explorer.git
```

Replace `YOUR_USERNAME` with your GitHub username.

---

## 2. Open the Project

```bash
cd github-profile-explorer
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Check TypeScript

```bash
npm run typecheck
```

---

## 5. Start the Application

```bash
npx expo start
```

---

# 📲 Running on Android

## Android Emulator

Start an Android emulator through Android Studio and run:

```bash
npx expo start
```

Then press:

```text
a
```

in the Expo terminal.

---

## Physical Android Device

1. Install **Expo Go** on your Android phone.
2. Connect your phone and computer to the same Wi-Fi network.
3. Start the project:

```bash
npx expo start
```

4. Scan the displayed QR code using Expo Go.
5. The application will open on your device.

---

# 🧪 Testing

The following cases were considered while developing the application:

### Valid Username

Example:

```text
octocat
```

Expected result:

```text
GitHub profile information is displayed.
```

### Invalid Username

Example:

```text
this-user-does-not-exist-123456
```

Expected result:

```text
A user-friendly error message is displayed.
```

### Empty Input

Expected result:

```text
The application prevents an empty search.
```

### Network/API Error

Expected result:

```text
An appropriate error message is displayed.
```

---

# ✅ Testing Checklist

* [ ] Search with a valid GitHub username
* [ ] Search with an invalid username
* [ ] Test empty input
* [ ] Check loading state
* [ ] Check error state
* [ ] Check profile picture
* [ ] Check username
* [ ] Check name
* [ ] Check bio
* [ ] Check followers
* [ ] Check following
* [ ] Check public repositories
* [ ] Check profile navigation
* [ ] Check GitHub profile link
* [ ] Test on Android emulator
* [ ] Test on physical device

---

# 🔐 Privacy & API Usage

This application only requests publicly available GitHub profile information through the GitHub REST API.

The application does not request:

* GitHub passwords
* Private repositories
* Private account information
* GitHub login credentials

---

# 📈 Future Improvements

Possible future improvements include:

* GitHub repository listing
* Repository search
* Dark mode
* Recent repositories section
* GitHub organization information
* Better pagination
* Search history
* Favorites/bookmarks
* More detailed profile statistics

---

# 📚 Learning Outcomes

Through this project, the following concepts were practiced:

* React Native application development
* Expo project setup
* TypeScript
* REST API integration
* Fetching JSON data
* API error handling
* Navigation between screens
* Reusable React Native components
* Mobile UI design
* Git and GitHub
* Testing on an emulator/physical device

---

# 📄 License

This project was created for educational and **TechnoJam Club Task** purposes.

---

## 👨‍💻 Project

**GitHub Profile Explorer**

**TechnoJam Club Task – Hard: API & Advanced App Development**

Built with React Native, Expo, TypeScript, and the GitHub REST API.
