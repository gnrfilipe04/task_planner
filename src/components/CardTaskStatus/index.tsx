import { View, Text, } from 'react-native'
import colors from '../../theme/colors'
import { CircularProgressBar, CircularProgressBarProps } from '../CircularProgressBar'
import { styles } from './styles'

interface CardTaskStatus extends CircularProgressBarProps {
    title: string
    subtitle: string,
    backgroundColor: string
}

export function CardTaskStatus({
    title,
    subtitle,
    backgroundColor,
    ...props
}: CardTaskStatus){
    return (
        <View style={[styles.container, { backgroundColor }]}>
            <CircularProgressBar radius={40} color={'#fffaff'} strokeWidth={7} {...props}/>

            <View style={styles.containerInfo}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </View>
    )
}