"use client";
import React, { useState } from "react";
import {
  Grid,
  Button,
  Pagination,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import ProductCard from "../../components/poduct/ProductCard";
import productRecord from "@/data/productRecord";
import productMenu from "../../data/productMenu";
import Image from 'next/image'
import InvertedBorder from "../../components/poduct/invertedBorder";

export default function Menu() {

  return (
    <Grid container sx={{ background: "white", marginTop: 5 }}>
      <Grid item xs={12}>
        <Typography sx={{fontSize:{xs:'25px', sm:'28px', md:'30px',lg:'32px'}, paddingLeft: {xs:2,sm:4, md:10}, color:'#EE484A',fontFamily:'Helvetica',fontWeight:400}}>PRODUCTS</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography sx={{fontSize:{xs:'30px', sm:'40px', md:'45px',lg:'48px'}, paddingLeft: {xs:2,sm:4, md:10} , color:'#3D628C',fontFamily:'Helvetica',fontWeight:700}}>Popular Products</Typography>
      </Grid>
      <Grid item xs={12} sx={{ paddingLeft: {xs:0,sm:4, md:10}, marginTop:3 }}>
        <Box
          sx={{
            width: { xs: "100%",sm:'65%', md: "50%", lg: "40%" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#F7F7F7",
            borderRadius: "24px",
            paddingLeft: "14px",
            paddingRight: "14px",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          {productMenu.map((menu) => (
            <Button
              sx={{
                width: { xs: "100px", sm: "110px", md: "120px", lg: "140px" },
                color: "black",
                height: "56px",
                borderRadius: "14px",
                display: "flex",
                gap: 1,
                background: "transparent",
                "&:hover": { background: "#3D628C", color: "white" },
                "&:active": { background: "#3D628C", color: "white" },
              }}
            >
              {menu.icon}
              {menu.name}
            </Button>
          ))}
        </Box>
      </Grid>
      <Grid item xs={12} sx={{background:'#FBFBFB',borderRadius:'14px'}}>
         <InvertedBorder height={300} />
      </Grid>
    </Grid>
  );
}
