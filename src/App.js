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
import { Avatar, Badge, Container } from "@material-ui/core";
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
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
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

  drawerPaper: {
    width: drawerWidth,
    boxShadow: `0px 1px 2px 0px rgba(225, 229, 235, 0.8),
                0px 13px 27px 0px rgba(90, 97, 105, 0.15)`,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: colors.grey4,
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
              <ListItemText primary={text} />
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
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
          hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi
          quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis
          viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa
          tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
          ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare
          massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam
          sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod
          elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices
          sagittis orci a.
        </Typography>
      </main>
    </div>
  );
}

export default ResponsiveDrawer;
