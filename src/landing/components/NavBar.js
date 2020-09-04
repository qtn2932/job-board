import React, { Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  authButton: {
    fontWeight: 'bold'
  }
}))
const NavBar = () => {
  const [openMenu, setMenuOpen] = React.useState(null)
  const handleMenuClick = (event) => {
    setMenuOpen(event.currentTarget)
  }
  const handleCloseMenu = () => {
    setMenuOpen(null)
  }
  const classes = useStyles()
  return (
    <Fragment className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu' onClick={handleMenuClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            id='menu'
            anchorEl={openMenu}
            keepMounted
            open={Boolean(openMenu)}
            onClose={handleCloseMenu}
          >
            <MenuItem onClick={handleCloseMenu}>Home</MenuItem>
            <MenuItem onClick={handleCloseMenu}>About</MenuItem>
            <MenuItem onClick={handleCloseMenu}>Contact</MenuItem>
          </Menu>
          <Typography variant='h6' className={classes.title}>
                    Job Board
          </Typography>
          <Button color='inherit' className={classes.authButton}>Login/SignUp</Button>
        </Toolbar>
      </AppBar>
    </Fragment>
  )
}

export default NavBar
