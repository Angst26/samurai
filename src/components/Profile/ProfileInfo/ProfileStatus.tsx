import React, {useEffect, useState} from 'react';
import {Button, TextField, Box} from '@mui/material';

interface ProfileStatusProps {
    status: string;
    isOwner: boolean;
    updateStatus: (status: string) => void;
}

const ProfileStatus = ({isOwner, updateStatus, ...props}: ProfileStatusProps) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status)
    const [count, setCount] = useState(0);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    useEffect(() => {
            setCount(c => c);
            console.log(count)
        }, [count]
    )


    const activateEditMode = () => {
        if (isOwner) {
            setEditMode(true);
        }
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(status)
    }
    const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.target.value)
    }

    return <div>
        {!editMode ? (
            <Box display="flex" alignItems="center">
                {isOwner && !props.status && (
                    <Button variant="contained" onClick={activateEditMode}>
                        Set Status
                    </Button>
                )}
                {props.status && (
                    <div
                        onDoubleClick={activateEditMode}
                        style={{
                            marginLeft: 2,
                            backgroundColor: '#f5f5f5',
                            borderRadius: 1,
                            padding: 1
                        }}
                    >
                        {props.status}
                    </div>)}
            </Box>
        ) : (
            <TextField
                variant="outlined"
                onChange={onStatusChange}
                autoFocus
                onBlur={deactivateEditMode}
                value={status}
                label="Status"
            />
        )}
    </div>
}

export default ProfileStatus;