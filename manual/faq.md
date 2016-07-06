# Is my browser supported ?

Reach works on the following browsers:

* Google Chrome / Chromium 43+
* Mozilla Firefox 38+
* Microsoft Edge 13+

<br>
Otherwise, if your browser [supports WebRTC][caniuse], there's a high probability that Reach may work on your browser.

Since Reach uses [WebRTC's adapter][adapterJS] to insulate the SDK from spec changes and prefix differences, you might find more information on supported browsers [there][adapterJS].

[adapterJS]: https://github.com/webrtc/adapter
[caniuse]: http://caniuse.com/#search=webrtc

# Is version 2+ compatible with previous versions ?

No. Both model &amp; API have been completely changed.

# What's next ?

- Documentation:
    - Add tutorial on user presence
    - Add tutorial on user management
    - Add tutorial on invite management
    - Add tutorial on room permissions
- Tests:
    - Improve coverage
    - Add End-2-End WebRTC test
- Features:
    - Add buddy list
    - Add history
    - ...