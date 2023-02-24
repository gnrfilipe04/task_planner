import { Feather } from '@expo/vector-icons'
import { View, Image, Text } from 'react-native'
import colors from '../../../../theme/colors'
import woman from '../../../../assets/woman.jpg'
import { styles } from './styles'

export function Header(){
    return (
        <View style={styles.profileContainer}>
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
        </View>
    )
}