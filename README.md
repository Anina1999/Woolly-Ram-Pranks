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
- [x] Install SVG support "npx expo install react-native-svg"
- [x] Add LockIcon to the LockedModeCard

### Steps to add the fonts
- [x] Install the fonts "npx expo install expo-font @expo-google-fonts/lilita-one @expo-google-fonts/nunito-sans"
- [x] Create useGameFonts hook for loading Lilita One and Nunito Sans fonts

### Steps to move between the screens
- [x] Open the Rooms tab from Play Co-op
- [x] Open the Profile tab from the player name in the Lobby
- [x] Open Create room from Rooms
- [x] Replace Create room with the Waiting room after Create
- [x] Open only the rooms that are waiting

### Steps to add the screen content
- [x] Add the Create room screen and open it from the Lobby
- [x] Add the Waiting room screen and open it from Rooms with the room id
- [x] Add the Settings screen and open it from the cog in the Lobby
- [x] Add the Co-op mode card to the Lobby
- [x] Add the LockedModeCard component for Competitive and Hybrid
- [x] Add the Rooms header with the refresh button
- [x] Add the All and Waiting filter chips to Rooms
- [x] Add the Friends filter chip to Rooms
- [x] Add the rooms list with the RoomCard component
- [x] Add the Create room button at the bottom of Rooms
- [x] Show the room name and host in the Waiting room

### Steps to style the screens
- [x] Add style to the Lobby header and title
- [x] Add style to the Co-op mode card
- [x] Use Lilita One and Nunito Sans in the Lobby
- [x] Add style to the LockedModeCard
- [x] Add style to the Play Co-op and Create a room buttons
- [x] Add style to the tab bar
- [x] Use dark status bar icons
- [x] Add style to the Rooms header
- [x] Add style to the Rooms panel and filter chips
- [x] Add the RamAvatar component to the RoomCard
- [x] Add Badge component for the WAITING and PLAYING status
- [x] Add style to the RoomCard
- [x] Add GameButton component for Create room in Rooms

### Steps to add the screen behaviour
- [x] Filter the rooms with the All and Waiting chips
