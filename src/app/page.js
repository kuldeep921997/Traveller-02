import React from "react";
import Image from "next/image";
import CardsCarousal from "./cardsCarousal.js/page";
import { Grid } from "@mui/material";
import ganga_ghat_4 from '../../public/images/ganga_ghat_4.jpeg';
import SwiperSlider from "@/components/SwiperSlider";

export default function Home() {

  const cardHeader = {
    title: "Shrimp and Chorizo Paella",
    subheader: "September 14, 2016",
  }

  const cardDesc = {
    desc: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.Add 1 cup of frozen peas along with the mussels, if you like."
  }

  return (
    <div
      className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    >
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <SwiperSlider />
        <Grid container spacing={4} style={{ margin: "0 auto" }}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Grid item
              xs={12}
              sm={6}
              md={3}
            // style={{ margin: "0 auto" }}
            >
              <CardsCarousal cardHeader={cardHeader} cardImage={ganga_ghat_4} cardDesc={cardDesc} />
            </Grid>
          ))
          }
        </Grid>
      </main>
    </div>
  );
}
