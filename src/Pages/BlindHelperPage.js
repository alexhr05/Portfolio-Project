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

import AIModelMaker from "../Images/AIModelMaker.PNG";
import AIModelMakerModelCharacteristics from "../Images/AIModelMakerModelCharacteristics.PNG";
import BlindHelperLogo from "../Images/logoBlindHelper.jpg";

import LinkIcon from "@mui/icons-material/Link";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import Menu from "./Menu.js";
import { Link } from "react-router-dom";

function BlindHelperPage() {
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
              image={BlindHelperLogo}
              alt="BlindHelper"
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
              pl: 3,
            }}
          >
            <Typography sx={{ fontSize: 46, fontWeight: "bold", mt: 4 }}>
              Blind Helper
            </Typography>
            <Box
              sx={{
                fontSize: 26,
                mt: 2,
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
                  to="https://github.com/MihailDimitrov1235/TensorflowLiteApp"
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
                  Участие на НОИТ - 2023
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: 1,
                }}
              >
                <Typography sx={{ fontSize: 20, textIndent: "5%" }}>
                  Този проект го разработих с помощта на един приятел за НОИТ,
                  като стигнах до националния кръг и бях в топ 4. Това е
                  приложение за телефон, което предназначено за хора с увредено
                  зрение и да може да им казва какво има пред тях и да търси
                  различни предмети каквито човека му зададе. Приложението може
                  да се контролира само с гласови команди.
                  {/* Blind Helper е само първата стъпка към създаването на свят, в
                  който незрящите хора могат да живеят самостоятелно и без
                  нуждата от постоянна помощ. С напредъка на технологиите
                  потенциалът за свят, в който слепите могат да участват
                  пълноценно в обществото, става реалност. */}
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
              Този проект го направихме аз и един съученик от класа, с който
              стигнахме до националния кръг на НОИТ в Шумен през 2023, когато
              станахме и лауреати на олимпиадата. Създадохме приложение, което
              използва комбинация от гласови команди и обратна връзка, за да
              насочва потребителите към местоположението на конкретни обекти,
              като например кола или стол.
            </Typography>
            <Typography sx={{ mt: 3, fontSize: 20 }}>
              Когато човек си свали приложението и започне да го ползва има две
              опции. Едната, която се включва чрез изричането на „навигирай ме“,
              е да те навигира безопасно напред по пътя, тоест да ни казва какво
              има пред нас, а другата да може да се намери обект, който
              потребителят е поискал. При слушането му потребителя трябва да
              спомене наименованието на предмета, който търси.
            </Typography>
            <Typography sx={{ mt: 3, fontSize: 20 }}>
              След потвърждаване на търсеният обект, приложението заснема
              снимка. Заснетата снимка бива преобразувана в байтовете, като чрез
              специален алгоритъм разпознава обекта на снимката и връща, като
              отговор наименованието на предмета и координатите му на снимката.
              Ако търсения обект е част от разпознатите обекти, неговите
              координати се обработват и заедно с данните от акселерометъра на
              телефона се връща комбинация от хоризонтални и вертикални насоки
              за местоположението обратно на приложението. Приложението взема
              този отговор и чрез гласови команди се опитва да насочи
              потребителя към обекта. След това се заснема нова снимка и процеса
              се повтаря. Напътсвията са кратки и ясни: „напред“, „наляво“,
              “надясно“ и други.
            </Typography>
            <Typography sx={{ mt: 3, fontSize: 20 }}>
              Програмата спира да търси зададения обект, когато човек го намери
              и каже на търсенето да спре. Потребителят може да изрече „стоп“
              или „спри“ и така програмата спира да търси и приложението почва
              да слуша за нови команди. Когато искаме да излезем от програмата и
              тя да спре трябва да кажем “излез от програмата“. В програмата има
              предварително зададени данни и параметри за определен брой обекти.
              Този списък ще бъде увеличаван непрекъснато, като се подобрява
              програмата на сървъра.
            </Typography>
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
            <Box sx={{ display: "flex", mt: 8 }}>
              <Box sx={{ display: "flex", flexDirection: "column", mr: 2 }}>
                <Typography sx={{ fontSize: 25, fontWeight: "bold", mb: 2 }}>
                  Начална страница
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
                  image={AIModelMaker}
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={{ fontSize: 25, fontWeight: "bold", mb: 2 }}>
                  Страница с трениран модел
                </Typography>
                <CardMedia
                  sx={{
                    objectFit: "fill",
                    height: "100%",
                    boxShadow: 2,
                    borderRadius: "3%",
                  }}
                  component="img"
                  image={AIModelMakerModelCharacteristics}
                />
              </Box>
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

export default BlindHelperPage;
