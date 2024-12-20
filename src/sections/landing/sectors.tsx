import CuttedBorder from "@/components/CuttedBorder";
import aboutUsCardContent from "@/data/aboutUsCardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function Sectors() {
  const [selectedCard, setSelectedcard] = useState<number | null>(1);
  const handleSelect = (id: number) => {
    setSelectedcard((prev) => (prev === id ? null : id));
  };
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
       
      }}
    >
      <Grid item xs={12} sx={{ paddingX: { xs: 2, md: 10 }}}>
        <Typography
          sx={{
            fontSize: { xs: "20px", md: "32px" },
            color: "#EE484A",
            fontFamily: "Helvetica",
            fontWeight: 400,
          }}
        >
          Our Sectors
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ paddingX: { xs: 2, md: 10 }}}>
        <Typography
          sx={{
            color: "#3D628C",
            fontSize: { xs: 20, sm: 20, md: 30, lg: 35, xl: 50 },
            fontWeight: 700,
            fontFamily: "Helvetica",
            marginTop: 3,
            width: {xs:"100%",md:"50%"},
          }}
        >
          Streamlining our sectors to focus on impactful solutions and
          specialized services.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          sx={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: 4,
            // gap: { xs: 2, sm: 2, md: 6, lg: 6 }, // Adds space between cards, adjust as needed
            justifyContent: { xs: "center", sm: "center", md: "center" }, // Center for small screens, space-between for larger
            alignItems: "center", // Align items vertically at the center
            paddingLeft: {xs:0 , lg:10},
            marginX: { xs: 0, md: 0 }, // Ensures the grid is centered
          }}
        >
          {aboutUsCardContent.map((item) => (
            <Grid
              xs={selectedCard === item.id ? 12 : 12}
              md={selectedCard === item.id ? 8 : 4}
              lg={selectedCard === item.id ? 6 : 3}
              xl={selectedCard === item.id ? 6 : 3}
              item
              key={item.id}
              sx={{
                display: "flex",
             
                flexDirection: "column",
                alignItems: "center", // Center-align items horizontally
                justifyItems: "center",
                // width: { xs: "90%", sm: "90%", md: "20%" }, // Adjust width for different screen sizes
                marginBottom: 3,
              
              
              }}
            >
              <CuttedBorder
                selected={selectedCard}
                handleSelect={handleSelect}
                title={item.title}
                text={item.text}
                img={item.img}
                icon={item.icon}
                id={item.id}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
