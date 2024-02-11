import { StyleSheet } from "react-native";
import { PADDING } from "../../Tools/constantes";

export const dashboardStyles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        backgroundColor: 'white',
    },
    userImg: {
        width: 50,
        height: 50,
        borderRadius: 50/2,
    },
    userName: {
        fontSize: 16,
    },

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