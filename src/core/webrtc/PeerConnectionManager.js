import PeerConnection from './PeerConnection';
import cache from '../util/cache';
import * as Log from '../util/Log';

const getStackId = (id1, id2) => id1.localeCompare(id2, 'en-us') > 0 ? `${id1}-${id2}` :`${id2}-${id1}`;

/**
 * @access protected
 */
export default class PeerConnectionManager {
	/**
	 * Constructor
	 * @access protected
	 */
	constructor() {
		/**
		 * WebRTC stacks
		 * @type {{*: {*: PeerConnection}}}
		 */
		this.stacks = {};
	}


	/**
	 * Get a PeerConnection object for a specific stream
	 * @param streamId
	 * @param remoteDevice
	 * @param publish
	 * @return {*}
	 */
	getPeerConnection(streamId, remoteDevice, publish) {
		const stackId = getStackId(remoteDevice, cache.device);
		let pc = null;
		if(this.stacks[stackId] && this.stacks[stackId][streamId]) {
			pc = this.stacks[stackId][streamId];
		} else {
			if(!this.stacks[stackId]) {
				this.stacks[stackId] = {};
			}
			pc = this.stacks[stackId][streamId] = new PeerConnection(stackId, streamId, remoteDevice, publish);
		}
		Log.d('PeerConnectionManager~getPeerConnection', {stackId, streamId, pc});
		return pc;
	}


	/**
	 * Create offer for a stream to a subscriber
	 * @param localStream
	 * @param subscriber
	 * @return {*|Promise.<PeerConnection>}
	 */
	offer(localStream, subscriber) {
		Log.d('PeerConnectionManager~offer', {localStream, subscriber});
		return this.getPeerConnection(localStream.uid, subscriber.device, true).offer(localStream.media);
	}

	/**
	 * Answer to the offer from the publisher
	 * @param remoteStream
	 * @param htmlElement
	 * @return {*|Promise.<PeerConnection>}
	 */
	answer(remoteStream, htmlElement) {
		Log.d('PeerConnectionManager~answer', {remoteStream, htmlElement});
		return this.getPeerConnection(remoteStream.uid, remoteStream.device, false).answer(htmlElement);
	}

	/**
	 * Close a PeerConnection
	 * @param streamId
	 * @param remoteDevice
	 * @return {*}
	 */
	close(streamId, remoteDevice) {
		const stackId = getStackId(remoteDevice, cache.device),
			pc = this.stacks[stackId] ? this.stacks[stackId][streamId] : null;
		if(pc){
			pc.close();
			this.stacks[stackId][streamId] = null;
			delete this.stacks[stackId][streamId];
			return pc;
		}
		return false;
	}
}