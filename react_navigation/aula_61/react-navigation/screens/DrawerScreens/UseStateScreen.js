import React, { useState } from "react";
import { ScrollView, Text, Button } from "react-native";

const girarDadosRandomicamente = () => Math.floor(Math.random() * 6) + 1

export function UseStateScreen() {
    const [giroDados, setGiroDados] = useState([]);
    const [contar, setContar] = useState(0);

    return (
        <ScrollView>
            <Text>
                O useState Hook tem como função retornar um valor e uma função para atualizar valores, já que pega o estado do objeto e o modifica durante o render.
                O primeiro valor retornado nas re-renderizações será o retornado por setState, por ser o mais recente após os updates
            </Text>
            <Button 
                title='Girar Dados'
                onPress={
                    () => setGiroDados([...giroDados, girarDadosRandomicamente()])
                }
            />
            {
                giroDados.map((giroDados, index) => (
                <Text style={{textAlign: 'center'}} key={index}>{giroDados}</Text>
                ))
            }
            <Button
                title='Contador'
                onPress={
                    () => setContar(contar + 1)
                }
            />
            {
                <Text style={{textAlign: 'center'}} >{contar}</Text>
            }
        </ScrollView>
    );
}