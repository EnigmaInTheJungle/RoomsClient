import './Rooms.scss';
import React, { Component } from 'react';
import Room from './Room/Room';

const UPDATE_ROOMS = 'updateRooms';

class Rooms extends Component {
    constructor (props) {
        super(props);
        this.state = {
            rooms: []
        };
        this.props.webSocket.addEventListener('message', this.onMessageRooms);
    }
    onMessageRooms = (data) => {
        const response = JSON.parse(data.data);
        switch (response.type) {
        case UPDATE_ROOMS:
            this.setState({rooms: response.rooms});
            break;
        }
    };
    render () {
        return (
            <div className='rooms'>
                {this.state.rooms.map((room) =>
                    <Room key={room.Id} room={room}/>
                )}
            </div>
        );
    }
}

export default Rooms;
