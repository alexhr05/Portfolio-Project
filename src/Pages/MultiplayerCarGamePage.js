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

import MultiplayerCarGamePlay from "../Images/MultiplayerCarGamePlay.PNG";
import multiplayerCarGameWinLose from "../Images/multiplayerCarGameWinLose.PNG";
import MultiplayerCarGameLogo from "../Images/multiplayerCarGame.PNG";

import LinkIcon from "@mui/icons-material/Link";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import Menu from "./Menu.js";
import { Link } from "react-router-dom";

function MultiplayerCarGame() {
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
            height: window.innerHeight * 0.38,
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
              image={MultiplayerCarGameLogo}
              alt="MultiplayerCarGame"
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
              Multiplayer Car Game
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
                  to="https://github.com/alexhr05/Multiplayer-Car-Game"
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
                  Училищен проект за края на 10 клас
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
                  Multiplayer Car Game е проект за края на годината в 10 клас, в
                  който двама играчи заедно могат да управляват по отделно една
                  кола и целта е кой ще издържи по-дълго без да се блъсне в
                  падащите предмети отгоре.
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
              Този проект го направих за края на 10 клас на Python с помощта на
              библиотеката PyGame. С нея се улесни направата на визуалната част,
              както и на физиките в нея.
            </Typography>
            <Typography sx={{ mt: 3, fontSize: 20 }}>
              Този проект разработвах около 2 седмици, когато се сблъсках с
              някои трудности относно удар между отделни обекти. Тук съм
              използвал основно фунцкии, с които се изпълняват действията, и
              променливи, в които запаметявам кординати и точки.
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
                  image={MultiplayerCarGamePlay}
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
              си, концетрацията си и други качества.
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
                Страница със завършек на нивото
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
                image={multiplayerCarGameWinLose}
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

export default MultiplayerCarGame;
