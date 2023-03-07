import { View, } from "react-native";
import { CardTaskStatus } from "../../components/CardTaskStatus";
import colors from "../../theme/colors";
import { styles } from "./styles";
import { FlatGrid } from "react-native-super-grid";
import { Header } from "./blocks/Header";
import { MyTask } from "./blocks/MyTask";
import Animated, { interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated";

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

    const headerScale = useSharedValue(1)
    const headerOpacity = useSharedValue(1)

    const scrollHandler = useAnimatedScrollHandler((event) => {
        headerScale.value = 1 - event.contentOffset.y / 200
        headerOpacity.value = 1 - event.contentOffset.y / 100
    });

    const headerAnimatedStyle = useAnimatedStyle(() => {
        return {
            opacity: headerOpacity.value,
            transform: [
                { scale: headerScale.value }
            ]
        }
    })

    return (
        <Animated.ScrollView
            onScroll={scrollHandler}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.container}>

                <Header style={headerAnimatedStyle}/>
                
                <MyTask />

            </View>

            <FlatGrid
                maxItemsPerRow={2}
                showsVerticalScrollIndicator={false}
                data={cards}
                scrollEnabled={false}
                contentContainerStyle={{ paddingHorizontal: 5, }}
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
        
        </Animated.ScrollView>
    )
}

