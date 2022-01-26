import {
  Button,
  Container,
  Grid,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/components/Card'

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    paddingTop: '56%',
  },
  buttonAdd: {
    margin: '30px auto',
    display: 'block',
  }
}))

export default function Home() {
  const classes = useStyles()
  return (
    <TemplateDefault>
      <Container maxWidth="sm">
        <Typography component="h1" align="center" variant="h2">
          Meus Anúncios
        </Typography>
        <Button variant="contained" color="primary" className={classes.buttonAdd}>Publicar novo anúncio</Button>
      </Container>
      <Container maxWidth="md">
        <Grid container spacing="4">
          <Grid item xs={12} sm={6} md={4}>
            <Card
              image={'https://source.unsplash.com/random'}
              title="Produto Y"
              subtitle="R$ 60,00"
              actions={
                <>
                  <Button size="small" color="primary">Editar</Button>
                  <Button size="small" color="primary">Remover</Button>
                </>
              }
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
          <Card
              image={'https://source.unsplash.com/random'}
              title="Produto Y"
              subtitle="R$ 60,00"
              actions={
                <>
                  <Button size="small" color="primary">Editar</Button>
                  <Button size="small" color="primary">Remover</Button>
                </>
              }
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
          <Card
              image={'https://source.unsplash.com/random'}
              title="Produto Y"
              subtitle="R$ 60,00"
              actions={
                <>
                  <Button size="small" color="primary">Editar</Button>
                  <Button size="small" color="primary">Remover</Button>
                </>
              }
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
          <Card
              image={'https://source.unsplash.com/random'}
              title="Produto Y"
              subtitle="R$ 60,00"
              actions={
                <>
                  <Button size="small" color="primary">Editar</Button>
                  <Button size="small" color="primary">Remover</Button>
                </>
              }
            />
          </Grid>
          
        </Grid>
      </Container>
    </TemplateDefault>
  )
}
