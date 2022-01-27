import {
  Avatar,
  Box,
  Card,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,
  Chip,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Carousel from 'react-material-ui-carousel'

import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3) 
  },
  productName: {
    margin: '15px 0',
  },
  price: {
    fontWeight: "bold",
    marginBottom: 15,
  },
  card: {
    height: '100%'
  },
  cardMedia: {
    paddingTop: '56%',
  }
}))

const Product = () => {
  const classes = useStyles()
  return(
    <TemplateDefault>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Box className={classes.box}>
              <Carousel
                autoPlay={false}
                animation="slide"
                navButtonsAlwaysVisible={true}
                navButtonsProps={{
                  style: {
                    color: 'white',
                  }
                }}
              >
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random?a=1"
                    title="título da imagem"
                  />
                </Card>

                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random?a=2"
                    title="título da imagem"
                  />
                </Card>
              </Carousel>
            </Box>

            <Box className={classes.box} textAlign="left">
              <Typography component="span" variant="caption">Publicado 26 de janeiro de 2022</Typography>
              <Typography component="h4" variant="h4" className={classes.productName}>Garrafa de vidro</Typography>
              <Typography component="h4" variant="h4" className={classes.price}>R$ 10,00</Typography>
              <Chip label="Categoria" />
            </Box>

             <Box className={classes.box} textAlign="left">
              <Typography component="h6" variant="h6">Descrição</Typography>
              <Typography component="p" variant="body2">
              Lorem ipsum dolor sit amet consectetur adipiscing elit orci ut, mauris fames dui accumsan aliquet fusce posuere metus eros, tempor morbi finibus egestas inceptos id semper ultricies. Tortor nunc pharetra commodo nam id pretium phasellus at fames ac, arcu sed duis maximus sapien dis vel potenti aenean adipiscing congue, scelerisque odio habitasse tempus gravida erat netus torquent posuere. Duis metus tincidunt facilisi tortor montes dis porttitor himenaeos maecenas vivamus pulvinar eros eget litora, lacinia hendrerit orci blandit purus malesuada pharetra ullamcorper lectus nibh dictumst conubia vehicula. Fusce dui accumsan ultricies habitant enim faucibus, scelerisque eros sociosqu consequat rhoncus, etiam adipiscing ante maecenas montes. Donec mollis diam dictumst suspendisse habitasse erat arcu, dignissim malesuada orci justo facilisis tortor maecenas, potenti nulla odio vitae sit varius, feugiat facilisi elementum parturient risus sollicitudin. Condimentum mollis id eget magna libero faucibus ac urna ut iaculis pretium tincidunt orci, phasellus purus ullamcorper tortor odio non integer nibh pharetra ornare natoque. Vivamus conubia aptent est sollicitudin dui nisl facilisis nibh, nullam gravida mattis magna morbi tempor penatibus, dictum ultrices aliquet praesent nam quam dignissim. Dolor dictum ridiculus dis eu dui ad potenti euismod dictumst orci, a et convallis elementum sit egestas integer imperdiet duis conubia viverra, pulvinar sodales venenatis vestibulum volutpat class magna placerat in. Etiam sit erat lectus risus mauris dui mattis molestie adipiscing porta, per aptent montes praesent placerat vestibulum mi lorem maecenas taciti sapien, ridiculus sociosqu vehicula viverra massa in vulputate venenatis arcu. Pharetra ad massa sollicitudin amet facilisis vivamus imperdiet nulla, nibh malesuada non fusce quisque felis penatibus, placerat ridiculus aliquam accumsan fermentum at laoreet.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.box}>
              <CardHeader
                avatar={
                  <Avatar>O</Avatar>
                }
                title="Oscar Voit"
                subheader="oscarvoit@gmail.com"
              />
              <CardMedia
                image="https://source.unsplash.com/random"
                title="Oscar Voit"
              />
            </Card>
            <Box className={classes.box}>
              <Typography component="h6" variant="h6">Localização</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>

  )
}

export default Product