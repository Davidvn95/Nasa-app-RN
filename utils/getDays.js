export default () => {
    const date = new Date()
    date.setDate(new Date().getDate() - 5)
    const today = new Date().toISOString().slice(0, 10)
    return {
        today,
        fiveDaysAgo: date.toISOString().slice(0, 10),
    }
}