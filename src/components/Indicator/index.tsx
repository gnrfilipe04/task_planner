import { useEffect } from 'react'
import { View, Pressable, Text, PressableProps } from 'react-native'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated'

import { styles } from './styles'

export interface IndicatorProps {
    icon: JSX.Element,
    title: string,
    subtitle: string,
    delay?: number,
}

export function Indicator({
    icon,
    subtitle,
    title,
    delay = 0,
}: IndicatorProps){

    const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

    const positioX = useSharedValue(-300)

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: positioX.value }
            ]
        }
    })

    const animation = () => {
        positioX.value = withDelay(delay, withTiming(0, {
            duration: 500,
            easing: Easing.linear
        }))
    }

    useEffect(() => {
        animation()
    })

    return (
        <AnimatedPressable style={[animatedStyle, styles.container]}>
            {icon}
            <View style={styles.containerText}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </AnimatedPressable>
    )
}