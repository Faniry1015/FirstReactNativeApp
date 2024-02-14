import { StyleSheet } from "react-native";
import { PADDING } from "../../Tools/constantes";

export const styles = StyleSheet.create({
        // Styliser la flatlist
    scrollableList: {
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.horizontal,
    },
    scrollableListItem: {
        flexDirection: 'column',
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginRight: 15,
        backgroundColor: 'white',
        elevation: 2,
        width: 250,
    },
    mainText: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    },
    subText:{
        marginTop: 3,
        fontSize: 12,
        textAlign: 'center'
    }
}) 