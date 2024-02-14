import { StyleSheet } from "react-native";
import { PADDING } from "../../Tools/constantes";

export const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        marginRight: 15,
        width: 200,
        borderRadius:5,
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.horizontal,
    },
    mainText: {
        textAlign: 'center'
    },
    itemImg: {
        width: '100%', height: 75, marginRight: 5
    }
}) 