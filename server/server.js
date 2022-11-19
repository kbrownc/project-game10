const cors = require('cors');
const io = require('socket.io')(5000,{
	cors: {
		origin: '*',
	}
})

io.on('connection', socket => {
	const id = socket.handshake.query.id
	socket.join(id)

	socket.on('send-message', ({ receipients, text }) => {
		console.log('server recipients', receipients)
		receipients.forEach(receipient => {
			const newRecipients = receipients.filter(r => r !== recipient)
			newRecipients.push(id)
			socket.broadcast.to(recipient).emit('receive-message', {
				receipients: newRecipients, sender: id, text
			})
		})
	})
})
