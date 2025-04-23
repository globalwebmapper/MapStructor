import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getFontawesomeIcon } from '@/app/helpers/font-awesome.helper';
import { FontAwesomeLayerIcons } from '@/app/models/font-awesome.model';
import ZoomLabelForm from '../ZoomLabelForm';

type ZoomLabelButtonProps = {
    beforeOpen: () => void,
    afterClose: () => void,
    authToken: string,
    inPreviewMode: boolean
}

const ZoomLabelButton = (props: ZoomLabelButtonProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [showEditorOptions, setShowEditorOptions] = useState<boolean>(false);

    useEffect(() => {
        const isAuthed: boolean = (props.authToken ?? '') != '';
        const inPreviewMode: boolean = props.inPreviewMode ?? false;

        setShowEditorOptions(isAuthed && !inPreviewMode);
    }, [props.authToken, props.inPreviewMode])

    const openWindow = () => {
        props.beforeOpen()
        setIsOpen(true)
    }

    const closeWindow = () => {
        props.afterClose()
        setIsOpen(false)
    }

    return (
        <>
            {
                showEditorOptions && (
                    <button
                        onClick={openWindow} id="zoom-world">
                            <FontAwesomeIcon icon={getFontawesomeIcon(FontAwesomeLayerIcons.NOTES_MEDICAL)}></FontAwesomeIcon>
                            <strong> Zoom Labels</strong>
                    </button>
                )
            }
            <Modal
                style={{
                    overlay: {
                        zIndex: "1000",
                    },
                    content: {
                        width: '30%',
                        right: '5px'
                    }
                }}
                isOpen={isOpen}
                onRequestClose={closeWindow}
                contentLabel='New Map'
            >
                <ZoomLabelForm authToken={props.authToken}></ZoomLabelForm>
            </Modal>
        </>
    )
}

export default ZoomLabelButton;