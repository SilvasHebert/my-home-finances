import { StyleSheet, Text, View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker'
import colors from '../consts/colors';

export function DatePicker() {
  return (
    <View style={styles.container}>
      <CalendarPicker headerWrapperStyle={{ height: 0 }} weekdays={["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: 'center', alignItems: 'center', backgroundColor: colors.white, borderRadius: 6, padding: 6},
  today: { backgroundColor: '#ffeb3b', }, todayText: { color: colors.white, },
  selectedDay: { backgroundColor: '#ff5722', },
  selectedDayText: { color: colors.white, },
});