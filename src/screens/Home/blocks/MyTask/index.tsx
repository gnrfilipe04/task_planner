import { AntDesign, FontAwesome5 } from '@expo/vector-icons'
import { View, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Indicator } from '../../../../components/Indicator'
import colors from '../../../../theme/colors'
import { styles } from './styles'

export function MyTask(){
    return (
        <>
            <View style={styles.containerTitle}>
                <View>
                    <Text style={styles.title}>Minha Tarefa</Text>
                    <Text style={styles.subtitle}>Tarefas em andamento</Text>
                </View>
                <RectButton style={styles.calendarButton}>
                    <FontAwesome5 name="calendar-day" size={18} color={colors.white} />
                </RectButton>
            </View>

            <View style={{ width: '100%', height: 150, justifyContent: 'space-between', paddingHorizontal: 20, marginVertical: 40}}> 
                <Indicator 
                    icon={
                    <View style={{ 
                        width: 40, 
                        height: 40, 
                        borderRadius: 20, 
                        backgroundColor: '#fd5f991d',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <AntDesign name="star" size={16} color={colors.pink} />
                    </View>}
                    title={'Alta prioridade'}
                    subtitle={'12 completas • 4 incompletas '}
                />

                <Indicator 
                    icon={
                    <View style={{ 
                        width: 40, 
                        height: 40, 
                        borderRadius: 20, 
                        backgroundColor: '#4a6bff1a',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <FontAwesome5 name="calendar-day" size={18} color={colors.blue} />
                    </View>}
                    title={'Em agendamento'}
                    subtitle={'4 completas • 4 incompletas '}
                />  

                <Indicator 
                    icon={
                    <View style={{ 
                        width: 40, 
                        height: 40, 
                        borderRadius: 20, 
                        backgroundColor: '#ffba3b1f',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <AntDesign name="clockcircle" size={16} color={colors.yellow} />
                    </View>}
                    title={'Hoje'}
                    subtitle={'6 completas • 4 incompletas '}
                />
            </View>
        </>
    )
}