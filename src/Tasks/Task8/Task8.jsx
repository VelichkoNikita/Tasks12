import React from 'react'
import { MapImg } from '../../StyledCStyles/styles'

class Task8 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 55.76440241657105,
            longitude: 37.56838926958989,
            userAddress: null
        };
    }

    render() {
        return (
            <div>
                <h4>Первый вариант (c JS и Google Api Maps):</h4>
                {this.state.latitude && this.state.longitude ?
                    <MapImg src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.longitude}&zoom=15&size=1920x150&scale=2&sensor=false&markers=color:red%7C${this.state.latitude},${this.state.longitude}&key=AIzaSyBDROf9OJQNqhXdNi8DrrQ8WgEArtU1jqw`} alt='' />
                    : null
                }
                <h4>Второй вариант (без JS и Google Api Maps):</h4>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.0959914663795!2d37.5640314928592!3d55.763965230921016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a2db794e127%3A0xe380e2bb41e1d2e3!2z0KHRgtC-0LvRj9GA0L3Ri9C5INC_0LXRgC4sIDPQujEzLCDQnNC-0YHQutCy0LAsIDEyMzAyMg!5e0!3m2!1sru!2sru!4v1638030210736!5m2!1sru!2sru" width="100%" height="400px"></iframe>
            </div>
        )
    }
}

export default Task8;