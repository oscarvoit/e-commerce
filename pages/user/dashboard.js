import {
  Button,
  Container,
  Grid,
  Typography,
} from '@material-ui/core'

import { getSession } from 'next-auth/react'
import { makeStyles } from '@material-ui/core/styles'

import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/components/Card'
import ProductsModel from '../../src/models/products'
import dbConnect from '../../src/utils/dbConnect'

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    paddingTop: '56%',
  },
  buttonAdd: {
    margin: '30px auto',
    display: 'block',
  }
}))

const Home = ({ products }) => {
  const classes = useStyles()

  console.log(products)

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
          {
            products.map(product => (
              <Grid key={product._id} item xs={12} sm={6} md={4}>
                <Card
                  image={`/uploads/${product.files[0].name}`}
                  title={product.title}
                  subtitle={product.price}
                  actions={
                    <>
                      <Button size="small" color="primary">Editar</Button>
                      <Button size="small" color="primary">Remover</Button>
                    </>
                  }
                />
              </Grid>

            ))
            
          }
          
        </Grid>
      </Container>
    </TemplateDefault>
  )
}

Home.requireAuth = true

export async function getServerSideProps({ req }) {
  const session = await getSession({ req })
  await dbConnect()

  const products = await ProductsModel.find({ 'user.id': session.userId })

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    }
  }
}

export default Home