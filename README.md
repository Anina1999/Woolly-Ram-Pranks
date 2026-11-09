## Development log

### Steps to set up the project
- [x] Create the Expo app "npx create-expo-app@latest . --template blank@latest"
- [x] Add the README
- [x] Rename the app to Woolly Ram Pranks

### Steps to add navigation with React Navigation
- [x] Install React Navigation "npm install @react-navigation/native"
- [x] Install its native dependencies "npx expo install react-native-screens react-native-safe-area-context"
- [x] Install the bottom tabs "npm install @react-navigation/bottom-tabs"
- [x] Install the native stack "npm install @react-navigation/native-stack"
- [x] Add the RootNavigator with native bottom tabs and render it in App
- [x] Add the Lobby, Rooms, Profile and Leaderboard tabs
- [x] Always show the tab labels
- [x] Move the tabs to AppNavigator and make the RootNavigator a native stack

### Steps to add the icons
- [x] Install Feather icons for the screens "npx expo install @expo/vector-icons"
- [x] Add PNG tab icons to the tabs

### Steps to move between the screens
- [x] Add the Create room screen and open it from the Lobby
- [x] Open the Rooms tab from Play Co-op
- [x] Add the Waiting room screen and open it from Rooms with the room id
- [x] Open the Profile tab from the player name in the Lobby
