import { View, Text, Modal, StyleSheet, Pressable, Alert } from 'react-native'
import React, {useCallback, useState} from 'react'
import theme from '../utils/theme'
import { Feather } from '@expo/vector-icons'
import { AnimatePresence, MotiView } from 'moti'
import {useNavigation} from '@react-navigation/native'

const change = (item: boolean) => {};

interface IProps {
    visible: boolean;
    changeVisibility: typeof change;
}

export default function LoantypeModal({visible, changeVisibility}: IProps) {
    const [selected, setSelected] = useState(0);
    const navigation = useNavigation<any>();

    const navigate = () => {
        if (selected === 1) {
            changeVisibility(false);
            navigation.navigate('payday');
            return;
            return;
        }
        if (selected === 2) {
            changeVisibility(false);
            navigation.navigate('sme');
            return;
        }
    };

    React.useEffect(() => {
        return () => {
            setSelected(0);
        }
    }, []);
  return (
    <Modal animationType='slide' visible={visible} transparent>
        <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.452)', flex: 1, justifyContent: 'flex-end' }}>
            <View style={{ width: '100%', height: '65%', backgroundColor: 'white', borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: theme.majorPadding }}>
                <View style={{ width: '100%', height: 25, alignItems: 'flex-end'}}>
                    <Feather onPress={() => changeVisibility(false)} size={25} color="grey" name="x-circle" />
                </View>
                <Text style={{ fontFamily: theme.fonts.PoppinsSemiBold, color: 'black', fontSize: 22 }}>Apply for Loans</Text>
                <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Select a loan type from the options below to continue</Text>

                <Pressable onPress={() => setSelected(1)} style={[ styles.box, {borderColor: selected === 1 ? theme.primaryColor:'grey'}  ]}>
                    <View style={{ width: '100%', height: 10, alignItems: 'flex-end', }}>
                        <View style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: selected === 1 ? theme.primaryColor:'grey'}}></View>
                    </View>

                    <Text style={{ fontFamily: theme.fonts.PoppinsSemiBold, color: 'black', fontSize: 22 }}>PayDay Loan</Text>
                    <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Are you a salary earner ? this is for you</Text>
                </Pressable>

                <Pressable onPress={() => setSelected(2)} style={[ styles.box, {borderColor: selected === 2 ? theme.primaryColor:'grey'}  ]}>
                    <View style={{ width: '100%', height: 10, alignItems: 'flex-end', }}>
                        <View style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: selected === 2 ? theme.primaryColor:'grey'}}></View>
                    </View>

                    <Text style={{ fontFamily: theme.fonts.PoppinsSemiBold, color: 'black', fontSize: 22 }}>SME Loan</Text>
                    <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Business expansion or contract financing? this is for you</Text>
                </Pressable>

                <AnimatePresence>
                {
                    selected !== 0 && (
                        <MotiView
                            from={{ translateX: 200 }}
                            animate={{ translateX: 0 }}
                            transition={{
                                type: 'spring',
                            }}
                            exit={{ translateX: -200 }}
                        >
                            <Pressable 
                            onPress={() => navigate()}
                            style={{ width: '100%', height: 55, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.primaryColor, marginTop: 20, borderRadius: 5 }}>
                                <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'white', fontSize: 18 }}>Continue</Text>
                            </Pressable>
                        </MotiView>
                    )
                }
                </AnimatePresence>

            </View>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    box: {
        width: '100%',
        height: '30%',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 20,
        padding: theme.majorPadding
    }
});