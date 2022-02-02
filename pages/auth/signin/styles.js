import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    paddingBottom: theme.spacing(3),
    marginTop: theme.spacing(3), 
  },
  box: {
    background: theme.palette.background.white,
    padding: theme.spacing(3),
  },
  inputLabel: {
    fontWeight: 400,
    color: theme.palette.primary.main,
  },
  formControl: {
    marginBottom: theme.spacing(1),
  },
  submit: {
    marginTop: theme.spacing(3),
  },
  loading: {
    display: 'block',
    margin: '10px auto',
  },
  errorMessage: {
    margin: '20px 0',
  },
  orSeparator: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8e8e8',
    widht: '100%',
    height: 1,
    margin: theme.spacing(7, 0, 4),

      '& span': {
        backgroundColor: '#FFFFFF',
        padding: '0 30px',
      }
  }
}))

export default useStyles