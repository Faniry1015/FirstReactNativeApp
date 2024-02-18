import { StyleSheet } from "react-native"
import { COLORS, PADDING } from './../../Tools/constantes'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#eee',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        backgroundColor: 'white',
        marginRight: 5,
    },
    send: {
        backgroundColor: COLORS.main,
        padding: 10,
        paddingHorizontal: PADDING.paddingHorizontal,
        paddingVertical: 15,
        alignItems: 'center',
        color: 'white'
    }
})