import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Keyboard,
    TouchableWithoutFeedback,
    TextInput,
    StatusBar,
    Image
} from 'react-native'
import changeNavigationBarColor, {
    hideNavigationBar,
    showNavigationBar,
} from 'react-native-navigation-bar-color'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux';
import {
    emailChanged,
    passwordChanged,
    logInUser,
    onLoginOrRegisterGoogle,
    onLoginOrRegisterFacebook
} from "../actions"
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

class signIn extends Component {
    componentDidMount() {
        changeNavigationBarColor('#2a017d')
    }
    render() {
        let color = '#2a017d'
        // changeNavigationBarColor(color)
        // hideNavigationBar()
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <KeyboardAwareScrollView
                    style={{ flex: 1, backgroundColor: color, paddingHorizontal: 30 }}
                >
                    <View style={{ height: screenHeight, justifyContent: 'center' }}>
                        <View style={{
                            backgroundColor: color,
                            alignItems: 'center',
                            // justifyContent: 'center',
                            paddingHorizontal: 25
                        }}>
                            < StatusBar backgroundColor={color} barStyle='light-content' />
                            <Image
                                source={require('../images/bulb.png')}
                                style={{
                                    height: 200,
                                    width: 200,
                                    margin: 10
                                }}
                            />
                            <Text style={{
                                fontSize: 40,
                                color: '#e0ae16',
                                fontWeight: 'bold',
                                margin: 10
                            }}>Softmax</Text>
                        </View>
                        <View>
                            <Text style={{ color: 'white', fontSize: 18 }}>
                                MOBILE NO.
                            </Text>
                            <TextInput
                                style={[{
                                    width: screenWidth / 1.2,
                                    backgroundColor: '#757eeb',
                                    height: 55,
                                    paddingHorizontal: 30,
                                    marginTop: 10,
                                    color: 'white'
                                }, styles.radiusBorder]}
                                keyboardType='number-pad'
                            />
                            <TouchableOpacity
                                style={[{
                                    backgroundColor: '#e0ae16',
                                    width: screenWidth / 1.2,
                                    marginTop: 10,
                                    height: 55,
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    paddingHorizontal: 30
                                }, styles.radiusBorder]}
                                onPress={() => Actions.otp()}
                            >
                                <Text style={{ fontWeight: 'bold' }}>LOGIN</Text>
                                <Image
                                    source={require('../images/rightArrow.png')}
                                    style={{
                                        height: 20,
                                        width: 20,
                                        position: 'absolute',
                                        right: 20
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </TouchableWithoutFeedback>
        )
    }
}
const styles = StyleSheet.create({
    radiusBorder: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10

    }
})

const mapStateTOProps = state => {
    // console.log(state)
    return {
        email: state.auth.email,
        pass: state.auth.pass,
        isLoading: state.auth.isLoading,
        isLogin: state.auth.isLogin
    }
}
export default connect(mapStateTOProps, {
    emailChanged,
    passwordChanged,
    logInUser,
    onLoginOrRegisterGoogle,
    onLoginOrRegisterFacebook
})(signIn)