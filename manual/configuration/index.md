# ICE management

Reach comes with default TURN &amp; TURNS servers configured:

```json
{
    "username": "admin",
    "credential": "webcom1234",
    "urls": [
        "turns:turn1.webcom.orange.com:443",
        "turn:turn1.webcom.orange.com:443?transport=tcp",
        "turn:turn1.webcom.orange.com:3478?transport=tcp"
    ]
}
```

But if needed, you can over overwrite this settings either when instantiating Reach or directly in your Flexible DataSync namespace.

### Configure ICE servers in app

Pass your ICE servers list when instantiating Reach:

```
const myReach = new Reach('https://io.datasync.orange.com/base/<MY_BASE>', {
    iceServers: [
        {
            username: 'admin',
            credential: 'webcom1234',
            urls: [
                'turns:turn1.webcom.orange.com:443',
                'turn:turn1.webcom.orange.com:443?transport=tcp',
                'turn:turn1.webcom.orange.com:3478?transport=tcp'
            ]
        }
    ]
});
```

### Configure ICE servers on server

This method prevents you from having to re-deploy your app everytime you want/need to reconfigure your ICE servers:

* go to [Flexible DataSync](https://io.datasync.orange.com/home)'s console
* select your namespace
* add your ICE servers using the `data` section on the `_/ice/` path.

All ICE servers must be of this type:

```json
{
    "username": <String?>,
    "credential": <String?>,
    "urls": <String|String[]>
}
```

### Limitations

To date, Mozilla Firefox doesn't support TURNS server (but it's ok for TURN et STUN server). If TURNS server are specified, they will be ignored on Firefox
