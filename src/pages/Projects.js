import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

// IMAGES CHATIE
import Login from 'D:/KYH PLUGG/Folders/nyportfolio/src/images/cvPics/chatie/login.png';
import Chatie from 'D:/KYH PLUGG/Folders/nyportfolio/src/images/cvPics/chatie/chatiebild.png';

// IMAGES MERN
import HomeLanding from 'D:/KYH PLUGG/Folders/nyportfolio/src/images/cvPics/mern/homepage.png';
import ViewProduct from 'D:/KYH PLUGG/Folders/nyportfolio/src/images/cvPics/mern/view.png';
import CreateProduct from 'D:/KYH PLUGG/Folders/nyportfolio/src/images/cvPics/mern/create.png';
import AdminView from 'D:/KYH PLUGG/Folders/nyportfolio/src/images/cvPics/mern/admin.png';

//IMAGES SENSEMA
import SensemaLanding from 'D:/KYH PLUGG/Folders/nyportfolio/src/images/cvPics/sensema/landing.png';
import SensemaSlide from 'D:/KYH PLUGG/Folders/nyportfolio/src/images/cvPics/sensema/slidedown.png';
import SensemaProducts from 'D:/KYH PLUGG/Folders/nyportfolio/src/images/cvPics/sensema/products.png';
import SensemaDetail from 'D:/KYH PLUGG/Folders/nyportfolio/src/images/cvPics/sensema/productdetail.png';

import './Projects.css';

const useStyles = makeStyles({
  root: {
    maxWidth: "280px",
    maxHeight: "370px",
    minHeight: "370px",
  },
});

const useStylesModal = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflowY: "scroll",
    maxHeight: "80%",
    width: "80%",
  },
}));

export default function Projects() {
  const classes = useStyles();
  const modalClasses = useStylesModal();

  // MODAL
  const [open1, setOpen1] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);

  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleOpen3 = () => {
    setOpen3(true);
  };

  const handleOpen4 = () => {
    setOpen4(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const handleClose4 = () => {
    setOpen4(false);
  };

  return (
    <div style={{display: "flex", flexDirection: "row", marginTop: "120px"}}>
      <div style={{margin: "20px"}} className="cardHover">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Sensema"
                height="140"
                image={HomeLanding}
                title="Sensema"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Latour<br></br> (Ecommerce)
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={{minHeight: "100px", maxHeight: "100px"}}>
                  Ecommerce website. <br></br>
                  React, Javascript, Node.js, Express and MongoDB
                </Typography>
                <div>
                  <p onClick={handleOpen1} style={{borderTop: "1px solid lightgray", backgroundColor: "transperant", textAlign: "center", paddingTop: "5px",}}>
                    See more
                  </p>
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={modalClasses.modal}
                    open={open1}
                    onClose={handleClose1}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={open1}>
                      <div className={modalClasses.paper}>
                        <h2 id="transition-modal-title">Ecommerce website</h2>
                        <p id="transition-modal-description">This is a fullstack project made with MERN (MongoDB, Express, React and Node)</p>
                        <p>
                          This project let the user/owner of the website to create, update and remove products. There are two logins, aither customer or admin. <br></br>
                          If a user is a customer, they will only be able to view the products, buy the products (Paypal-test-mode), see history of rings that they`ve bought. <br></br>
                          If a user is admin, they will be able to update, create and delete products.
                        </p>
                          <div style={{display:"flex", flexDirection: "column", justifyContent: "center"}}>
                            <img src={HomeLanding} alt="login" style={{marginBottom: "10px"}}></img>
                            <img src={ViewProduct} alt="product" style={{marginBottom: "10px"}}></img>
                            <img src={CreateProduct} alt="create" style={{marginBottom: "10px"}}></img>
                            <img src={AdminView} alt="admin" style={{marginBottom: "10px"}}></img>
                          </div>
                          {/* <a href="https://github.com/ClaesPhilip" target="_blank" rel="noreferrer noopener">Github</a> */}
                      </div>
                    </Fade>
                  </Modal>
                </div>
              </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
      </div>

      <div style={{margin: "20px"}} className="cardHover">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="chatie"
                height="140"
                image={Chatie}
                title="Sensema"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Chatie <br></br> (Chat app)
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={{minHeight: "100px", maxHeight: "100px"}}>
                  Chat with friends. Fun litte project <br></br>
                  React, Javascript, SemanticUI, CSS
                </Typography>
                <div>
                  <p onClick={handleOpen3} style={{borderTop: "1px solid lightgray", backgroundColor: "transperant", textAlign: "center", paddingTop: "5px",}}>
                    See more
                  </p>
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={modalClasses.modal}
                    open={open3}
                    onClose={handleClose3}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={open3}>
                      <div className={modalClasses.paper}>
                        <h2 id="transition-modal-title">Chatie</h2>
                        <p id="transition-modal-description">
                          Not the best styling, but that was`nt the goal. <br></br>
                          In this project im using React, Javascript, SemanticUI and Firebase as my database and storage. <br></br>
                          The functionalities that iv`e implemented are:
                        </p>
                          <ul>
                            <li>register/login</li>
                            <li>create channels</li>
                            <li>see which of you`re friends that are online</li>
                            <li>send messages</li>
                            <li>recieve messages</li>
                            <li>notifications</li>
                            <li>favourite channels</li>
                            <li>upload/send images</li>
                          </ul>
                          {/* register/login, create channels, see which of you`re friends that are online, <br></br> 
                          send messages, recieve messages, notifications, favourite channels, and upload/send images.  */}
                          <div style={{display:"flex", flexDirection: "column", justifyContent: "center"}}>
                            <img src={Login} alt="hej"></img>
                            <img src={Chatie} alt="hej"></img>
                          </div>
                          {/* <a href="https://github.com/ClaesPhilip" target="_blank" rel="noreferrer noopener">Github</a> */}
                      </div>
                    </Fade>
                  </Modal>
                </div>
              </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
      </div>

      <div style={{margin: "20px"}} className="cardHover">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={SensemaLanding}
                title="Contemplative Reptile"
                style={{width: "auto", marginLeft: "15px"}}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Sensema Jewelry <br></br> (My own company)
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={{minHeight: "100px", maxHeight: "100px"}}>
                  Ecommerce website where im selling jewelry. <br></br>
                  Made with shopify.
                </Typography>
                <div>
                  <p onClick={handleOpen4} style={{borderTop: "1px solid lightgray", backgroundColor: "transperant", textAlign: "center", paddingTop: "5px",}}>
                    See more
                  </p>
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={modalClasses.modal}
                    open={open4}
                    onClose={handleClose4}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={open4}>
                      <div className={modalClasses.paper}>
                        <h2 id="transition-modal-title">Sensema - Shopify website</h2>
                        <p id="transition-modal-description">I did this project for my own company, Sensema. Me and my girlfriend are running a jewelry company there we sell rings</p>
                          <div style={{display:"flex", flexDirection: "column", justifyContent: "center"}}>
                            <img src={SensemaLanding} alt="SensemaLanding" style={{marginBottom: "10px"}}></img>
                            <img src={SensemaSlide} alt="SensemaSlide" style={{marginBottom: "10px"}}></img>
                            <img src={SensemaProducts} alt="SensemaProducts" style={{marginBottom: "10px"}}></img>
                            <img src={SensemaDetail} alt="SensemaDetail" style={{marginBottom: "10px"}}></img>
                          </div>
                      </div>
                    </Fade>
                  </Modal>
                </div>
              </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
      </div>
    </div>
  );
}
