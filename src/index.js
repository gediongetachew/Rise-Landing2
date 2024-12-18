import { useEffect, useState } from 'react';
// material-ui
import { Grid, useTheme } from '@mui/material';
import PriceChangeBody from './components/body';
import SpeedDials from 'ui-component/SpeedDial';
import { fetchAds } from 'utils/Ads';
import Slider from 'components/Slider';

// ==============================|| PRICE CHANGE LISTING PAGE ||============================== //

const PriceChange = () => {
    const theme = useTheme();
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [showBannerAds, setShowBannerAds] = useState(false);
    const [bannerAds, setBannerAds] = useState([]);

    useEffect(() => {
        let prevScrollPos = window.scrollY;

        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setIsScrollingUp(prevScrollPos > currentScrollPos);
            prevScrollPos = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleBannerAds = async (type) => {
            try {
                const response = await fetchAds(type);

                if (response.success) {
                    setBannerAds(response.data);
                    setShowBannerAds(true);
                } else {
                    setShowBannerAds(false);
                }
            } catch (error) {
                setShowBannerAds(false);
            }
        };
        handleBannerAds('Banner');
    }, []);

    return (
        <Grid
            container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                minHeight: '86vh'
            }}
        >
            <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={4}
                xl={4}
                sx={{
                    borderRadius: 2,
                    backgroundColor: theme.palette.background.default
                }}
            >
                {showBannerAds && bannerAds && <Slider ad={bannerAds} />}

                <PriceChangeBody />

                {isScrollingUp && <SpeedDials />}
            </Grid>
        </Grid>
    );
};

export default PriceChange;
