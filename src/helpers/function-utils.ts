export const formatDate = (date: Date): string => {
    const months = [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez",
    ];
    const dateStr = date.toString();
    const dateSplited = dateStr.split("-");
    const month = months[Number(dateSplited[1])-1];
    const year = dateSplited[0];

    return `${month} ${year}`;
};
