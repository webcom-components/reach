import Reach from '../../src/Reach';
import Config from '../../src/definitions/Config';

export default () => {
	describe('Reach entry point', () => {
		it('Should expose possible stream types as static members', () => {
			expect(Reach.t).not.toBeNull();
			expect(Reach.t.AUDIO_VIDEO).toEqual('audio-video');
		});

		it('Should expose sdk & schema version as static members', () => {
			expect(Reach.v).not.toBeNull();
			expect(Reach.v.sdk).toMatch(/^v?\d+\.\d+\.\d+$/);
			expect(Reach.v.schema).toMatch(/^(draft-\d+)|(legacy)$/);
		});

		it('Should use default configuration if no configuration is specified', () => {
			// Only default
			const sdk = new Reach(config.namespaceUrl);
			expect(sdk.config).not.toBeNull();
			expect(sdk.config).toEqual(Config);
		});

		it('Should fix configuration with default values for missing properties', () => {
			// config + default values for missing props
			const sdk = new Reach(config.namespaceUrl, {autoRequestMedia: false});
			expect(sdk.config).not.toBeNull();
			expect(sdk.config.autoRequestMedia).toBeFalsy();
		});
	});
};
