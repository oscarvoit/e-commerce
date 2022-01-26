import { Box, Container, Grid, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import Link from "next/link"

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(6),
    marginTop: theme.spacing(8),
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing(6),
      paddingTop: theme.spacing(6),
    }
  }
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <Container maxWidth="lg" componente="footer" className={classes.footer}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Box textAlign="center">
            <Link href="#" passHref>
              <Typography color="textSecondary" variant="subtitle1">
                Ajuda e Contato
              </Typography>
            </Link>
          </Box>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Box textAlign="center">
            <Link href="#" passHref>
              <Typography color="textSecondary" variant="subtitle1">
                Dicas de segurança
              </Typography>
            </Link>
          </Box>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Box textAlign="center">
            <Link href="#" passHref>
              <Typography color="textSecondary" variant="subtitle1">
                Anunciar e Vender
              </Typography>
            </Link>
          </Box>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Box textAlign="center">
          </Box>
            <Link href="#" passHref>
              <Typography color="textSecondary" variant="subtitle1">
                Plano Profissional
              </Typography>
            </Link>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Footer