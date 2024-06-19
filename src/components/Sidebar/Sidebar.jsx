import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
 const Sidebar = () => {
  const [menu, setmenu] = useState(false);
  const {onSent,prevPrompts,setRecentPrompt, newChat} = useContext(Context);
  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }
  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={() => setmenu(prev => !prev)}  className="menu" src={assets.menu_icon} />
        <div onClick={() => newChat( )} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {menu ? <p>New Chat</p> : null}
        </div>
        {menu ? 
        
      
        <div className="recent">
          <p className="recent-title">Recent</p>
          {prevPrompts.map((item, index) => {
            return (

          <div onClick={()=> loadPrompt(item)} key={index} className="recent-entry">
            <img src={assets.message_icon} alt="" />
            <p>{item.slice(0, 18)}...</p>
          </div>
            )
          })}
        </div> : null
      }
      </div>
      <div className="bottom">
      <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {menu ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {menu ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {menu? <p>Settings</p> : null}
                </div>
            </div>
        </div>
  );
};

export default Sidebar;