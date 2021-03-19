import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #242d38',

    width: 200,
    height: 110,
    backgroundColor: "#efd592",
    marginTop: -60,
    marginLeft: -120,
    '@media (max-width: 620px)': {
      width: 180,
      height: 100
    }
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: "#242d38",
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
    lineHeight: 20,

    '@media (max-width: 620px)': {
      lineHeight: 25,
      minHeight: 30
    },
  },
}))(MenuItem);

const StyledButton = withStyles((theme) => ({
  root: {
    background: '#242d38',
    border: 0,
    borderRadius: 50,
    marginTop: 20,
    marginRight: 20,
    width: 75,
    height: 75,
    float: 'right',

    '@media (max-width: 620px)': {
      width: 55,
      height: 55,
      border: '1px solid #efd592'
    }
  },
})
)(Button);

const StyledMenuIcon = withStyles((theme) => ({
  root: {
    fontSize: 48, 
    fontWeight: 500,
    color: '#efd592',
    '@media (max-width: 620px)': {
      fontSize: 38, 
      fontWeight: 500,
      }
  },
})
)(MenuIcon);

export default function HamBurgerMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <StyledButton>
      <Button
        onClick={handleClick}
      >
        <StyledMenuIcon>
        <MenuIcon />
        </StyledMenuIcon>
      </Button>
      </StyledButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemText primary="Morella" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Morella" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
