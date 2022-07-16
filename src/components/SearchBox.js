import "../css/SearchBox.css"

function SearchBox({imageSearchHandler, inputText, setInputText}){
    return(
        <>
        <div >
        <section class="showcase">
        <video src="./Video/video.mp4" autoPlay loop muted></video>
             <h1 class="title">IMAGE SEARCH</h1>    
         </section>
         </div>
            <form className="searchContainer" onSubmit={imageSearchHandler}>
                <input className="searchBox" placeholder="Search free photos" value={inputText} onChange={(e)=>setInputText(e.target.value)}></input>
                <button type="submit" className="searchButton">🔍</button>
            </form>
        </>
    );
}

export default SearchBox;