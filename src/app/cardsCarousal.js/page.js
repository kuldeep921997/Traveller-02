'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// Styled component for zoom effect on hover
const StyledCardMedia = styled(CardMedia)({
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
        transform: 'scale(1.1)', // Zoom effect
    },
});



export default function CardsCarousal({ cardHeader, cardImage, cardDesc }) {
    const [like, setLike] = React.useState(false);

    return (
        <Card sx={{ maxWidth: 345, marginTop: '2rem' }}>
            {/* Card Header */}
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={
                    <Typography className="text-content" variant="h6" sx={{ fontSize: '0.9rem' }}>
                        {cardHeader?.title}
                    </Typography>
                }
                subheader={
                    <Typography className="text-content" variant="body2" sx={{ color: 'text.secondary' }}>
                        {cardHeader?.subheader}
                    </Typography>
                }
            />

            {/* Zoomable Image */}
            <StyledCardMedia
                component="img"
                height="194"
                image={cardImage?.src}
                alt="Ganga Ghat"
            />

            {/* Content Section */}
            <CardContent>
                <Typography
                    className="text-content"
                    variant="body2"
                    sx={{
                        color: 'text.secondary',
                        fontSize: '0.8rem',
                        marginBottom: '0.5rem',
                    }}
                >
                    {cardDesc?.desc}
                </Typography>
            </CardContent>

            {/* Card Actions with Like/Share */}
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={() => setLike(!like)}>
                    <FavoriteIcon style={{ color: like ? 'red' : 'gray' }} />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
