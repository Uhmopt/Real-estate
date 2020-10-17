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
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';

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
    const classes = useStyles();

    return (
        <div className="side-modal-bar">
            <div className={ isSide ? "side-bar-body" : "side-bar-body hidden-side"}>
                <div className="toggle-icon">
                            <Button variant="contained" color="success" component="span" size="sm" onClick={e => setSide(!isSide)}>
                                <DragIndicatorIcon />
                            </Button>
                        </div>
                        <ul>
                            <li>
                                <GroupModal />
                            </li>
                            <li>
                                <PaverModal />
                            </li>
                            <li>
                                <SegmentalModal />
                            </li>
                            <li>
                                <NaturalStoneModal />
                            </li>
                            <li>
                                <EdgeStoneModal />
                            </li>
                            <li>
                                <CinderBlockModal />
                            </li>
                            <li>
                                <LightsModal />
                            </li>
                            <li>
                                <MaterialsModal />
                            </li>
                            <li>
                                <FireplaceModal />
                            </li>
                        </ul>
                    </div>
                </div>
            );
}
