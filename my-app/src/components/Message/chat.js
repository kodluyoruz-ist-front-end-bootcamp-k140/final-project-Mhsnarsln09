import { AuthErrorCodes } from 'firebase/auth'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { addMessage } from '../../firebase'


export function Chat() {
    const [message, setMessage] = useState("")
    const { user } = useSelector(state => state.auth)
    const { messages } = useSelector(state => state.chats)
    const submitHandle = async e => {
        e.preventDefault()
        await addMessage({
            message,
            uid: user.uid
        })
    }
    return (
        <div className='chat'>
            <div className='chatdiv'>
                <ul className='chatdivul'>
                    {messages.map(message => (
                        <li key={message.id} style={{ listStyle: "none" }}>
                            <div className="form-control mb-1 bg-primary text-white" placeholder="Leave a comment here" style={{ width: "auto" }} >
                                {message.message}
                            </div>
                        </li>
                    )
                    )}
                </ul>
                <div className="container frmcontainer">
                    <form onSubmit={submitHandle}>
                    <div className="frm" >
                        <input type="text" className='frm-input' onChange={e => setMessage(e.target.value)} />
                        <button className='btn btn-primary frm-btn' type="submit"> 
                            Send
                        </button>
                    </div>
                    </form>

                </div>

            </div>
        </div>
    )
}
