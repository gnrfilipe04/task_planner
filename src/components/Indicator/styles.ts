import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import colors from '../../theme/colors'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        fontSize: RFValue(18),
        color: colors.black
    },
    subtitle: {
        fontSize: RFValue(14),
        color: colors.black,
        opacity: 0.4,
    },
    containerText: {
        alignItems: 'flex-start',
        paddingLeft: 20
    }
})