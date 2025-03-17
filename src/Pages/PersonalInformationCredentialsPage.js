import React from "react";
import { Box, Typography, Card, CardMedia } from "@mui/material";

import PersonalInformationCredentials from "../Images/PersonalInformationCredentialsLogoHomePage.jpg";
import PersonalInformationCredentialsLogoEditingPage from "../Images/PersonalInformationCredentialsLogoEditingPage.jpg";
import PersonalInformationCredentialsLogo from "../Images/logoPIC.png";

import LinkIcon from "@mui/icons-material/Link";

import Menu from "./Menu.js";
import { Link } from "react-router-dom";

function PersonalInformationCredentialsPage() {
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
                pt: 22,
              }}
              image={PersonalInformationCredentialsLogo}
              alt="Personal Information Credentials Logo"
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
              Personal Information Credentials
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
                  to="https://github.com/alexhr05/PersonalI-Information-app"
                >
                  Към Github
                </Link>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Typography sx={{ fontSize: 20, textIndent: "3%" }}>
                  Тук човек може да запазва всички свои входни данни за
                  сайтовете, в които влиза или LOGIN CREDENTIALS. Може да ги
                  редактира по всяко време, като той трябва да ги вкара сам в
                  приложението. Достъпа до самото приложение може да се
                  контролира от потребителя дали иска парола или нещо
                  по-сигурно.
                  {/* PIC - Personal Information Credentials е приложение за
                  съхраняване на лична информация, например за влизане в
                  определени уебсайтове и приложения. */}
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
              В мобилното приложение лицето може да види мястото, където се е
              регистрирало, потребителското име или електронната поща и паролата
              за мястото. Като потребителят може да редактира наличната
              информация и тя ще се промени след запазване на промените. В
              раздела Настройки можете да промените своя ПИН код, а също така
              можете да изберете как да влезете в приложението с ПИН код или с
              пръстов отпечатък, или с всички заедно, или можете и без нито един
              от всички.Друга функция, която потребителят може да направи, е да
              изтрие реда или информацията за мястото, на което се е
              регистрирал. Целият поток от данни се криптира на сигурно място в
              телефона и никой няма достъп до него и не може да го декриптира.
              Данните на потребителя са в безопасност и няма нужда да се
              притеснявате.
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
              Приложението има за цел да може да защити личните данни на човек,
              като се запазват директно на телефона му. Да може да си записва
              всичките данни за влизания в различни сайтове или приложения по
              лесен и бърз начин.
            </Typography>
            <Box
              sx={{
                display: "flex",
                mt: 8,
                gap: 15,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  mr: 2,
                }}
              >
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
                  image={PersonalInformationCredentials}
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
                  image={PersonalInformationCredentialsLogoEditingPage}
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

export default PersonalInformationCredentialsPage;
