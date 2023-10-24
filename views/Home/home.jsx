import { View, StyleSheet } from 'react-native'
import Header from '../../components/Header'
import TodayImage from '../../components/TodayImage'
import fetchApi from '../../utils/fetch'
import getDays from '../../utils/getDays'
import { useEffect, useState } from 'react'
import FiveDays from '../../components/LastFiveDays'

export default function Home() {
    const [dataTodayImage, setDataTodayImage] = useState()
    const [lastFiveDaysData, setLastFiveDaysData] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchApi()
            setDataTodayImage(data)
        }
        const fetchLast5days = async () => {
            const { today, fiveDaysAgo } = getDays()
            const urlParam = `&start_date=${fiveDaysAgo}&end_date=${today}`
            const data = await fetchApi(urlParam)
            setLastFiveDaysData(data)
        }
        fetchLast5days().catch(null)
        fetchData().catch(null)
    }, [])
    return (
        <View style={styles.container}>
            <Header />
            <TodayImage {...dataTodayImage} />
            <FiveDays fiveDaysData={lastFiveDaysData} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: '#001154',
    },
})
