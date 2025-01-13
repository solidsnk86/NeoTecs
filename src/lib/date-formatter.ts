interface DateFormatProps {
  ts: Date | string;
}

export class DateFormat {
  public static dateAndTime({ ts }: DateFormatProps) {
    const date = new Date(ts).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
    return date;
  }

  public static date({ ts }: DateFormatProps) {
    const date = new Date(ts).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    });
    return date;
  }

  public static time({ ts }: DateFormatProps) {
    const date = new Date(ts).toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    return date;
  }
}
