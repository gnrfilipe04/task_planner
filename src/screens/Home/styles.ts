import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        paddingTop: 50
    },
    containerTaskCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profileContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40

    },
    profile: {
        width: 100, 
        height: 100,
        borderRadius: 50,
        marginBottom: 5
    },
    name: {
        fontSize: 18,
        textAlign: 'center',
        color: colors.black,
        fontWeight: '700',
        paddingHorizontal: 10,
    },
    professionalName: {
        fontSize: 14,
        textAlign: 'center',
        color: colors.black,
        opacity: 0.5
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
    containerName: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})