import { useNavigation } from '@react-navigation/native'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const PostImages = ({ title, url, date, hdurl, explanation }) => {
    const { navigate } = useNavigation()
    const handleNavigate = () => { 
        navigate('Detail', { title, hdurl, date, explanation }) 
    
    }
    return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.date}>{date}</Text>
                    <TouchableOpacity style={styles.containerButton} onPress={handleNavigate}>
                        <Text style={styles.textButton}>View</Text>
                    </TouchableOpacity>
                </View>
                <Image source={{ uri: url }} style={styles.image} />
            </View>
    )
}

export default PostImages

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        height: 130,
        padding: 10,
        marginVertical: 8,
        backgroundColor: '#132b85',
        borderRadius: 12,
    },
    textContainer: {
        flex: 1,
        height: '100%',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff',
    },
    date: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#fff',
    },
    image: {
        height: '100%',
        objectFit: 'cover',
        borderRadius: 12,
        flex: 1,
        marginLeft: 12,
    },
    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    containerButton: {
        backgroundColor: '#000',
        padding: 2,
        width: '50%',
        borderRadius: 12,
    },
})
