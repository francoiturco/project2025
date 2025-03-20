const { defineConfig } = require("cypress");

module.exports = defineConfig({
    
    e2e: {
        
        setupNodeEvents(on, config) {

            // Environment Settings
            const ENVIRONMENT = config.env.ENVIRONMENT || 'staging';
            const filePath = `./cypress/config/settings.${ENVIRONMENT}.json`
            const settings = require(filePath)
            
            if (settings.baseUrl) config.baseUrl = settings.baseUrl
            if (settings.fixturesFolder) config.fixturesFolder = settings.fixturesFolder

            if (settings.env) {
                config.env = {
                    ...config.env,
                    ...settings.env
                }
            }

            return config;
        },
    },

});
