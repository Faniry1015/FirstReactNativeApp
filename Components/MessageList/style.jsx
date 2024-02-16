import { StyleSheet } from "react-native";
import { PADDING } from "../../Tools/constantes";

export const styles = StyleSheet.create({
    messageContainer : {
        flexDirection : 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 5,
        marginTop: 15,
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
    },
    messageImg : {
        width: 50,
        height: 50,
        borderRadius: 50/2,
        marginRight: 15,
    },
    messageInfo: {
        flexDirection: 'column',
        flex: 1,
        paddingHorizontal: PADDING.horizontal,
        
    },
    dateName:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    name: {
        fontWeight: 'bold',
        marginRight: 5,
    }
})