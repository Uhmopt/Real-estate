import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GroupModal from './Categories/GroupModal';
import PaverModal from './Categories/PaverModal';
import SegmentalModal from './Categories/SegmentalModal';
import NaturalStoneModal from './Categories/NaturalStoneModal';
import EdgeStoneModal from './Categories/EdgeStoneModal';
import CinderBlockModal from './Categories/CinderBlockModal';
import LightsModal from './Categories/LightsModal';
import MaterialsModal from './Categories/MaterialsModal';
import FireplaceModal from './Categories/FireplaceModal';
import Button from "components/CustomButtons/Button.js";
import IconButton from '@material-ui/core/IconButton';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import CloseIcon from '@material-ui/icons/Close';

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

    const [isSide, setSide] = useState(false);
    const { innerWidth: width, innerHeight: height } = window;
    const classes = useStyles();

    return (
        <div>
            <div className={isSide ? "side-overlay" : "side-overlay hidden"} onClick={e => setSide(false)}></div>
            <div className={isSide ? "side-modal-bar" : "side-modal-bar hidden-side"}>
                <div className="side-bar-body">
                    {( width < 767.95) ? (
                        <div className={isSide ? "toggle-icon hidden" : "toggle-icon"}>
                            <Button variant="contained" color="success" component="span" size="sm" onClick={e => setSide(!isSide)}>
                                <DragIndicatorIcon />
                            </Button>
                        </div>
                    ) : (
                            <div className="toggle-icon">
                                <Button variant="contained" color="success" component="span" size="sm" onClick={e => setSide(!isSide)}>
                                    <DragIndicatorIcon />
                                </Button>
                            </div>
                        )
                    }
                    <ul>
                        <li className="mobile-close-side">
                            <IconButton onClick={e => setSide(!isSide)}>
                                <CloseIcon />
                            </IconButton>
                        </li>
                        <li onClick={e => setSide(false)}>
                            <GroupModal/>
                        </li>
                        <li onClick={e => setSide(false)}>
                            <PaverModal/>
                        </li>
                        <li onClick={e => setSide(false)}>
                            <SegmentalModal/>
                        </li>
                        <li onClick={e => setSide(false)}>
                            <NaturalStoneModal/>
                        </li>
                        <li onClick={e => setSide(false)}>
                            <EdgeStoneModal/>
                        </li>
                        <li onClick={e => setSide(false)}>
                            <CinderBlockModal/>
                        </li>
                        <li onClick={e => setSide(false)}>
                            <LightsModal/>
                        </li>
                        <li onClick={e => setSide(false)}>
                            <MaterialsModal/>
                        </li>
                        <li onClick={e => setSide(false)}>
                            <FireplaceModal/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}
