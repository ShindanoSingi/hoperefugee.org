import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function CardComponent({ image, likes, stars, comments }) {
    return (
        <Card>
            <img src={image} alt="Card Image" />
            <CardContent>
                <Typography variant="h5" component="div">
                    Likes: {likes}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Stars: {stars}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Comments: {comments}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default CardComponent;

function getRandomImage() {
    const images = [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg',
        // Add more image URLs as needed
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

const randomImage = getRandomImage();

// Usage:
<CardComponent image={randomImage} likes={10} stars={5} comments={3} />

