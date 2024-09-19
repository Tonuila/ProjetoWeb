import { useState } from 'react';

const images = ['/civic1.webp', '/civic2.jpg', '/civic3.webp'];

interface CarouselProps {
    styles: string
}

export default function Carousel({ styles }: CarouselProps) {
    const [currentImage, setCurrentImage] = useState(0);

    function handleNext() {
        setCurrentImage((prev) => (prev + 1) % images.length);
    }

    function handlePrev() {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    }

    return (
        <div className={styles}>
            <img src={images[currentImage]} alt="Carousel image" />
            <button className="prev" onClick={handlePrev}>❮</button>
            <button className="next" onClick={handleNext}>❯</button>
        </div>
    );
}
