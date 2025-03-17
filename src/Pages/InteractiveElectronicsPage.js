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

import InteractiveelectronicsHomePage from "../Images/InteractiveelectronicsHomePage.png";
import InteractiveElectronicsExercisePage from "../Images/InteractiveElectronicsExercisePage.PNG";
import InteractiveElectronicsLogo from "../Images/logoInteractiveElectronics.png";

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
              image={InteractiveElectronicsLogo}
              alt="InteractiveElectronics"
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
            <Typography sx={{ fontSize: 46, fontWeight: "bold", mt: 1 }}>
              Interactive Electronics
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
                  to="https://juniorwebapp.com/interactiveelectronics.eu/"
                >
                  {" "}
                  Линк към сайт
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
                  to="https://github.com/alexhr05/InteractiveElectronics"
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
                  Участие на НОИТ - 2022
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
                  Този проект го разработих за НОИТ, като стигнах до националния
                  кръг и станах в топ 6. Това е самообучителен сайт, в който
                  човек може да се развие своите умения в Електрониката. В сайта
                  има уроци за различните електронни компоненти как работят и
                  когато натрупа базови познания в сферата може да се упражнява.
                  {/* Interactive Electronics е само първата стъпка към създаването
                  на свят, в който незрящите хора могат да живеят самостоятелно
                  и без нуждата от постоянна помощ. С напредъка на технологиите
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
                fontSize: 25,

                fontWeight: "bold",
              }}
            >
              С този проект стигнах в 10 клас до националния кръг на НОИТ и да
              стана лауреат за 2022г.
            </Typography>
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
              с висок резултат на олимпиадата.С масовото навлизане на техниката
              в нашия живот, масовото използване на микрокомпютри,
              миниатюризацията, усъвършенстването на телекомуникациите, както и
              ползването на персонален компютър и телефон от всеки от нас води
              до усъвършенстване на много сложни устройства. Но всичко това е
              немислимо без една единствена наука – Електроника.{" "}
            </Typography>
            <Typography sx={{ mt: 3, fontSize: 20 }}>
              За това реших да съчетая именно програмирането и Елекрониката в
              едно. Като за целта направих сайт, чрез който хората могат
              по-интерактивен начин да научат повече за тази наука като цяло.
            </Typography>

            <Typography sx={{ mt: 3, fontSize: 20 }}>
              В сайта потребителят отваря сайта и може да започне директно игра
              или да прочете обучителни материали. В отделен файл съм направил
              подробно упътване за работа със сайта. Програмата е разработена да
              може да се логват потребители, на сървъра се запазват данни за
              потребителите. Всеки потребител може да разглежда сайта или да
              играе играта като ГОСТ. Ако желае, може да се регистрира и да
              получи допълнителна функционалност на играта.{" "}
            </Typography>
            <Typography sx={{ mt: 3, fontSize: 20 }}>
              Ако потребителят иска да играе като гост, то ще има достъп само до
              първо ниво. Това е нещо като демо версия и така може да разгледа и
              усети играта. След като се регистрира, ще може да се възползва от
              игра на всички нива.
            </Typography>
            <Box
              sx={{ display: "flex", flexDirection: "column", mr: 6, mt: 6 }}
            >
              <Typography sx={{ fontSize: 28, fontWeight: "bold", mb: 2 }}>
                Страница с играта
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
                image={InteractiveElectronicsExercisePage}
              />
            </Box>
            <Typography sx={{ mt: 3, fontSize: 20 }}>
              Програмата поддържа пълната userLogin функционалност. Поддържат се
              регистриране/влизане/излизане/смяна на парола/забравена
              парола/автоматично разлогване след определено време при
              неактивност. Параметрите на потребителя се записват в сесията и се
              пазят до избиране на бутон ИЗХОД или до затваряне на браузъра
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
              Целта на този проект е да ни даде знания относно Електрониката,
              която е важен аспект от нашия живот. Чрез проекта всички хора
              могат лесно и бързо да се научат как работят отделните електронни
              елементи както и да разберат лесни и прости приложения на
              най-важните електронни елементи. В сайта Интерактивна
              електроника(Interactive Electronics) потребителите могат да
              проверят своите знания в тази област чрез интерактивни упражнения,
              организирани по трудност в няколко нива, както и да създават свои
              упражнения.
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
                  image={InteractiveelectronicsHomePage}
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
