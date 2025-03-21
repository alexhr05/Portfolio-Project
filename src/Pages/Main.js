import React from "react";
import logo from "../logo.svg";
import {
  Box,
  Typography,
  alpha,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  IconButton,
} from "@mui/material";
import IntroductionImage from "../Images/programmingLanguages.jpg";
import TreasureHunterImage from "../Images/treasureHunters.png";
import SafeEntrance from "../Images/SafeEntranceHomePage.png";
import FamousBulgarianPeople from "../Images/FamousBulgarianPeople.png";
import InteractiveElectronics from "../Images/InteractiveElectronics.png";
import BlindHelper from "../Images/blindHelperScreenShot.jpg";
import Me from "../Images/aboutMe.png";

import "../index.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CheckIcon from "@mui/icons-material/Check";
import FrontendIcon from "../Images/frontendIcon.png";
import BackendIcon from "../Images/backendIcon.png";
import FrameworkIcon from "../Images/frameworkIcon.png";

import Menu from "./Menu.js";

function Main() {
  const icons = [
    {
      iconBut: <InstagramIcon />,
      url: "https://www.instagram.com/a.hristov_05/",
    },
    {
      iconBut: <FacebookIcon />,
      url: "https://www.facebook.com/profile.php?id=100023840763475",
    },
    {
      iconBut: <LinkedInIcon />,
      url: "https://www.linkedin.com/in/alex-hristov-14b00a277/",
    },
  ];
  const frontendSkills = [
    "Javascript",
    "React",
    "HTML/CSS",
    "Boostrap 4",
    "jQuery",
  ];
  const backendSkills = [
    "Java",
    "Python",
    "MySQL",
    "Kotlin",
    "C#",
    "C++",
    "PHP",
  ];
  const otherSkills = ["PyGame", "Xampp", "Balsamiq"];
  const today = new Date();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "rgb(255, 255, 255)",
        height: window.innerHeight,
      }}
    >
      <Menu />

      <Box sx={{ ml: 35, mr: 35, mt: 12, borderRadius: "30px", boxShadow: 2 }}>
        <Box
          sx={{
            bgcolor: "rgb(230, 230, 230)",
            borderTopLeftRadius: "30px",
            borderTopRightRadius: "30px",
            height: { md: "10%", lg: "15%", xl: "20%" },
            display: "flex",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            gap: { md: 4, lg: 8, xl: 18 },
          }}
        >
          <Card
            sx={{
              border: "solid 1px",
              borderRadius: "30px",
              height: {
                sm: "51%",
                md: "54%",
                lg: "57%",
                xl: "60%",
              },
              width: window.innerWidth * 0.15,
            }}
          >
            <CardMedia
              sx={{
                height: "100%",
                width: "100%",
                objectFit: "fill", // Ensures the image fills the area without distortion
              }}
              image={Me}
              alt="Me"
            />
          </Card>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "black",
            }}
          >
            <Typography
              sx={{
                fontSize: { sm: 20, md: 35, lg: 48, xl: 56 },
                fontWeight: "bold",
              }}
            >
              Alex Hristov
            </Typography>
            <Typography
              sx={{ fontSize: { sm: 12, md: 20, lg: 23, xl: 26 }, mt: 3 }}
            >
              Software Developer
            </Typography>
            <Box sx={{ display: "flex" }}>
              {icons.map((icon) => (
                <IconButton
                  sx={{
                    bgcolor: "rgb(255, 255, 255)",
                    color: "rgb(25, 118, 210)",
                    borderRadius: 100,

                    ":hover": "",
                    ml: 3,
                    mt: 3,
                  }}
                  onClick={() => window.open(icon.url)}
                >
                  {icon.iconBut}
                </IconButton>
              ))}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: "rgb(255, 255, 255)",
            boxShadow: 1,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              mt: 3,
              display: "flex",
              flexDirection: "column",
              p: 3,
              pl: 5,
              width: "100%",
            }}
          >
            <Typography sx={{ fontSize: 28, fontWeight: "bold" }}>
              За мен
            </Typography>
            <Typography sx={{ mt: 3, fontSize: 20 }}>
              Моето име е Алекс Христов. 1 курс студент съм във Софийския
              университет във Факултетат по математика и информатика(ФМИ).
              Завършил съм НПМГ в гр. София със специалност Софтуерни и
              Хардуерни науки.
            </Typography>
            <Typography sx={{ mt: 3, fontSize: 20 }}>
              За себе си мога да кажа, че съм постянен, работещ в екип,
              комуникативен, амбициозен, търпелив. Моите най-добри качества са
              отговорност, изпълнителност, точност, адаптивност, коректност и
              стремеж за развитие. Приоритетите ми са да свърша в срок
              поставените ми задачи.
            </Typography>
            <Typography sx={{ mt: 3, fontSize: 20 }}>
              От 5 клас посещавах Telerik Academy, в която програмирах. Там
              изучвах JavaScript. Веднага след приемането ми в НПМГ започнах да
              участвам в олимпиади по Информационни технологии. В 8 клас
              започнах да навлизам по навътре в IT сферата. Като програмни езици
              досега съм използвал следните: JavaScript, Python, PHP, MySQL,
              C++, C#, Java, Kotlin.
            </Typography>
            <Typography sx={{ mt: 3, fontSize: 20 }}>
              Други допълнения към езиците, които ползвам са jQuery, Ajax,
              Bootstrap, Angular.js и React.js към JavaScript, Pygame, OpenCV и
              Yolov5 към Python, използвам съм Аndroid studio за проекти на Java
              и Kotlin, Unity и ASP.Net със C#, . Често използвам JS и Java в
              Android studio. В Android studio на Java съм писал няколко
              приложения : съхраняване на лична информация, пароли и други;
              контролиране на входящи обаждания, звук и други. През изминалата
              2023 г. бях на стаж във софтуерната компания Accedia юли до
              септември.
            </Typography>
          </Box>

          <Box
            sx={{
              mt: 13,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",

              width: "100%",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: 25 }}>Age</Typography>
              <Typography sx={{ fontSize: 25, mt: 2 }}>Residence</Typography>
              <Typography sx={{ fontSize: 25, mt: 2 }}>Email</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: 25 }}>
                {today.getFullYear() - 2005}
              </Typography>
              <Typography sx={{ fontSize: 25, mt: 2 }}>Bulgaria</Typography>
              <Typography sx={{ fontSize: 25, mt: 2 }}>
                alexhr05@gmail.com
              </Typography>
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
              alignItems: "center",
              p: 3,
              pl: 5,
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: 25,
                borderLeft: 5,
                borderRight: 5,
                pl: 2,
                pr: 2,
                borderColor: "Blue",
                fontWeight: "bold",
              }}
            >
              Преглед на умения
            </Typography>
            <Box></Box>
            <Typography sx={{ mt: 3, fontSize: 22 }}>
              Имам повече от {today.getFullYear() - 2019} години опит в
              изграждането на уеб приложения за олимпиади или за определени
              нужди. По-долу е представена кратка преглед на основните ми
              технически умения и инструментите, които използвам. Искам да да
              научите повече за моя опит? Разгледайте моята онлайн
              автобиография.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              pt: 6,
              position: "relative",
              mb: 5,
            }}
          >
            <Card
              sx={{
                width: window.innerWidth * 0.15,
                boxShadow: 4,
                height: {
                  md: window.innerHeight * 0.6,
                  lg: window.innerHeight * 0.6,
                  xl: window.innerHeight * 0.5,
                },
                background: {
                  sm: "red",
                  md: "blue",
                  lg: "yellow",
                  xl: "green",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100px", // Adjust size as needed
                  height: "100px",
                  // backgroundColor: "rgb(25, 118, 210)", // Choose a color
                  backgroundColor: "rgb(255, 255, 255)", // Choose a color
                  borderRadius: "50%",
                  position: "absolute",
                  transform: "translate(66%, -50%)",
                  pt: 1,

                  color: "",
                }}
              >
                <img sx={{ pt: 5 }} src={FrontendIcon} />
              </Box>
              <CardContent
                sx={{
                  pt: 7,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography sx={{ mb: 1.5, fontSize: 25, textAlign: "center" }}>
                  Frontend
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
                  {frontendSkills.map((frontendSkill) => (
                    <Box
                      sx={{
                        display: "flex",
                        mr: 2,
                        mt: 1,
                        pl: 5,
                      }}
                    >
                      <CheckIcon color="primary" />

                      <Typography variant="body2" fontSize={20} sx={{ pl: 4 }}>
                        {frontendSkill}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
            <Card
              sx={{
                width: window.innerWidth * 0.15,
                height: window.innerHeight * 0.4,
                boxShadow: 4,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100px", // Adjust size as needed
                  height: "100px",
                  // backgroundColor: "blue", // Choose a color
                  backgroundColor: "rgb(255, 255, 255)", // Choose a color
                  borderRadius: "50%",
                  position: "absolute",
                  transform: "translate(66%, -50%)",
                  pt: 1,
                }}
              >
                <img sx={{ pt: 5 }} src={BackendIcon} />
              </Box>
              <CardContent
                sx={{
                  pt: 7,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography sx={{ mb: 1.5, fontSize: 25, textAlign: "center" }}>
                  Backend
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
                  {backendSkills.map((backendSkill) => (
                    <Box
                      sx={{
                        display: "flex",
                        mr: 2,
                        mt: 1,
                        pl: 5,
                      }}
                    >
                      <CheckIcon color="primary" />

                      <Typography variant="body2" fontSize={20} sx={{ pl: 4 }}>
                        {backendSkill}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
            <Card
              sx={{
                width: window.innerWidth * 0.15,
                height: window.innerHeight * 0.4,
                boxShadow: 4,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100px", // Adjust size as needed
                  height: "100px",
                  // backgroundColor: "blue", // Choose a color
                  backgroundColor: "rgb(255, 255, 255)", // Choose a color
                  borderRadius: "50%",
                  position: "absolute",
                  transform: "translate(70%, -50%)",
                }}
              >
                <img sx={{ pt: 5 }} src={FrameworkIcon} />
              </Box>
              <CardContent
                sx={{
                  pt: 7,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography sx={{ mb: 1.5, fontSize: 25, textAlign: "center" }}>
                  Others
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
                  {otherSkills.map((otherSkill) => (
                    <Box
                      sx={{
                        display: "flex",
                        mr: 2,
                        mt: 1,
                        pl: 5,
                      }}
                    >
                      <CheckIcon color="primary" />

                      <Typography variant="body2" fontSize={20} sx={{ pl: 4 }}>
                        {otherSkill}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "80px",
          border: "solid 1 px",
          display: "flex",
          color: "black",
          justifyContent: "center",
          mt: 30,
          pb: 3,
        }}
      >
        <Typography fontSize={20}>
          © Alex Hristov - alexhr05@gmail.com
        </Typography>
      </Box>
    </Box>
  );
}

export default Main;
