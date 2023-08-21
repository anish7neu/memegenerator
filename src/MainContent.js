import React from "react";
import "./styles/MainContent.css"
import imageIcon from "./images/image-gallery.png"

export default function MainContent(){

  //State declaration for meme object
  const [meme,  setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bgw.jpg"
  })

  //Accessing memes data
  const [allMemes, setAllMemes] = React.useState([])

  //useEffect is used to access anything that React is not incharge of
  
  React.useEffect(() =>{
    //Making API call to get memes
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])

  //Generating random number to get image for meme randomly
  function getMemeImage(){
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    let url = allMemes[randomNumber].url
    setMeme(prevMeme=>{
      return{
        ...prevMeme,
        randomImage: url
      }
    })
  }

  //Updating text input
  function handleText(event){
    const{name, value} = event.target
    setMeme(prevMeme => {
      return{
        ...prevMeme,
        [name] : value
      }
    })
  }

  //To be displayed as Main Content in webpage
  return(
    <div className="main">
      <div className="main-content">
        <input 
          type="text"
          className="box" 
          placeholder="First Phrase"
          name="topText"
          value={meme.topText}
          onChange={handleText}
        />
        <input 
          type="text"
          className="box" 
          placeholder="Second Phrase"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleText}
        />

        <button onClick={getMemeImage} className="meme-button">
          <span>Get a new meme image</span>
          <img className="image" src={imageIcon} />
        </button>
      </div>
      <div className="meme-part">
        <img src = {meme.randomImage} className="meme-image"/>
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>  
      

    </div>
  )
}