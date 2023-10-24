import { Text, View, StyleSheet, ScrollView } from 'react-native'
import PostImages from '../PostImages'

export default function FiveDays({ fiveDaysData }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Last 5 days</Text>
            <ScrollView style={styles.content}>
                {fiveDaysData?.reverse().map((day) => {
                    return <PostImages key={day.title} {...day} />
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 18,
    },
    content: {
        paddingHorizontal: 24,
    },
})
