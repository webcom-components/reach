## Getting started

### Init your namespace

- Go to [Flexible DataSync](https://io.datasync.orange.com/home)
- Create a new namespace
- Download the security rules from the [reach-schema](https://webcom-components.github.io/reach-schema/draft-00/security/rules.json) repo and import them in the `security` section

### Get the library

See [installation](./installation.html) on how to retrieve the Reach library and its dependencies.

### The bases

#### The Reach object

The Reach object is your only entry point.

```javascript
const myReach = new Reach('https://io.datasync.orange.com/<your_namespace>');
```

See [configuration](./configuration.html) to learn more on the available configuration possibilities.

#### Register a new User

Create a basic registration form with email &amp; password and use its data:

```javascript
myReach.register(email, password)
    .then(user => {
        // user is registered & authenticated
    });
```

#### List Users &amp; Rooms

Once the user is logged in, you can list all registered users and opened rooms:

```javascript
// List users
myReach.users()
    .then(users => {
        // users is the list of registered users excluding the current one
        // let's keep only the connected users
        window.myUsers = users.filter(user => user.status === 'CONNECTED');
    });
// List rooms
myReach.rooms()
    .then(rooms => {
        // list of opened rooms
    });
```

#### Create a Room

All users can create a room.

```javascript
myReach.createRoom('GettingStarted')
    .then(room => {
        // room is the newly created room
        window.myRoom = room;
        // the current user has automatically joined the room
    });
```

#### Invite one or more users

Let's assume, you have selected a list of users:

```javascript
myRoom.invite(myUsers)
    .then((room, invites) => {
        // An invite has been sent to all users in myUsers
        // You can listen to invites responses
        invites.forEach(invite => {
            invite.on('ACCEPTED', i => {
                // Invite has been accepted
            });
            invite.on('REJECTED', i => {
                // Invite has been accepted
            });
        });
    });
```

#### Respond to invitations

First we need to listen to incoming invites:

```javascript
myReach.on(Reach.events.reach.INVITE_ADDED, invite => {
    // New invite received, let's accept it
    invite.accept()
        .then(d => {
            // Join the room
            window.hisRoom = d.room;
            return d.room.join();
        });
});
```

#### Share the camera

Once connected to the room, a user can share a media stream with the other participants of the room.
Only the room participants will be able to view that stream.

```javascript
myRoom.share(Reach.types.AUDIO_VIDEO, localVideoContainerNode, Reach.media.constraint('HD'))
    .then(localStream => {
        // The local Stream has been initiated, meaning `getUserMedia` has been called and that the video stream is displayed within
        // the `localVideoContainerNode`
    });
```

See [stream sharing]() to get more details.

#### Listen to shared streams

Listen to published stream right after joining the room so you won't miss any shared stream:

```javascript
hisRoom.on(Reach.event.room.STREAM_PUBLISHED, remoteStream => {
    window.hisStream = remoteStream;
    remoteStream.subscribe(remoteVideoContainerNode)
        .then(() => {
            // Remote stream is subscribed and the video should appear in the `remoteVideoContainerNode` when WebRTC peer connection is established
        });
});
```

