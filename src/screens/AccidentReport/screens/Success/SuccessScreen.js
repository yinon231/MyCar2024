import {Dimensions, Text, View, StyleSheet } from 'react-native';
import {BaseView, BodyBaseView} from '../../../../uiKit/BaseView';
import {Button} from '../../components/Button'
import {Input} from '../../components/Input'

const SuccessScreen = () => {
    return (
        <BaseView>
        <BodyBaseView style={{alignItems: 'center'}}>
        <View style={styles.textContainer}>
            <Text style={styles.headerText}>מסמך נשלחה</Text>
            <View style={styles.centerText}>
                <Text style={styles.confirmationText}>דוח תאונת הדרכים נשלח בהצלחה</Text>
                <Text style={styles.confirmationText}>OirS@gmail.com למייל</Text>
            </View>
        </View>
        <View style={styles.buttonContainer}>
            <Button title={"אישור"}/>
        </View>
        <Input placeholder={"טקסט"} required={false} width={0.5} type={"number"}/>
        </BodyBaseView>
        </BaseView>
    );
};

export default SuccessScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
    headerText: {
        fontSize: 20,
        fontWeight: '900',
        color: 'black',
    },
    confirmationText: {
        fontSize: 16,
        color: 'black',
    },
    textContainer: {
        alignItems: 'center',
        position: 'relative',
        top: windowHeight * 0.3,
        gap: 20,
    },
    buttonContainer: {
        width: windowWidth,
        position: 'relative',
        alignItems: 'center',
        top: windowHeight * 0.35,
    },
    centerText: {
        width: windowWidth * 0.9,
        alignItems: 'center',
    }
});