import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
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

import img from 'assets/img/categories/group.svg';

export default function SimpleCard() {

    const dispatch = useDispatch();
    const groupsData = useSelector(state => state.group.groupData);
    const { innerWidth: width } = window;
    const phoneMaxwidth = 767.95;
    const isMobile = width < phoneMaxwidth ? true : false;
    const [isSide, setSide] = useState(width < phoneMaxwidth ? false : true);

    return (
        <div>
            <div className={isSide ? "side-overlay" : "side-overlay hidden"} onClick={e => setSide(false)}></div>
            <div className={isSide ? "side-modal-bar" : "side-modal-bar hidden-side"}>
                <div className="side-bar-body">
                    {(isMobile) ? (
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
                    {(isMobile) ? (

                        <ul>
                            <li className="mobile-close-side">
                                <IconButton onClick={e => setSide(!isSide)}>
                                    <CloseIcon />
                                </IconButton>
                            </li>
                            <li onClick={e => setSide(false)}>
                                <div className="modal-c-button"
                                    onClick={() => dispatch({
                                        type: "UPDATE_GROUP_DATA", payload: [...groupsData, { "name": "Group", "optional": false, "total": 0, "products": [] }]
                                    })}>
                                    <img src={img} alt="" className="cat-img" />
                                    <h5>
                                        NEW Group
                                    </h5>
                                </div>
                            </li>
                            <li onClick={e => setSide(false)}>
                                <PaverModal />
                            </li>
                            <li onClick={e => setSide(false)}>
                                <SegmentalModal />
                            </li>
                            <li onClick={e => setSide(false)}>
                                <NaturalStoneModal />
                            </li>
                            <li onClick={e => setSide(false)}>
                                <EdgeStoneModal />
                            </li>
                            <li onClick={e => setSide(false)}>
                                <CinderBlockModal />
                            </li>
                            <li onClick={e => setSide(false)}>
                                <LightsModal />
                            </li>
                            <li onClick={e => setSide(false)}>
                                <MaterialsModal />
                            </li>
                            <li onClick={e => setSide(false)}>
                                <FireplaceModal />
                            </li>
                        </ul>
                    ) : (

                            <ul>
                                <li className="mobile-close-side">
                                    <IconButton onClick={e => setSide(!isSide)}>
                                        <CloseIcon />
                                    </IconButton>
                                </li>
                                <li>
                                    <div className="modal-c-button"
                                        onClick={() => dispatch({
                                            type: "UPDATE_GROUP_DATA", payload: [...groupsData, { "name": "Group", "optional": false, "total": 0, "products": [] }]
                                        })}>
                                        <img src={img} alt="" className="cat-img" />
                                        <h5>
                                            NEW Group
                                        </h5>
                                    </div>
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
                        )
                    }
                </div>
            </div>
        </div>

    );
}
