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

import TreasureHuntersGame from "../Images/TreasureHuntersGame.png";
import TreasureHuntersHomePage from "../Images/treasureHunters.png";
import TreasureHuntersLogo from "../Images/logoTreasureHunters.png";

import LinkIcon from "@mui/icons-material/Link";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import Menu from "./Menu.js";
import { Link } from "react-router-dom";

function TreasureHuntersPage() {
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
              image={TreasureHuntersLogo}
              alt="TreasureHunters"
            />
          </Card>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              color: "black",
              height: "100%",
              width: "80%",
              textWrap: "wrap",
              pl: 3,
            }}
          >
            <Typography sx={{ fontSize: 46, fontWeight: "bold", mt: 3 }}>
              Treasure Hunters
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
                  to="https://juniorwebapp.com/treasurehunters/"
                >
                  {" "}
                  Към сайта
                </Link>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LinkIcon sx={{ fontSize: 40 }} />
                <Link
                  style={{
                    textDecoration: "none",
                    textAlign: "center",
                    color: "rgb(20,20,20)",
                    fontSize: 28,
                  }}
                  to="https://github.com/alexhr05/TreasureHunters"
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
                  Участие на НОИТ - 2020
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
                  Treasure Hunters е игра, подобна на Super Mario, в която
                  играчите могат да разивят своите умения на ориентация,
                  съсредоточеност и наблюдателност. Подходящи е за деца между
                  7-11 годишна възраст, но и по-големи могат да я пробват.
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
              Този проект го направихме аз и един съученика от класа, с която
              стигнахме до националния кръг на НОИТ в София през 2020.
            </Typography>
            <Typography sx={{ mt: 3, fontSize: 20 }}>
              Много често родителите се опитват да научат децата си да не играят
              компютърни игри, именно поради по-горе споменатите проблеми. Така
              семейната обстановка става напрегната. Ние обаче решихме да
              направим игра, която помага на децата в усъвършенстването им на
              ключови умения по забавен и интересен за тях начин без да има
              голяма опасност от промяна в поведението на детето/децата.
            </Typography>
            <Typography sx={{ mt: 3, fontSize: 20 }}>
              Точно тук идва нашия проект Treasure Hunters. В него децата могат,
              както да се забавляват така и да подобряват уменията си.
            </Typography>
            <Typography sx={{ mt: 3, fontSize: 20 }}>
              Относно функционалната част на проекта са създадени няколко
              JavaScript файла, като са разделени според функционалността им.
              Във файловете с нивата има неповторима карта, през която трябва да
              преминат играчите. В нея има разположени специални символи в
              определена позиция, като това представляват платформи, прегради,
              диамантии т.н. В тези файлове са записани още началните
              координати, както и скоростта на героя, които се използват в в
              основния файл на играта.
            </Typography>
            <Typography sx={{ mt: 3, fontSize: 20 }}>
              Има и отделен файл, в който се проследява кой бутон е натиснат и в
              съответствие с него да се изпълни команда. Но самата логика се
              изпълнява във един файл наречен Game. В него се зареждат нивата на
              играта, както и зареждането на различните обекти и препиятствия.
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
                  image={TreasureHuntersGame}
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
              Целта на този проект е да осигури удобен и ефективен начин за
              ориентиране на хората с увредено зрение. То също така има за цел
              да подобри независимостта и безопасността на незрящите хора, като
              им даде възможност лесно да намират и идентифицират обекти в
              заобикалящата ги среда без чужда помощ. Освен това приложението
              има за цел да подобри достъпността и приобщаването на слепите
              хора, като ги улесни да участват в ежедневните дейности и да се
              ангажират със своята общност.
            </Typography>
            <Box
              sx={{ display: "flex", flexDirection: "column", mr: 6, mt: 6 }}
            >
              <Typography sx={{ fontSize: 28, fontWeight: "bold", mb: 2 }}>
                Начална страница
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
                image={TreasureHuntersHomePage}
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

export default TreasureHuntersPage;
