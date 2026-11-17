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
- [x] Add LockIcon before the name of a private room on the RoomCard

### Steps to add the fonts
- [x] Install the fonts "npx expo install expo-font @expo-google-fonts/lilita-one @expo-google-fonts/nunito-sans"
- [x] Create useGameFonts hook for loading Lilita One and Nunito Sans fonts

### Steps to move between the screens
- [x] Open the Rooms tab from Play Co-op
- [x] Open the Profile tab from the player name in the Lobby
- [x] Open Create room from Rooms
- [x] Replace Create room with the Waiting room after Create
- [x] Open only the rooms that are waiting
- [x] Connect the back button to navigation in the Waiting room
- [x] Go back with Leave in the Waiting room
- [x] Go back to Rooms from the Waiting room

### Steps to add the Lobby content
- [x] Add the Co-op mode card to the Lobby
- [x] Add the LockedModeCard component for Competitive and Hybrid

### Steps to add the Rooms content
- [x] Add the Rooms header with the refresh button
- [x] Add the All and Waiting filter chips to Rooms
- [x] Add the Friends filter chip to Rooms
- [x] Add the rooms list with the RoomCard component
- [x] Add the Create room button at the bottom of Rooms
- [x] Show the difficulty on the RoomCard
- [x] Add the "You're in a room" bar to Rooms
- [x] Show YOU'RE IN on the card of my room
- [x] Add the Already in a room window to Rooms
- [x] Add the Room details button and window to Rooms
- [x] Show the room, its players and Join room in Room details
- [x] Move Create room to the Rooms header and add Find a room at the bottom
- [x] Add the Find a room window with the search tabs and a room name field
- [x] Show the rooms as rows in the Find a room window
- [x] Add empty state for no rooms and no friends' rooms

### Steps to add the Create room content
- [x] Add the Create room screen and open it from the Lobby
- [x] Add Max players and Difficulty to Create room
- [x] Add Meadow Farm level card
- [x] Add Room name field

### Steps to add the Waiting room content
- [x] Add the Waiting room screen and open it from Rooms with the room id
- [x] Show the room name and host in the Waiting room
- [x] Add the players list with the PlayerRow component to the Waiting room
- [x] Add Invite a friend row to the Waiting room
- [x] Add Leave room, Ready and Start game buttons to the Waiting room
- [x] Show different buttons for the host and the guest in the Waiting room
- [x] Show mode, map and difficulty in the Waiting room header
- [x] Show open and closed seats in the Waiting room
- [x] Add Max players and Difficulty panel
- [x] Show ram avatar in the Waiting room players
- [x] Show how many rams are ready in the Waiting room
- [x] Ask before leaving the room

### Steps to add the Settings content
- [x] Add the Settings screen and open it from the cog in the Lobby

### Styling

#### Lobby
- [x] Add style to the Lobby header and title
- [x] Add style to the Co-op mode card
- [x] Use Lilita One and Nunito Sans in the Lobby
- [x] Add style to the LockedModeCard
- [x] Add style to the Play Co-op and Create a room buttons

#### Tab bar and status bar
- [x] Add style to the tab bar
- [x] Use dark status bar icons

#### Rooms
- [x] Add style to the Rooms header
- [x] Add style to the Rooms panel and filter chips
- [x] Add the RamAvatar component to the RoomCard
- [x] Add Badge component for the WAITING and PLAYING status
- [x] Add style to the RoomCard
- [x] Add GameButton component for Create room in Rooms
- [x] Add difficulty colour to the RoomCard
- [x] Match the RoomCard spacing, host line and max players text to the design
- [x] Add style to the You're in a room bar
- [x] Add gold border and YOU'RE IN badge to the card of my room
- [x] Add style to the Already in a room window
- [x] Add the brown corner with "i" to the RoomCard
- [x] Add style to the Room details window
- [x] Add the green round Create room button to the Rooms header
- [x] Add the yellow Find a room button with a magnifier to Rooms
- [x] Add style to the Find a room window
- [x] Add style to the room rows in the Find a room window

#### Waiting room
- [x] Add the own header with the back button to the Waiting room
- [x] Add difficulty pips to both Waiting room and RoomCard
- [x] Add style to the Stepper
- [x] Add style to the Max players and Difficulty settings
- [x] Add style to the host and guest panels in Waiting room
- [x] Add style to the PlayerRow
- [x] Add style to the open and closed player slots
- [x] Add style to the players card in the Waiting room
- [x] Add style to the Leave, Start game and Ready buttons
- [x] Add dizzy pose to the Ram
- [x] Add style to the Leave confirm window
- [x] Add ready to leave pose to the Ram
- [x] Add LeaveRoomPicture to the Leave confirm window

#### Create room
- [x] Add style to the Create room screen
- [x] Add a shadow to the cards in both Waiting room and Create room
- [x] Add the own header with the back button
- [x] Add style and the barn icon to the Meadow Farm card
- [x] Add style to the Room name field
- [x] Add the error state with ErrorIcon to the Room name field

### Steps to add the screen behaviour
- [x] Filter the rooms with the All and Waiting chips
- [x] Change Max players with the stepper in Create room
- [x] Change the difficulty with the arrows in Create room
- [x] Let the host change Max players and difficulty in the Waiting room
- [x] Disable the stepper buttons at the end of the range
- [x] Toggle ready with the Ready button in the Waiting room
- [x] Show room status from the players in the Waiting room
- [x] Disable Start game until everyone is ready
- [x] Ask to invite a friend when the host is alone in the Waiting room
- [x] Go back after confirming Leave
- [x] Count the Room name characters up to 24
- [x] Check the Room name length on Create
- [x] Remove the player from the room after confirming Leave
- [x] Pass the host to the next player or delete the room when the host leaves if no other players
- [x] Show the current host and their ram on the RoomCard
- [x] Go back to my room with Return in Rooms
- [x] Keep the card of my room open when it is full
- [x] Go to my room from the Already in a room window
- [x] Disable Create room while in a room
- [x] Close the windows by tapping outside
- [x] Join a room with Join room in Room details
- [x] Join a room by tapping its card, or open its details when it can't be joined
- [x] Search the rooms by name in the Find a room window
- [x] Join a room or open its details from the Find a room results
- [x] Show the rooms hosted by friends with the Friends chip, private rooms included
