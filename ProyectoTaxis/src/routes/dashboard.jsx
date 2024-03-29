import Dashboard from "views/Dashboard/Dashboard.jsx";
import Notifications from "views/Notifications/Notifications.jsx";
import Icons from "views/Icons/Icons.jsx";
import Typography from "views/Typography/Typography.jsx";
import TableList from "views/TableList/TableList.jsx";
import Maps from "views/Maps/Maps.jsx";
import UserPage from "views/UserPage/UserPage.jsx";

var dashRoutes = [
  {
    path: "/tablero",
    name: "Tablero",
    icon: "nc-icon nc-bank",
    component: Dashboard
  },
 /* {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-diamond",
    component: Icons
  },
  { 
    path: "/maps", 
    name: "Maps", 
    icon: "nc-icon nc-pin-3", 
    component: Maps 
  },
  {
    path: "/notifications",
    name: "noti",
    icon: "nc-icon nc-bell-55",
    component: Notifications
  },*/
  {
    path: "/user-page",
    name: "Crear empleado",
    icon: "nc-icon nc-single-02",
    component: UserPage
  },
  {
    path: "/tabla",
    name: "Tabla empleados",
    icon: "nc-icon nc-tile-56",
    component: TableList
  },
  {
    path: "/perfiles",
    name: "Perfiles",
    icon: "nc-icon nc-circle-10",
    component: Typography
  },
 
  { redirect: true, path: "/", pathTo: "/tablero", name: "Tablero" }
];
export default dashRoutes;
