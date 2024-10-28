export class DateFormat {
  public static dateAndTime(ts: Date | string) {
    const date = new Date(ts).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
    return date;
  }

  public static date(ts: Date | string) {
    const date = new Date(ts).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    });
    return date;
  }

  public static time(ts: Date | string) {
    const date = new Date(ts).toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    return date;
  }
}
