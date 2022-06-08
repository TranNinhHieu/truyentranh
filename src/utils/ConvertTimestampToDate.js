export const Convert = (timestamp) => {
    let current_date = new Date(Number(timestamp))
    let formatted_date = current_date.getDate() + '/' + (current_date.getMonth() + 1) + '/' + current_date.getFullYear()
    return formatted_date
}
