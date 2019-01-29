class ConfigManager {
  constructor() {
    if (!ConfigManager.instance) {
      const { __env__ } = window;

      this.logLevel = __env__.LOG_LEVEL || 'DEBUG';

      this.url = `${__env__.WEBCOM_PROTOCOL || 'https'}://${__env__.WEBCOM_DOMAIN || 'io.datasync.orange.com'}`;

      this.namespace = `${this.url}/base/${__env__.WEBCOM_NAMESPACE}`;

      ConfigManager.instance = this;
    }

    return ConfigManager.instance;
  }
}

const Config = new ConfigManager();
export default Config;
