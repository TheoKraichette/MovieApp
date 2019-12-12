import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class FilmDetail extends React.Component {
    render() {
        console.log(this.props.navigation)
        return (
            <View>
    <Text>Détail du film {this.props.navigation.state.params.idFilm}</Text>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    main_container: {
        flex: 1,
    }
})

export default FilmDetail