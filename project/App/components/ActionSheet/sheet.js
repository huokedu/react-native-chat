'use strict';

var React = require('react');var ReactNative = require('react-native');
var { 
    Animated,
    StyleSheet,
    View,
    Dimensions
} = ReactNative;

const DEFAULT_BOTTOM = -300;
const DEFAULT_ANIMATE_TIME = 300;

module.exports = React.createClass({
    getInitialState() {
        return {
            bottom: new Animated.Value(DEFAULT_BOTTOM)
        };
    },
    componentWillReceiveProps(newProps) {
        return Animated.timing(this.state.bottom, {
            toValue: newProps.visible ? 0 : DEFAULT_BOTTOM,
            duration: DEFAULT_ANIMATE_TIME
        }).start();
    },

    render() {
        return (
            <Animated.View style={{bottom: this.state.bottom}}>
                {this.props.children}
            </Animated.View>
        );
    }
});
