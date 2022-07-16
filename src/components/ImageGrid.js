import "../css/ImageGrid.css";
import Typewriter from 'typewriter-effect';

function ImageGrid({searchQuery, totalImages, images, loadMoreHandler}){
    return(
        <div className="imageContainer">
            {searchQuery!=="" &&
            <>         
            <Typewriter
                options={{
                    strings: ['Searching for ' + searchQuery + ' ...'],
                    pause : 20,
                    autoStart: true,
                    delay: 60,
                    loop: true,
                }}
                />
                {/* <h2>Searching for {searchQuery}</h2> */}
                <p>Found : {totalImages}</p>
                <div className="imageGrid">
                    {images.map(image => (
                          <img className="gridImages" alt =''src ={image.urls.full} key={image.id}></img>
                    ))}
                </div>
                <button className="loadMoreBtn" onClick={loadMoreHandler}>↓</button>
            </>
            }
        </div>
      
    );
}

export default ImageGrid;