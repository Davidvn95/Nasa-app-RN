import { useRoute } from '@react-navigation/native'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function Detail() {
    const {
        params: { title, hdurl, date, explanation },
    } = useRoute()
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image source={{ uri: hdurl }} style={{ width: '100%', height: 200 }} />
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>
                    {title}
                </Text>
                <Text style={{ fontSize: 16, color: '#fff' }}>{date}</Text>
                <Text style={{ fontSize: 16, color: '#fff' }}>{explanation}</Text>
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
    },
})
