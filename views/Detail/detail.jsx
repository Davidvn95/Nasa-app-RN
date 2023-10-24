import { useRoute } from '@react-navigation/native'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import Header from '../../components/Header'

export default function Detail() {
    const {
        params: { title, hdurl, date, explanation },
    } = useRoute()
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.card}>
                <Image source={{ uri: hdurl }} style={styles.image} />
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
                <ScrollView style={styles.textContainer}>
                    <Text style={{ fontSize: 13, color: '#fff' }}>{explanation}</Text>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: '#001154',
    },
    card: {
        backgroundColor: '#415397',
        padding: 16,
        borderRadius: 16,
        marginTop: 16,
        marginBottom: 16,
        maxHeight: '80%',
    },
    title: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginVertical: 10 },
    image: { width: '100%', height: 200, borderRadius: 16 },
    date: { fontSize: 16, color: '#fff', marginBottom: 10 },
    textContainer:{}
})
