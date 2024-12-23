import ImageCarousel from "@/components/Carousel";
import Hero from "@/sections/Products/Hero";
import Menu from "@/sections/Products/Menu";
import Quality from "@/sections/Products/Quality";
import Grid from "@mui/material/Grid";

export default function Products() {
  return (
    <div>
      <Hero />
      <Quality />
      <Menu />

      <Grid
        sx={{
          borderTop: "solid 2px #9E9E9E",
          borderBottom: "solid 2px #9E9E9E",
          marginTop: 10,
        }}
      >
        <ImageCarousel name="" direction="forward" bgcolor={false} />
        <ImageCarousel name="" direction="backward" bgcolor={false} />
      </Grid>
    </div>
  );
}
