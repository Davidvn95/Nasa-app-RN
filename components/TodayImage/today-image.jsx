import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function TodayImage({ date, explanation, hdurl, title, url }) {
    const { navigate } = useNavigation()
    const handleView = () => { 
        navigate('Detail', {title, date, explanation, hdurl})
    }
    return (
        <View style={styles.container}>
            <Image source={{ uri: url }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={handleView}>
                <Text style={{fontSize:16, color: '#fff'}}>View</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
        marginHorizontal: 24,
        backgroundColor: '#415397',
        borderRadius: 32,
        padding: 16,
        position: 'relative',
    },
    image: {
        width: '100%',
        borderRadius: 32,
        height: 200,
        borderWidth: 2,
        borderColor: '#fff',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginVertical: 16,
    },
    date: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    buttonContainer: {
        width: 'auto',
        marginTop: 12,
        alignItems: 'center',
        backgroundColor: '#000',
        right: 16,
        position: 'absolute',
        bottom: 16,
        borderRadius: 12,
        padding: 2,
        paddingHorizontal: 12
    },
})
