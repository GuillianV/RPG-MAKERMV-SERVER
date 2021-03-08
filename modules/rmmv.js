require('../server.js')


module.exports = function(socket,io,myDatabase) {

    socket.on('connectrmmv', (data) => {

        console.log(data)
    })

}