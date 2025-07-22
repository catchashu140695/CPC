import React, { useState, useEffect } from 'react';

const projectsData = [
    { image: "img/gallery-3.jpeg" },
    { image: "img/gallery-4.jpeg" },
    { image: "img/gallery-5.jpeg" },
    { image: "img/gallery-6.jpeg" },
    { image: "img/gallery-7.jpeg" },
    { image: "img/gallery-8.jpeg" },
    { image: "img/gallery-9.jpeg" },
    { image: "img/gallery-10.jpeg" },
    { image: "img/gallery-11.jpeg" },
    { image: "img/gallery-12.jpeg" },
    { image: "img/gallery-13.jpeg" },
    { image: "img/gallery-14.jpeg" },
    { image: "img/gallery-15.jpeg" },
    { image: "img/gallery-16.jpeg" },
    { image: "img/gallery-17.jpeg" },
    { image: "img/gallery-18.jpeg" },
    { image: "img/gallery-19.jpeg" },
    { image: "img/gallery-20.jpeg" },
    { image: "img/gallery-21.jpeg" },
    { image: "img/gallery-22.jpeg" },
    { image: "img/gallery-23.jpeg" },
    { image: "img/gallery-24.jpeg" },
    { image: "img/gallery-25.jpeg" },
    { image: "img/gallery-26.jpeg" },
    { image: "img/gallery-27.jpeg" },
    { image: "img/gallery-28.jpeg" },
    { image: "img/gallery-29.jpeg" },
    { image: "img/gallery-30.jpeg" },
    { image: "img/gallery-31.jpeg" },
    { image: "img/gallery-32.jpeg" },
    { image: "img/gallery-33.jpeg" },
    { image: "img/gallery-34.jpeg" },
    { image: "img/gallery-35.jpeg" },
    { image: "img/gallery-36.jpeg" },
    { image: "img/gallery-37.jpeg" },
];

const rows = 2;
const columns = 3;
const imagesPerGrid = rows * columns;

function getRandomIndexes(arrayLength, count, exclude = []) {
    const indexes = [];
    while (indexes.length < count) {
        const idx = Math.floor(Math.random() * arrayLength);
        if (!indexes.includes(idx) && !exclude.includes(idx)) {
            indexes.push(idx);
        }
    }
    return indexes;
}

const Projects = () => {
    const [gridIndexes, setGridIndexes] = useState(
        Array.from({ length: imagesPerGrid }, (_, i) => i % projectsData.length)
    );
    const [nextImageIdx, setNextImageIdx] = useState(imagesPerGrid % projectsData.length);

    useEffect(() => {
        const interval = setInterval(() => {
            const positionsToChange = getRandomIndexes(imagesPerGrid, 2);
            const currentImages = gridIndexes.map(idx => projectsData[idx].image);
            const availableIndexes = projectsData
                .map((_, idx) => idx)
                .filter(idx => !gridIndexes.includes(idx));

            const newImageIndexes = availableIndexes.length >= 2
                ? getRandomIndexes(availableIndexes.length, 2).map(i => availableIndexes[i])
                : getRandomIndexes(projectsData.length, 2);

            const newGridIndexes = [...gridIndexes];
            newGridIndexes[positionsToChange[0]] = newImageIndexes[0];
            newGridIndexes[positionsToChange[1]] = newImageIndexes[1];

            setGridIndexes(newGridIndexes);
        }, 5000);

        return () => clearInterval(interval);
    }, [gridIndexes]);

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
                    <h1 className="mb-4">Photo Gallery</h1>
                </div>
                <div
                    className="photo-gallery-grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${columns}, 1fr)`,
                        gridTemplateRows: `repeat(${rows}, 1fr)`,
                        gap: '24px',
                        perspective: '1200px'
                    }}
                >
                    {gridIndexes.map((imgIdx, i) => (
                        <div
                            className="photo-gallery-item"
                            key={i}
                            style={{
                                width: '100%',
                                height: '250px',
                                overflow: 'hidden',
                                borderRadius: '12px',
                                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <img
                                className="img-fluid photo-gallery-img"
                                src={projectsData[imgIdx].image}
                                alt={`Gallery ${imgIdx + 1}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block'
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
