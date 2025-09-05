import { Tabs } from 'expo-router';
import { View, Text, Image } from 'react-native';
import styles from '../styles/navbar.styles';
import icons from '../constants/icons';
import { COLORS } from '../constants/enums';

const NavbarLayout = () => {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarStyle: styles.tabBarStyle,
        }}>
            <Tabs.Screen name="Home"
                options={{
                    title: "",
                    href: '/(navbar)/Home/',
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={[styles.tabBarIconView, { borderTopColor: focused ? COLORS.primary : COLORS.white }]}>
                                <Image
                                    source={focused ? icons.home : icons.homeOutlined}
                                    resizeMode='contain'
                                    style={[styles.tabBarIconImage, { tintColor: focused ? COLORS.primary : COLORS.black }]}
                                />
                                <Text style={[styles.tabBarIconText, { color: focused ? COLORS.primary : COLORS.black }]}>
                                    Acceuil
                                </Text>
                            </View>
                        )
                    }
                }}
            />
            <Tabs.Screen name="Infos"
                options={{
                    title: "",
                    href: "/(navbar)/Infos/",
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={[styles.tabBarIconView, { borderTopColor: focused ? COLORS.primary : COLORS.white }]}>
                                <Image
                                    source={focused ? icons.infos : icons.infosOutlined}
                                    resizeMode='contain'
                                    style={[styles.tabBarIconImage, { tintColor: focused ? COLORS.primary : COLORS.black }]}
                                />
                                <Text style={[styles.tabBarIconText, { color: focused ? COLORS.primary : COLORS.black }]}>
                                    Infos
                                </Text>
                            </View>
                        )
                    }
                }}
            />
            <Tabs.Screen name="Statistics"
                options={{
                    title: "",
                    href: '/(navbar)/Statistics/',
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={[styles.tabBarIconView, { borderTopColor: focused ? COLORS.primary : COLORS.white }]}>
                                <Image
                                    source={focused ? icons.stats : icons.statsOutlined}
                                    resizeMode='contain'
                                    style={[styles.tabBarIconImage, { tintColor: focused ? COLORS.primary : COLORS.black }]}
                                />
                                <Text style={[styles.tabBarIconText, { color: focused ? COLORS.primary : COLORS.black }]}>
                                    Statistiques
                                </Text>
                            </View>
                        )
                    }
                }}
            />
            <Tabs.Screen name="Settings"
                options={{
                    title: "",
                    href: '/(navbar)/Settings/',
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={[styles.tabBarIconView, { borderTopColor: focused ? COLORS.primary : COLORS.white }]}>
                                <Image
                                    source={focused ? icons.cogTab : icons.cogOutlined}
                                    resizeMode='contain'
                                    style={[styles.tabBarIconImage, { tintColor: focused ? COLORS.primary : COLORS.black }]}
                                />
                                <Text style={[styles.tabBarIconText, { color: focused ? COLORS.primary : COLORS.black }]}>
                                    Paramètres
                                </Text>
                            </View>
                        )
                    }
                }}
            />
        </Tabs>

    )
}

export default NavbarLayout;