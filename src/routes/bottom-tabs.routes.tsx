import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../screens/Home/Home'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import SkillScreen from '../screens/SkillScreen/SkillScreen'

const {Navigator,Screen} = createBottomTabNavigator()

export function BottomTabsRoutes(){
    return(
        <Navigator>
            <Screen name='Home' component={Home} options={{headerShown: false,tabBarIcon: ({color,size}) => (<MaterialCommunityIcons name='home' size={size} color={'blue'}/>)}}/>
            <Screen name='Skill Screen' component={SkillScreen} options={{headerShown: false,tabBarIcon: ({color,size}) => (<MaterialCommunityIcons name="information" size={size} color={'black'}/>)}}/>
        </Navigator>
    )
}