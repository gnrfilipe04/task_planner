import { View, Pressable, Text } from 'react-native'
import { styles } from './styles'

interface IndicatorProps {
    icon: JSX.Element,
    title: string,
    subtitle: string
}

export function Indicator({
    icon,
    subtitle,
    title
}: IndicatorProps){
    return (
        <Pressable style={styles.container}>
            {icon}
            <View style={styles.containerText}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </Pressable>
    )
}