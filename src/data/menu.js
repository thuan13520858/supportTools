import GenerateConstructorVariables from '../components/Page/GenerateConstructorVariables/GenerateConstructorVariables';
import SetVariables from '../components/Page/SetVariables/SetVariables'

export const menu =  [
    {
        title: " P Layer",
        sub: [
            {
                url: '/s/generate-constructor-variables',
                title: 'Generate Constructor Variables',
                component: GenerateConstructorVariables
            },
            {
                url: '/s/set-variables',
                title: 'Set Variables',
                component: SetVariables
            }
        ]
    },
]