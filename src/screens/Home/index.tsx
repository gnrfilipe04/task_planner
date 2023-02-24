import { View, Text } from "react-native";
import { CardTaskStatus } from "../../components/CardTaskStatus";
import colors from "../../theme/colors";
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { Indicator } from "../../components/Indicator";
import { AntDesign } from '@expo/vector-icons';
import { FlatGrid } from "react-native-super-grid";
import { Header } from "./blocks/Header";
import { MyTask } from "./blocks/MyTask";

export function Home(){

    const cards: CardTaskStatus[] = [
        {
            title: "Esporte",
            subtitle: "2 tarefas para hoje",
            backgroundColor: "#0ed094",
            percentage: 24
        },
        {
            title: "Trabalho",
            subtitle: "2 tarefas para hoje",
            backgroundColor: colors.pink,
            percentage: 20
        },
        {
            title: "Lazer",
            subtitle: "3 tarefas para hoje",
            backgroundColor: colors.yellow,
            percentage: 44
        },
        {
            title: "Estudo",
            subtitle: "1 tarefas para hoje",
            backgroundColor: colors.purple,
            percentage: 57
        },
        
    ]

    return (
        <>
            <FlatGrid
                maxItemsPerRow={2}
                showsVerticalScrollIndicator={false}
                data={cards}
                contentContainerStyle={{ paddingHorizontal: 5}}
                ListHeaderComponent={
                    <View style={styles.container}>

                        <Header />

                        <MyTask />
                        
                    </View>}
                renderItem={({ item }) => {
                    return (
                        <CardTaskStatus
                            key={item.title} 
                            title={item.title}
                            subtitle={item.subtitle}
                            backgroundColor={item.backgroundColor}
                            percentage={item.percentage}
                        /> 
                    )
                }}
                />
        </>
    )
}

