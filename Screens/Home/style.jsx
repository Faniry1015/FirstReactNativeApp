import { StyleSheet } from "react-native";
import { COLORS, PADDING } from "../../Tools/constantes";

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

    // Styliser la main flatlist
    scrollableList: {
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
    },

    title:{
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
    },
    titleBold:{
        fontWeight: 'bold'
    },

    //Styliser afficher tout
    title_space_between: {
        paddingHorizontal: PADDING.horizontal,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    link:{
        color: COLORS.main
    },

    serviceOfferContainer : {
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
    },
    serviceCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 5,
        padding: 10,
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        marginBottom: 20,
        borderRadius: 10,
    },
    serviceImg: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        marginRight: 25,
    }
}) 