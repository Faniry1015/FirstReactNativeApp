import { StyleSheet } from "react-native";
import { PADDING } from "../../Tools/constantes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: PADDING.horizontal,
    },
    header: {
        backgroundColor: 'white',
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    img: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
    },
    userInfo: {
        marginLeft: 15,
    },
    userName: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    userEmail : {
        marginBottom:5,
    }
})