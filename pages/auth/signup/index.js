import { Formik } from 'formik'

import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography
} from '@material-ui/core'

import TemplateDefault from '../../../src/templates/Default' 
import useStyles from './styles'
import { initialValues, validationSchema } from './formValues'

const Signup = () => {
  const classes = useStyles()

  return(
    <TemplateDefault>
      <Container maxWidth="sm"> 
        <Typography component="h1" variant="h2" align="center" color="textPrimary">
          Crie sua conta
        </Typography>
        <Typography component="h5" variant="h5" align="center" color="textPrimary">
          E anuncie para todo o Brasil!
        </Typography>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log('ok, form enviado', values)
            }}
          >
            {
              ({
                touched,
                values,
                errors,
                handleChange,
                handleSubmit
              }) => {
                return(
                  <form onSubmit={handleSubmit}>
                    <FormControl error={errors.name && touched.name} fullWidth className={classes.formControl}>
                      <InputLabel className={classes.inputLabel}>Nome</InputLabel>
                      <Input
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        />
                      <FormHelperText>
                        { errors.name && touched.name ? errors.name : null}
                      </FormHelperText>
                    </FormControl> 

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

                    <FormControl error={errors.passwordConf && touched.passwordConf } fullWidth className={classes.formControl}>
                      <InputLabel className={classes.inputLabel}>Confirmação de senha</InputLabel>
                      <Input
                        name="passwordConf"
                        type="password"
                        value={values.passwordConf}
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        { errors.passwordConf && touched.passwordConf ? errors.passwordConf : null }
                      </FormHelperText>
                    </FormControl> 
                   
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                   
                    >
                      Cadastrar
                    </Button>

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

export default Signup