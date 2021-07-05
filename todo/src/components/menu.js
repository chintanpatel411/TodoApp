import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';  
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MenuStyle from '../style/menu-style';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Collapse from '@material-ui/core/Collapse';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import OpacityIcon from '@material-ui/icons/Opacity';
import AddIcon from '@material-ui/icons/Add';
import MailIcon from '@material-ui/icons/Mail';


export default function DrawerMenu(props) {
  const classes = MenuStyle();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [projectMenuOpen, setProjectMenuOpen] = React.useState(false)
  const [labelsMenuOpen, setLabelesMenuOpen] = React.useState(false)
  const [sharedMenuOpen, setSharedMenuOpen] = React.useState(false)
  const [filterMenuOpen, setFilterMenuOpen] = React.useState(false)

  function handleProjectMenuClick() {
    setProjectMenuOpen(!projectMenuOpen)
  }

  function handleLablesMenuClick() {
    setLabelesMenuOpen(!labelsMenuOpen)
  }

  function handleSharedMenuClick() {
    setSharedMenuOpen(!sharedMenuOpen)
  }

  function handleFilterMenuClick() {
    setFilterMenuOpen(!filterMenuOpen)
  } 

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className="body">
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: props.open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, props.open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="Home"
            edge="start"
            className={clsx(classes.menuButton)}
          >
            <HomeOutlinedIcon />
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">

              <CheckCircleOutlineOutlinedIcon />
              <span style={{ fontSize: 15, marginLeft: 5 }}>10/5</span>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={props.handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key="today">
            {/* Today Menu */}
            <ListItemIcon ><CalendarTodayIcon style={{ color: "#3a8235" }} /></ListItemIcon>
            <ListItemText primary="Today" />
            <span style={{ color: "#ce5642" }}>2</span>
          </ListItem>

          {/* Project Menu */}
          <ListItem button onClick={handleProjectMenuClick} className={classes.menuItem}>
            <ListItemIcon >  {projectMenuOpen ? <KeyboardArrowDownIcon /> : <ChevronRightIcon />} </ListItemIcon>
            <ListItemText primary="Project" />
            {projectMenuOpen ?<AddIcon style={{ color: "#b8b8b8" }} />: <span></span>}
          </ListItem>

          <Collapse in={projectMenuOpen} timeout="auto" unmountOnExit>
            <List component="div" >
              <ListItem button className={classes.menuItem}>
                <FiberManualRecordIcon style={{ color: "#b8b8b8" }} />
                <ListItemText primary="Welcome" className={classes.menuText} />
                <span style={{ color: "#b8b8b8" }}>5</span>
              </ListItem>

              <ListItem button className={classes.menuItem}>
                <AccountCircle style={{ color: "#b8b8b8" }} />
                <ListItemText primary="Try Board" className={classes.menuText} />
                <span style={{ color: "#b8b8b8" }}>6</span>

              </ListItem>

              <ListItem button className={classes.menuItem}>
                <AccountCircle style={{ color: "#3a8235" }} />
                <ListItemText primary="Trail A" className={classes.menuText} />
                <span style={{ color: "#b8b8b8" }}>1</span>

              </ListItem>
              <ListItem button className={classes.menuItem}>
                <ListItemText style={{ color: "#b8b8b8" }} inset primary="Archived Project" />


              </ListItem>
            </List>
          </Collapse>


          {/* Labels Menu */}
          <ListItem button onClick={handleLablesMenuClick} className={classes.marginTop20}>
            <ListItemIcon >  {labelsMenuOpen ? <KeyboardArrowDownIcon /> : <ChevronRightIcon />} </ListItemIcon>
            <ListItemText primary="Labels" />
            {labelsMenuOpen ?<AddIcon style={{ color: "#b8b8b8" }} />: <span></span>}
          </ListItem>

          <Collapse in={labelsMenuOpen} timeout="auto" unmountOnExit>
            <List component="div" >
              <ListItem button className={classes.menuItem}>
                <LocalOfferOutlinedIcon style={{ color: "#4ca9ef" }} />
                <ListItemText primary="Label 1" className={classes.menuText} />
                <span style={{ color: "#b8b8b8" }}>4</span>
              </ListItem>

              <ListItem button className={classes.menuItem}>
                <LocalOfferOutlinedIcon style={{ color: "#b8b8b8" }} />
                <ListItemText primary="Label 2" className={classes.menuText} />
                <span style={{ color: "#b8b8b8" }}></span>

              </ListItem>

            </List>
          </Collapse>

          {/* Shared Menu */}
          <ListItem button onClick={handleSharedMenuClick} className={classes.marginTop20}>
            <ListItemIcon >  {sharedMenuOpen ? <KeyboardArrowDownIcon /> : <ChevronRightIcon />} </ListItemIcon>
            <ListItemText primary="Shared" />
            {sharedMenuOpen ?<AddIcon style={{ color: "#b8b8b8" }} />: <span></span>}
          </ListItem>

          <Collapse in={sharedMenuOpen} timeout="auto" unmountOnExit>
            <List component="div" >
              <ListItem button className={classes.menuItem}>
                <LocalOfferOutlinedIcon style={{ color: "#b8b8b8" }} />
                <ListItemText primary="Postman" className={classes.menuText} />
                <span style={{ color: "#b8b8b8" }}>2</span>
              </ListItem>

            </List>
          </Collapse>

          {/* Shared Menu */}
          <ListItem button onClick={handleFilterMenuClick} className={classes.marginTop20}>
            <ListItemIcon >  {filterMenuOpen ? <KeyboardArrowDownIcon /> : <ChevronRightIcon />} </ListItemIcon>
            <ListItemText primary="Filter" />
            {filterMenuOpen ?<AddIcon style={{ color: "#b8b8b8" }} />: <span></span>}
          </ListItem>

          <Collapse in={filterMenuOpen} timeout="auto" unmountOnExit>
            <List component="div" >
              <ListItem button className={classes.menuItem}>
                <OpacityIcon style={{ color: "#b8b8b8" }} />
                <ListItemText primary="Assigned to me" className={classes.menuText} />
                <span style={{ color: "#b8b8b8" }}></span>
              </ListItem>
              <ListItem button className={classes.menuItem}>
                <OpacityIcon style={{ color: "#b8b8b8" }} />
                <ListItemText primary="Priority 1" className={classes.menuText} />
                <span style={{ color: "#b8b8b8" }}></span>
              </ListItem>
            </List>
          </Collapse>

        </List>

      </Drawer>
      {renderMobileMenu}
      {renderMenu}

    </div>
  );
}
