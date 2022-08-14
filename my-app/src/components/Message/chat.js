
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { addMessage, db } from '../../firebase'


export function Chat() {
    const [message, setMessage] = useState("")
    const [chat, setChat] = useState([])
    const { user } = useSelector(state => state.auth)
    const submitHandle = async e => {
        e.preventDefault()
        await addMessage({
            message,
            uid: user.uid
        })}

        const chatRef = query(collection(db, "messages"), orderBy("createdAt", "asc") ,where("uid", "==" , user.uid))
        const getChat = async () => {
            const data = await getDocs(chatRef)
            setChat(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    
        }
    
    useEffect(()=>{
        getChat()
    },[submitHandle])
    return (
        <div className='chat'>
            <div className='chatdiv'>
                <ul className='chatdivul'>
                    {chat.map(message => (
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
