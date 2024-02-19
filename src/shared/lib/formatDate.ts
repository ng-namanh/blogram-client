export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();

  const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
  const day = date.getDate();

  const diffInHours = Math.floor((Number(now) - Number(date)) / 1000 / 60 / 60);
  let timeAgo;

  if (diffInHours < 1) {
    const diffInMinutes = Math.floor((Number(now) - Number(date)) / 1000 / 60);
    timeAgo =
      diffInMinutes === 1
        ? `${diffInMinutes} minutes ago`
        : `${diffInMinutes} minutes ago`;
  } else if (diffInHours < 24) {
    timeAgo =
      diffInHours === 1
        ? `${diffInHours} hours ago`
        : `${diffInHours} hours ago`;
  } else {
    const diffInDays = Math.floor(diffInHours / 24);
    timeAgo =
      diffInDays === 1 ? `${diffInDays} day ago` : `${diffInDays} days ago`;
  }

  return `${month} ${day} (${timeAgo})`;
}
