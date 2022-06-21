import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    cardcontainer: {
        height: 200,
        flexDirection: 'row',
        margin: 24,
        backgroundColor: 'grey',
        borderRadius: 10,
        width: 200
    },
    header: {
        width: '100%',
        height: '7%',
        backgroundColor: '#5359D1',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    horizontalCardcontainer: {
        width: 360,
        height: 230,
        flexDirection: 'row',
        marginLeft: 15,
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 15,
        marginRight: 20
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    card: {
        padding: 10,
        margin: 10,
        height: 200,
    },
    image:
    {
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: 10,
    },
    textfield:
    {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignSelf: 'flex-end',
        borderRadius: 10
    },
    title:
    {
        color: 'white',
        fontSize: 20,
        margin: 6
    },
    subtitle:
    {
        color: 'white',
        margin: 6
    },
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 50
    },
    item: {
        width: 360,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#328da8',
        borderRadius: 20,
        marginRight: 20
    },
    carouselImage: {
        width: 360,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#328da8',
        borderRadius: 20,
        marginLeft: 20,
        marginRight: 20
    }
});

export default styles;