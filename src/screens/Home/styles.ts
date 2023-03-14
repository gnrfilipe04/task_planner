import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        paddingTop: 20,
        zIndex: 999
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
        alignItems: 'center'
    },
    containerTitle: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    title: {
        fontSize: 32,
        color: colors.black
    },
    subtitle: {
        fontSize: 16,
        color: colors.black,
        opacity: 0.4,
    },
})