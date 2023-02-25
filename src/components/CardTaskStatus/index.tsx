import { View, Text, ColorValue, } from 'react-native'
import { CircularProgressBar, CircularProgressBarProps } from '../CircularProgressBar'
import Animated, { Easing, interpolate, useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated'
import { styles } from './styles'
import { useEffect } from 'react'

export interface CardTaskStatus extends CircularProgressBarProps {
    title: string
    subtitle: string,
    backgroundColor?: ColorValue,
    delayAnimation?: number
}

export function CardTaskStatus({
    title,
    subtitle,
    backgroundColor,
    delayAnimation = 0,
    ...props
}: CardTaskStatus){

    const scaleShared = useSharedValue(0)

    const cardStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { scale: interpolate(scaleShared.value, [0, 0.5, 1], [1, 0.95, 1]),}
            ]
        }
    })

    const animation = () => {
        scaleShared.value = withDelay(delayAnimation, withTiming(1, {
            duration: 1000,
            easing: Easing.ease
        }))

    }

    useEffect(() => {
        animation()
    }, [])

    return (
        <Animated.View style={[cardStyle, styles.container, { backgroundColor }]}>
            <CircularProgressBar radius={40} color={'#fffaff'} strokeWidth={7} {...props}/>

            <View style={styles.containerInfo}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </Animated.View>
    )
}