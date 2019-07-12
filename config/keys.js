if (process.env.NODE_ENV === 'production') {
    console.log('I am in prod')
    module.exports = require('./prod')

}
else {
    console.log('I am in dev')

    module.exports = require('./dev')
}