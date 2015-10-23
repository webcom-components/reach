export const MUTE_VISIO = 'MUTE_VISIO';
export const MUTE_AUDIO = 'MUTE_AUDIO';

export function muteVisio() {
	return {
		type: MUTE_VISIO
	};
}

export function muteAudio() {
	return {
		type: MUTE_AUDIO
	};
}