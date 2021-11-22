import { AppBar, Button, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <AppBar>
            <Toolbar sx={{ alignItems: 'stretch' }}>
                <Button color="inherit" component={Link} sx={{ px: 4 }} to="/">
                    Home
                </Button>
            </Toolbar>
        </AppBar>
    )
}
