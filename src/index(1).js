import { Box } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import { UserInteraction } from 'utils/Ads';
import { useNavigate } from 'react-router';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Connections from 'api';

const Slider = ({ ad }) => {
    const navigate = useNavigate();

    const handleUserAction = (reaction, banner) => {
        if (reaction === 'clicked' && banner.ad_link_type === 'Internal') {
            navigate('/itemlisting', { state: { id: banner.ad_item_cat_id } });
            UserInteraction(banner, reaction);
        } else if (banner.ad_link_type === 'External') {
            window.open(banner.ad_link, '_blank');
            UserInteraction(banner, reaction);
        }
    };
    return (
        <div style={{ flexGrow: 1, padding: 4, marginTop: 10 }}>
            <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={false} showStatus={false} showIndicators={true} interval={3000}>
                {ad.map((banner, index) => (
                    <Box key={index} style={{ justifyContent: 'center' }} onClick={() => handleUserAction('clicked', banner)}>
                        <img
                            src={Connections.adcreatives + banner.ad_creative}
                            alt="ad"
                            style={{ maxWidth: '98%', height: '100px', aspectRatio: 1, objectFit: 'cover', borderRadius: 8 }}
                        />
                    </Box>
                ))}
            </Carousel>
        </div>
    );
};

export default Slider;
