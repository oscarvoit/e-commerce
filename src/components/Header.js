import React, { useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'

import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  Button, 
  IconButton,
  Container,
  Avatar,
  MenuItem,
  Divider,
  Menu,
} from '@material-ui/core'
import { AccountCircle, MenuIcon } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  headButton: {
    marginRight: 10,
  },
  userName: {
    marginLeft: 8,
  },
  divider: {
    margin: '8px 0'
  }
}))

export default function ButtonAppBar() {
  const classes = useStyles()
  const [anchorUserMenu, setAnchorUserMenu] = useState(false)
  const { data: session, status } = useSession()
  const openUserMenu = Boolean(anchorUserMenu)

  return (
    <>
      <AppBar position="static" elevation={3}>
        <Container maxWidth="lg">
          <Toolbar>
            <Link href="/" passHref>
              <Typography variant="h6" component="div" className={classes.title}>
                E-Commerce
              </Typography>
            </Link>
            <Link href={session ? '/user/publish' : '/auth/signin'} passHref>
              <Button color="inherit" variant="outlined" className={classes.headButton}>
                Anunciar e Vender
              </Button>
            </Link>
            {
              session
                ? (
                  <IconButton color="secondary" onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
                    {
                      session.user.image
                        ? <Avatar src={session.user.image} />
                        : <AccountCircle />
                    }
                    <Typography className={classes.userName} variant="subtitle2" color="secondary">
                      {session.user.name}
                    </Typography>
                  </IconButton>
                ) : null
            }
            
            <Menu
              anchorEl={anchorUserMenu}
              open={openUserMenu}
              onClose={() => setAnchorUserMenu(null)}
              anchorOrigin={{
                vertical: 'bottom',
              }}
            >
              <Link href="/user/dashboard" passHref>
                <MenuItem>Meus Anúncios</MenuItem>
              </Link>
              <Link href="/user/publish" passHref>
                <MenuItem>Publicar novo anúncio</MenuItem>
              </Link>
              <Divider className={classes.divider} />
              <MenuItem onClick={() => signOut({
                callbackUrl: '/'
              })}>Sair</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
