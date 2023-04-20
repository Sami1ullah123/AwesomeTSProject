import {
    Animated,
    View,
    Text,
    Pressable,
    StyleSheet,
    useWindowDimensions,
    TouchableOpacity
} from 'react-native';
import { useCardAnimation } from '@react-navigation/stack';
import { Button, Input } from 'native-base';

const styles = StyleSheet.create({
    viewAnimated: {
        width: '100%',
    },
    viewContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: '#E5E5E5',
        borderRadius: 20,
    },
});
function ModalScreen({ navigation }) {
    const { height } = useWindowDimensions();
    const { current } = useCardAnimation();

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Pressable
                style={[
                    StyleSheet.absoluteFill,
                    { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
                ]}
                onPress={navigation.goBack}
            />
            <Animated.View
                style={[
                    {
                        height: height,
                        transform: [
                            {
                                translateY: current.progress.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [height, height * 0.5],
                                    extrapolate: 'clamp',
                                }),
                            },
                        ],
                    },
                    styles.viewAnimated,
                ]}>
                <View style={styles.viewContainer}>

                    <Text style={{ color: 'black' }}>ModalScreen</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Text style={{ marginBottom: 10, color: 'black' }} >
                            Flag
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <TouchableOpacity>
                                <Text style={{ color: 'black' }}> Like</Text>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <Text style={{ color: 'black' }}>Report</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                        <Input width={'90%'} placeholder="Enter Comment">
                        </Input>
                        <Button marginBottom={10}>
                            Send
                        </Button>
                    </View>

                </View>
            </Animated.View>
        </View>
    );
}
export default ModalScreen;