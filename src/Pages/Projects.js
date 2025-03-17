import React, { useState, useEffect } from "react";
import logo from "../logo.svg";
import {
  Box,
  Typography,
  alpha,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Pagination,
} from "@mui/material";
import TreasureHunterImage from "../Images/treasureHunters.png";
import SafeEntrance from "../Images/SafeEntranceMain.PNG";
import FamousBulgarianPeople from "../Images/FamousBulgarianPeople.png";
import InteractiveElectronics from "../Images/InteractiveElectronics.png";
import BlindHelper from "../Images/blindHelperScreenShot.jpg";
import AIModelMaker from "../Images/AIModelMaker_2.PNG";
import PersonalInformationAppPic from "../Images/PersonalInformationAppPic.png";
import PlaneShooterGame from "../Images/planeShooterGameMiddlePart.png";
import MultiplayerCarGame from "../Images/multiplayerCarGame.PNG";
import AwesomeCarGame from "../Images/AwesomeCarGame.PNG";
import BankSAAS from "../Images/BankSAASLoginPage.PNG";

import Menu from "./Menu.js";
import { Link } from "react-router-dom";
import AwesomeCarGamePage from "./AwesomeCarGamePage.js";

function Projects() {
  const items = [
    {
      imagePath: AIModelMaker,
      title: "AI Model Maker",
      text: "Приложението има за цел да предостави иновативно и ефективно средство за обработка на данни и автоматизирано създаване на AI модели. Чрез използване на напреднали алгоритми за обработка на данни и машинно самообучение, приложението цели да улесни процеса на създаване И трениране на AI модели.",
      url: "aimodelmaker",
    },
    {
      imagePath: PersonalInformationAppPic,
      title: "Personal Information App",
      text: "Тук човек може да запазва всички свои входни данни за сайтовете, в които влиза или LOGIN CREDENTIALS. Може да ги редактира по всяко време, като той трябва да ги вкара сам в приложението. Достъпа до самото приложение може да се контролира от потребителя дали иска парола или нещо по-сигурно.",
      url: "personalinformationapp",
    },
    {
      imagePath: BlindHelper,
      title: "Blind Helper",
      text: "Този проект го разработих с помощта на един приятел за НОИТ, като стигнах до националния кръг и бях в топ 4. Това е приложение за телефон, което предназначено за хора с увредено зрение и да може да им казва какво има пред тях и да търси различни предмети каквито човека му зададе. Приложението може да се контролира само с гласови команди.",
      url: "blindhelper",
    },
    {
      imagePath: BankSAAS,
      title: "Bank SAAS",
      text: "Това е приложение, което е подобно на опростен банков софтуер, където се съхранява информация за дадения потребител, като имена и колко пари има в банковата сметка. В него може да се пресметне колко пари дължи човек, след като е изтеглил кредит.",
      url: "banksaas",
    },
    {
      imagePath: AwesomeCarGame,
      title: "Awesome Car Game",
      text: "Awesome Car Game е проект за края на първи срок на 11 клас, в който един играч управлява една кола и целта е кой да издържи по-дълго без да се блъсне в падащите предмети отгоре.",
      url: "awesomecargame",
    },
    {
      imagePath: MultiplayerCarGame,
      title: "Multiplayer Car Game",
      text: "Multiplayer Car Game е проект за края на годината в 10 клас, в който двама играчи заедно могат да управляват по отделно една кола и целта е кой ще издържи по-дълго без да се блъсне в падащите предмети отгоре.",
      url: "multiplayercargame",
    },
    {
      imagePath: PlaneShooterGame,
      title: "Plane Shooter Game",
      text: "Играта Plane Shooter Game успях да я направя в 10 клас, като развитие на предния проект, където сега всичко е направено с по-напреднали знания, както и графиките са доста добре съобразени със уцелване на целта.",
      url: "planeshootergame",
    },
    {
      imagePath: InteractiveElectronics,
      title: "Interacitve Electronics",
      text: "Този проект го разработих за НОИТ, като стигнах до националния кръг и бях в топ 6. Това е самообучителен сайт, в който човек може да се развие своите умения в Електрониката. В сайта има уроци за различните електронни компоненти как работят и какво представляват и когато натрупа базови познания в сферата може да започне да се упражнява. ",
      url: "interactiveelectronics",
    },
    {
      imagePath: SafeEntrance,
      title: "Safe Entrance",
      text: "Safe Entrance е софтуерно приложение, чиято основна функционалност е да осигурява лесен и контролиран достъп до различни помещения, домове, офиси, предприятия. Програмата мисли вместо потребителите и те няма да има нужда да помнят, кой ключ за коя врата къде се слага и как се отключва.",
      url: "safeentrance",
    },
    {
      imagePath: TreasureHunterImage,
      title: "Treasure Hunter",
      // text: "Това е игра, която разработих НОИТ с помощта на една съученичка. Аз разработвах логиката на играта, а тя беше по дизайна. Но с проетка стигнахме до националия кръг и се класирахме на почетни места на цялата олимпиада. Играта ни е 2D и играчът е едно човече, което може да скача и се движи във всички посоки и целта му е да събере колкото се може повече диаманти и да мине всички нива.",
      text: "Treasure Hunters е игра, подобна на Super Mario, в която играчите могат да разивят своите умения на ориентация, съсредоточеност и наблюдателност. Подходящи е за деца между 7-11 годишна възраст, но и по-големи могат да я пробват.",
      url: "treasurehunters",
    },
  ];

  const pageSize = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const currentItems = items.slice(startIndex, endIndex);

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
          width: "100%",
          backgroundColor: "rgb(230, 230, 230)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: 36, mt: 6, fontWeight: "bold" }}>
          Портфолио
        </Typography>
        <Typography sx={{ fontSize: 20, mt: 3, mb: 10 }}>
          Добре дошли в моето онлайн портфолио. Тук ще видите всички мои проекти
          през годините.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", m: 10 }}>
        <Box sx={{ display: "flex" }}>
          <Grid container spacing={3}>
            {currentItems.map((item) => (
              <>
                <Grid item xs={6} sx={{}}>
                  <Link to={item.url} style={{ textDecoration: "none" }}>
                    <Card
                      sx={{
                        display: "flex",
                        boxShadow: 3,
                        mb: 3,
                        height: "300px",
                        flexGrow: 1,
                        flexShrink: 0,
                      }}
                    >
                      {/* <Box sx={{ width: "50%" }}> */}
                      <CardMedia
                        sx={{
                          objectFit: "fill",
                          height: "100%",
                        }}
                        component="img"
                        image={item.imagePath}
                      />
                      {/* </Box> */}
                      <CardContent
                        sx={{
                          backgroundColor: "rgb(230, 230, 230)",
                          width: "120%",
                          pl: 4,
                          pr: 2,
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: 26,
                            fontWeight: "Bold",
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: 18,
                            flexWrap: "wrap",
                            mt: 1,
                          }}
                        >
                          {item.text}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              </>
            ))}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                mt: 4,
              }}
            >
              <Pagination
                variant="outlined"
                count={totalPages}
                page={currentPage}
                onChange={(_, newPage) => setCurrentPage(newPage)}
              />
            </Box>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Projects;
