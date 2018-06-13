# Sharing streams

Stream can only be shared within a Room using the [share](../class/src/core/Room.js~Room.html#instance-method-share) method.

## The `share` method

The [share](../class/src/core/Room.js~Room.html#instance-method-share) method can take up to 3 arguments.

### The stream type

Can be `AUDIO`, `VIDEO`, `AUDIO_VIDEO` or any of the stream type defined [here](../typedef/index.html#static-typedef-StreamTypes)

### The Media constraints

The media constraints can be defined when calling [share](../class/src/core/Room.js~Room.html#instance-method-share):

```javascript
room.share(Reach.types.AUDIO_VIDEO, {audio: true, video: {width: 1080}});
```

or on init: 

```javascript
const myReach = new Reach('https://io.datasync.orange.com/base/<your_namespace>', {
    constraints: {audio: true, video: {width: 1080}}
});
```

A media constraints helper is exposed as a static member of Reach. It will return a well formatted constraints object:

```
// Default constraints
console.log(Reach.media.constraints());
// Will output {"video":{"width":{"min":720,"ideal":1280,"max":1920},"height":{"min":576,"ideal":720,"max":1080}},"audio":true}

// SD preset
console.log(Reach.media.constraints('SD'));
// Will output {"video":{"width":{"min":640,"ideal":720,"max":1280},"height":{"min":480,"ideal":576,"max":720}},"audio":true}
```

### The container node

You only need to provide a container node (i.e. a div), Reach will create the appropriate media element (i.e. audio or video) for the given stream.

## Switching the camera

Once a stream is shared, you can switch between media devices:

```javascript
myStream.switchCamera()
    .then(stream => {
        // stream is myStream
    })
```

The switchCamera method will loop through available video devices found via mediaDevice.enumerateDevice.

You can specify which device you want to switch to by passing the device's id to the switchCamera method.
 
The same method exists for switching the microphone.

## Prefer Codecs

On init, you can specify a preferred codec to use when negotiating the PeerConnection.

```javascript
const myReach = new Reach('https://io.datasync.orange.com/base/<your_namespace>', {
    preferredAudioCodec: Reach.codecs.audio.OPUS,
    preferredVideoCodec: Reach.codecs.video.VP9
});
```

The preferred codec must be specified as a RegExp. You can find predefined ones in Reach.codecs.

On negotiation, Reach will edit the SDP offer before sending it and reorder the available codecs to suit your configuration

