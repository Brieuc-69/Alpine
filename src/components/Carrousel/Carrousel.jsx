import React, {useState} from "react";
import './Carrousel.css';
import Photo1 from '../../Assets-TP-Alpine/images/sources-homepage/A110/Presentation_desktop-1.png';
import Photo2 from '../../Assets-TP-Alpine/images/sources-homepage/interieur/interieur_2_desktop.png';
import Photo3 from '../../Assets-TP-Alpine/images/sources-homepage/galerie/A110_LEGENDE_9.jpg';
import Photo4 from '../../Assets-TP-Alpine/images/sources-homepage/galerie/A110_PURE_6.jpg';
import Photo5 from '../../Assets-TP-Alpine/images/sources-homepage/galerie/A110_PURE_8.jpg';
import Photo6 from '../../Assets-TP-Alpine/images/sources-homepage/galerie/A110_LEGENDE_5.jpg';
import Photo7 from '../../Assets-TP-Alpine/images/sources-homepage/galerie/A110_PE_1.jpg';
import Photo8 from '../../Assets-TP-Alpine/images/sources-homepage/galerie/A110_LEGENDE_1.jpg';
import Photo9 from '../../Assets-TP-Alpine/images/sources-homepage/galerie/A110_LEGENDE_9.jpg';
import Photo10 from '../../Assets-TP-Alpine/images/sources-homepage/interieur/interieur_desktop.png';


export default function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
        { src: Photo1, alt: "Image 1", caption: "Caption for Image 1" },
        { src: Photo2, alt: "Image 2", caption: "Caption for Image 2" },
        { src: Photo3, alt: "Image 3", caption: "Caption for Image 3" },
        { src: Photo4, alt: "Image 3", caption: "Caption for Image 4" },
        { src: Photo5, alt: "Image 3", caption: "Caption for Image 5" },
        { src: Photo6, alt: "Image 3", caption: "Caption for Image 6" },
        { src: Photo7, alt: "Image 3", caption: "Caption for Image 7" },
        { src: Photo8, alt: "Image 3", caption: "Caption for Image 8" },
        { src: Photo9, alt: "Image 3", caption: "Caption for Image 9" },
        { src: Photo10, alt: "Image 3", caption: "Caption for Image 10" },
    ];

    const nextImage = () => {
        setActiveIndex((activeIndex + 1) % images.length);
    };

    const prevImage = () => {
        setActiveIndex((activeIndex - 1 + images.length) % images.length);
    };

    const selectImage = (index) => {
        setActiveIndex(index);
    };

    return (
        <main className="carousel-container">
            <div className="carousel">
                {images.map((image, index) => (
                    <div className={`item ${index === activeIndex ? 'active' : ''}`} key={index}>
                        <img src={image.src} alt={image.alt}/>
                        <p className="caption">{image.caption}</p>
                    </div>
                ))}
            </div>
            <div className="buttons-carousels">
                <button className="btn prev" onClick={prevImage}>Prev</button>
                <button className="btn next" onClick={nextImage}>Next</button>
            </div>
            <div className="dots">
                {images.map((_, index) => (
                    <span
                    className={`dot ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => selectImage(index)}
                        key={index}
                        />
                    ))}
            </div>
        </main>
    );
}
