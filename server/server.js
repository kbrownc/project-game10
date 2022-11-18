const cors = require('cors');
const io = require('socket.io')(5000,{
	cors: {
		origin: '*',
	}
})
// const cors = require('cors');

io.on('connection', socket => {
	const id = socket.handshake.query.id
	socket.join(id)

	socket.on('send-message', ({ receipients, text }) => {
		receipients.forEach(receipient => {
			const newRecipients = receipients.filter(r => r !== recipient)
			newRecipients.push(id)
			socket.broadcast.to(recipient).emit('receive-message', {
				receipients: newRecipients, sender: id, text
			})
		})
	})
})
