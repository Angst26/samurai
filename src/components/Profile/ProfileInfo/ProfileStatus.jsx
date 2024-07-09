import React from 'react';

export default class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }
    activateEditMode = () => {
        this.setState(
            {
                editMode: true
            })
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
        console.log('Rendering ProfileStatus with status:', this.state.status);

        return (
            <div>
                {!this.state.editMode ?
                    <div>

                        <span onDoubleClick={this.activateEditMode}>{typeof this.props.status === 'string' ? this.props.status : 'Invalid status'}</span>
                    </div> :
                    <div>
                        <input  onChange={this.onStatusChange}
                            autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
                    </div>}
            </div>
        )
    }

}