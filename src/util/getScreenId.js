function getScreenConstraints(error, sourceId) {
    var screen_constraints = {
        audio: false,
        video: {
            mandatory: {
                chromeMediaSource: error ? 'screen' : 'desktop',
                maxWidth: window.screen.width > 1920 ? window.screen.width : 1920,
                maxHeight: window.screen.height > 1080 ? window.screen.height : 1080
            },
            optional: []
        }
    };

    if (sourceId) {
        screen_constraints.video.mandatory.chromeMediaSourceId = sourceId;
    }

    return screen_constraints;
}

function postMessage() {
    if (!iframe.isLoaded) {
        setTimeout(postMessage, 100);
        return;
    }

    iframe.contentWindow.postMessage({
        captureSourceId: true
    }, '*');
}

function initIFrame() {
    var iframe = document.createElement('iframe');
    iframe.onload = function() {
        iframe.isLoaded = true;
    };
    iframe.src = 'https://www.webrtc-experiment.com/getSourceId/';
    iframe.style.display = 'none';
    (document.body || document.documentElement).appendChild(iframe);
}


export function getScreenId(callback) {
    if (!initIFrame.called) {
        initIFrame();
        initIFrame.called = true;
    }

    // for Firefox:
    // sourceId == 'firefox'
    // screen_constraints = {...}
    if (!!navigator.mozGetUserMedia) {
        callback(null, 'firefox', {
            video: {
                mozMediaSource: 'window',
                mediaSource: 'window'
            }
        });
        return;
    }

    postMessage();

    window.addEventListener('message', onIFrameCallback);

    function onIFrameCallback(event) {
        if (!event.data) return;

        if (event.data.chromeMediaSourceId) {
            if (event.data.chromeMediaSourceId === 'PermissionDeniedError') {
                callback('permission-denied');
            } else callback(null, event.data.chromeMediaSourceId, getScreenConstraints(null, event.data.chromeMediaSourceId));
        }

        if (event.data.chromeExtensionStatus) {
            callback(event.data.chromeExtensionStatus, null, getScreenConstraints(event.data.chromeExtensionStatus));
        }

        // this event listener is no more needed
        window.removeEventListener('message', onIFrameCallback);
    }
}

export default {
    getScreenId: getScreenId
}