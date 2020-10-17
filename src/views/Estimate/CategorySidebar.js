import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GroupModal from './Categories/GroupModal';
import PaverModal from './Categories/PaverModal';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div className="side-modal-bar">
            <ul>
                <li>
                    <GroupModal />
                </li>
                <li>
                    <GroupModal />
                </li>
                <li>
                    <GroupModal />
                </li>
                <li>
                    <GroupModal />
                </li>
                <li>
                    <GroupModal />
                </li>
                <li>
                    <GroupModal />
                </li>
            </ul>
        </div>
    );
}
