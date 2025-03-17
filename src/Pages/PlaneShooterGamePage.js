import React from "react";
import logo from "../logo.svg";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  IconButton,
} from "@mui/material";

import PlaneShooterGamePlay from "../Images/PlaneShooterGamePlay.png";
import PlaneShooterGameStartScreen from "../Images/PlaneShooterGameStartScreen.png";
import PlaneShooterGameMiddlePartLogo from "../Images/planeShooterGameMiddlePart.png";

import LinkIcon from "@mui/icons-material/Link";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import Menu from "./Menu.js";
import { Link } from "react-router-dom";

function PlaneShooterGamePage() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Menu />
      <Box sx={{ ml: 35, mr: 35, mt: 15, borderRadius: "30px", boxShadow: 2 }}>
        <Box
          sx={{
            bgcolor: "rgb(230,230,230)",
            borderTopLeftRadius: "30px",
            borderTopRightRadius: "30px",
            height: window.innerHeight * 0.4,
            display: "flex",
            position: "relative",
            alignItems: "center",
            alignContent: "center",
            pl: 6,
            gap: 3,
          }}
        >
          <Card
            sx={{
              borderRadius: "50%",
              position: "relative",

              width: "15%",
              height: "50%",
            }}
          >
            <CardMedia
              sx={{
                width: "100%",
                pt: 24,
              }}
              image={PlaneShooterGameMiddlePartLogo}
              alt="PlaneShooterGameMiddlePart"
            />
          </Card>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              color: "black",
              height: "80%",
              width: "80%",
              textWrap: "wrap",
              pl: 3,
            }}
          >
            <Typography sx={{ fontSize: 46, fontWeight: "bold", mt: 1 }}>
              Plane Shooter Game
            </Typography>
            <Box
              sx={{
                fontSize: 26,
                mt: 3,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LinkIcon sx={{ fontSize: 40 }} />
                <Link
                  style={{
                    textDecoration: "none",
                    textAlign: "center",
                    color: "rgb(20,20,20)",
                    fontSize: 28,
                  }}
                  to="https://github.com/alexhr05/Plane-Shooter-Game"
                >
                  {" "}
                  Към GitHub
                </Link>
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}
              >
                <EmojiEventsIcon sx={{ fontSize: 40 }} />
                <Typography sx={{ fontSize: 28, color: "rgb(30,30,30)" }}>
                  {" "}
                  Развитие и надграждане на проекта от края на 10 клас -
                  Multiplayer Car Game
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Typography sx={{ fontSize: 20, textIndent: "5%" }}>
                  Играта Plane Shooter Game успях да я направя в 10 клас, като
                  развитие на предния проект, където сега всичко е направено с
                  по-напреднали знания, както и графиките са доста добре
                  съобразени със уцелване на целта.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            bgcolor: "rgb(255, 255, 255)",
            boxShadow: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              mt: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              p: 3,
              pl: 5,
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: 35,
                textAlign: "start",
                fontWeight: "bold",
              }}
            >
              Преглед на проектa
            </Typography>
            <Typography sx={{ mt: 3, fontSize: 20 }}>
              Този проект е подобрение на този който направих за края на 10 клас
              на Python с помощта на библиотеката PyGame. В него съм написал
              по-различен начин логиката на играта с помощта на по-сложни обекти
              като класове.
            </Typography>
            <Typography sx={{ mt: 3, fontSize: 20 }}>
              {" "}
              Този проект разработвах около 1-2 седмици, когато се сблъсках с
              някои трудности относно работата на класовете. Но след малко
              практика всичко мина гладко и лесно.
            </Typography>

            <Box sx={{ display: "flex", mt: 8 }}>
              <Box sx={{ display: "flex", flexDirection: "column", mr: 2 }}>
                <Typography sx={{ fontSize: 25, fontWeight: "bold", mb: 2 }}>
                  Страница с играта
                </Typography>
                <CardMedia
                  sx={{
                    objectFit: "fill",
                    height: "100%",
                    mr: 2,
                    boxShadow: 2,
                    borderRadius: "3%",
                  }}
                  component="img"
                  image={PlaneShooterGamePlay}
                />
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              p: 3,
              pl: 5,
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: 35,
                textAlign: "start",
                fontWeight: "bold",
              }}
            >
              Цели
            </Typography>
            <Typography sx={{ mt: 3, fontSize: 20 }}>
              Целта на проекта е чокек да подобри ловкостта си, наблюдателността
              си, концетрацията си, както и да се позабавлява малко.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                mr: 6,
                mt: 6,
              }}
            >
              <Typography sx={{ fontSize: 28, fontWeight: "bold", mb: 2 }}>
                Начален екран
              </Typography>
              <CardMedia
                sx={{
                  objectFit: "fill",
                  height: "90%",
                  mr: 2,
                  boxShadow: 2,
                  borderRadius: "3%",
                }}
                component="img"
                image={PlaneShooterGameStartScreen}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          background: "gray",
          width: "100%",
          height: "1%",
          border: "solid 1 px",
          display: "flex",
          color: "white",
          justifyContent: "center",
          mt: 4,
        }}
      >
        <Typography fontSize={25}>
          © Alex Hristov - alexhr05@gmail.com
        </Typography>
      </Box>
    </Box>
  );
}

export default PlaneShooterGamePage;
