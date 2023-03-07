import { StyleSheet } from "react-native";
import colors from "../../../../theme/colors";

export const styles = StyleSheet.create({
    profileContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
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
    containerName: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})