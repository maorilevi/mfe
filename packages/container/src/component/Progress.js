import React from 'react';
import { createStyles, makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const usStyles = makeStyles((theme) => {
    return createStyles({
        bar: {
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2)
            }
        }
    });
});
export default () => {
    const classes = usStyles();

    return (<div className={classes.bar}>
        <LinearProgress/>
    </div>);
}
