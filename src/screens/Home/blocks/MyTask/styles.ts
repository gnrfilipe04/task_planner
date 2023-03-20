import { StyleSheet } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize'
import colors from "../../../../theme/colors";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    containerTaskCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    calendarButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: colors.blue,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: colors.blue,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 10,

    },
    containerTitle: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    title: {
        fontSize: RFValue(32),
        color: colors.black
    },
    subtitle: {
        fontSize: RFValue(16),
        color: colors.black,
        opacity: 0.4,
    },
})