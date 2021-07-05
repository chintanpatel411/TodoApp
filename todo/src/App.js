import React from 'react'
import DrawerMenu from './components/menu'
import Divider from '@material-ui/core/Divider';
import clsx from 'clsx';
import AppStyle from './style/app-style';
import { Grid } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import LibraryBooksSharpIcon from '@material-ui/icons/LibraryBooksSharp';
import InboxSharpIcon from '@material-ui/icons/InboxSharp';
import PersonIcon from '@material-ui/icons/Person';

export default function App() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const classes = AppStyle();
  return (
    <div className={clsx(classes.root, { [classes.mainShiftContent]: open })} >

      <DrawerMenu open={open} handleDrawerClose={handleDrawerClose} handleDrawerOpen={handleDrawerOpen} />

      <main
        className={clsx(classes.content)}
      >
        <div className={classes.drawerHeader} />
        <div style={{ marginLeft: "20%", marginRight: "20%" }}>

          <Grid container direction="row" justify="space-between" alignItems="center" >
            <Grid item>
              <span style={{ fontSize: "20px" }}><b>Today</b></span>
              <span style={{ fontSize: "12px", marginLeft: "5px" }}>Sun 12 Jun</span>
            </Grid>
            <Grid item>
              <span><svg width="24" height="20"><path fill="currentColor" d="M16.854 5.146l3 3a.502.502 0 01-.708.708L17 6.707V18.5a.5.5 0 01-1 0V6.707l-2.146 2.147a.502.502 0 01-.708-.708l3-3a.502.502 0 01.708 0zM7.5 5a.5.5 0 01.5.5v11.791l2.146-2.145a.502.502 0 01.708.708l-3 3a.502.502 0 01-.708 0l-3-3a.502.502 0 01.708-.708L7 17.293V5.5a.5.5 0 01.5-.5z"></path></svg></span>
              <span style={{ fontSize: "12px" }}>  Sort</span>
            </Grid>
          </Grid>
          <Grid container direction="row" justify="space-between" alignItems="center" style={{ marginTop: "35px" }} >
            <Grid item>
              <span style={{ fontSize: "14px" }}><b>Overdue</b></span>
            </Grid>
            <Grid item>  <span style={{ fontSize: "14px", color: "#d1453b" }}>  Reschedule</span>
            </Grid>
          </Grid>
          <Divider />
          <Grid container direction="row" justify="start" alignItems="center" style={{ marginTop: "5px" }} >
            <Grid item xs={1} >
              <Checkbox
                icon={<CircleUnchecked />}
                checkedIcon={<CircleChecked />}
                text
              />
            </Grid>
            <Grid item xs={9} style={{ textAlign: "left" }}>
              <h4>Task A</h4>
              <LibraryBooksSharpIcon style={{ fontSize: "15px", color: "#d1453b" }} /> <span style={{ fontSize: "17px", color: "#d1453b" }}>10 Jun</span>
            </Grid>
            <Grid item xs={2} style={{ textAlign: "right" }}>
              <h4> &nbsp;</h4>          
              <span style={{ fontSize: "15px"}}>Inbox</span> &nbsp;
              <InboxSharpIcon style={{ fontSize: "15px", color: "#6f98e4" }} />             
            </Grid>
          </Grid>
          <Divider />
          <Grid container direction="row" justify="start" alignItems="center" style={{ marginTop: "5px" }} >
            <Grid item xs={1} >
              <Checkbox
                icon={<CircleUnchecked />}
                checkedIcon={<CircleChecked />}
                text
              />
            </Grid>
            <Grid item xs={9} style={{ textAlign: "left" }}>
              <h4>Kaam No 1</h4>
              <LibraryBooksSharpIcon style={{ fontSize: "15px", color: "#d1453b" }} /> <span style={{ fontSize: "17px", color: "#d1453b" }}>10 Jun</span>
              <span style={{ fontSize: "14px", color: "#6f98e4",marginLeft:"5px" }}>asd</span>
            </Grid>
            <Grid item xs={2} style={{ textAlign: "right" }}>
              <h4> &nbsp;</h4>          
              <span style={{ fontSize: "15px"}}>Trail A / apple</span> &nbsp;
              <PersonIcon style={{ fontSize: "15px", color: "#83cabc" }} />             
            </Grid>
          </Grid>


        </div>

        {/* <Typography  className={classes.customFont}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
      </main>
    </div>
  )

}
