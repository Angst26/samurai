import React from 'react';
import {Button, TextField, Box, Typography} from '@mui/material';


export default class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    }
    activateEditMode = () => {
        if (this.props.isOwner) {
            this.setState(
                {
                    editMode: true
                })
        }
    }
    deactivateEditMode = () => {
        this.setState(
            {
                editMode: false
            })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({status: e.target.value})
    }


    render() {
        return (
            <Box>
                {!this.state.editMode ? (
                    <Box display="flex" alignItems="center">
                        {this.props.isOwner && !this.props.status && (
                            <Button variant="contained" onClick={this.activateEditMode}>
                                Set Status
                            </Button>
                        )}
                        <Typography
                            variant="h6"
                            onDoubleClick={this.activateEditMode}
                            sx={{
                                marginLeft: 2,
                                backgroundColor: '#f5f5f5',
                                borderRadius: 1,
                                padding: 1
                            }}
                        >
                            {this.props.status}
                        </Typography>
                    </Box>
                ) : (
                    <TextField
                        variant="outlined"
                        onChange={this.onStatusChange}
                        autoFocus
                        onBlur={this.deactivateEditMode}
                        value={this.state.status}
                        label="Status"
                    />
                )}
            </Box>
        )
    }

}


