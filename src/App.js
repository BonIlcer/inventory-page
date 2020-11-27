import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import MuiListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Avatar, Badge, Button, Card, CardActions, CardContent, Collapse, Container, Paper, SvgIcon } from "@material-ui/core";
import avatarSrc from "./images/avatar.svg";
import logoSrc from "./images/logo.svg";
import inventorySrc from "./images/drawerInventory.svg";
import mainPageSrc from "./images/drawerMainPage.svg";
import storageSrc from "./images/drawerStorage.svg";
import auctionSrc from "./images/drawerAuction.svg";
import usersSrc from "./images/drawerUsers.svg";
import settingsSrc from "./images/drawerSettings.svg";
import currencySrc from "./images/drawerCurrency.svg";
import messagesSrc from "./images/drawerMessages.svg";
import orderSrc from "./images/drawerOrder.svg";

const colors = {
  white: `rgba(255, 255, 255, 1)`,
  grey0: `rgba(90, 97, 105, 1)`, // text
  grey1: `rgba(115, 129, 143, 1)`, //
  grey2: `rgba(189, 194, 209, 1)`, // text, icon
  grey3: `rgba(217, 222, 229, 1)`, // icon
  grey4: `rgba(245, 246, 248, 1)`, // content background
};
const categoriesList = [
  ["Главная страница"],
  ["Инвентарь"],
  ["Мой склад", ["Задачи складу", "Отправлено", "На складе"]],
  ["Аукцион"],
  ["Пользователи"],
  ["Настройки"],
  ["Сообщения"],
  ["Финансы"],
  ["Мои заказы"],
];
const categoriesIcons = [
  <img alt="Main page icon" src={mainPageSrc} />,
  <img alt="Inventory icon" src={inventorySrc} />,
  <img alt="Storage icon" src={storageSrc} />,
  <img alt="Auction icon" src={auctionSrc} />,
  <img alt="Users icon" src={usersSrc} />,
  <img alt="Settings icon" src={settingsSrc} />,
  <img alt="Messages icon" src={messagesSrc} />,
  <img alt="Currency icon" src={currencySrc} />,
  <img alt="Order icon" src={orderSrc} />,
];
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
  },
  appBar_icon: {
    color: colors.grey3,
  },
  avatar: {
    margin: "0px 23px",
  },
  username_title: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "18px",
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
    color: "rgba(61, 81, 112, 1)",
  },
  listItemIcon: {
    height: "16px",
    width: "16px",
    minWidth: "16px",
    margin: "16px",
    justifyContent: "center",
  },

  content: {
    width: `calc(100% - ${drawerWidth}px)`,
    flexGrow: 1,
    padding: "90px 53px 79px 51px",
    backgroundColor: colors.grey4,
  },
  paper: {
    height: "136px",
    width: "382px",
  },
}));

const ListItem = withStyles((theme) => ({
  root: {
    height: "50px",

    "&$selected": {
      borderLeft: `5px solid rgba(0, 123, 255, 1)`,
      backgroundColor: "transparent",
    },
    "&$selected:hover": {
      borderLeft: `5px solid rgba(0, 123, 255, 1)`,
    },
    "&:hover": {},
  },
  selected: {},
}))(MuiListItem);

const ListSubItem = withStyles((theme) => ({
  root: {
    height: "50px",
    paddingLeft: "50px",
    fontSize: "13px",
    fontWeight: 400,
    lineHeight: "15px",
    letterSpacing: "0em",
    color: "rgba(189, 194, 209, 1)",
    "&$selected": {
      backgroundColor: "transparent",
      color: "rgba(0, 123, 255, 1)",
    },
    "&$selected:hover": {},
    "&:hover": {},
  },
  selected: {},
}))(MuiListItem);

function ResponsiveDrawer(props) {
  const [open, setOpen] = useState(true);
  const [subSelectedIndex, setSubSelectedIndex] = useState(0);
  const classes = useStyles();
  const userName = "Директор";
  const text_Dashboard = "Dashboard";
  const handleClick = () => {
    setSubSelectedIndex(0);
    setOpen(!open);
  };
  const handleSelectSubItem = (index) => {
    setSubSelectedIndex(index);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar + " " + classes.logoWrapper}>
        <img alt="company logo" src={logoSrc} />
      </div>
      <Divider />
      <List disablePadding>
        {categoriesList.map((item, index) => (
          <>
            <ListItem disableGutters button key={item[0]} onClick={item.length > 1 ? handleClick : ""} selected={open && item.length > 1}>
              <ListItemIcon className={classes.listItemIcon}>{categoriesIcons[index]}</ListItemIcon>
              <ListItemText disableTypography primary={item[0]} className={classes.drawer_title} />
            </ListItem>
            {item.length > 1 ? (
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List disablePadding>
                  {item[1].map((subItem, subIndex) => (
                    <ListSubItem
                      button
                      key={subItem}
                      onClick={() => handleSelectSubItem(subIndex)}
                      selected={subIndex === subSelectedIndex}
                    >
                      <ListItemText disableTypography primary={subItem} />
                    </ListSubItem>
                  ))}
                </List>
              </Collapse>
            ) : (
              ""
            )}
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
            {text_Dashboard}
          </Typography>
          <Divider orientation="vertical" light />
          {/*TODO fix badge position */}
          <Badge badgeContent={2} color="error">
            <NotificationsIcon className={classes.appBar_icon} />
          </Badge>
          {/*TODO change color */}
          <Divider orientation="vertical" light />
          <Avatar alt="user avatar" src={avatarSrc} className={classes.avatar} />
          <Typography noWrap className={classes.username_title}>
            {userName}
          </Typography>
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
        <Typography variant="h3">{text_Dashboard}</Typography>
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
