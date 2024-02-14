import { StyleSheet } from "react-native";
import { PADDING } from "../../Tools/constantes";

export const styles = StyleSheet.create({
        // Styliser la flatlist
    scrollableList: {
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.horizontal,
    },
    scrollableListItem: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginRight: 15,
        backgroundColor: 'white',
        elevation: 2,
        width: 250,
    },
    imgContainer: {
        alignSelf: 'center'

    },
    textContainer: {
        marginLeft: 10,
        flexShrink: 1,

    },
    mainText: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
    subText:{
        marginTop: 3,
        fontSize: 12,
        textAlign: 'center'
    }
}) 