## Development log

### Setup

<details>
<summary>Steps to set up the project</summary>

- [x] Create the Expo app "npx create-expo-app@latest . --template blank@latest"
- [x] Add the README
- [x] Rename the app to Woolly Ram Pranks

</details>

<details>
<summary>Steps to add the icons</summary>

- [x] Install Feather icons for the screens "npx expo install @expo/vector-icons"
- [x] Add PNG tab icons to the tabs
- [x] Install SVG support "npx expo install react-native-svg"
- [x] Add LockIcon to the LockedModeCard
- [x] Add LockIcon before the name of a private room on the RoomCard

</details>

<details>
<summary>Steps to add the fonts</summary>

- [x] Install the fonts "npx expo install expo-font @expo-google-fonts/lilita-one @expo-google-fonts/nunito-sans"
- [x] Create useGameFonts hook for loading Lilita One and Nunito Sans fonts

</details>

<details>
<summary>Steps to connect Supabase</summary>

- [x] Install Supabase "npx expo install @supabase/supabase-js"
- [x] Create profiles, rooms and room_players tables in Supabase
- [x] Add sample players and rooms
- [x] Load rooms and players
- [x] Create a room and join it as the host

</details>

### Navigation

<details>
<summary>Steps to add navigation with React Navigation</summary>

- [x] Install React Navigation "npm install @react-navigation/native"
- [x] Install its native dependencies "npx expo install react-native-screens react-native-safe-area-context"
- [x] Install the bottom tabs "npm install @react-navigation/bottom-tabs"
- [x] Install the native stack "npm install @react-navigation/native-stack"
- [x] Add the RootNavigator with native bottom tabs and render it in App
- [x] Add the Lobby, Rooms, Profile and Leaderboard tabs
- [x] Always show the tab labels
- [x] Move the tabs to AppNavigator and make the RootNavigator a native stack

</details>

<details>
<summary>Steps to style the tab bar and status bar</summary>

- [x] Add style to the tab bar
- [x] Use dark status bar icons

</details>

<details>
<summary>Steps to move between the screens</summary>

- [x] Open the Rooms tab from Play Co-op
- [x] Open the Profile tab from the player name in the Lobby
- [x] Open Create room from Rooms
- [x] Replace Create room with the Waiting room after Create
- [x] Open only the rooms that are waiting
- [x] Connect the back button to navigation in the Waiting room
- [x] Go back with Leave in the Waiting room
- [x] Go back to Rooms from the Waiting room

</details>

### Lobby

<details>
<summary>Steps to add the mode cards and buttons</summary>

- [x] Add the Co-op mode card
- [x] Add the LockedModeCard component for Competitive and Hybrid
- [x] Add style to the header and title
- [x] Add style to the Co-op mode card
- [x] Use Lilita One and Nunito Sans
- [x] Add style to the LockedModeCard
- [x] Add style to the Play Co-op and Create a room buttons

</details>

### Rooms

<details>
<summary>Steps to add the header and tabs</summary>

- [x] Add the header with the refresh button
- [x] Add the All and Waiting filter chips
- [x] Add the Create room button at the bottom
- [x] Add style to the header
- [x] Add style to the panel and filter chips
- [x] Add GameButton component for Create room
- [x] Filter the rooms with the All and Waiting chips
- [x] Refresh the rooms by pulling the list down
- [x] Refresh the rooms with the refresh button
- [x] Move Create room to the header and add Find a room at the bottom
- [x] Add the green round Create room button to the header
- [x] Fit the four tabs on one row and show the rooms count above the list

</details>

<details>
<summary>Steps to add the RoomCard</summary>

- [x] Add the rooms list with the RoomCard component
- [x] Show the difficulty on the RoomCard
- [x] Add the RamAvatar component to the RoomCard
- [x] Add Badge component for the WAITING and PLAYING status
- [x] Add style to the RoomCard
- [x] Add difficulty colour to the RoomCard
- [x] Match the RoomCard spacing, host line and max players text to the design
- [x] Add the brown corner with "i" to the RoomCard
- [x] Show the current host and their ram on the RoomCard

</details>

<details>
<summary>Steps to show my room</summary>

- [x] Add the "You're in a room" bar
- [x] Show YOU'RE IN on the card of my room
- [x] Add the Already in a room window
- [x] Add style to the You're in a room bar
- [x] Add gold border and YOU'RE IN badge to the card of my room
- [x] Add dizzy pose to the Ram
- [x] Add style to the Already in a room window
- [x] Go back to my room with Return
- [x] Keep the card of my room open when it is full
- [x] Go to my room from the Already in a room window
- [x] Disable Create room while in a room
- [x] Hide the create and join hints in empty tabs while I'm in a room

</details>

<details>
<summary>Steps to add Room details and join a room</summary>

- [x] Add the Room details button and window
- [x] Show the room, its players and Join room in Room details
- [x] Add style to the Room details window
- [x] Close the windows by tapping outside
- [x] Join a room with Join room in Room details
- [x] Join a room by tapping its card, or open its details when it can't be joined
- [x] Save the player in the room on Join and show Couldn't join on error
- [x] Show Joining on the room card and in Room details while joining
- [x] Check on the server that the room can be joined
- [x] Reload the rooms after the server refuses a join
- [x] Show a room code field in Room details of a private room
- [x] Paste the code and join a private room from Room details
- [x] Add style to the room code field in Room details

</details>

<details>
<summary>Steps to add the Find a room window</summary>

- [x] Add the window with the search tabs and a room name field
- [x] Show the rooms as rows
- [x] Add the Code tab with the room code field and Join room
- [x] Add the yellow Find a room button with a magnifier
- [x] Add style to the window
- [x] Add style to the room rows
- [x] Search the rooms by name
- [x] Join a room or open its details from the results
- [x] Join a private room with its code
- [x] Disable Find a room while I am in a room
- [x] Change the room code to the ABC-1234 format
- [x] Check the room code on the server
- [x] Hide the code error as soon as I type or change the tab
- [x] Add style to the Code tab
- [x] Show the room code field in red on an error
- [x] Disable Join room until the room code is complete
- [x] Keep the Find a room window above the keyboard
- [x] While the code is checked make the Join room button gray
- [x] Show a spinner on Join room while the code is checked
- [x] Join any room with its code, not only a private one

</details>

<details>
<summary>Steps to add friends' and private rooms</summary>

- [x] Add the Friends filter chip
- [x] Show FRIEND next to the host on the RoomCard
- [x] Style FRIEND badge on RoomCard
- [x] Show the rooms hosted by friends with the Friends chip, private rooms included
- [x] Add the Private tab and its empty state
- [x] Make the private room cards light purple
- [x] Players cannot join private rooms
- [x] Show friends' private rooms only in the Private tab, not in Friends
- [x] Show all private rooms in the Private tab, mine included

</details>

<details>
<summary>Steps to add the loading, empty and error states</summary>

- [x] Add empty state for no rooms and no friends' rooms
- [x] Show empty state for no waiting rooms
- [x] Show a loading message while the rooms load
- [x] Show an error message with Try again when the rooms can't load
- [x] Add style to the empty state
- [x] Add sleeping dog to the empty state
- [x] Add a spinner and skeleton cards to the loading state
- [x] Add style to the error state with dizzy ram and Try again
- [x] Add a Create a room button to the empty tabs
- [x] Add style to the Create a room button in the empty tabs

</details>

### Create room

<details>
<summary>Steps to add the room settings</summary>

- [x] Add the Create room screen and open it from the Lobby
- [x] Add Max players and Difficulty
- [x] Add the Meadow Farm level card
- [x] Add style to the screen
- [x] Add the own header with the back button
- [x] Add a shadow to the cards in both Waiting room and Create room
- [x] Add style and the barn icon to the Meadow Farm card
- [x] Change Max players with the stepper
- [x] Change the difficulty with the arrows
- [x] Disable the stepper buttons at the end of the range

</details>

<details>
<summary>Steps to add the room name and Create</summary>

- [x] Add the Room name field
- [x] Add the Private room switch
- [x] Add style to the Room name field
- [x] Add the error state with ErrorIcon to the Room name field
- [x] Style the error message under Create
- [x] Add style to the Private room switch with own ToggleSwitch
- [x] Count the Room name characters up to 24
- [x] Check the Room name length on Create
- [x] Ask to leave the current room first on Create
- [x] Create a private room with the Private room switch
- [x] Scroll the form above the keyboard to reach Create
- [x] Show a spinner on Create while the room is created
- [x] Hide the keyboard on Create so the error is not covered
- [x] Make the Private room switch easier to tap

</details>

### Waiting room

<details>
<summary>Steps to add the header</summary>

- [x] Add the Waiting room screen and open it from Rooms with the room id
- [x] Show the room name and host
- [x] Show mode, map and difficulty in the header
- [x] Add the own header with the back button
- [x] Add difficulty pips to both Waiting room and RoomCard
- [x] Install the clipboard "npx expo install expo-clipboard"
- [x] Show the code of a private room with a Copy button
- [x] Add style to the private room code bar
- [x] Show a Public bar in public rooms
- [x] Show the code bar only to the host and add the room type badge and the settings button to Players
- [x] Add style to the room type badge and make the player rows lower

</details>

<details>
<summary>Steps to add the room settings</summary>

- [x] Add the Max players and Difficulty panel
- [x] Add style to the Stepper
- [x] Add style to the Max players and Difficulty settings
- [x] Add style to the host and guest panels
- [x] Let the host change Max players and difficulty
- [x] Add the Private room setting to the host panel
- [x] Add style to the Private room setting
- [x] Save the room settings on the server
- [x] Disable the room settings while they are saved
- [x] Move the room settings into a Room settings window opened with the gear button
- [x] Save the room settings only after Done
- [x] Add style to the Room settings window

</details>

<details>
<summary>Steps to add the players list</summary>

- [x] Add the players list with the PlayerRow component
- [x] Add Invite a friend row
- [x] Show open and closed seats
- [x] Show the ram avatar of each player
- [x] Add style to the PlayerRow
- [x] Add style to the open and closed player slots
- [x] Add style to the players card
- [x] Ask to invite a friend when the host is alone

</details>

<details>
<summary>Steps to add the room chat</summary>

- [x] Add the Room chat with a Coming soon note
- [x] Add style and icons to the Room chat

</details>

<details>
<summary>Steps to add Ready and Start game</summary>

- [x] Add Leave room, Ready and Start game buttons
- [x] Show different buttons for the host and the guest
- [x] Show how many rams are ready
- [x] Add style to the Leave, Start game and Ready buttons
- [x] Toggle ready with the Ready button
- [x] Show room status from the players
- [x] Disable Start game until everyone is ready
- [x] Save Ready on the server
- [x] Show only the connection error in the Waiting room when offline
- [x] Show I’m ready or Ready! on the guest button with the ReadyButton component
- [x] Add style to the ReadyButton
- [x] Ask the guest to tap I’m ready in the room status

</details>

<details>
<summary>Steps to leave the room</summary>

- [x] Ask before leaving the room
- [x] Add style to the Leave confirm window
- [x] Add ready to leave pose to the Ram
- [x] Add LeaveRoomPicture to the Leave confirm window
- [x] Go back after confirming Leave
- [x] Remove the player from the room after confirming Leave
- [x] Pass the host to the next player or delete the room when the host leaves if no other players
- [x] Leave the room on the server and pass the host on there
- [x] Show a spinner on Leave while leaving the room

</details>

<details>
<summary>Steps to refresh the room</summary>

- [x] Show an error message when the room can't refresh
- [x] Add refresh button and error message to Room not found
- [x] Add style to the refresh error message
- [x] Add ErrorIcon to the refresh error message
- [x] Refresh with the refresh button
- [x] Refresh by pulling it down

</details>

### Settings

<details>
<summary>Steps to add the Settings screen</summary>

- [x] Add the Settings screen and open it from the cog in the Lobby
- [x] Install expo-constants for the app version "npx expo install expo-constants"
- [x] Add the Sound, Gameplay and General sections and the app version to Settings
- [x] Add Vibration and Notifications switches to Settings
- [x] Install the slider "npx expo install @react-native-community/slider"
- [x] Add Music and Sound effects sliders to Settings
- [x] Add style and icons to Settings
- [x] Mute and unmute Music and Sound effects with their icon
- [x] Add style to muted Music and Sound effects

</details>

### Profile

<details>
<summary>Steps to add the Profile screen</summary>

- [x] Show the ram, name, email and stats in Profile
- [x] Add style to the Profile avatar and name
- [x] Style profile stats, log out and add icons 
- [x] Open the Change photo window from the camera button on the avatar
- [x] Style change photo window
- [x] Install the image picker "npx expo install expo-image-picker"
- [x] Choose a profile photo from the gallery
- [x] Take a profile photo with the camera and show a message when camera access is off
- [x] Explain why the camera is needed before asking again
- [x] Add style to the camera access message and Open settings

</details>

### Leaderboard

<details>
<summary>Steps to add the Leaderboard screen</summary>

- [x] Add the Leaderboard header and tabs

</details>
