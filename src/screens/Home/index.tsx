import { Image, View, Text, ScrollView } from "react-native";
import { CardTaskStatus } from "../../components/CardTaskStatus";
import colors from "../../theme/colors";
import woman from '../../assets/woman.jpg'
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { Indicator } from "../../components/Indicator";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export function Home(){
    return (
            <ScrollView 
                showsVerticalScrollIndicator={false}
            >                
                <View style={styles.container}>

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
                            
                    <View style={styles.containerTaskCard}>
                        <CardTaskStatus 
                            title="Esporte"
                            subtitle="2 tarefas para hoje"
                            backgroundColor={colors.green}
                            percentage={24}
                        />

                        <View style={{ width: 20 }}/>

                        <CardTaskStatus 
                            title="Trabalho"
                            subtitle="1 tarefas para hoje"
                            backgroundColor={colors.pink}
                            percentage={55}
                        />  

                    </View>
                    <View style={{ height: 5 }}/>
                    <View style={styles.containerTaskCard}>
                        <CardTaskStatus 
                            title="Lazer"
                            subtitle="1 tarefas para hoje"
                            backgroundColor={colors.yellow}
                            percentage={70}
                        />

                        <View style={{ width: 20 }}/>

                        <CardTaskStatus 
                            title="Estudo"
                            subtitle="2 tarefas para hoje"
                            backgroundColor={colors.purple}
                            percentage={86}
                        />  

                    </View>

                    <View style={{ height: 40 }}/>

                </View>
            </ScrollView>
    )
}

