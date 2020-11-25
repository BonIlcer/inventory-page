import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Badge, Button, Card, CardActions, CardContent, Container, Paper } from "@material-ui/core";
import avatarSrc from "./images/avatar.svg";
import logoSrc from "./images/logo.svg";

const colors = {
  white: `rgba(255, 255, 255, 1)`,
  grey0: `rgba(90, 97, 105, 1)`, // text
  grey1: `rgba(115, 129, 143, 1)`, //
  grey2: `rgba(189, 194, 209, 1)`, // text, icon
  grey3: `rgba(217, 222, 229, 1)`, // icon
  grey4: `rgba(245, 246, 248, 1)`, // content background
};
const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    height: theme.spacing(7),
    marginLeft: drawerWidth,
    boxShadow: `0px 5px 19px 0px rgba(90, 97, 105, 0.12)`,
    backgroundColor: colors.white,
    color: colors.grey0,
  },
  toolbar: {
    minHeight: theme.spacing(7),
  },
  appBar_title: {
    flexGrow: 1,
    fontSize: "13px",
    fontWeight: 400,
    lineHeight: "15px",
    letterSpacing: "0em",
  },
  appBar_icon: {
    color: colors.grey3,
  },
  avatar: {
    margin: "0px 23px",
  },
  logoWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    boxShadow: `0px 1px 2px 0px rgba(225, 229, 235, 0.8),
                0px 13px 27px 0px rgba(90, 97, 105, 0.15)`,
  },
  drawer_title: {
    fontSize: "13px",
    fontWeight: 500,
    lineHeight: "15px",
    letterSpacing: "0em",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: colors.grey4,
  },
  paper: {
    height: "136px",
    width: "382px",
  },
}));

function ResponsiveDrawer(props) {
  const classes = useStyles();
  const userName = "Директор";
  const appBarTitle = "Dashbord";

  const drawer = (
    <div>
      <div className={classes.toolbar + " " + classes.logoWrapper}>
        <img alt="company logo" src={logoSrc} />
      </div>
      <Divider />
      <List>
        {["Главная страница", "Инвентарь", "Мой склад", "Аукцион"].map((text, index) => (
          <>
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} className={classes.drawer_title} />
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography noWrap className={classes.appBar_title}>
            {appBarTitle}
          </Typography>
          <Divider orientation="vertical" light />
          {/*TODO fix badge position */}
          <Badge badgeContent={2} color="error">
            <NotificationsIcon className={classes.appBar_icon} />
          </Badge>
          {/*TODO change color */}
          <Divider orientation="vertical" light />
          <Avatar alt="user avatar" src={avatarSrc} className={classes.avatar} />
          <Typography noWrap>{userName}</Typography>
          {/*TODO wrap icon with btn */}
          <ArrowDropDownIcon className={classes.appBar_icon} />
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography variant="h3">Dashhbord</Typography>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Paper elevation={3} className={classes.paper} />
          <Paper elevation={3} className={classes.paper} />
          <Paper elevation={3} className={classes.paper} />
        </div>

        <Typography variant="h3">Список товаров</Typography>
        <Card>
          <CardContent>
            <Typography className={classes.drawer_title} color="textSecondary" gutterBottom>
              Here will Table
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </main>
    </div>
  );
}

export default ResponsiveDrawer;
