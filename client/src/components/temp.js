const formattedConversations = conversations.map(conversation => {
	convertTo
const formattedConversations = conversations != null && conversations.map(conversation => {


I had mistake in contexts/Contacts provider in   
// i had '    ('contacts,[]')  
	convertTo
// const [contacts,setContacts]= useLocalStorage('contacts',[]) 


<div className="d-flex flex-column flex-grow-1">
      <div className="flex-grow-1 overflow-auto">
        <div className="h-100 d-flex flex-column align-items-start justify-content-end px-3"> 
          {selectedConversation.messages.map((message, index)) => {
          	const lastMessage = selectedConversation.messages.length - 1 === index
            return (
              <div 
                key={index} 
                className="my-1 d-flex flex-column"
              >
                <div 
                  className="rounded px-2 py-1">
                  {message.text}
                </div>
                <div>
                  {message.fromMe ? 'You' : message.senderName}
                </div>
              </div>
            )
          }}

        </div>
      </div>

          {selectedConversation.messages.map((message, index) => {
            const lastMessage = selectedConversation.messages.length - 1 === index
            return (
              <div
                ref={lastMessage ? setRef : null}
                key={index}
                className={`my-1 d-flex flex-column ${message.fromMe ? 'align-self-end align-items-end' : 'align-items-start'}`}
              >
                <div
                  className={`rounded px-2 py-1 ${message.fromMe ? 'bg-primary text-white' : 'border'}`}>
                  {message.text}
                </div>
                <div className={`text-muted small ${message.fromMe ? 'text-right' : ''}`}>
                  {message.fromMe ? 'You' : message.senderName}
                </div>
              </div>
            )
          })}
        </div>
      </div>