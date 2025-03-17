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
import AIModelMakerLogo from "../Images/AIModelMakerLogo.png";

import LinkIcon from "@mui/icons-material/Link";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import Menu from "./Menu.js";
import { Link } from "react-router-dom";

function AIModelMakerPage() {
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
              image={AIModelMakerLogo}
              alt="AIModelMaker"
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
            <Typography sx={{ fontSize: 46, fontWeight: "bold", mt: 4 }}>
              AI Model Maker
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
                  to="https://github.com/MihailDimitrov1235/ai-model-maker"
                  style={{
                    textDecoration: "none",
                    textAlign: "center",
                    color: "rgb(20,20,20)",
                    fontSize: 28,
                  }}
                >
                  Към GitHub
                </Link>
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}
              >
                <EmojiEventsIcon sx={{ fontSize: 40 }} />
                <Typography sx={{ fontSize: 28, color: "rgb(30,30,30)" }}>
                  Участие на НОИТ - 2024
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
                  Приложението може бързо и ефективно да се анализират големи
                  обеми от данни. Може тренира невронна мрежа, която да направи
                  някаква прогноза или да предвиди определена стойност.
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
              В наши дни се отбелязва бум в информационните технологии,
              обработката на данни и използването на изкуствен интелект (AI),
              които се превръщат в ключови елементи за подобряване на
              най-различни процеси. Задвижвана от неограничения потенциал на
              технологията, идеята за приложения, които не само обработват
              данни, но и автоматизират създаването на AI модели, е важен и
              иновативен елемент от развитието на софтуерната индустрия. С
              развитието на AI и машинното самообучение обаче се налага новата
              реалност – необходимостта от широко приложение на AI във всички
              аспекти на обществото. Именно в този контекст възниква идеята за
              разработка на приложение, което не само ще обработва данните, но и
              ще използва AI технологии за автоматизирано създаване на модели. А
              именно нашето приложение AI Model Maker може да постигне това. В
              приложението може бързо и ефективно да се анализират големи обеми
              от данни. След това може да се тренира невронна мрежа, която да
              предсказва, тоест да прави много изчисления и да анализира
              данните, които са му подадени, за да може да изведе на база тях
              определен резултат, за тази характеристика от информацията, за
              която искаме да направи някаква прогноза или да предвиди
              определена стойност.
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
              Приложението има за цел да предостави иновативно и ефективно
              средство за обработка на данни и автоматизирано създаване на AI
              модели. Чрез използване на напреднали алгоритми за обработка на
              данни и машинно самообучение, приложението цели да улесни процеса
              на създаване, трениране и оценяване на AI модели, намалявайки
              трудоемкостта и ускорявайки разработката. Чрез ефективно
              обединение на обработка на данни и машинно самообучение, то
              предоставя комплексно решение, способно да подкрепя иновациите и
              напредъка в сферата на изкуствения интелект.
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

export default AIModelMakerPage;
