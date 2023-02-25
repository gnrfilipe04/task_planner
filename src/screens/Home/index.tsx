import { View, } from "react-native";
import { CardTaskStatus } from "../../components/CardTaskStatus";
import colors from "../../theme/colors";
import { styles } from "./styles";
import { FlatGrid } from "react-native-super-grid";
import { Header } from "./blocks/Header";
import { MyTask } from "./blocks/MyTask";

export function Home(){

    const cards: CardTaskStatus[] = [
        {
            title: "Esporte",
            subtitle: "2 tarefas para hoje",
            backgroundColor: "#0ed094",
            percentage: 24,
            delay: 0,
            delayAnimation: 500
            
        },
        {
            title: "Trabalho",
            subtitle: "2 tarefas para hoje",
            backgroundColor: colors.pink,
            percentage: 20,
            delay: 500,
            delayAnimation: 1000
        },
        {
            title: "Lazer",
            subtitle: "3 tarefas para hoje",
            backgroundColor: colors.yellow,
            percentage: 44,
            delay: 1000,
            delayAnimation: 1500
        },
        {
            title: "Estudo",
            subtitle: "1 tarefas para hoje",
            backgroundColor: colors.purple,
            percentage: 57,
            delay: 1500,
            delayAnimation: 2000
        },
        
    ]

    return (
        <FlatGrid
            maxItemsPerRow={2}
            showsVerticalScrollIndicator={false}
            data={cards}
            contentContainerStyle={{ paddingHorizontal: 5, }}
            ListHeaderComponent={
                <View style={styles.container}>

                    <Header />

                    <MyTask />

                </View>}
            renderItem={({ item }) => {
                return (
                    <CardTaskStatus
                        backgroundColor={item.backgroundColor}
                        key={item.title} 
                        title={item.title}
                        subtitle={item.subtitle}
                        percentage={item.percentage}
                        delay={item.delay}
                        delayAnimation={item.delayAnimation}
                    /> 
                )
            }}
        />
    )
}

