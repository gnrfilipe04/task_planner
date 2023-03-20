import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import colors from '../../theme/colors'

export const styles = StyleSheet.create({
    container: {
        height: RFValue(220),
        width: RFValue(170),
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 15,
        borderRadius: 20,
    },
    containerInfo: {
        paddingLeft: 2
    },
    title: {
        fontSize: RFValue(18),
        color: colors.white,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: RFValue(12),
        color: colors.white,
        opacity: 0.8
    }
})