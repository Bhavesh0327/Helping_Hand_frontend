import React from 'react'
import Paper from '@material-ui/core/Paper'
import classes from './style.module.scss'

export const Body = props => {
    return (
        <Paper classes={{rounded: classes.root}} elevation={5}>
            <img className={classes.svg} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzI1IiBoZWlnaHQ9Ijk5MCIgdmlld0JveD0iMCAwIDcyNSA5OTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjY2My45NzMiIHk9Ii00NTQiIHdpZHRoPSIxMjcwLjAzIiBoZWlnaHQ9IjkzOSIgcng9IjE1IiB0cmFuc2Zvcm09InJvdGF0ZSg0NSA2NjMuOTczIC00NTQpIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSI2NjMuOTczIiB5MT0iLTQ1NCIgeDI9IjE1NTkuNjMiIHkyPSI3NTcuNDEyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM2QTk4RjAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNDk2MURDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==" alt=""></img>
            {props.children}
        </Paper>
    )
}
