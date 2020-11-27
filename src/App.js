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
import { Avatar, Badge, Button, Card, CardActions, CardContent, Collapse, Container, Grid, Paper, SvgIcon } from "@material-ui/core";
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
  navy: `rgba(61, 81, 112, 1)`, // text
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
const cardList = [
  [[7, "Товаров в инвентаре"], undefined],
  [[45, "Товаров на подтверждении"], "59:03"],
  [[23, "Товаров подтверждено"], undefined],
  [[20, "Заказов оформлено"], undefined],
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
  appBar_badge: {
    top: "14px",
    left: "12px",
    transform: "none",
    backgroundColor: "#FF0000",
  },
  appBar_badge_root: {
    margin: "0px 22px 0px 12px",
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
    color: colors.navy,
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
  content_title: {
    fontSize: "20px",
    fontWeight: 500,
    lineHeight: "23px",
    color: colors.navy,
    marginBottom: "30px",
  },
  paper: {
    height: "136px",
    width: "382px",
    boxShadow: `0px 5px 19px 0px rgba(90, 97, 105, 0.12)`,
    padding: "24px",
    display: "flex",
    alignItems: "center",
  },
  paper_title: {
    flex: "1",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "19px",
    color: colors.navy,
  },
  paper_subTitle: {
    flex: "1",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "20px",
    color: colors.grey2,
  },
  paper_timer: {
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "20px",
    color: "#FF0000",
    marginRight: "8px",
    marginLeft: "17px",
  },
  circle: {
    border: `3px solid rgba(84, 173, 255, 1)`,
    borderRadius: "152px",
    width: "88px",
    height: "88px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
    marginRight: "16px",
  },
  circle_title: {
    fontSize: "40px",
    fontWeight: 700,
    lineHeight: "47px",
    color: colors.navy,
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

function App(props) {
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
            <ListItem
              disableGutters
              button
              key={item[0]}
              onClick={item.length > 1 ? handleClick : undefined}
              selected={open && item.length > 1}
            >
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

  const ContentPaper = (props) => {
    return (
      <Paper className={classes.paper}>
        <div className={classes.circle}>
          <Typography className={classes.circle_title}>{props.count}</Typography>
        </div>
        <div style={{ position: "relative", minWidth: "100px" }}>
          <Typography className={classes.paper_title}>{props.title}</Typography>
          {props.timer !== undefined && (
            <div style={{ position: "absolute", display: "flex", width: "100%" }}>
              <Typography className={classes.paper_timer}>{props.timer}</Typography>
              <Typography className={classes.paper_subTitle}>{"Время осталось"}</Typography>
            </div>
          )}
        </div>
      </Paper>
    );
  };

  return (
    <div className={classes.root}>
      {/* Top of right panel */}
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography noWrap className={classes.appBar_title}>
            {text_Dashboard}
          </Typography>
          <Divider orientation="vertical" light />
          {/*TODO fix badge position */}
          <Badge
            badgeContent={2}
            color="error"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            overlap="rectangle"
            classes={{ root: classes.appBar_badge_root, anchorOriginBottomRightRectangle: classes.appBar_badge }}
          >
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

      {/* Left panel */}
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

      {/* Main content of right panel */}
      <main className={classes.content}>
        {/* Top offset */}
        <div className={classes.toolbar} />

        <Typography variant="h1" className={classes.content_title} style={{ marginBottom: "43px" }}>
          {text_Dashboard}
        </Typography>
        <Grid container justify="flex-start" spacing="3">
          {cardList.map((value) => (
            <Grid key={value[0]} item>
              <ContentPaper count={value[0][0]} title={value[0][1]} timer={value[1]} />
            </Grid>
          ))}
        </Grid>

        <Typography variant="h1" className={classes.content_title}>
          Список товаров
        </Typography>
        <Card>
          <CardContent>
            <Typography className={classes.drawer_title} color="textSecondary">
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

export default App;
