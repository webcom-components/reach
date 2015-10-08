/**
 * Detach the media stream from the element.
 * The element will have its src content changed to null and will be paused.
 * @param {video tag} element - The video tag where the stream is displayed
 */
const detachMediaStream = function(element) {
	if(element){
		element.mozSrcObject = null;
		element.pause();
	}
};

export default {
	detachMediaStream
};