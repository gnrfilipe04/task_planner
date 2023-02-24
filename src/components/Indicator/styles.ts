import { StyleSheet } from 'react-native'
import colors from '../../theme/colors'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        color: colors.black
    },
    subtitle: {
        fontSize: 14,
        color: colors.black,
        opacity: 0.4,
    },
    containerText: {
        alignItems: 'flex-start',
        paddingLeft: 20
    }
})