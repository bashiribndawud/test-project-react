import React, { useEffect, useState } from "react";
import "./chat.css";
import avater from '../assets/avatar.svg';

const Chat = ({currentUser}) => {
  const [userList, setuserList] = useState([]);
  const [msg, setmsg] = useState('')
  const [messageList, setmessageList] = useState([]);

  const handleSubmit = () => {
    let obj = {
      msg: msg,
      sender: currentUser
    }
    console.log(obj, messageList)
    let arr = [...messageList, obj]
    setmessageList(arr)
    console.log(arr)
    localStorage.setItem("chat", JSON.stringify(arr))
    setmsg("")

  };
  const onFocus = () => {
    console.log("Tab is in focus");
    setuserList(JSON.parse(localStorage.getItem("user")));
    if(!localStorage.getItem('chat')){
      localStorage.setItem("chat", JSON.stringify([]))
    }else{
      setmessageList(JSON.parse(localStorage.getItem("chat")))
    }

  };

  useEffect(() => {
    window.addEventListener("focus", onFocus);
    onFocus();
    // Specify how to clean up after this effect:
    return () => {
      window.removeEventListener("focus", onFocus);
    };
  }, []);

  return (
    <>
      <div class="container">
        <div class="header">
          <div class="grp-img">
            {userList.map((e,idx) => (
              <img class={`i${idx+1}`} src={avater} alt="" />
            ))}
          </div>

          <div class="grp-info">
            <h3 class="grp-name">{userList.map((e) => e + ' ')}</h3>
            <p class="grp-status">{userList.length} users in chat room</p>
          </div>
        </div>

        <div class="chatbox">
          {messageList && messageList.map(chat => (
            <div className={currentUser === chat.sender ? 'chat receiver' : 'chat sender' }>
              <span>{chat.sender}</span>
              <p class="msg">
                <ion-icon name="caret-back-outline"></ion-icon>
                {chat.msg}
              </p>
            </div>

          ))}
        
        </div>
          <div className="flex pos-absolute">
            <input value={msg}  onChange={(evt) => setmsg(evt.target.value)} />
            <button onClick={handleSubmit} className="btn">
              <ion-icon className="send" name="send"></ion-icon>
            </button>
          </div>
      </div>
    </>
  );
};

export default Chat;
