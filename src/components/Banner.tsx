"use client";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Banner() {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{
        position: "relative",
        display:"flex",
        flexDirection: "column",
        my: 10,
        width: "100%",
        height: { xs: "30vh", sm: "35vh", md: "80vh" },
        backgroundImage: `url('/assets/banner.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 1,
        
      }}
    >
      <Grid
        item
        xs={8}
        sm={6}
        md={6}
        lg={6}
        xl={12}
        sx={{
          position: "absolute",
          display:"flex",
          justifyContent:"space-between",
          bottom: { xs: "5%", sm: "0%", md: "12%" },
          left: { xs: "2%", sm: "0%", md: "0%" },
          zIndex: 10,
          paddingX: { xs: 2, sm: 4, md: 10 },
        }}
      >
        <Box
       
          sx={{
            display:"flex",
            justifyContent:"space-between",
            padding: { xs: 0, sm: 3, md: 4 },
            borderRadius: 2,
            gap: { xs: 2, sm: 10, xl: 8 },
          
            width:"100%"
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <Typography
              variant="h6"
              component="h1"
              color="white"
              gutterBottom
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "1.5rem",
                  md: "2.5rem",
                  lg: "2.8rem",
                  xl: "3.5rem",
                },
              
                fontWeight: 'bold',
                 fontFamily: "Helevetica"
              }}
            >
              +10
            </Typography>
            <Typography
              variant="h6"
              color="white"
              sx={{
                fontSize: {
                  xs: ".8rem",
                  sm: ".8rem",
                  md: "1.2rem",
                  lg: "1.3rem",
                  xl: "1.8rem",
                },
                 fontFamily: "Helevetica"
              }}
            >
            Employees
            </Typography>
          </Box>
          <Box display={"flex flex-col"}>
            <Typography
              variant="h6"
              component="h1"
              color="white"
              gutterBottom
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "1.5rem",
                  md: "2.5rem",
                  lg: "2.8rem",
                  xl: "3.5rem",
                },
                fontWeight: 'bold',
                 fontFamily: "Helevetica"
              }}
            >
              +20
            </Typography>
            <Typography
              variant="h6"
              color="white"
              sx={{
                fontSize: {
                  xs: ".8rem",
                  sm: ".8rem",
                  md: "1.2rem",
                  lg: "1.3rem",
                  xl: "1.8rem",
                },
                 fontFamily: "Helevetica"
              }}
            >
             Products
            </Typography>
          </Box>
          <Box display={"flex flex-col"}>
            <Typography
              variant="h6"
              component="h1"
              color="white"
              gutterBottom
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "1.5rem",
                  md: "2.5rem",
                  lg: "2.8rem",
                  xl: "3.5rem",
                },
                fontWeight: 'bold',
                 fontFamily: "Helevetica"
              }}
            >
              +30
            </Typography>
            <Typography
              variant="h6"
              color="white"
              sx={{
                fontSize: {
                  xs: ".8rem",
                  sm: ".8rem",
                  md: "1.2rem",
                  lg: "1.3rem",
                  xl: "1.8rem",
                },
                 fontFamily: "Helevetica"
              }}
            >
             Loyal Customers
            </Typography>
          </Box>
          <Box display={"flex flex-col"}>
            <Typography
              variant="h6"
              component="h1"
              color="white"
              gutterBottom
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "1.5rem",
                  md: "2.5rem",
                  lg: "2.8rem",
                  xl: "3.5rem",
                },
                fontWeight: 'bold',
                 fontFamily: "Helevetica"
              }}
            >
              +10
            </Typography>
            <Typography
              variant="h6"
              color="white"
              sx={{
                fontSize: {
                  xs: ".8rem",
                  sm: ".8rem",
                  md: "1.2rem",
                  lg: "1.3rem",
                  xl: "1.8rem",
                },
                fontFamily: "Helevetica"
              }}
            >
             Years Of Experience
            </Typography>
          </Box>
          
        </Box>
      </Grid>

      {/* New Top Right Box */}
      <Grid
        item
        sx={{
          position: "absolute",
          paddingLeft: { xs: 4, sm: 10, md: 0 },
          top: { xs: "0%", sm: "0%", md: "5%" },
          right: { xs: "0%", sm: "0%", md: "0%" },
          width: { xs: "90%", sm: "90%", md: "60%" },
          zIndex: 10,
        }}
        xs={7}
        sm={8}
        md={6}
        lg={5}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          sx={{
            padding: { xs: 2, sm: 3, md: 4 },
            borderRadius: 2,
            textAlign: "left",
            gap: 3,
          }}
        >
          <Typography
            variant="h6"
            color="white"
            alignItems="flex-center"
            justifyItems="flex-center"
            sx={{
              fontSize: { xs: ".8rem", sm: "1rem", md: "1.4rem", lg: "30px" }, fontFamily: "Helvetica"
            }}
          >
            Happy Customer = Happy Day
          </Typography>

          <Typography
            variant="h4"
            component="h2"
            color="white"
            gutterBottom
            sx={{ fontSize: { xs: ".8rem", sm: "1.1rem", md: "1.5rem", xl: '40px', fontWeight: 'bold' }, fontfamily:"Helvetica" }}
          >
            Over 10 years of expertise, delivering quality to our global customers.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
