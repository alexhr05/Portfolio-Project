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

import SafeEntranceHomePage from "../Images/SafeEntranceHomePage.png";
import SafeEntranceLessons from "../Images/SafeEntranceLessons.PNG";
import SafeEntranceLogo from "../Images/logoSafeEntrance.png";

import LinkIcon from "@mui/icons-material/Link";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import Menu from "./Menu.js";
import { Link } from "react-router-dom";

function SafeEntrancePage() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Menu />
      <Box
        sx={{
          ml: 35,
          mr: 35,
          mt: 15,
          borderRadius: "30px",
          boxShadow: 2,
        }}
      >
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
              image={SafeEntranceLogo}
              alt="SafeEntrance"
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
            <Typography sx={{ fontSize: 46, fontWeight: "bold", mt: 4 }}>
              Safe Entrance
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
                  to="http://juniorwebapp.com/safeentrance.biz/"
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
                  to="https://github.com/alexhr05/SafeEntrance"
                >
                  {" "}
                  Към GitHub
                </Link>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <EmojiEventsIcon sx={{ fontSize: 40 }} />
                <Typography sx={{ fontSize: 28, color: "rgb(30,30,30)" }}>
                  {" "}
                  Участие на НОИТ - 2021
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
                  Safe Entrance е софтуерно приложение, чиято основна
                  функционалност е да осигурява лесен и контролиран достъп до
                  различни помещения, домове, офиси, предприятия. Програмата
                  мисли вместо потребителите и те няма да има нужда да помнят,
                  кой ключ за коя врата къде се слага и как се отключва.
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
              С този успях да стигна до областния кръг на НОИТ за 2021г. С
              масовото навлизане на техниката в нашия живот, масовото използване
              на микрокомпютри, миниатюризацията, усъвършенстването на
              телекомуникациите, както и ползването на персонален компютър и
              телефон от всеки от нас поставя нови насоки в модернизацията на
              контрол и управление на достъпа до определени обекти. В миналото е
              имало само една врата, която се е подпирала с камък. В течение на
              времето е измислена ключалката за заключване, а днес вече масово
              се използват електронни устройства за тези цели.{" "}
            </Typography>
            <Typography sx={{ mt: 3, fontSize: 20 }}>
              За тази цел идва на помощ Safe Entrance. Това е програма, която
              може да контролира връзката между отделните компоненти. Като те са
              Сървър, Микропроцесорна част и Потребители и Администратори.
              Връзката между тях може да бъде през локалната мрежа или през
              интернет. Потребителят може да осъществява контрол над
              Микропроцесорната част единствено през заявка към Сървъра.
              Администраторът може да контролира отделните потребители чрез
              заявки към Сървъра.
            </Typography>
            <Typography sx={{ mt: 3, fontSize: 20 }}>
              Микропроцесорната част се обръща към сървъра по IP адрес или
              домейн, докато Сървърът се обръща към Микропроцесорната част само
              по IP адрес. В конкретния случай и сървъра и микроконтролера се
              намират зад рутер в една и съща LAN мрежа и няма проблеми с
              комуникацията между тях по статични ip address-и.Но ако
              микроконтролера е на място, което не може да се достъпи по
              статичен адрес или с цел сигурност, може да се инсталира рутер
              преди микроконтролера, от който да се вдигне тунел до сървъра или
              до рутера преди сървъра.
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
                  image={SafeEntranceHomePage}
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
              Целта на този проект е да покаже ползите от използването на новите
              технологии в нашето ежедневие, чрез демонстриране на контролиран
              достъп до всички места, които посещаваме ежедневно. Да се покаже
              още как може да се защитят по добър и лесен начин всякакви сгради
              с навлизащите технологии в живота ни.
            </Typography>

            <Box
              sx={{ display: "flex", flexDirection: "column", mr: 6, mt: 6 }}
            >
              <Typography sx={{ fontSize: 28, fontWeight: "bold", mb: 2 }}>
                Страница с уроци
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
                image={SafeEntranceLessons}
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

export default SafeEntrancePage;
