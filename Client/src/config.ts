const env = 'development';

const config = {
    development: {
        api: 'http://localhost:8000',
    },
    staging: {
        api: 'http://staging',
    },
    production: {
        api: 'http://production',
    }
};

export default config[env];