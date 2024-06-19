import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/Context";

const Main = () => {

    const { onSent,
        recentPrompt,
        showResult,
        loading,
        resultData,
        setInput,
        input
      } = useContext(Context);

      const handleKeyPress = (event) => {
        if (event.key === 'Enter' && input.trim()) {
          onSent();
        }
      };

  return (
    <div className="main">
      <div className="nav">
        <p>AI-assistant</p>
        <img src={assets.twinkle_icon} alt="" />
      </div>
      <div className="main-container">

      {!showResult ? 
      <>
 <div className="greet">
          <p>
            <span>Hello, Twinkle...</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest good shopping areas in delhi for ethnic wear..</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
                <p>For a person to be appointed as the judge of the High Court, what should be the qualifications?</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Debug my code and also improve the readability</p>
                <img  src={assets.code_icon} alt="" />
              </div>
        </div>
      </> : <div className="result">
        <div className="result-title">
          <img src={assets.twinkle_icon} alt="" />
          <p>{recentPrompt}</p>
        </div>
        <div className="result-data">
          <img src={assets.gemini_icon} alt="" />
          {loading ? <div className="loader">
          <hr/>
          <hr/>
          <hr/>
          </div> :   <p dangerouslySetInnerHTML={{__html : resultData}}  ></p>
          }
        
        </div>
      </div>
      }

       
        <div className="main-bottom">
            <div className="search-box">
                <input    onKeyPress={handleKeyPress} onChange={e => setInput(e.target.value) } value={input} type="text" placeholder="Enter a prompt here"/>
                <div>
                   
                   {input ?  <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : <img src={assets.send_icon} alt=""/>}
                </div>
            </div>
            <p className="bottom-info">
            AI-assistant may display inaccurate info, including about people, so double-check its responses.  
            </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
