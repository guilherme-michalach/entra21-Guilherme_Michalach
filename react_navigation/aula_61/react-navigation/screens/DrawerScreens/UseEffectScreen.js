import React, { useState, useEffect } from "react";
import { ScrollView, Text, Button } from "react-native";

export function UseEffectScreen() {
    const [contar, setContar] = useState(0);
    const contarEm2 = Math.floor(contar / 2);

    useEffect(() => {
        console.log(`Foram ${contarEm2 * 2} cliques`)
        }, [contarEm2]
    )

    const [mensagem, setMensagem] = useState('Olá Allan, tudo certo?');

    useEffect(() => {
        
        setTimeout(() => {
            setMensagem('Tamo ferrado')
        }, 2000)
        }
        
    )

    return (
        <ScrollView>
            <Text>
                useEffect precisa de 2 argumentos, callback e dependências. Assim, quando o componente funciona, a callback é chamada se alguma dependência mudou desde a última vez que o componente rodou.
                Usado em 3 estados diferentes de vida dos componentes, que são o componentDidMount, o componentDidUpdate e o componentWillUnmount
            </Text>
            <Button
                title={'Contar'}
                onPress={() =>
                setContar(contar + 1)
                }
            />
            <Text>{ mensagem }</Text>
        </ScrollView>
    );
}