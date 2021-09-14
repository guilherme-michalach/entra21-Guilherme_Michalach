import React, { useContext } from "react";
import { ScrollView, Text } from "react-native";

const TesteContext = React.createContext();

export function UseContextScreen() {
    return (
        <ScrollView>
            <Text>
                useContext aceita um objeto de contexto e retorna o valor atual dele, sendo esse valor atual definido pela prop value do MyContext.
                Primariamente usado quando alguns dados precisam ser acessados por vários componentes
            </Text>
            <TesteContext.Provider value={10}>
                <Display />
            </TesteContext.Provider>
        </ScrollView>
    );
}

function Display() {
    return (
      <TesteContext.Consumer>
        {valor => <Text>A resposta é {valor}.</Text>}
      </TesteContext.Consumer>
    );
  }