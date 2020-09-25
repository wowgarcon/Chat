const chatRoutes = require('./chat_routes');

module.exports = app => {

    app.get('/:htmlName', chatRoutes.goToPage);

}