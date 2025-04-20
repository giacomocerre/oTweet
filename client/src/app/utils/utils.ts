import { Tweet } from "../types/tweet";

export const parseDate = (dateString: string): Date => {
    const dateRegex = /(\d{2}:\d{2}) - (\d{2}\/\d{2}\/\d{4})/;
    const match = dateString.match(dateRegex);
    if (!match) {
        throw new Error(`La data non è valida: ${dateString}`);
    }
    const timePart = match[1];
    const datePart = match[2];
    const [day, month, year] = datePart.split('/').map(Number);
    const [hours, minutes] = timePart.split(':').map(Number);
    const date = new Date(Date.UTC(year, month - 1, day, hours, minutes));
    return date;
}

export const orderTweets = (tweets: Tweet[]): Tweet[] => {
    return tweets.sort((a, b) => {
        const dateA = parseDate(a.date);
        const dateB = parseDate(b.date);
        if (dateA > dateB) return -1;
        if (dateA < dateB) return 1;
        return a.author.localeCompare(b.author);
    });
}