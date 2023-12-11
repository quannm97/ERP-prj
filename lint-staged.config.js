module.exports = {
    'client/**/*.(ts|tsx)': ['npm run lint --prefix client'],
    'server/**/*.js': ['npm run lint --prefix server'],
};
