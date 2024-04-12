
import { Text, View, ImageBackground } from 'react-native';
import { styles } from '../styles/Stylesheet';
import { ScrollView } from 'react-native';

export default function Home() {
    return (
        <ImageBackground source={require("../images/teve.png")} style={styles.container}>

            <View style={styles.mexendo}>

                <ScrollView horizontal={true}>


                    <View style={styles.const}>





                        <View style={styles.header}>  </View>


                        <View style={[styles.body, { backgroundColor: 'silver' }]}>

                            <ScrollView horizontal={true} >
                                <ScrollView >
                                    <ImageBackground source={require("../images/neyma.png")} style={styles.body}>

                                        <Text>Opa</Text>

                                    </ImageBackground>
                                </ScrollView>
                            </ScrollView >
                        </View>

                        <View style={[styles.body, { backgroundColor: 'silver' }]}>
                            <Text>Opa</Text>
                        </View>

                        <View style={[styles.body, { backgroundColor: 'silver' }]}>

                            <ScrollView horizontal={true} >
                                <ScrollView >
                                    <ImageBackground source={require("../images/neymar.png")} style={styles.body}>

                                        <Text>Opa</Text>

                                    </ImageBackground>
                                </ScrollView>
                            </ScrollView >
                        </View>


                        <View style={[styles.body, { backgroundColor: 'silver' }]}>

                            <ScrollView horizontal={true} >
                                <ScrollView >
                                    <ImageBackground source={require("../images/neymarr.png")} style={styles.body}>

                                        <Text>Opa</Text>

                                    </ImageBackground>
                                </ScrollView>
                            </ScrollView >
                        </View>

                        <View style={[styles.body, { backgroundColor: 'green' }]}>
                            <Text>Opa</Text>
                        </View>

                        <View style={[styles.body, { backgroundColor: 'blue' }]}>
                            <Text>Opa</Text>
                        </View>








                        <View style={styles.footer}></View>

                    </View>
                </ScrollView >

            </View>



        </ImageBackground>


    );
}