import Projects from "./Pages/Projects";
import Main from "./Pages/Main";
import AIModelMakerPage from "./Pages/AIModelMakerPage";
import PersonalInformationCredentialsPage from "./Pages/PersonalInformationCredentialsPage";
import BlindHelperPage from "./Pages/BlindHelperPage";
import InteractiveElectronicsPage from "./Pages/InteractiveElectronicsPage";
import SafeEntrancePage from "./Pages/SafeEntrancePage";
import TreasureHuntersPage from "./Pages/TreasureHuntersPage";
import MultiplayerCarGamePage from "./Pages/MultiplayerCarGamePage";
import PlaneShooterGamePage from "./Pages/PlaneShooterGamePage";
import AwesomeCarGamePage from "./Pages/AwesomeCarGamePage";
import BankSAASPage from "./Pages/BankSAASPage";

const routes = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/main",
    element: <Main />,
  },

  {
    path: "/projects",
    children: [
      {
        path: "",
        element: <Projects />,
      },
      {
        path: "aimodelmaker",
        element: <AIModelMakerPage />,
      },
      {
        path: "personalinformationapp",
        element: <PersonalInformationCredentialsPage />,
      },
      {
        path: "blindhelper",
        element: <BlindHelperPage />,
      },
      {
        path: "banksaas",
        element: <BankSAASPage />,
      },
      {
        path: "awesomecargame",
        element: <AwesomeCarGamePage />,
      },
      {
        path: "multiplayercargame",
        element: <MultiplayerCarGamePage />,
      },
      {
        path: "planeshootergame",
        element: <PlaneShooterGamePage />,
      },
      {
        path: "interactiveelectronics",
        element: <InteractiveElectronicsPage />,
      },
      {
        path: "safeentrance",
        element: <SafeEntrancePage />,
      },
      {
        path: "treasurehunters",
        element: <TreasureHuntersPage />,
      },
    ],
  },
];

export default routes;
