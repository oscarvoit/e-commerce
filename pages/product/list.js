import {
  Box,
  Container,
  IconButton,
  InputBase,
  Paper,
  Typography,
  Grid,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { makeStyles } from '@material-ui/core/styles'

import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/components/Card'

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3) 
  },
  searchBox: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(0, 2),
    marginTop: 20,
    marginBottom: 20,
  },  
}))

const List = () => {
  const classes = useStyles()
  return(
    <TemplateDefault>
      <Container mxWidth="md">

        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <Paper className={classes.searchBox}>
              <InputBase
                placeholder="Ex.: Bicicleta Caloi 10"
                fullWidth
                />
              <IconButton>
                <SearchIcon></SearchIcon>
              </IconButton>
            </Paper>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <Box className={classes.box} textAlign="left">
            <Typography component="h6" variant="h6">Anúncios</Typography>
            <Typography component="h6" variant="overline">
              Encontrados 100 anúncios
            </Typography>
            <br />
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  image={'https://source.unsplash.com/random'}
                  title="Produto Y"
                  subtitle="R$ 60,00"
                  />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
              <Card
                  image={'https://source.unsplash.com/random'}
                  title="Produto Y"
                  subtitle="R$ 60,00"
                  />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
              <Card
                  image={'https://source.unsplash.com/random'}
                  title="Produto Y"
                  subtitle="R$ 60,00"
                  />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        
      </Container>
    </TemplateDefault>
  )
}

export default List