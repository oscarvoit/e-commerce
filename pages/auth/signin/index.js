import Image from 'next/image'
import { Formik } from 'formik'
import axios from 'axios'
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/react'

import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
  CircularProgress,
} from '@material-ui/core'

import TemplateDefault from '../../../src/templates/Default' 
import useToasty from '../../../src/contexts/Toasty'
import useStyles from './styles'
import { initialValues, validationSchema } from './formValues'
import { Alert } from '@material-ui/lab'

const Signin = ({ APP_URL }) => {
  const classes = useStyles()
  const router = useRouter()
  const { setToasty } = useToasty()
  const { data: session, status } = useSession()

  console.log(session, status, router.query.i)

  const handleFormSubmit = async values => {
    signIn('credentials', {
      email: values.email,
      password: values.password,
      callbackUrl: `${APP_URL}/user/dashboard`,
    })
  }

  const handleGoogleLogin = () => {
    signIn('google', {
      callbackUrl: `${APP_URL}/user/dashboard`,
    })
  }

  return(
    <TemplateDefault>
      <Container maxWidth="sm"> 
        <Typography component="h1" variant="h2" align="center" color="textPrimary">
          Entre na sua conta
        </Typography>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}>

          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              startIcon={
                <Image 
                  src="/images/logo_google.svg"
                  width={20}
                  height={20}
                  alt="Login com Google"
                />
              }
              onClick={handleGoogleLogin}
            >
              Entrar com Google
            </Button>
          </Box> 

          <Box className={classes.orSeparator}>
            <span>ou</span>
          </Box>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleFormSubmit}
          >
            {
              ({
                touched,
                values,
                errors,
                handleChange,
                handleSubmit,
                isSubmitting,
              }) => {
                return(
                  <form onSubmit={handleSubmit}>
                    {
                      router.query.i === '1'
                        ? (
                          <Alert severity="error" className={classes.errorMessage}>
                            Usuário ou senha inválidos
                          </Alert>
                        )
                        : null
                    }
        
                    <FormControl error={errors.email && touched.email} fullWidth className={classes.formControl}>
                      <InputLabel className={classes.inputLabel}>E-mail</InputLabel>
                      <Input
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        />
                      <FormHelperText>
                        { errors.email && touched.email ? errors.email : null }
                      </FormHelperText>
                    </FormControl> 

                    <FormControl error={errors.password && touched.password} fullWidth className={classes.formControl}>
                      <InputLabel className={classes.inputLabel}>Senha</InputLabel>
                      <Input
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        />
                      <FormHelperText>
                        { errors.password && touched.password ? errors.password : null }
                      </FormHelperText>
                    </FormControl> 
                   
                    {
                      isSubmitting
                        ? (
                          <CircularProgress className={classes.loading}/>
                        )
                        : (
                          <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                          className={classes.submit}
                       
                          >
                            Entrar
                          </Button>
                          )
                    }
                
                  </form>
                )
              }
            }

          </Formik>
        </Box>
      </Container>
    </TemplateDefault>
  )
}

export const getServerSideProps = async function () {
  return {
    props: {
      APP_URL: process.env.APP_URL
    }
  }
}

export default Signin