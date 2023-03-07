import { Feather } from '@expo/vector-icons'
import { View, Image, Text, ViewProps } from 'react-native'
import colors from '../../../../theme/colors'
import woman from '../../../../assets/woman.jpg'
import Animated from 'react-native-reanimated'
import { styles } from './styles'

interface AnimatedStyle extends ViewProps {

}

export function Header({style, ...props}: AnimatedStyle){
    return (
        <Animated.View style={[styles.profileContainer, style]} {...props}>
            <Image 
                source={woman} 
                resizeMode={'cover'} 
                style={styles.profile}
            />
            <View style={styles.containerName}>
                <Text style={styles.name}>Claúdia Raquel</Text>
                <Feather name="edit" size={12} color={colors.blue} />
            </View>
            <Text style={styles.professionalName}>Produz para o onlyfans</Text>
        </Animated.View>
    )
}