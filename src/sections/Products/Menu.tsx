"use client";
import React, { useEffect, useRef, useState } from "react";
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
import Image from "next/image";
import InvertedBorder from "../../components/poduct/invertedBorder";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const itemsPerPage = 4;
interface Product {
  id: string | number;
  img: string;
  type: string; // Assuming each product has a type
}

interface ProductCarouselProps {
  currentProducts: Product[];
}
export default function Menu() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [filter, setFilter] = useState<string | null>(null); // State for filter
  const [selected, setSelected] = useState<string> ("all");
  const itemsPerPage = 2; // Adjust based on visible items
  const totalPages = Math.ceil(productRecord.length / itemsPerPage);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const newPage = Math.round(container.scrollLeft / container.offsetWidth);
    setCurrentPage(newPage);
  };

  const scrollToPage = (pageIndex: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    container.scrollTo({
      left: pageIndex * container.offsetWidth,
      behavior: "smooth",
    });
    setCurrentPage(pageIndex);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Filtered product records based on the selected filter
  const filteredProducts = filter
    ? productRecord.filter(product => product.type === filter)
    : productRecord;

  return (
    <Grid container sx={{ background: "white", marginTop: 5 }}>
      <Grid item xs={12}>
        <Typography
          sx={{
            fontSize: { xs: "25px", sm: "28px", md: "30px", lg: "32px" },
            paddingLeft: { xs: 2, sm: 4, md: 10 },
            color: "#EE484A",
            fontFamily: "Helvetica",
            fontWeight: 400,
          }}
        >
          PRODUCTS
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          sx={{
            fontSize: { xs: "30px", sm: "40px", md: "45px", lg: "48px" },
            paddingLeft: { xs: 2, sm: 4, md: 10 },
            color: "#3D628C",
            fontFamily: "Helvetica",
            fontWeight: 700,
          }}
        >
          Popular Products
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ paddingLeft: { xs: 0, sm: 4, md: 10 }, marginTop: 3 }}
      >
        
        <Box
          sx={{
            width: { xs: "100%", sm: "65%", md: "50%", lg: "40%" },
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
              key={menu.name} // Add a key for each button
              onClick={() => { if (menu.type !== selected) {
                setFilter(menu.type === "all" ? null : menu.type); // Set filter to null for "All"
                setSelected(menu.type);
              }}} // Set filter and selected type on button click
              sx={{
                width: { xs: "100px", sm: "110px", md: "120px", lg: "140px" },
                color: (menu.type === selected) ? "white" : "#525252" ,
                height: "56px",
                borderRadius: "14px",
                display: "flex",
                gap: 1,
                background: (menu.type === selected) ? "#3D628C" : "transparent" ,
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
      <Grid item xs={12} sx={{ background: "#FBFBFB", height: "auto", display: "flex", flexDirection: "column", mt:5 }}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            overflowX: "auto",
            display: "flex",
            flexWrap: "nowrap",
            gap: 10,
            paddingLeft: 20,
            marginRight: 0,
            scrollbarWidth: "none",
            scrollSnapType: "x mandatory", // Enable snap behavior
          }}
          ref={scrollContainerRef}
        >
          {filteredProducts.map((product) => (
            <Box
              key={product.id}
              sx={{
                minWidth: { xs: "350px", sm: "550px", md: "650px", lg: "750px" },
                width: "50%",
                scrollSnapAlign: "center", // Snap each item
              }}
            >
              <InvertedBorder height={450} image={product.img} />
            </Box>
          ))}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: 'center', alignSelf: { xs: "flex-end", md: "flex-end" }, marginTop: 5, marginRight: 5, background: "#208CCC1A", borderRadius: "20px", width: { xs: "300px", md: "338px" }, height: "33px" }}>
          {Array.from({ length: totalPages }, (_, index) => (
            <Box
              key={index}
              sx={{
                width: index === currentPage ? "40px" : "12px",
                height: "12px",
                minHeight:"10px",
                borderRadius: index === currentPage ? "20px" : "50%",
                backgroundColor: index === currentPage ? "#EE484A" : "#77808B",
                margin: "0 8px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onClick={() => scrollToPage(index)}
            />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}
