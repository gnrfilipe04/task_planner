import { StyleSheet } from 'react-native'
import colors from '../../theme/colors'

export const styles = StyleSheet.create({
    container: {
        height: 220,
        width: 170,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 15,
        borderRadius: 20,
    },
    containerInfo: {
        paddingLeft: 2
    },
    title: {
        fontSize: 18,
        color: colors.white,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 12,
        color: colors.white,
        opacity: 0.8
    }
})