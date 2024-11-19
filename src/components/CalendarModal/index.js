import React, {useState} from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
import { Container,
        ButtomFilterText,
         ModalContent,
        ButtomFilter } from "./styles";
import { format } from 'date-fns';


import { ptBR } from "./localeCalendar";

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

export default function CalendarModal({ setVisible, handleFilter }) {

    const [dateNow, setDateNow] = useState(new Date());
    const [markedDates, setMarkedDates] = useState({});

    function handleOnDayPress(date) {
        console.log(date);
        const formattedDate = new Date(date.dateString);
    
        console.log(formattedDate); // Exibe a data formatada no console
        setDateNow(formattedDate);  // Define a data formatada no estado

        let markedDay = {};

        markedDay[date.dateString] = {
            selected: true,
            selectedColor: '#3B3DBF',
            textColor: '#FFF'
        }

        setMarkedDates(markedDay);
    }

    function handleFilterDate() {
        handleFilter(new Date(dateNow));
        setVisible();
    }
    

    return(
        <Container>
            <TouchableWithoutFeedback onPress={setVisible}>
                <View style={{flex: 1}}></View>
            </TouchableWithoutFeedback>

            <ModalContent>

                <Calendar
                 onDayPress={handleOnDayPress}
                 markedDates={markedDates}
                 enableSwipeMonths={true}
                 theme={{
                    todayTextColor: '#FF0000',
                    selectedDayBackgroundColor: '#00ADF5',
                    selecteDayTextColor: '#FFF'
                 }}
                 />

                <ButtomFilter
                    onPress={handleFilterDate}
                >
                    <ButtomFilterText>Filtrar</ButtomFilterText>
                </ButtomFilter>
            </ModalContent>
        </Container>
    );
}