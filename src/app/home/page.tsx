'use client'
import Hero from "../../sections/landing/Hero";
import Aboutus from "../../sections/landing/About";
import Banner from "../../components/Banner";
import Sectors from "../../sections/landing/sectors";
import TestimonialCard from "../../sections/landing/Testimonials";
import ImageCarousel from "@/components/Carousel";
import Grid from "@mui/material/Grid";
export default function Home() {
  return (
    <div>
      <Hero />
      <ImageCarousel name="Our Brands" direction="forward" bgcolor={false} />
      <Aboutus />
      <Banner />
      <Sectors/>
      <TestimonialCard />
      <Grid
        sx={{
          borderTop: "solid 2px #9E9E9E",
          borderBottom: "solid 2px #9E9E9E",
        }}
      >
        <ImageCarousel name="" direction="forward" bgcolor={true}  />
        <ImageCarousel name="" direction="backward" bgcolor={true} />
      </Grid>
    </div>
  );
}
