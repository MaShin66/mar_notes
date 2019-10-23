import React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import PropTypes from 'prop-types';

const { width, height } = Dimensions.get("window");

export default class ToDo extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            toDoValue: props.text
        }
    }

    static propTypes = {
        // text: PropTypes.string.isRequired,
        // isCompleted: PropTypes.bool.isRequired,
        // deleteToDo: PropTypes.func.isRequired,
        // id: PropTypes.string.isRequired,
        // uncompleteToDo: PropTypes.func.isRequired,
        // completeToDo: PropTypes.func.isRequired,
        // updateToDo: PropTypes.func.isRequired
    }

    render() {

        const { isEditing, toDoValue } = this.state;
        const { onOffComplete, id, text, isCompleted, deleteToDo } = this.props;        

        return (
            <View style={styles.container}>
                <View style={styles.column}>
                    <TouchableOpacity onPressOut={ () => {onOffComplete(id, isCompleted);} }>
                        <View style={[styles.circle, isCompleted ? styles.completedCircle : styles.uncompletedCircle]} />
                    </TouchableOpacity>

                    { isEditing ? (
                        <TextInput style={[styles.input, styles.text, isCompleted ? styles.completedText : styles.uncompletedText]} 
                            value={toDoValue}
                            onChangeText={this._controllInput}
                        />
                    ) : (
                        <Text style={[styles.text, isCompleted ? styles.completedText : styles.uncompletedText]}>{text}</Text>
                    )}
                </View>

                    { isEditing ? (
                        <View style={styles.actions}>
                            <TouchableOpacity onPressOut={this._finishEditing}>
                                <View style={styles.actionContainer}>
                                    <Text>✅</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={styles.actions}>
                            <TouchableOpacity onPressOut={this._startEditing}>
                                <View style={styles.actionContainer}>
                                    <Text>✏️</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPressOut={ () => {deleteToDo(id);} }>
                                <View style={styles.actionContainer}>
                                    <Text>❌</Text>
                                </View>
                            </TouchableOpacity>
                        </View> 
                    ) } 
            </View>
        );
    }

    _controllInput = inputText => {
        this.setState({
            toDoValue: inputText
        })
    }

    _startEditing = () => {
        this.setState({
            isEditing: true
        });
    }

    _finishEditing = () => {
        const { updateToDo, text, id } = this.props;
        const { toDoValue } = this.state;
        updateToDo(id, toDoValue)

        this.setState({
            isEditing: false
        })
    }

}

const styles = StyleSheet.create({
    container: {
        width: width - 50,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    column: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width / 2,
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 3,
        marginRight: 20
    },
    completedCircle: {
        borderColor: '#bbb'
    },
    uncompletedCircle: {
        borderColor: '#F23657'
    },
    title: {
        fontSize: 100
    },
    actions: {
        flexDirection: 'row'
    },
    actionContainer: {
        marginVertical: 10,
        marginHorizontal: 10
    },
    actionText: {

    },
    text: {
        fontWeight: '600',
        fontSize: 20,
        marginVertical: 20
    },
    input: {
        marginVertical: 15,
        width: width / 2
    },
    completedText: {
        color: '#bbb',
        textDecorationLine: 'line-through'
    },
    uncompletedText: {
        color: 'red'   
    }
})